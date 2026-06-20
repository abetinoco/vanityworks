import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SplitLetters } from '@/components/SplitLetters'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'About',
  description:
    "A mobile-first detailing operation that treats every car like it's going on a showroom floor. Chicagoland — built on obsession since 2023.",
}

function renderMarked(text: string) {
  return text.split('**').map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-ink font-semibold">
        {p}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}

const bodyParagraphs = [
  "Most detail shops run on volume — get the car in, get it out, move to the next. **That's not what this is.** VanityWorks is a focused operation built around paint: protecting it, correcting it, and making it look better than the day the car left the factory.",
  'The specialty is **JDM and exotic** — the cars enthusiasts actually care about — but the same standard applies to a daily driver getting its first real detail. Every car gets the same obsessive attention, the same manufacturer-grade products, and the same honest assessment of what it actually needs.',
  "No upselling. No corner-cutting. **If your paint only needs a one-step, you're not paying for three.** If it needs more, you'll know exactly why before any work begins.",
]

const stats = [
  { num: '2023', label: 'Detailing since' },
  { num: '01', label: 'Manufacturer certification' },
  { num: 'JDM', label: '& exotic specialty' },
  { num: '1:1', label: 'One car at a time, fully' },
]

const values = [
  {
    num: '/ 01',
    name: 'Honest assessment',
    desc: "We tell you what your paint actually needs — and what it doesn't. No invented problems, no padded tiers, no pressure.",
  },
  {
    num: '/ 02',
    name: 'Manufacturer-grade',
    desc: 'Certified installer products and processes. The same materials and methods the brands themselves train and warranty.',
  },
  {
    num: '/ 03',
    name: 'One car at a time',
    desc: "Your car isn't in a queue of ten. It gets full, undivided attention from intake to final inspection — however long that takes.",
  },
]

const certs = [
  { name: 'Opticle PPF Certified', type: 'DetailWise Academy · Paint Protection Film Training' },
]

const CheckMark = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
    <path d="M2 7.5L5.5 11L12 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function AboutPage() {
  return (
    <div className="bg-white pt-20 md:pt-24 lg:pt-28">
      {/* HERO */}
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Home
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">About</span>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-ink" />
                Who we are
              </div>
              <h1 className="font-sans font-extrabold text-ink leading-[0.88] tracking-[-0.05em] text-[clamp(48px,7.5vw,120px)] max-[900px]:text-[14vw]">
                <SplitLetters text="Built on obsession." />
              </h1>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink font-medium leading-[1.4] tracking-[-0.015em] text-[clamp(17px,1.6vw,21px)]">
                A mobile-first operation that treats every car like it&apos;s going on a showroom floor.{' '}
                <span className="text-ink-muted">Because most of them basically are.</span>
              </p>
              <p className="text-[14px] text-ink-muted leading-[1.5] tracking-[-0.005em]">
                Chicagoland mobile · based in McHenry County — Lake County to the North Shore
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="bg-white px-8 max-[900px]:px-5">
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 gap-16 items-start pb-[120px] max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:pb-[72px] max-[900px]:mt-10">
          <p className="font-semibold text-ink leading-[1.2] tracking-[-0.03em] max-w-[20ch] text-[clamp(24px,2.6vw,38px)]">
            VanityWorks started with one idea: do it right, or don&apos;t touch it.
          </p>
          <div className="text-[16px] leading-[1.6] text-ink-muted tracking-[-0.005em] max-w-[54ch] space-y-[18px]">
            {bodyParagraphs.map((p, i) => (
              <p key={i}>{renderMarked(p)}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PORTRAIT BAND */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/9] overflow-hidden border border-ink bg-gradient-to-br from-[#1a1a1a] to-[#050505] max-[900px]:aspect-[4/3]">
            <Image
              src="/portfolio/white-r34-gtr/01.webp"
              alt="Nissan Skyline R34 GT-R — in for a showcase detail"
              fill
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 1280px"
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
            <span className="absolute bottom-[18px] left-[18px] bg-black/55 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.16em] uppercase px-[11px] py-[7px]">
              Nissan R34 GT-R · in the bay
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-px bg-line border border-ink max-[900px]:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-7 py-9 flex flex-col gap-2.5">
              <span className="font-extrabold tracking-[-0.04em] leading-none text-ink tabular-nums text-[clamp(40px,5vw,64px)]">
                {s.num}
              </span>
              <span className="text-[13px] font-medium text-ink-muted leading-[1.4] tracking-[-0.005em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink mb-14 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-7 max-[900px]:mb-9">
            <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px] max-[900px]:pb-0">
              <span className="inline-block w-2 h-2 rounded-full bg-ink" />
              How we work
            </span>
            <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(36px,5vw,80px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
              <SplitLetters text="The standard." />
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-px bg-line border border-ink max-[900px]:grid-cols-1">
            {values.map((v) => (
              <div
                key={v.num}
                className="bg-white px-8 py-9 flex flex-col gap-3 transition-colors duration-300 hover:bg-[#fafafa]"
              >
                <span className="text-[12px] font-semibold text-ink-muted tracking-[0.04em]">
                  {v.num}
                </span>
                <span className="text-[22px] font-extrabold tracking-[-0.03em] leading-[1.05] text-ink">
                  {v.name}
                </span>
                <span className="text-[14px] leading-[1.5] text-ink-muted tracking-[-0.005em]">
                  {v.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="border border-ink p-12 grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[900px]:p-7">
            <div>
              <h3 className="font-extrabold tracking-[-0.035em] leading-[1.05] mb-4 text-[clamp(26px,3vw,40px)]">
                <SplitLetters text="Trained by the manufacturers." />
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-muted tracking-[-0.005em] max-w-[44ch]">
                Anyone can buy a buffer.{' '}
                <strong className="text-ink font-semibold">
                  Certification means the brands behind the products trained the installer and stand behind the work
                </strong>{' '}
                — with warranties that only hold when the install is done right. VanityWorks is a DetailWise Academy–certified Opticle PPF installer.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {certs.map((c) => (
                <div
                  key={c.name}
                  className="border border-line px-6 py-[22px] flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="text-[18px] font-extrabold tracking-[-0.02em]">{c.name}</div>
                    <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-ink-muted">
                      {c.type}
                    </div>
                  </div>
                  <span className="w-7 h-7 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                    <CheckMark />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCta
        title="See the difference."
        sub="Bring us the car. We'll show you what obsessive actually looks like — **no pressure, just an honest read.**"
        primaryCta={{ label: 'Book a consultation', href: '/contact' }}
        secondaryCta={{ label: 'See the work', href: '/gallery' }}
      />
    </div>
  )
}
