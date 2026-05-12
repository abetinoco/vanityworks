'use client'

import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Book Online',
    description: 'Pick your service and schedule in under a minute.',
  },
  {
    number: '02',
    title: 'Drop Off Your Car',
    description: 'Or let us come to you — fully mobile in Chicagoland.',
  },
  {
    number: '03',
    title: 'We Work Our Magic',
    description: 'Certified hands. Premium products. Documented results.',
  },
  {
    number: '04',
    title: 'Pick Up & Stun',
    description: 'Drive away with a finish that turns heads.',
  },
]

export default function HowItWorks() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2
            className="text-5xl sm:text-6xl text-[#0A0A0A]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            How It Works
          </h2>
          <p className="text-[#666] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Four steps from booking to a finish you&apos;ll want to show off.
          </p>
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-[#E0E0E0] rounded-lg p-6 hover:border-[#0A0A0A] transition-colors shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
            >
              <span
                className="text-6xl text-[#0A0A0A] leading-none block mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
              >
                {step.number}
              </span>
              <h3
                className="text-[#0A0A0A] text-2xl mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: numbered accordion, collapsed by default */}
        <div className="md:hidden space-y-2">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white border border-[#E0E0E0] rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center gap-4 px-4 py-3 text-left min-h-[52px]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-3xl text-[#0A0A0A] leading-none flex-shrink-0 w-10"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {step.number}
                </span>
                <span
                  className="text-[#0A0A0A] text-lg flex-1"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {step.title}
                </span>
                <span
                  className={`text-[#888] text-xs transition-transform duration-200 flex-shrink-0 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 pb-4 text-[#666] text-sm leading-relaxed border-t border-[#F0F0F0] pt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
