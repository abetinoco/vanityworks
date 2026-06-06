'use client'

import { useState } from 'react'
import { CheckIcon } from '@/components/Icons'

interface BrandDetail {
  badge: string
  name: string
  headline: string
  description: string
  features: string[]
  accentColor: string
  textColor: string
}

export default function BrandAccordion({ brands }: { brands: BrandDetail[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="space-y-5">
      {brands.map((brand, i) => (
        <div
          key={brand.badge}
          className="bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
        >
          {/* Mobile accordion header */}
          <button
            className="md:hidden w-full flex items-center justify-between gap-4 p-5 text-left min-h-[72px]"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl border-2 border-[#0A0A0A] flex items-center justify-center flex-shrink-0">
                <span
                  className="text-base font-bold text-[#0A0A0A]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.06em' }}
                >
                  {brand.badge}
                </span>
              </div>
              <div className="text-left">
                <h3
                  className="text-xl leading-none mb-0.5 text-[#0A0A0A]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {brand.name}
                </h3>
                <p className="text-[#888] text-xs tracking-wider uppercase">{brand.headline}</p>
              </div>
            </div>
            <span
              className={`flex-shrink-0 text-2xl font-light leading-none transition-transform duration-200 text-[#0A0A0A] ${
                openIdx === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>

          {/* Mobile body */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              openIdx === i ? 'max-h-[600px]' : 'max-h-0'
            }`}
          >
            <div className="px-5 pb-5">
              <p className="text-[#666] text-sm leading-relaxed mb-4">{brand.description}</p>
              <div className="grid grid-cols-1 gap-2">
                {brand.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-[#666]">
                    <CheckIcon className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-[#0A0A0A]" strokeWidth={2} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: always-expanded full layout */}
          <div className="hidden md:block p-8 md:p-10">
            <div className="flex gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl border-2 border-[#0A0A0A] flex items-center justify-center mb-3">
                  <span
                    className="text-2xl font-bold text-[#0A0A0A]"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.06em' }}
                  >
                    {brand.badge}
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl mb-0.5 text-[#0A0A0A]"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {brand.name}
                </h3>
                <p className="text-[#888] text-xs tracking-wider uppercase">{brand.headline}</p>
              </div>
              <div className="flex-1">
                <p className="text-[#666] text-sm leading-relaxed mb-6">{brand.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {brand.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs text-[#666]">
                      <CheckIcon className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-[#0A0A0A]" strokeWidth={2} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
