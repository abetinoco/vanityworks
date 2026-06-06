'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
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
  imageSrc: string
  imageCaption: string
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
    imageSrc: '/portfolio/black-porsche-911/01.jpg',
    imageCaption: 'PPF install · Porsche 992',
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
    imageSrc: '/portfolio/black-amg-g63/04.jpg',
    imageCaption: 'Ceramic cure · Beading test',
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
    imageSrc: '/portfolio/mclaren-720s/04.jpg',
    imageCaption: 'Before / after · 50/50 split',
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
    imageSrc: '/portfolio/yellow-honda-s2000/01.jpg',
    imageCaption: 'Interior · Cockpit detail',
  },
]

function LetterName({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          data-hover
          className={`ww-row-letter ${ch === ' ' ? 'space' : ''}`}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </>
  )
}

export default function WhatWeDo() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  // On mobile, default to all-rows-closed so the section isn't dominated
  // by the auto-expanded first row's image + body block.
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
            className="text-[12vw] sm:text-[clamp(40px,6vw,96px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-[#0A0A0A] lg:justify-self-end lg:text-right"
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
                {/* Top line */}
                <div className="grid grid-cols-[36px_1fr] lg:grid-cols-[60px_1fr_auto] gap-4 lg:gap-10 items-baseline relative z-10">
                  <span className="ww-row-num text-[14px] font-semibold text-[#9A9A9A] tracking-[-0.01em] tabular-nums">
                    / {row.num}
                  </span>
                  <span
                    className="ww-row-name text-[9vw] sm:text-[clamp(40px,7vw,96px)] lg:whitespace-nowrap font-extrabold leading-[0.92] tracking-[-0.055em] text-[#0A0A0A] transition-opacity duration-300"
                  >
                    <LetterName text={row.name} />
                  </span>

                  <div className="ww-row-meta col-span-2 lg:col-span-1 lg:text-right flex flex-row lg:flex-col items-baseline lg:items-end justify-between gap-2 mt-3 lg:mt-0 transition-opacity duration-300">
                    <span className="text-[22px] font-bold text-[#0A0A0A] tracking-[-0.025em] tabular-nums leading-none flex items-baseline gap-1.5 lg:flex-col lg:items-end lg:gap-1">
                      <span className="text-[11px] font-medium text-[#9A9A9A] tracking-[0.04em] uppercase order-1 lg:order-none">
                        From
                      </span>
                      {row.price}
                    </span>
                    <span className="text-[12px] text-[#9A9A9A] font-medium tracking-[-0.005em] lg:mt-1.5">
                      {row.duration}
                    </span>
                  </div>
                </div>

                {/* + indicator */}
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`absolute top-9 lg:top-12 right-0 w-[18px] h-[18px] pointer-events-none transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-45' : 'opacity-0 lg:group-hover:opacity-100'
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

                {/* Expandable detail */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-[60px_1fr_380px] gap-5 lg:gap-10 items-start overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isOpen ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  {/* Desktop spacer */}
                  <div className="hidden lg:block" />

                  {/* Text column */}
                  <div className="lg:pr-10">
                    <p className="text-[17px] font-semibold text-[#0A0A0A] leading-[1.35] mb-4 tracking-[-0.012em]" style={{ maxWidth: '36ch' }}>
                      {row.tagline}
                    </p>
                    <p className="text-[14px] leading-[1.5] text-[#9A9A9A] mb-5 tracking-[-0.005em]" style={{ maxWidth: '50ch' }}>
                      {row.body}
                    </p>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-6 mb-6 list-none">
                      {row.features.map((f) => (
                        <li
                          key={f}
                          className="text-[13px] font-medium text-[#0A0A0A] tracking-[-0.005em] flex items-center gap-2"
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

                  {/* Image */}
                  <div
                    className={`relative w-full aspect-[4/3] bg-[#0A0A0A] rounded overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}
                  >
                    <Image
                      src={row.imageSrc}
                      alt={row.imageCaption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 380px"
                    />
                    <div className="absolute bottom-3.5 left-4 right-4 z-10 flex justify-between text-white text-[11px] font-medium tracking-[0.04em] uppercase">
                      <span>{row.imageCaption}</span>
                      <span>
                        {row.num} / 04
                      </span>
                    </div>
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
