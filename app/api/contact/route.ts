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
//    CONTACT_BCC_EMAIL  — blind-copied on every inquiry (defaults to abe@haloit.tech).
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
  const bcc = (process.env.CONTACT_BCC_EMAIL ?? 'abe@haloit.tech')
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

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error', err)
    return NextResponse.json(
      { ok: false, error: 'Could not send right now. Please call or text us directly.' },
      { status: 502 },
    )
  }
}
