import Image from 'next/image'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'

interface CtaLink {
  label: string
  href: string
}

interface FinalCtaProps {
  eyebrow?: string
  title?: string
  /** Body copy. Wrap emphasized phrases in `**…**` and they render as <strong>. */
  sub?: string
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
  /** Background photo. Defaults to the same hero.webp the Hero uses. */
  bgSrc?: string
  /** Tailwind objectPosition override (e.g. '60% center', 'center 30%'). */
  bgPosition?: string
}

const DEFAULT_SUB =
  "Free consultation. No pressure, no upsell — **just an honest look at your car** and what it actually needs."

function renderMarked(text: string) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function FinalCta({
  eyebrow = 'Now booking — Summer 2026',
  title = 'Ready when you are.',
  sub = DEFAULT_SUB,
  primaryCta = { label: 'Book a consultation', href: '/book' },
  secondaryCta = { label: 'See services', href: '/services' },
  bgSrc = '/hero.webp',
  bgPosition = '60% center',
}: FinalCtaProps = {}) {
  return (
    <section className="relative overflow-hidden bg-black text-white px-8 py-16 max-[900px]:px-5 max-[900px]:py-12">
      {/* Photo background — overridable per-page via bgSrc */}
      <Image
        src={bgSrc}
        alt=""
        aria-hidden
        fill
        loading="lazy"
        quality={85}
        sizes="100vw"
        className="object-cover z-0"
        style={{ objectPosition: bgPosition }}
      />

      {/* Dark gradient overlay — keeps title + sub + CTAs legible across the photo */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/55 to-black/80 pointer-events-none"
      />

      <div className="relative z-[2] max-w-[1280px] mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-white/55 mb-5">
          <span className="relative inline-block w-[7px] h-[7px] rounded-full bg-[#00ff88]">
            <span className="absolute -inset-[3px] rounded-full bg-[#00ff88] opacity-30 animate-[pulse_2s_ease-in-out_infinite]" />
          </span>
          {eyebrow}
        </div>

        <h2 className="font-sans font-extrabold text-white leading-[0.9] tracking-[-0.055em] mb-5 text-[clamp(40px,5.5vw,88px)] max-[900px]:text-[11vw]">
          <SplitLetters text={title} />
        </h2>

        <p className="text-white/60 font-medium leading-[1.45] tracking-[-0.011em] max-w-[48ch] mx-auto mb-7 text-[clamp(15px,1.3vw,17px)]">
          {renderMarked(sub)}
        </p>

        <div className="inline-flex flex-wrap justify-center items-center gap-3 max-[900px]:flex max-[900px]:flex-col max-[900px]:w-full">
          <Link
            href={primaryCta.href}
            data-hover
            className="group bg-white text-black rounded-full text-[15px] font-semibold px-7 py-[18px] inline-flex items-center justify-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] max-[900px]:w-full"
          >
            {primaryCta.label}
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
          </Link>
          <Link
            href={secondaryCta.href}
            data-hover
            className="bg-transparent text-white border border-white/25 rounded-full text-[15px] font-semibold px-7 py-[18px] inline-flex items-center justify-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] max-[900px]:w-full"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
