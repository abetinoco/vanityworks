import Image from 'next/image'
import type { ReactNode } from 'react'
import { SplitLetters } from '@/components/SplitLetters'

interface Spec {
  label: string
  value: string
}

interface Credential {
  slug: string
  tag: string
  meta: string
  title: string
  body: ReactNode
  placeholderLabel: string
  photoSrc?: string
  photoAlt: string
  specs: Spec[]
}

// To wire a real photo: drop the file under /public/certifications/ and set
// `photoSrc` (e.g. photoSrc: '/certifications/ppf.jpg'). Until then, a tasteful
// dark-gradient placeholder renders in its place.
const credentials: Credential[] = [
  {
    slug: 'ppf',
    tag: 'Cert · 01',
    meta: 'Hands-on · multi-day',
    title: 'Paint Protection Film.',
    placeholderLabel: 'DetailWise Academy · PPF Training',
    photoSrc: '/certifications/ppf.jpg',
    photoAlt: 'DetailWise Academy Paint Protection Film Training — certificate of completion',
    body: (
      <>
        Manufacturer-partnered PPF installation.{' '}
        <strong className="text-ink font-semibold">
          Computer-cut films, hand-finished edges,
        </strong>{' '}
        wrapped to factory tolerances. Self-healing top layer with the film manufacturer&apos;s
        warranty.
      </>
    ),
    specs: [
      { label: 'Issued by', value: 'DetailWise Academy' },
      { label: 'Program', value: 'Paint Protection Film Training' },
      { label: 'Film partner', value: 'Opticle PPF' },
      { label: 'Trainers', value: 'Jason Otterness · Shane Stoleton' },
    ],
  },
]

export default function Certifications() {
  return (
    <section className="bg-white px-8 pt-[120px] pb-[100px] max-[900px]:px-5 max-[900px]:pt-20 max-[900px]:pb-[60px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-8">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            The receipts
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[13vw]">
            <SplitLetters text="Trained by the manufacturers." />
          </h2>
        </div>

        {/* Sub-meta */}
        <div className="mt-5 mb-16 flex justify-between items-center text-[13px] font-medium text-ink-muted tracking-[-0.005em] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3 max-[900px]:mb-9">
          <div className="text-ink font-semibold">
            Manufacturer-partnered certification. The actual document.
          </div>
          <div className="flex gap-7 max-[900px]:flex-col max-[900px]:gap-1">
            <span>
              Issued by <strong className="text-ink font-semibold">DetailWise Academy</strong>
            </span>
            <span>
              <strong className="text-ink font-semibold">Current</strong> · 2026
            </span>
          </div>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-[minmax(0,640px)] justify-center gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-14">
          {credentials.map((cred) => (
            <article key={cred.slug} className="group flex flex-col">
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] bg-[#1a1a1a] overflow-hidden mb-7">
                {cred.photoSrc ? (
                  <Image
                    src={cred.photoSrc}
                    alt={cred.photoAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[800ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[linear-gradient(135deg,#1a1a1a_0%,#0a0a0a_100%)]">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/30 mb-3">
                      From the field
                    </span>
                    <span className="text-white/70 font-bold text-lg tracking-[-0.01em]">
                      {cred.placeholderLabel}
                    </span>
                    <span className="text-white/25 text-[10px] uppercase tracking-[0.2em] mt-3">
                      Photo coming soon
                    </span>
                  </div>
                )}

                <span className="absolute top-[18px] left-[18px] z-[2] text-white text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 bg-black/55 backdrop-blur-md">
                  {cred.tag}
                </span>
                <span className="absolute bottom-[18px] right-[18px] z-[2] text-white/70 text-[11px] font-semibold tracking-[0.06em]">
                  {cred.meta}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-extrabold text-ink leading-[0.95] tracking-[-0.04em] mb-[18px] text-[clamp(36px,4.5vw,64px)] max-[900px]:text-[11vw]">
                <SplitLetters text={cred.title} />
              </h3>

              {/* Body */}
              <p className="text-base leading-[1.5] text-ink-muted tracking-[-0.005em] mb-7 max-w-[48ch]">
                {cred.body}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-ink max-[900px]:gap-x-5 max-[900px]:gap-y-4">
                {cred.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                      {spec.label}
                    </span>
                    <span className="text-sm font-semibold text-ink tracking-[-0.01em] leading-[1.3]">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Proof strip */}
        <div className="mt-[100px] py-10 border-y border-ink grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 items-center max-[900px]:mt-[60px] max-[900px]:py-8 max-[900px]:grid-cols-2 max-[900px]:gap-6">
          <p className="font-bold text-ink leading-[1.15] tracking-[-0.025em] text-[clamp(20px,1.8vw,28px)] max-[900px]:col-span-2 max-[900px]:text-2xl max-[900px]:mb-2">
            Anyone can buy product.
            <br />
            <span className="text-ink-muted font-bold">Few can install it right.</span>
          </p>
          <div className="flex flex-col gap-1 border-l border-line pl-6 max-[900px]:border-l-0 max-[900px]:pl-0">
            <span className="text-4xl font-extrabold text-ink leading-none tracking-[-0.04em] tabular-nums max-[900px]:text-3xl">
              02
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Manufacturer certs
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-line pl-6 max-[900px]:border-l-0 max-[900px]:pl-0">
            <span className="text-4xl font-extrabold text-ink leading-none tracking-[-0.04em] tabular-nums max-[900px]:text-3xl">
              100<span className="text-[0.6em]">%</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Hands-on trained
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-line pl-6 max-[900px]:border-l-0 max-[900px]:pl-0">
            <span className="text-4xl font-extrabold text-ink leading-none tracking-[-0.04em] tabular-nums max-[900px]:text-3xl">
              10<span className="text-[0.6em]">yr</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Max warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
