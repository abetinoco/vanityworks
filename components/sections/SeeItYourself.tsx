'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioBeforeAfter, type PortfolioEntry } from '@/lib/portfolio'
import { SplitLetters } from '@/components/SplitLetters'

function pickPhotos(entry: PortfolioEntry) {
  const before = entry.photos.find((p) => p.label === 'Before')?.src ?? entry.photos[0].src
  const after =
    entry.photos.find((p) => p.label === 'After')?.src ??
    entry.photos[entry.photos.length - 1].src
  return { before, after }
}

interface CompareProps {
  beforeSrc: string
  afterSrc: string
  alt: string
  featured?: boolean
  sizes?: string
  priority?: boolean
}

function CompareSlider({ beforeSrc, afterSrc, alt, featured = false, sizes, priority }: CompareProps) {
  const [pct, setPct] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const moveTo = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPct(Math.max(0, Math.min(100, next)))
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => moveTo(e.clientX)}
      onTouchStart={(e) => moveTo(e.touches[0].clientX)}
      onTouchMove={(e) => moveTo(e.touches[0].clientX)}
      className={`relative w-full overflow-hidden bg-black border border-line select-none cursor-ew-resize ${
        featured ? 'aspect-[16/9] max-[900px]:aspect-[4/3]' : 'aspect-[16/10]'
      }`}
    >
      <Image
        src={afterSrc}
        alt={`${alt} — after`}
        fill
        sizes={sizes ?? '100vw'}
        priority={priority}
        className="object-cover pointer-events-none"
        draggable={false}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} — before`}
          fill
          sizes={sizes ?? '100vw'}
          priority={priority}
          className="object-cover"
          draggable={false}
        />
      </div>

      <span className="absolute bottom-3.5 left-3.5 z-30 px-2.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white bg-black/55 backdrop-blur-md pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-3.5 right-3.5 z-30 px-2.5 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white bg-black/55 backdrop-blur-md pointer-events-none">
        After
      </span>

      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none"
        style={{ left: `${pct}%`, transform: 'translateX(-50%)', boxShadow: '0 0 0 1px rgba(0,0,0,0.15)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110" />
      </div>
    </div>
  )
}

function shortVehicleName(name: string) {
  return name.replace(/^Volkswagen\b/, 'VW')
}

export default function SeeItYourself() {
  const [featured, ...rest] = portfolioBeforeAfter
  const grid = rest.slice(0, 3)
  const featuredPhotos = pickPhotos(featured)
  const jobCount = portfolioBeforeAfter.length.toString().padStart(2, '0')

  return (
    <section className="bg-white px-8 pt-[120px] max-[900px]:px-5 max-[900px]:pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-8">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            The proof
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
            <SplitLetters text="See it yourself." />
          </h2>
        </div>

        {/* Meta strip */}
        <div className="mt-6 mb-14 flex justify-between items-center text-[13px] font-medium text-ink-muted tracking-[-0.005em] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3 max-[900px]:mb-8">
          <div className="inline-flex items-center gap-2 text-ink font-semibold">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              className="animate-[nudge_1.8s_ease-in-out_infinite]"
            >
              <path
                d="M1 6H15M1 6L5 2M1 6L5 10M15 6L11 2M15 6L11 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Drag the handle. No filters. No edits.
          </div>
          <div className="flex gap-7 items-center">
            <span>
              <strong className="text-ink font-semibold">{jobCount}</strong> selected jobs
            </span>
            <span>
              <strong className="text-ink font-semibold">2,400+</strong> in the archive
            </span>
          </div>
        </div>

        {/* Featured */}
        <div className="mb-16">
          <div className="flex justify-between items-baseline gap-6 mb-4 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-2">
            <h3 className="font-extrabold text-ink tracking-[-0.04em] leading-[1.02] text-[clamp(28px,4vw,56px)] max-[900px]:text-[8vw]">
              {featured.vehicle}{' '}
              <span className="text-ink-muted font-bold ml-4 align-baseline text-[0.55em] tracking-[-0.02em] max-[900px]:block max-[900px]:ml-0 max-[900px]:mt-2.5 max-[900px]:text-sm">
                {featured.service}
              </span>
            </h3>
            <div className="text-[12px] text-ink-muted font-medium tracking-[0.02em] uppercase">
              <span>
                <strong className="text-ink font-semibold">Featured</strong> · job 01 / {jobCount}
              </span>
            </div>
          </div>
          <div className="group transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-1">
            <CompareSlider
              featured
              beforeSrc={featuredPhotos.before}
              afterSrc={featuredPhotos.after}
              alt={featured.vehicle}
              sizes="(max-width: 900px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* 3-up grid */}
        <div className="grid grid-cols-3 gap-8 pb-20 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[900px]:pb-12">
          {grid.map((entry) => {
            const photos = pickPhotos(entry)
            return (
              <div
                key={entry.slug}
                className="group transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:-translate-y-1"
              >
                <div className="flex justify-between items-baseline gap-4 mb-3">
                  <h4 className="font-extrabold text-ink tracking-[-0.03em] leading-none text-[clamp(20px,1.6vw,28px)] max-[900px]:text-[26px]">
                    {shortVehicleName(entry.vehicle)}
                  </h4>
                  <span className="text-[10px] text-ink-muted font-semibold tracking-[0.08em] uppercase whitespace-nowrap">
                    {entry.service}
                  </span>
                </div>
                <CompareSlider
                  beforeSrc={photos.before}
                  afterSrc={photos.after}
                  alt={entry.vehicle}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="flex justify-between items-center gap-10 border-t border-ink pt-[60px] pb-[100px] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6 max-[900px]:pt-10 max-[900px]:pb-16">
          <p className="font-bold text-ink tracking-[-0.035em] leading-[1.05] max-w-[22ch] text-[clamp(28px,4vw,52px)]">
            Want your car in this gallery?
            <br />
            <span className="text-ink-muted">We&apos;ll show you the before. You&apos;ll see the after.</span>
          </p>
          <Link
            href="/book"
            className="group bg-ink text-white px-8 py-[22px] rounded-full text-base font-semibold tracking-[-0.005em] inline-flex items-center gap-3.5 flex-shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04]"
          >
            Book your slot
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
