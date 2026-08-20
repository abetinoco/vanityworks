import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// ─────────────────────────────────────────────
//  Contact form handler — sends the inquiry to the shop via Resend.
//  Uses Resend's REST API directly (no SDK dependency).
//
//  Required Vercel env vars:
//    RESEND_API_KEY     — from resend.com (Project → API Keys)
//    CONTACT_TO_EMAIL   — inbox that should receive inquiries
//  Optional:
//    CONTACT_FROM_EMAIL — verified sender, e.g. "VanityWorks <bookings@vanityworksdetailing.com>"
//                         Defaults to Resend's shared onboarding sender for testing.
//    CONTACT_BCC_EMAIL  — blind-copied on every inquiry (defaults to abe@haloweb.agency).
//                         Comma-separate for multiple.
// ─────────────────────────────────────────────

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  vehicle?: string
  service?: string
  message?: string
  turnstileToken?: string
}

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Verify a Cloudflare Turnstile token server-side. Only enforced when
 * TURNSTILE_SECRET_KEY is set — otherwise returns true so the form keeps
 * working where the secret isn't configured.
 */
async function verifyTurnstile(token: string, remoteip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (!secret) return true
  if (!token) return false
  try {
    const params = new URLSearchParams({ secret, response: token })
    if (remoteip) params.append('remoteip', remoteip)
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    })
    if (!r.ok) return false
    const data = (await r.json()) as { success?: boolean }
    return data.success === true
  } catch {
    return false
  }
}

export async function POST(req: Request) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const phone = (body.phone ?? '').trim()
  const vehicle = (body.vehicle ?? '').trim()
  const service = (body.service ?? '').trim()
  const message = (body.message ?? '').trim()

  // Need a name plus at least one way to reach them back.
  if (!name || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: 'Please include your name and an email or phone number.' },
      { status: 400 },
    )
  }

  // Bot protection: verify the Cloudflare Turnstile token before sending.
  const remoteip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null
  const humanVerified = await verifyTurnstile((body.turnstileToken ?? '').trim(), remoteip)
  if (!humanVerified) {
    return NextResponse.json(
      { ok: false, error: 'Verification failed. Please refresh the page and try again.' },
      { status: 403 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'VanityWorks <onboarding@resend.dev>'
  const bcc = (process.env.CONTACT_BCC_EMAIL ?? 'abe@haloweb.agency')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  if (!apiKey || !to) {
    // Misconfiguration — log loudly, tell the user to reach out directly.
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env var.')
    return NextResponse.json(
      { ok: false, error: 'Form is not configured yet. Please call or text us directly.' },
      { status: 503 },
    )
  }

  const subject = `New inquiry — ${name}${vehicle ? ` · ${vehicle}` : ''}`

  // Plain-text fallback (for clients that don't render HTML).
  const text = [
    ['Name', name],
    ['Phone', phone || '—'],
    ['Email', email || '—'],
    ['Vehicle', vehicle || '—'],
    ['Service', service || '—'],
    ['Message', message || '—'],
  ]
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  // ── Branded HTML email — mirrors the website (dark header, white logo,
  //    ink-on-white cards, #00ff88 accent). Table-based + inline styles so
  //    it renders consistently across Gmail, Apple Mail, Outlook, etc. ──
  const SITE = 'https://vanityworksdetailing.com'
  const telHref = phone.replace(/[^\d+]/g, '')
  const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif"

  const details: Array<{ label: string; value: string; href?: string }> = [
    { label: 'Phone', value: phone || '—', href: phone ? `tel:${telHref}` : undefined },
    { label: 'Email', value: email || '—', href: email ? `mailto:${email}` : undefined },
    { label: 'Vehicle', value: vehicle || '—' },
    { label: 'Service', value: service || '—' },
    { label: 'Message', value: message || '—' },
  ]

  const rowsHtml = details
    .map(({ label, value, href }, i) => {
      const top = i === 0 ? '' : 'border-top:1px solid #E0E0E0;'
      const val = href
        ? `<a href="${href}" style="color:#0A0A0A;text-decoration:none;border-bottom:1px solid #CCCCCC">${esc(value)}</a>`
        : esc(value).replace(/\n/g, '<br>')
      return `<tr>
        <td style="${top}padding:13px 18px;background:#FAFAFA;color:#888888;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;vertical-align:top;width:92px">${esc(label)}</td>
        <td style="${top}padding:13px 18px;color:#1A1A1A;font-size:14px;line-height:1.55;vertical-align:top">${val}</td>
      </tr>`
    })
    .join('')

  const callBtn = phone
    ? `<a href="tel:${telHref}" style="display:inline-block;background:#0A0A0A;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:600;padding:13px 24px;border-radius:999px;margin:0 8px 8px 0">Call / Text ${esc(phone)}</a>`
    : ''
  const replyBtn = email
    ? `<a href="mailto:${esc(email)}" style="display:inline-block;background:#FFFFFF;color:#0A0A0A;text-decoration:none;font-size:14px;font-weight:600;padding:12px 23px;border:1px solid #E0E0E0;border-radius:999px;margin:0 0 8px 0">Reply by email</a>`
    : ''

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light only"></head>
<body style="margin:0;padding:0;background:#F5F5F5;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#F5F5F5">New booking inquiry from ${esc(name)}${vehicle ? ` — ${esc(vehicle)}` : ''}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F5;margin:0;padding:28px 12px;font-family:${FONT}">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#FFFFFF;border-radius:18px;overflow:hidden">
        <tr><td style="background:#0A0A0A;padding:32px 32px 28px;text-align:center">
          <img src="${SITE}/email-logo-white.png" width="200" alt="VanityWorks Detailing" style="display:inline-block;width:200px;max-width:62%;height:auto;border:0;outline:none;text-decoration:none">
          <div style="margin-top:20px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.55);font-weight:600">
            <span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#00ff88;margin-right:8px;vertical-align:middle"></span>New Booking Inquiry
          </div>
        </td></tr>
        <tr><td style="padding:34px 32px 30px">
          <h1 style="margin:0 0 6px;font-size:27px;line-height:1.05;font-weight:800;letter-spacing:-0.025em;color:#0A0A0A">${esc(name)}</h1>
          <p style="margin:0 0 26px;font-size:15px;line-height:1.5;color:#888888">${vehicle ? `${esc(vehicle)} &middot; ` : ''}New request from the website booking form.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E0E0E0;border-radius:12px;border-collapse:separate;overflow:hidden;font-size:14px">
            ${rowsHtml}
          </table>
          <div style="margin-top:26px">${callBtn}${replyBtn}</div>
          <p style="margin:22px 0 0;font-size:13px;line-height:1.5;color:#888888">Or just hit reply &mdash; this email is set to respond to ${esc(name)} directly.</p>
        </td></tr>
        <tr><td style="background:#0A0A0A;padding:24px 32px;text-align:center">
          <div style="font-size:13px;line-height:1.6;color:rgba(255,255,255,0.7)"><strong style="color:#FFFFFF;font-weight:700">VanityWorks Detailing</strong> &middot; Mobile &middot; Chicagoland, IL</div>
          <div style="margin-top:5px;font-size:13px;color:rgba(255,255,255,0.5)">(224) 572-4787 &middot; @vanityworks.il</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        bcc: bcc.length ? bcc : undefined,
        reply_to: email || undefined,
        subject,
        text,
        html,
      }),
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error('[contact] Resend send failed', res.status, detail)
      return NextResponse.json(
        { ok: false, error: 'Could not send right now. Please call or text us directly.' },
        { status: 502 },
      )
    }

    // Confirmation to the person who filled the form in. Best-effort: the lead
    // is already delivered, so a failure here must never surface as an error to
    // them or turn a captured lead into a retry.
    if (email) {
      void sendVisitorConfirmation({ apiKey, from, email, name, vehicle, service })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error', err)
    return NextResponse.json(
      { ok: false, error: 'Could not send right now. Please call or text us directly.' },
      { status: 502 },
    )
  }
}

/** Receipt for the visitor — "we have it, here's what happens next". Silent on failure. */
async function sendVisitorConfirmation(args: {
  apiKey: string
  from: string
  email: string
  name: string
  vehicle: string
  service: string
}): Promise<void> {
  const { apiKey, from, email, name, vehicle, service } = args
  const firstName = (name || '').trim().split(/\s+/)[0] || 'there'
  const esc = (v: string) =>
    v.replace(/[&<>"']/g, (c) => (({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }) as Record<string, string>)[c])

  const detail = [vehicle && `Vehicle: ${vehicle}`, service && `Service: ${service}`]
    .filter(Boolean)
    .join(' · ')

  const text = [
    `Hi ${firstName},`,
    '',
    "Thanks for reaching out to VanityWorks. We've got your request and we'll be in touch shortly - usually within a few hours.",
    detail ? `\nWhat you told us - ${detail}` : '',
    '',
    'Need us sooner? Call or text (224) 572-4787.',
    '',
    '- VanityWorks Detailing, Chicagoland',
  ]
    .filter((l) => l !== '')
    .join('\n')

  const html = `<!doctype html><html><body style="margin:0;background:#f4f4f5;padding:24px 12px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <tr><td style="background:#0a0a0a;padding:30px 34px;">
      <div style="color:#ffffff;font-size:15px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;">VanityWorks</div>
      <div style="color:#a1a1aa;font-size:12px;letter-spacing:.1em;text-transform:uppercase;margin-top:5px;">Request received</div>
    </td></tr>
    <tr><td style="padding:32px 34px 8px;">
      <h1 style="margin:0 0 10px;font-size:20px;color:#0a0a0a;font-weight:700;">Hi ${esc(firstName)},</h1>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#3f3f46;">Thanks for reaching out. We&rsquo;ve got your request and we&rsquo;ll be in touch shortly &mdash; usually within a few hours. No pressure, and the consultation is free.</p>
      ${detail ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#fafafa;border-radius:10px;margin:0 0 24px;"><tr><td style="padding:16px 20px;font-size:14px;color:#3f3f46;line-height:1.7;">${esc(detail)}</td></tr></table>` : ''}
      <p style="margin:0 0 12px;font-size:14px;color:#3f3f46;">Need us sooner?</p>
      <a href="tel:+12245724787" style="display:inline-block;background:#0a0a0a;color:#ffffff;padding:13px 30px;text-decoration:none;font-weight:700;font-size:15px;border-radius:999px;">Call or text (224) 572-4787</a>
      <p style="margin:26px 0 0;font-size:14px;color:#3f3f46;">&mdash; the <strong style="color:#0a0a0a;">VanityWorks</strong> team</p>
    </td></tr>
    <tr><td style="padding:22px 34px 28px;text-align:center;font-size:12px;color:#a1a1aa;line-height:1.7;">
      Mobile detailing across Chicagoland &middot; by appointment<br>
      <a href="https://www.vanityworksdetailing.com" style="color:#71717a;text-decoration:none;">vanityworksdetailing.com</a>
    </td></tr>
  </table>
</body></html>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [email],
        subject: `We've got it, ${firstName} — VanityWorks`,
        text,
        html,
      }),
    })
    if (!res.ok) {
      console.warn('[contact] visitor confirmation not sent', res.status, await res.text().catch(() => ''))
    }
  } catch (err) {
    console.warn('[contact] visitor confirmation threw', err)
  }
}
