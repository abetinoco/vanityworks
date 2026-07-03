'use client'

import { useState, useEffect } from 'react'

const services = [
  'Paint Protection Film',
  'Ceramic Coating',
  'Paint Correction',
  'Full Detail',
  'Interior Protection',
  'Not sure yet — help me decide',
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [error, setError] = useState('')

  // Pre-select the service (and preserve the exact package) when arriving from a
  // /book?service=… CTA. Progressive enhancement — runs after hydration.
  useEffect(() => {
    const svc = new URLSearchParams(window.location.search).get('service')
    if (!svc) return
    const s = svc.toLowerCase()
    const match = /ppf|protection film/.test(s)
      ? 'Paint Protection Film'
      : /ceramic/.test(s)
        ? 'Ceramic Coating'
        : /correct|polish|compound/.test(s)
          ? 'Paint Correction'
          : /interior/.test(s)
            ? 'Interior Protection'
            : /detail/.test(s)
              ? 'Full Detail'
              : ''
    setForm((prev) => ({
      ...prev,
      service: match || prev.service,
      // If the exact package isn't one of the dropdown options, keep the detail
      // in the message so nothing is lost.
      message: match || !svc ? prev.message : `I'm interested in: ${svc}`,
    }))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
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
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-sans font-extrabold text-[#0A0A0A] text-[clamp(26px,3vw,34px)] tracking-[-0.04em] leading-[0.95]">
          You&apos;re on the list.
        </h3>
        <p className="text-[#666] text-[15px] leading-relaxed max-w-sm">
          We got your request and will reach out shortly to lock in the details. Prefer to talk now?
          Call or text{' '}
          <a href="tel:+12245724787" className="text-[#0A0A0A] font-semibold underline">
            (224) 572-4787
          </a>
          .
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full bg-white border border-[#E0E0E0] rounded-xl px-4 py-3.5 text-[#0A0A0A] text-[15px] placeholder:text-[#B5B5B5] focus:outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-all'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name *"
          autoComplete="name"
          className={inputBase}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone *"
          autoComplete="tel"
          className={inputBase}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email (optional)"
          autoComplete="email"
          className={inputBase}
        />
      </div>

      <div>
        <input
          type="text"
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          placeholder="Your car — e.g. 2023 Nissan GT-R"
          className={inputBase}
        />
      </div>

      <div>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputBase} appearance-none ${form.service ? 'text-[#0A0A0A]' : 'text-[#B5B5B5]'}`}
        >
          <option value="">What are you after? (optional)</option>
          {services.map((s) => (
            <option key={s} value={s} className="text-[#0A0A0A]">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Anything else we should know? (optional)"
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group w-full py-4 bg-[#0A0A0A] text-white font-semibold text-[15px] tracking-[-0.005em] rounded-full hover:bg-[#1A1A1A] transition-all inline-flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Request my consultation'}
        {status !== 'sending' && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          >
            <path
              d="M5 11L11 5M11 5H6.5M11 5V9.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {status === 'error' && (
        <p className="text-[#b00020] text-[13px] text-center" role="alert">
          {error}
        </p>
      )}

      <p className="text-[#888] text-[12px] text-center leading-relaxed">
        Free consultation · we typically reply within a few hours · no spam, ever.
      </p>
    </form>
  )
}
