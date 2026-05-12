'use client'

import { useState } from 'react'

export interface PremiumAccordionItem {
  title: string
  body: string
  eyebrow?: string
  icon?: string
}

interface Props {
  items: PremiumAccordionItem[]
  columns?: 1 | 2
  /** Allow more than one item open at once. Default: single-open. */
  multiple?: boolean
  /** Index of item to start open. */
  defaultOpen?: number
}

export default function PremiumAccordion({
  items,
  columns = 1,
  multiple = false,
  defaultOpen,
}: Props) {
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(typeof defaultOpen === 'number' ? [defaultOpen] : [])
  )

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) {
        next.delete(i)
      } else {
        if (!multiple) next.clear()
        next.add(i)
      }
      return next
    })
  }

  return (
    <div
      className={
        columns === 2
          ? 'grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'
          : 'space-y-3'
      }
    >
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div
            key={item.title}
            className={`group relative bg-[#0A0A0A] rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border border-[#C9A84C] shadow-[0_8px_28px_rgba(201,168,76,0.18)]'
                : 'border border-[#1A1A1A] hover:border-[#3A3A3A]'
            }`}
          >
            {/* Hairline gold accent on the left edge when open */}
            <span
              aria-hidden
              className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#C9A84C] transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            />

            <button
              className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left min-h-[64px]"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`pa-panel-${i}`}
              id={`pa-trigger-${i}`}
            >
              {item.icon && (
                <span
                  className={`flex-shrink-0 text-xl sm:text-2xl transition-colors duration-300 ${
                    isOpen ? 'text-[#C9A84C]' : 'text-[#888]'
                  }`}
                  aria-hidden
                >
                  {item.icon}
                </span>
              )}
              <div className="flex-1 min-w-0">
                {item.eyebrow && (
                  <div
                    className={`text-[10px] font-semibold tracking-[0.18em] uppercase mb-1 transition-colors duration-300 ${
                      isOpen ? 'text-[#C9A84C]' : 'text-[#888]'
                    }`}
                  >
                    {item.eyebrow}
                  </div>
                )}
                <h4
                  className="text-white text-base sm:text-lg leading-snug"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {item.title}
                </h4>
              </div>
              <span
                aria-hidden
                className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#C9A84C] bg-[#C9A84C] text-[#0A0A0A] rotate-45'
                    : 'border-[#3A3A3A] text-[#C9A84C]'
                }`}
              >
                <span className="text-base leading-none font-light">+</span>
              </span>
            </button>

            <div
              id={`pa-panel-${i}`}
              role="region"
              aria-labelledby={`pa-trigger-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  {/* Hairline divider in gold tint */}
                  <div className="h-px w-10 bg-[#C9A84C]/60 mb-4" />
                  <p className="text-[#B5B5B5] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
