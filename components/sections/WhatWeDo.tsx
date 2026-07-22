'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

interface ServiceRow {
  num: string
  name: string
  href: string
  gallery: string
  price: string
  duration: string
  tagline: string
  body: string
  features: string[]
}

const rows: ServiceRow[] = [
  {
    num: '01',
    name: 'Paint Protection Film',
    href: '/services/paint-protection-film',
    gallery: '/portfolio',
    price: '$899',
    duration: '1–3 day install',
    tagline: 'Invisible armor. Self-healing. 10-year warranty.',
    body:
      'OPTICLE films, hand-cut and installed to factory tolerances. Shields against rock chips, road debris, and bug etching. Heat-activated self-healing reflows minor scratches automatically.',
    features: [
      'OPTICLE PPF',
      'Full, partial, or track packages',
      'Computer-cut precision',
      'Manufacturer warranty',
    ],
  },
  {
    num: '02',
    name: 'Ceramic Coating',
    href: '/services/ceramic-coating',
    gallery: '/portfolio',
    price: '$699',
    duration: '1–2 day cure',
    tagline: 'Liquid glass. Years of shine. Hydrophobic for life.',
    body:
      'Professional nano-ceramic coatings that chemically bond to your paint. Mirror gloss, chemical resistance, and beading that lasts five years past the wax you used to buy quarterly.',
    features: [
      'Professional-grade installs',
      'Nano-ceramic SiO₂ technology',
      'Hydrophobic self-cleaning',
      'UV & oxidation protection',
    ],
  },
  {
    num: '03',
    name: 'Paint Correction',
    href: '/services/paint-correction',
    gallery: '/portfolio',
    price: '$449',
    duration: '8–16 hr labor',
    tagline: 'Erase years of damage. Reveal factory perfection.',
    body:
      'Multi-stage machine polishing that removes swirls, scratches, oxidation, and water spots — restoring the depth and clarity your paint had the day it left the factory. Done under high-intensity lighting so nothing escapes.',
    features: [
      '1, 2, or 3-stage correction',
      'Rupes & Flex rotary / DA',
      'Paint depth measurement',
      'High-intensity inspection',
    ],
  },
  {
    num: '04',
    name: 'Interior & Detail',
    href: '/services/full-detail',
    gallery: '/portfolio',
    price: '$249',
    duration: '5–8 hr service',
    tagline: 'Head to toe. Inside and out. No skipped corners.',
    body:
      'The complete VanityWorks treatment — exterior wash, iron decon, clay bar, hand polish, interior deep clean, leather conditioning, carpet shampoo, and full dress-out. The kind of detail you can smell.',
    features: [
      'Hand wash & iron decon',
      'Clay bar paint decon',
      'Hand polish & gloss',
      'Leather, carpet, trim',
    ],
  },
]

function LetterName({ text }: { text: string }) {
  // Words are wrapped in whitespace-nowrap inline-blocks so the per-letter
  // spans can never wrap mid-word ("Paint Protection Fi / lm"); real spaces
  // between the word groups give the browser its only break opportunities.
  const tokens = text.split(/(\s+)/)
  return (
    <>
      {tokens.map((token, ti) => {
        if (token.length === 0) return null
        if (/^\s+$/.test(token)) return <Fragment key={ti}>{token}</Fragment>
        return (
          <span key={ti} className="inline-block whitespace-nowrap">
            {Array.from(token).map((ch, ci) => (
              <span key={ci} data-hover className="ww-row-letter">
                {ch}
              </span>
            ))}
          </span>
        )
      })}
    </>
  )
}

export default function WhatWeDo() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  // On mobile, default to all-rows-closed so the section isn't dominated
  // by the auto-expanded first row's body block.
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(max-width: 900px)').matches) {
      setOpenIdx(-1)
    }
  }, [])

  return (
    <section className="bg-white pt-12 lg:pt-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-15 items-end pb-10 lg:pb-14 border-b border-[#0A0A0A]">
          <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-[#0A0A0A] tracking-[-0.005em] lg:pb-[18px]">
            <span className="w-2 h-2 bg-[#0A0A0A] rounded-full inline-block" />
            What we do
          </div>
          <h2
            className="text-[11vw] sm:text-[clamp(40px,6vw,96px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-[#0A0A0A] lg:justify-self-end lg:text-right"
            style={{ maxWidth: '18ch' }}
          >
            Four services.
            <br />
            <span className="text-[#9A9A9A] font-extrabold">One obsession.</span>
          </h2>
        </div>

        {/* Service rows */}
        <div className="ww-services relative">
          {rows.map((row, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={row.num}
                data-row
                data-hover
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpenIdx(isOpen ? -1 : idx)
                  }
                }}
                className="ww-row relative border-b border-[#E0E0E0] py-5 lg:py-9 overflow-hidden transition-[padding] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] cursor-pointer lg:cursor-none focus:outline-none focus-visible:bg-[#FAFAFA]"
              >
                {/* Top line: number + (name / subtitle / price), all left-aligned */}
                <div className="grid grid-cols-[36px_1fr] lg:grid-cols-[60px_1fr] gap-4 lg:gap-10 relative z-10 pr-8">
                  <span className="ww-row-num text-[14px] font-semibold text-[#9A9A9A] tracking-[-0.01em] tabular-nums pt-2 lg:pt-4">
                    / {row.num}
                  </span>

                  <div className="flex flex-col gap-2.5 lg:gap-3">
                    <span className="ww-row-name text-[8vw] sm:text-[clamp(40px,7vw,96px)] lg:whitespace-nowrap font-extrabold leading-[0.92] tracking-[-0.055em] text-[#0A0A0A]">
                      <LetterName text={row.name} />
                    </span>

                    {/* Second title — always-visible subtitle */}
                    <span className="ww-row-sub text-[15px] sm:text-[17px] lg:text-[19px] font-semibold text-[#9A9A9A] leading-[1.25] tracking-[-0.012em]">
                      {row.tagline}
                    </span>

                    {/* Price + duration, left-aligned */}
                    <span className="flex items-baseline gap-2 mt-1.5 lg:mt-2.5">
                      <span className="text-[11px] font-medium text-[#9A9A9A] tracking-[0.04em] uppercase">
                        From
                      </span>
                      <span className="text-[20px] lg:text-[22px] font-bold text-[#0A0A0A] tracking-[-0.025em] tabular-nums leading-none">
                        {row.price}
                      </span>
                      <span className="text-[12px] text-[#9A9A9A] font-medium tracking-[-0.005em] ml-1">
                        · {row.duration}
                      </span>
                    </span>
                  </div>
                </div>

                {/* + indicator */}
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`absolute top-7 lg:top-12 right-0 w-[18px] h-[18px] text-[#0A0A0A] pointer-events-none transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden
                >
                  <path
                    d="M9 1V17M1 9H17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Expandable detail — text only, aligned under the service name */}
                <div
                  className={`grid grid-cols-[36px_1fr] lg:grid-cols-[60px_1fr] gap-4 lg:gap-10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isOpen ? 'max-h-[600px] opacity-100 mt-6 lg:mt-8' : 'max-h-0 opacity-0 mt-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  {/* spacer to align with the name column */}
                  <div aria-hidden />

                  <div>
                    <p
                      className="text-[14px] lg:text-[15px] leading-[1.55] text-[#9A9A9A] mb-6 tracking-[-0.005em]"
                      style={{ maxWidth: '56ch' }}
                    >
                      {row.body}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-10 mb-7 list-none" style={{ maxWidth: '46ch' }}>
                      {row.features.map((f) => (
                        <li
                          key={f}
                          className="text-[13px] font-medium text-[#0A0A0A] tracking-[-0.005em] flex items-center gap-2.5"
                        >
                          <span className="w-1 h-1 bg-[#0A0A0A] rounded-full shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={row.gallery}
                      data-hover
                      onClick={(e) => e.stopPropagation()}
                      className="ww-row-cta inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#0A0A0A] tracking-[-0.005em] pb-1 border-b border-[#0A0A0A] transition-[gap] duration-300 hover:gap-3.5"
                    >
                      See {row.name.toLowerCase()} gallery
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-7 lg:mt-20 py-6 lg:py-14 pb-10 lg:pb-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-10">
          <p
            className="text-[28px] sm:text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.035em] leading-[1.05] text-[#0A0A0A]"
            style={{ maxWidth: '22ch' }}
          >
            Not sure which one?
            <br />
            <span className="text-[#9A9A9A]">
              Tell us about the car. We&apos;ll tell you what it needs.
            </span>
          </p>
          <Link
            href="/book"
            data-hover
            className="group bg-[#0A0A0A] text-white pl-8 pr-7 py-5 rounded-full text-[16px] font-semibold tracking-[-0.005em] inline-flex items-center gap-3.5 flex-shrink-0 transition-transform duration-300 hover:scale-[1.04]"
          >
            Book a consultation
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            >
              <path
                d="M5 13L13 5M13 5H7M13 5V11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
