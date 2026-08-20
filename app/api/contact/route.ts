import { emailShell, detailRows, quoteBlock } from '@/lib/contact-email'
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

  const html = emailShell({
    preview: `${name}${vehicle ? ` — ${vehicle}` : ''}`,
    eyebrow: 'New inquiry',
    heading: `${name} wants a consultation`,
    intro:
      'A new booking inquiry came in through <strong style="color:#0A0A0A;">vanityworksdetailing.com</strong>. ' +
      'Replying to this email goes straight back to them.',
    body:
      '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:0 0 6px;">' +
      detailRows([
        ['Name', name],
        email ? ['Email', email, `mailto:${email}`] : null,
        phone ? ['Phone', phone, `tel:${phone.replace(/\D/g, '')}`] : null,
        vehicle ? ['Vehicle', vehicle] : null,
        service ? ['Service', service] : null,
      ]) +
      '</table>' +
      quoteBlock('Their message', message),
    cta: email ? { label: `Reply to ${name.split(/\s+/)[0]}`, href: `mailto:${email}` } : undefined,
  })

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

  const html = emailShell({
    preview: 'We typically reply within a few hours.',
    eyebrow: 'Request received',
    heading: `Thanks, ${firstName} — we've got it`,
    intro:
      'Thanks for reaching out. We&rsquo;ve got your request and we&rsquo;ll be in touch shortly &mdash; ' +
      'usually within a few hours. The consultation is free and there&rsquo;s no pressure.',
    body: quoteBlock('What you sent us', [vehicle && `Vehicle: ${vehicle}`, service && `Service: ${service}`].filter(Boolean).join('\n')),
    cta: { label: 'Call or text (224) 572-4787', href: 'tel:+12245724787' },
    outro: '&mdash; the VanityWorks team',
  })

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
