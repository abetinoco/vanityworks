import { SplitLetters } from '@/components/SplitLetters'

interface Step {
  number: string
  eyebrow: string
  title: string
  body: string
  metaLabel: string
  metaValue: string
}

const steps: Step[] = [
  {
    number: '01',
    eyebrow: 'Step 01 — Booking',
    title: 'Book online in 60 seconds.',
    body: 'Pick your service, pick a date. Pay nothing until consultation. No phone tag.',
    metaLabel: 'Time required',
    metaValue: '~60 seconds',
  },
  {
    number: '02',
    eyebrow: 'Step 02 — We come to you',
    title: 'We come to you.',
    body: 'Mobile service anywhere in Chicagoland — Lake County through the North Shore. Prefer to drop off? We’ll arrange a spot in McHenry County.',
    metaLabel: 'Location',
    metaValue: 'Mobile or drop-off',
  },
  {
    number: '03',
    eyebrow: 'Step 03 — The work',
    title: 'Certified install. Documented.',
    body: 'Manufacturer-trained hands. Paint depth measured. Progress shots delivered.',
    metaLabel: 'Service window',
    metaValue: '1–3 days typical',
  },
  {
    number: '04',
    eyebrow: 'Step 04 — Delivery',
    title: 'Pick up. Turn heads.',
    body: 'Final walkthrough under high-intensity lighting. Care instructions. Warranty paperwork.',
    metaLabel: 'Warranty',
    metaValue: 'Up to 10 years',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white px-8 pt-[120px] max-[900px]:px-5 max-[900px]:pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-8">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            The process
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
            <SplitLetters text="How it works." />
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 pb-[120px] max-[900px]:mt-12 max-[900px]:pb-[60px]">
          {/* Desktop horizontal track */}
          <div className="hidden md:block absolute top-12 left-6 right-6 h-px bg-line z-[1]">
            <div className="absolute inset-0 bg-ink timeline-track-line" />
          </div>


          {/* Steps */}
          <div className="max-[900px]:overflow-x-auto">
            <div className="grid grid-cols-4 gap-8 relative z-[2] max-[900px]:flex max-[900px]:flex-nowrap max-[900px]:gap-5 max-[900px]:pb-5">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                data-hover
                className="step-rise group relative px-6 max-[900px]:px-0 max-[900px]:w-[200px] max-[900px]:flex-shrink-0 max-[900px]:pb-0"
                style={{ animationDelay: `${0.4 + idx * 0.2}s` }}
              >
                {/* Node */}
                <div className="step-node-anim relative z-[3] mb-9 w-24 h-24 rounded-full bg-white border-[1.5px] border-ink flex items-center justify-center text-[36px] font-extrabold tracking-[-0.045em] tabular-nums text-ink group-hover:bg-ink group-hover:text-white group-hover:scale-105 max-[900px]:w-16 max-[900px]:h-16 max-[900px]:text-[26px] max-[900px]:mb-6">
                  {step.number}
                  <span
                    aria-hidden
                    className="absolute left-1/2 -bottom-4 w-px h-4 bg-ink opacity-40 -translate-x-1/2 max-[900px]:hidden"
                  />
                </div>

                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted mb-2.5">
                  {step.eyebrow}
                </p>
                <h3 className="font-sans font-extrabold text-ink tracking-[-0.03em] leading-[1.05] mb-3.5 text-[clamp(22px,1.8vw,30px)]">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-[1.5] tracking-[-0.005em] mb-5 max-w-[24ch] max-[900px]:max-w-none">
                  {step.body}
                </p>
                <div className="flex flex-col gap-1 pt-3.5 border-t border-line">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink-muted">
                    {step.metaLabel}
                  </span>
                  <span className="text-[13px] font-semibold text-ink tracking-[-0.01em]">
                    {step.metaValue}
                  </span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
