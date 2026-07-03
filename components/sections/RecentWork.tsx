'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { portfolio, type PortfolioEntry } from '@/lib/portfolio'
import { SplitLetters } from '@/components/SplitLetters'

// 14-tile rhythm: portraits (4:5) with two wide (8:5) accents at slots 7 and 12.
// Row 1: 4 portrait | Row 2: 2 portrait + 1 wide | Row 3: 4 portrait | Row 4: 1 wide + 2 portrait
const LAYOUT: { wide?: boolean }[] = [
  {}, {}, {}, {},
  {}, {}, { wide: true },
  {}, {}, {}, {},
  { wide: true }, {}, {},
]

// One tile per car — never repeat the same vehicle. Before/after entries lead
// with the "After" shot; everything else uses the first photo in the entry.
function leadImage(entry: PortfolioEntry): string {
  if (entry.type === 'before-after') {
    return (
      entry.photos.find((p) => p.label === 'After')?.src ??
      entry.photos[entry.photos.length - 1].src
    )
  }
  return entry.photos[0].src
}

const tiles = portfolio.slice(0, LAYOUT.length).map((entry) => ({
  id: entry.slug,
  title: entry.vehicle,
  service: entry.service,
  image: leadImage(entry),
}))

export default function RecentWork() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const close = useCallback(() => setOpenIdx(null), [])
  const navigate = useCallback((dir: number) => {
    setOpenIdx((curr) => (curr === null ? null : (curr + dir + tiles.length) % tiles.length))
  }, [])

  useEffect(() => {
    if (openIdx === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') navigate(-1)
      else if (e.key === 'ArrowRight') navigate(1)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [openIdx, close, navigate])

  const current = openIdx !== null ? tiles[openIdx] : null

  return (
    <>
      <section className="bg-white px-8 pt-[120px] pb-[100px] max-[900px]:px-5 max-[900px]:pt-12 max-[900px]:pb-9">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-8 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-6">
            <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
              <span className="inline-block w-2 h-2 rounded-full bg-ink" />
              From the shop
            </div>
            <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[13vw]">
              <SplitLetters text="Recent work." />
            </h2>
          </div>

          {/* Meta */}
          <div className="mt-5 mb-12 flex justify-between items-center text-[13px] font-medium text-ink-muted tracking-[-0.005em] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-2 max-[900px]:mb-7">
            <div className="text-ink font-semibold">Selected work. Click any photo to enlarge.</div>
            <div>
              Updated <strong className="text-ink font-semibold">weekly</strong> from the bay.
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-4 gap-0.5 max-[900px]:grid-cols-2">
            {tiles.map((item, i) => {
              const wide = LAYOUT[i].wide
              return (
                <button
                  key={item.id}
                  type="button"
                  data-tile
                  onClick={() => setOpenIdx(i)}
                  aria-label={`Open ${item.title} — ${item.service}`}
                  className={`group relative overflow-hidden bg-[#0a0a0a] text-left ${
                    wide ? 'col-span-2 aspect-[8/5]' : 'aspect-[4/5]'
                  } ${i >= 8 ? 'max-[900px]:hidden' : ''}`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.service}`}
                    fill
                    loading="lazy"
                    sizes={wide ? '(max-width:900px) 100vw, 50vw' : '(max-width:900px) 50vw, 25vw'}
                    className="object-cover transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
                  />

                  {/* Hover gradient overlay (always-on for mobile) */}
                  <div className="absolute inset-0 z-[2] pointer-events-none opacity-0 transition-opacity duration-[400ms] bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.55)_100%)] group-hover:opacity-100 max-[900px]:opacity-100" />

                  {/* Index */}
                  <span className="absolute top-3.5 left-3.5 z-[3] text-[10px] font-bold tracking-[0.16em] uppercase text-white opacity-70 transition-opacity duration-300 tabular-nums group-hover:opacity-100">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Meta (slides up on hover, always visible on mobile) */}
                  <div className="absolute left-4 right-4 bottom-3.5 z-[3] translate-y-2 opacity-0 transition-[transform,opacity] duration-[500ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 group-hover:opacity-100 max-[900px]:translate-y-0 max-[900px]:opacity-100">
                    <div className="text-base font-bold tracking-[-0.025em] leading-[1.1] text-white mb-1 max-[900px]:text-sm">
                      {item.title}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/70 max-[900px]:text-[9px]">
                      {item.service}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Bottom strip */}
          <div className="mt-[60px] py-10 border-t border-ink flex justify-between items-center gap-10 max-[900px]:mt-7 max-[900px]:py-6 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
            <p className="font-bold text-ink tracking-[-0.035em] leading-[1.1] max-w-[30ch] text-[clamp(24px,3vw,40px)]">
              Every car. Same standard.
              <br />
              <span className="text-ink-muted">See the full archive on Instagram.</span>
            </p>
            <a
              href="https://instagram.com/vanityworks.il"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="group bg-ink text-white px-7 py-5 rounded-full text-[15px] font-semibold tracking-[-0.005em] inline-flex items-center gap-3 flex-shrink-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04]"
            >
              Open on Instagram
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M5 11L11 5M11 5H6.5M11 5V9.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && openIdx !== null && (
        <div
          role="dialog"
          aria-modal
          aria-label={`${current.title} — ${current.service}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
          className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-10 max-[900px]:p-4"
        >
          <span className="absolute top-9 left-8 text-white/60 text-xs font-semibold tracking-[0.1em] tabular-nums max-[900px]:top-4 max-[900px]:left-5">
            <strong className="text-white font-bold">{String(openIdx + 1).padStart(2, '0')}</strong> /{' '}
            {String(tiles.length).padStart(2, '0')}
          </span>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white max-[900px]:top-3 max-[900px]:right-3"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Previous"
            className="absolute left-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white max-[900px]:left-3 max-[900px]:w-10 max-[900px]:h-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12 4L6 10L12 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => navigate(1)}
            aria-label="Next"
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white max-[900px]:right-3 max-[900px]:w-10 max-[900px]:h-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M8 4L14 10L8 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative w-[80vw] max-w-[1200px] aspect-[4/3] bg-[#1a1a1a] overflow-hidden max-[900px]:w-[92vw]">
            <Image
              src={current.image}
              alt={`${current.title} — ${current.service}`}
              fill
              sizes="80vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-8 text-white pointer-events-none max-[900px]:bottom-5 max-[900px]:left-5">
            <div className="text-[22px] font-bold tracking-[-0.03em] mb-1 max-[900px]:text-[17px]">
              {current.title}
            </div>
            <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/60">
              {current.service}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
