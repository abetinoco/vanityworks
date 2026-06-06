import { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/data'
import { SplitLetters } from '@/components/SplitLetters'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four services. One obsession. Full Detail, Paint Correction, Ceramic Coating, and Paint Protection Film — built so every tier includes the prep underneath.',
}

const chain = [
  { num: '01 — BASE', name: 'Full Detail', note: 'Clean inside & out' },
  { num: '02 — GLOSS', name: 'Paint Correction', note: '+ Detail & decon' },
  { num: '03 — PROTECT', name: 'Ceramic Coating', note: '+ Detail, decon & 1-step' },
  { num: '04 — ARMOR', name: 'Protection Film', note: 'Physical chip defense' },
]

const ArrowRight = (props: { className?: string }) => (
  <svg viewBox="0 0 14 14" fill="none" className={props.className}>
    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChainArrow = (
  <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white flex items-center justify-center z-[2]">
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 text-ink-muted">
      <path d="M3 6h6M9 6L6 3M9 6L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function ServicesPage() {
  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24">
      {/* HERO */}
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline transition-colors hover:text-ink">
              Home
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">Services</span>
          </div>

          <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-ink" />
                What we do
              </div>
              <h1 className="font-sans font-extrabold text-ink leading-[0.88] tracking-[-0.05em] text-[clamp(52px,8.5vw,140px)] max-[900px]:text-[15vw]">
                <SplitLetters text="Four services." />{' '}
                <span className="text-ink-muted font-extrabold">
                  <SplitLetters text="One obsession." />
                </span>
              </h1>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink font-medium leading-[1.4] tracking-[-0.018em] text-[clamp(17px,1.6vw,21px)]">
                Every car starts with a clean.{' '}
                <span className="text-ink-muted">
                  From there you build up — correct the paint, lock it in, or armor it for good.
                </span>
              </p>
              <p className="text-[14px] text-ink-muted leading-[1.5] tracking-[-0.005em]">
                Each service includes the steps below it, so you&apos;re never paying twice for the same prep. Pick where you want to land.
              </p>
            </div>
          </div>

          {/* Dependency chain */}
          <div className="mt-14 grid grid-cols-4 gap-0 border border-ink max-[900px]:grid-cols-2 max-[900px]:mt-9">
            {chain.map((c, i) => (
              <div
                key={c.name}
                className={`relative px-5 py-[22px] border-r border-line last:border-r-0 max-[900px]:[&:nth-child(2)]:border-r-0 max-[900px]:[&:nth-child(1)]:border-b max-[900px]:[&:nth-child(2)]:border-b max-[900px]:border-line`}
              >
                <div className="text-[11px] font-bold tracking-[0.1em] text-ink-muted mb-2.5">
                  {c.num}
                </div>
                <div className="text-[16px] font-bold tracking-[-0.02em] leading-[1.15] mb-1">
                  {c.name}
                </div>
                <div className="text-[12px] text-ink-muted leading-[1.4] tracking-[-0.005em]">
                  {c.note}
                </div>
                {i < chain.length - 1 && <span className="max-[900px]:hidden">{ChainArrow}</span>}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* SERVICE LIST */}
      <section className="bg-white px-8 py-[120px] max-[900px]:px-5 max-[900px]:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-ink">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                data-hover
                className="group relative grid grid-cols-[64px_120px_1fr_auto] gap-10 items-center py-10 border-b border-line transition-[padding] duration-[450ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:pl-5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-[64%] before:bg-ink before:transition-[width] before:duration-[400ms] hover:before:w-[3px] max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:py-7"
              >
                <span className="text-[14px] font-semibold text-ink-muted tabular-nums tracking-[0.02em] max-[900px]:text-[12px]">
                  / {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-[120px] h-24 flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#050505] max-[900px]:w-full max-[900px]:h-[200px]">
                  <div className="absolute inset-0 flex items-center justify-center text-[8px] font-semibold text-[#4a4a4a] tracking-[0.12em] uppercase text-center px-2 leading-[1.3] max-[900px]:text-[10px]">
                    {s.shortName ?? s.name}
                    <br />
                    img
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="font-extrabold text-ink tracking-[-0.045em] leading-[0.95] text-[clamp(32px,5vw,72px)]">
                    {s.shortName ?? s.name}
                  </span>
                  <span className="text-[15px] leading-[1.5] text-ink-muted tracking-[-0.005em] max-w-[60ch]">
                    {s.indexBlurb ?? s.description}
                  </span>
                  {s.indexTags && (
                    <div className="flex gap-2 flex-wrap mt-1">
                      {s.indexTags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold tracking-[0.08em] uppercase text-ink-muted border border-line rounded-full px-2.5 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-3 text-right max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:items-baseline max-[900px]:text-left max-[900px]:gap-x-4 max-[900px]:gap-y-2">
                  <span className="flex flex-col items-end max-[900px]:items-start">
                    <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-ink-muted mb-1.5">
                      {s.indexPriceLabel ?? 'From'}
                    </span>
                    <span
                      className={`font-extrabold tracking-[-0.04em] tabular-nums leading-none ${
                        s.indexPriceValue === 'By vehicle' ? 'text-[24px]' : 'text-[40px] max-[900px]:text-[32px]'
                      }`}
                    >
                      {s.indexPriceValue ?? s.startingPrice}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink transition-[gap] duration-300 group-hover:gap-3.5">
                    {s.indexCtaLabel ?? 'View service'} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 p-7 bg-[#fafafa] border border-line grid grid-cols-[auto_1fr] gap-5 items-start max-[900px]:grid-cols-1 max-[900px]:gap-3.5 max-[900px]:p-5">
            <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
                <path d="M9 12V8.5M9 6h.01" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="9" cy="9" r="7.5" stroke="#fff" strokeWidth="1.4" />
              </svg>
            </div>
            <p className="text-[15px] leading-[1.55] text-ink tracking-[-0.005em]">
              <strong className="font-bold">Services build on each other — you never pay twice.</strong>{' '}
              <span className="text-ink-muted">
                Correction includes the full detail and decontamination. Ceramic includes all of that plus a 1-step polish. So moving up a tier adds work, it doesn&apos;t repeat it. Not sure where to start? Book a Full Detail and we&apos;ll give you an honest read on what your paint actually needs.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
