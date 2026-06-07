import Link from 'next/link'
import Image from 'next/image'
import Cursor from '@/components/Cursor'

function HeadlineLine({
  text,
  delay,
  align = 'left',
}: {
  text: string
  delay: number
  align?: 'left' | 'right'
}) {
  return (
    <span className="hero-headline-line" style={{ textAlign: align }}>
      <span className="block overflow-hidden">
        <span className="hero-line-reveal" style={{ animationDelay: `${delay}s` }}>
          {Array.from(text).map((ch, i) => (
            <span
              key={i}
              data-hover
              className={`hero-letter ${ch === ' ' ? 'hero-letter-space' : ''}`}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

const indexItems = [
  { num: '01', label: 'Paint protection film' },
  { num: '02', label: 'Ceramic coating' },
  { num: '03', label: 'Paint correction' },
  { num: '04', label: 'Window tint' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[72vh] flex flex-col overflow-hidden text-white">
      {/* Custom mouse-follower (home only, desktop only) */}
      <Cursor />

      {/* Background image — dedicated /hero.jpg.
          Drop a new file at public/hero.jpg to update without code changes. */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover z-0"
        style={{ objectPosition: '60% center' }}
        aria-hidden
      />

      {/* Dark gradient overlay — lighter in the middle so more of the car
          shows through, darker at top (headline) and bottom (text-dense). */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80 pointer-events-none"
        aria-hidden
      />

      {/* Foreground content — uses the same `max-w-7xl mx-auto` track as
          the Nav, Footer, and every other section so the headline's right
          edge lines up with the nav's right edge on every viewport. */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-36 pb-5 sm:pb-8">
        {/* Massive headline (color inherits from `text-white` on the section) */}
        <div className="mt-2 sm:mt-4 w-full">
          <HeadlineLine text="Your car," delay={0.15} align="left" />
          <HeadlineLine text="perfected." delay={0.35} align="right" />
        </div>

        {/* Index row — services as a contents page */}
        <div
          className="hero-fade-up mt-7 sm:mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 lg:gap-y-5 pb-3 lg:pb-4 border-b border-white/20"
          style={{ animationDelay: '0.9s' }}
        >
          {indexItems.map((it) => (
            <div key={it.num} className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-[0.04em] text-white/55">
                {it.num} —
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.015em] text-white">
                {it.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="hero-fade-up mt-5 sm:mt-7 lg:mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 lg:gap-14 items-end"
          style={{ animationDelay: '1.1s' }}
        >
          <p className="text-[18px] leading-snug text-white max-w-[44ch] font-medium tracking-[-0.012em]">
            For JDM, exotic, and the cars worth obsessing over.{' '}
            <span className="text-white/65">By appointment, in Volo, IL — since 2017.</span>
          </p>

          <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
            <Link
              href="/portfolio"
              data-hover
              className="hero-cta-underline-light text-[15px] font-semibold text-white tracking-[-0.01em]"
            >
              View the work
            </Link>
            <Link
              href="/book"
              data-hover
              className="group inline-flex items-center gap-3.5 bg-white text-[#0A0A0A] pl-7 pr-6 py-4 rounded-full text-[15px] font-semibold tracking-[-0.01em] transition-transform duration-300 hover:scale-[1.02]"
            >
              Book consultation
              <svg
                className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 18 18"
                fill="none"
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

        {/* Hero footer — credentials + stats */}
        <div
          className="hero-fade-up mt-auto pt-6 lg:pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 lg:gap-7 text-[12px] lg:text-[13px] text-white/65 font-medium tracking-[-0.005em]"
          style={{ animationDelay: '1.3s' }}
        >
          <div className="flex flex-wrap gap-4 lg:gap-7 items-center">
            <span>
              Opticle PPF <strong className="text-white font-semibold">Trained</strong>
            </span>
            <span>
              DetailWise Academy <strong className="text-white font-semibold">Certified</strong>
            </span>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-7 items-center">
            <span>
              <strong className="text-white font-semibold">2,400+</strong> cars protected
            </span>
            <span>
              <strong className="text-white font-semibold">4.97/5</strong> rating
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
