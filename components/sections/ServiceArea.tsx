import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'

interface AreaRow {
  name: string
  distance: string
  tag: string
  base?: boolean
}

const areas: AreaRow[] = [
  { name: 'Lake County', distance: 'Primary area', tag: 'Mobile', base: true },
  { name: 'North Shore', distance: 'Evanston · Glencoe', tag: 'Mobile' },
  { name: 'Chicago + Cook', distance: 'Mobile', tag: 'Mobile' },
  { name: 'McHenry County', distance: 'Home base', tag: 'Base' },
]

const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Chicago,IL&t=&z=9&ie=UTF8&iwloc=&output=embed'
const MAP_PLACE_URL = 'https://www.google.com/maps/place/Chicago,+IL/'

export default function ServiceArea() {
  return (
    <section className="bg-white px-8 py-[120px] max-[900px]:px-5 max-[900px]:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-8 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-6">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            Where we work
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end break-words text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[13vw]">
            <SplitLetters text="Lake County to Lake Shore Drive." />
          </h2>
        </div>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-[0.9fr_1.1fr] gap-16 items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-9 max-[900px]:mt-10">
          {/* Info */}
          <div className="pt-3">
            <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted tabular-nums mb-6">
              Chicagoland ·{' '}
              <strong className="text-ink font-bold">Mobile detailing</strong>
            </div>

            <h3 className="font-extrabold text-ink leading-[0.95] tracking-[-0.04em] mb-7 text-[clamp(32px,4vw,56px)] max-[900px]:text-[9vw]">
              We come to you.
              <br />
              <span className="text-ink-muted font-extrabold">Or drop it off.</span>
            </h3>

            <p className="text-[16px] font-medium leading-[1.5] tracking-[-0.011em] text-ink max-w-[42ch] mb-9 max-[900px]:text-[15px]">
              Mobile-first, based in McHenry County.{' '}
              <span className="text-ink-muted font-medium">
                For PPF, ceramic, and full corrections we&apos;ll travel to your home garage,
                condo parking, or office driveway — Lake County through the North Shore
                and across Chicagoland.
              </span>
            </p>

            <div className="border-t border-ink mb-8">
              {areas.map((a) => (
                <div
                  key={a.name}
                  className="grid grid-cols-[auto_1fr_auto] gap-4 items-center py-4 border-b border-line"
                >
                  <span className="text-[16px] font-bold text-ink tracking-[-0.02em]">
                    {a.name}
                  </span>
                  <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-ink-muted tabular-nums">
                    {a.distance}
                  </span>
                  <span
                    className={
                      a.base
                        ? 'text-[10px] font-bold tracking-[0.14em] uppercase rounded-full px-2 py-1 bg-ink text-white border border-ink'
                        : 'text-[10px] font-bold tracking-[0.14em] uppercase rounded-full px-2 py-1 text-ink-muted border border-line'
                    }
                  >
                    {a.tag}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              data-hover
              className="inline-flex items-center gap-2.5 text-ink text-[14px] font-semibold tracking-[-0.005em] pb-1 border-b border-ink transition-[gap] duration-300 hover:gap-3.5"
            >
              Outside these areas? Ask us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7 3M11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Map */}
          <div className="relative w-full aspect-[5/4] border border-ink overflow-hidden bg-[#f4f4f4]">
            <span className="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-[0.14em] uppercase text-ink bg-white border border-ink px-3 py-2 pointer-events-none max-[900px]:text-[9px] max-[900px]:px-[9px] max-[900px]:py-1.5">
              Chicagoland
            </span>
            <span className="absolute bottom-4 right-4 z-10 text-[10px] font-medium tracking-[0.08em] uppercase text-ink-muted bg-white border border-line px-3 py-2 pointer-events-none max-[900px]:text-[9px] max-[900px]:px-[9px] max-[900px]:py-1.5">
              Lake County ·{' '}
              <strong className="text-ink font-bold">North Shore</strong>
            </span>

            <iframe
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VanityWorks service area — Chicagoland"
              className="absolute inset-0 w-full h-full block border-0"
            />

            <a
              href={MAP_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="absolute bottom-4 left-4 z-10 bg-ink text-white text-[11px] font-bold tracking-[0.14em] uppercase px-[14px] py-2.5 inline-flex items-center gap-2 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 max-[900px]:text-[10px] max-[900px]:px-[11px] max-[900px]:py-2"
            >
              Open in Maps
              <svg viewBox="0 0 12 12" fill="none" className="w-[11px] h-[11px]">
                <path
                  d="M3 9L9 3M9 3H4M9 3V8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
