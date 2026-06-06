'use client'

import { useState } from 'react'
import { CheckIcon, ArrowRightIcon } from '@/components/Icons'

export default function ContactFormSimple() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Wire to an API route or email service (Resend, Postmark, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#F5F5F5] border border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A]">
          <CheckIcon className="w-7 h-7" strokeWidth={2} />
        </div>
        <h3
          className="text-3xl text-[#0A0A0A]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Message Received!
        </h3>
        <p className="text-[#666] max-w-sm text-sm">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputBase =
    'w-full bg-white border border-[#E0E0E0] rounded-lg px-4 py-3 text-[#0A0A0A] text-sm placeholder:text-[#B5B5B5] focus:outline-none focus:border-[#0A0A0A] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-[#666] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputBase}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wider uppercase text-[#666] mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-wider uppercase text-[#666] mb-1.5">
          Phone <span className="text-[#B5B5B5] normal-case font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(224) 572-4787"
          className={inputBase}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-wider uppercase text-[#666] mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us how we can help…"
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors inline-flex items-center justify-center gap-2"
      >
        Send Message
        <ArrowRightIcon className="w-4 h-4" />
      </button>

      <p className="text-[#888] text-xs text-center">
        We typically respond within 24 hours. To book a service, head to{' '}
        <a href="/book" className="underline hover:text-[#0A0A0A]">
          our booking page
        </a>
        .
      </p>
    </form>
  )
}
