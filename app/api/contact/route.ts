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
//    CONTACT_FROM_EMAIL — verified sender, e.g. "VanityWorks <hello@vanityworksdetailing.com>"
//                         Defaults to Resend's shared onboarding sender for testing.
// ─────────────────────────────────────────────

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  vehicle?: string
  service?: string
  message?: string
}

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

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

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL || 'VanityWorks <onboarding@resend.dev>'

  if (!apiKey || !to) {
    // Misconfiguration — log loudly, tell the user to reach out directly.
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL env var.')
    return NextResponse.json(
      { ok: false, error: 'Form is not configured yet. Please call or text us directly.' },
      { status: 503 },
    )
  }

  const subject = `New inquiry — ${name}${vehicle ? ` · ${vehicle}` : ''}`
  const rows: Array<[string, string]> = [
    ['Name', name],
    ['Email', email || '—'],
    ['Phone', phone || '—'],
    ['Vehicle', vehicle || '—'],
    ['Service', service || '—'],
    ['Message', message || '—'],
  ]

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#0a0a0a;max-width:560px">
      <h2 style="margin:0 0 16px;font-size:18px">New website inquiry</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #ececec;background:#fafafa;font-weight:600;white-space:nowrap;vertical-align:top">${esc(k)}</td>
                 <td style="padding:8px 12px;border:1px solid #ececec">${esc(v).replace(/\n/g, '<br>')}</td>
               </tr>`,
          )
          .join('')}
      </table>
    </div>`

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
