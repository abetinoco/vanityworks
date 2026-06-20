'use client'

import { useState } from 'react'

const SUBMIT_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5 11L11 5M11 5H6.5M11 5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const initial = { name: '', phone: '', email: '', vehicle: '', service: '', message: '' }

export default function ContactPageForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const set = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong. Please try again.')
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-ink px-7 py-12 flex flex-col gap-3">
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-ink-muted">
          Message received
        </span>
        <p className="text-[22px] font-extrabold tracking-[-0.025em] text-ink leading-[1.15]">
          Thanks — we&apos;ll be in touch.
        </p>
        <p className="text-[14px] text-ink-muted leading-[1.5] tracking-[-0.005em] max-w-[44ch]">
          Most messages get a reply within 24 hours. Want it faster? Text us at{' '}
          <a href="tel:+12245724787" className="text-ink font-semibold no-underline">
            (224) 572-4787
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
      <Field label="Name" name="name" required placeholder="Your name" value={form.name} onChange={set('name')} />
      <Field label="Phone" name="phone" type="tel" required placeholder="(224) 000-0000" value={form.phone} onChange={set('phone')} />
      <Field label="Email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} />
      <Field label="Vehicle" name="vehicle" placeholder="Year / make / model" value={form.vehicle} onChange={set('vehicle')} />

      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="service" className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={set('service')}
          className="appearance-none bg-no-repeat bg-[length:12px_8px] bg-[right_16px_center] pr-10 px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">Select a service…</option>
          <option value="Full Detail">Full Detail — $250</option>
          <option value="Paint Correction">Paint Correction — from $350</option>
          <option value="Ceramic Coating">Ceramic Coating — from $750</option>
          <option value="Paint Protection Film">Paint Protection Film — by quote</option>
          <option value="Not sure yet">Not sure yet — need advice</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 col-span-2">
        <label htmlFor="message" className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about the car, the condition, and what you're hoping for."
          className="px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors resize-y min-h-[130px] placeholder:text-[#c4c4c4]"
        />
      </div>

      <div className="col-span-2 flex items-center gap-6 flex-wrap mt-2 max-[900px]:flex-col max-[900px]:items-stretch">
        <button
          type="submit"
          data-hover
          disabled={status === 'sending'}
          className="group bg-ink text-white rounded-full text-[15px] font-semibold px-7 py-[18px] inline-flex items-center justify-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'} {status !== 'sending' && SUBMIT_ICON}
        </button>
        <span className="text-[12px] text-ink-muted tracking-[-0.005em]">
          Or text us directly at{' '}
          <a href="tel:+12245724787" className="text-ink font-semibold no-underline">
            (224) 572-4787
          </a>
        </span>
      </div>

      {status === 'error' && (
        <p className="col-span-2 text-[13px] text-[#b00020]" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors placeholder:text-[#c4c4c4]"
      />
    </div>
  )
}
