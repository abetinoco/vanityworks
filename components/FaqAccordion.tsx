'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.q}
          className="bg-white border border-[#E0E0E0] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left min-h-[60px]"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <h4
              className="text-[#0A0A0A] text-lg leading-snug"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              {faq.q}
            </h4>
            <span
              className={`text-[#0A0A0A] flex-shrink-0 text-2xl font-light leading-none transition-transform duration-200 ${
                openIdx === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIdx === i ? 'max-h-64' : 'max-h-0'
            }`}
          >
            <p className="text-[#666] text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
