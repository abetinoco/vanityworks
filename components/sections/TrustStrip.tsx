import type { ReactNode } from 'react'

interface TrustItem {
  num: string
  claim: ReactNode
  label: ReactNode
}

const items: TrustItem[] = [
  {
    num: '/ 01',
    claim: (
      <>
        01<span className="ml-0.5 text-[0.55em] font-bold tracking-[-0.02em] text-ink-muted">cert</span>
      </>
    ),
    label: (
      <>
        Manufacturer certification.
        <span className="block text-ink-muted font-medium">Opticle PPF · DetailWise Academy</span>
      </>
    ),
  },
  {
    num: '/ 02',
    claim: <>2017</>,
    label: (
      <>
        Established. <span className="text-ink-muted font-medium">Volo, IL.</span>
        <span className="block text-ink-muted font-medium">By appointment only.</span>
      </>
    ),
  },
  {
    num: '/ 03',
    claim: (
      <>
        JDM<span className="ml-1 text-[0.5em] font-bold tracking-[-0.02em] text-ink-muted">+ exotic</span>
      </>
    ),
    label: (
      <>
        Specialty focus.
        <span className="block text-ink-muted font-medium">Skyline to Supra to 911.</span>
      </>
    ),
  },
  {
    num: '/ 04',
    claim: (
      <>
        Now<span className="ml-1 text-[0.5em] font-bold tracking-[-0.02em] text-ink-muted">booking</span>
      </>
    ),
    label: (
      <>
        <span className="pulse-dot" aria-hidden />
        Summer 2026 slots open.
        <span className="block text-ink-muted font-medium">Consultations free.</span>
      </>
    ),
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-ink overflow-hidden">
      <div className="grid grid-cols-4 px-8 max-[900px]:grid-cols-2 max-[900px]:px-5">
        {items.map((item, i) => {
          const isLastInRow = i === items.length - 1
          // Desktop: every item except the last has a right border.
          // Mobile (2-col): items 1-2 have a bottom border; items 1 & 3 have a right border.
          const desktopBorder = isLastInRow ? '' : 'border-r border-line'
          const mobileBorder =
            i % 2 === 0
              ? 'max-[900px]:border-r max-[900px]:border-line'
              : 'max-[900px]:border-r-0'
          const mobileBottom = i < 2 ? 'max-[900px]:border-b max-[900px]:border-line' : ''

          return (
            <div
              key={i}
              className={`relative flex flex-col gap-2 px-7 py-9 overflow-hidden transition-colors duration-[400ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:bg-[#fafafa] max-[900px]:px-[18px] max-[900px]:py-6 ${desktopBorder} ${mobileBorder} ${mobileBottom}`}
            >
              <span className="absolute top-4 right-5 text-[11px] font-semibold tracking-[0.06em] tabular-nums text-ink-muted max-[900px]:top-3 max-[900px]:right-3.5 max-[900px]:text-[10px]">
                {item.num}
              </span>

              <div className="font-sans font-extrabold text-ink leading-[0.95] tracking-[-0.045em] mt-3 text-[clamp(36px,4vw,56px)] max-[900px]:text-[clamp(28px,9vw,44px)]">
                {item.claim}
              </div>

              <div className="text-xs font-semibold text-ink leading-[1.3] tracking-[-0.005em]">
                {item.label}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
