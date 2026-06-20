import type { Metadata } from 'next'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'
import ContactPageForm from '@/components/ContactPageForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with VanityWorks. Tell us about your vehicle — we'll get back with an honest read and a real quote.",
}

export default function ContactPage() {
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
            <span className="text-ink font-semibold">Contact</span>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-ink" />
                Get in touch
              </div>
              <h1 className="font-sans font-extrabold text-ink leading-[0.88] tracking-[-0.05em] text-[clamp(48px,7.5vw,120px)] max-[900px]:text-[14vw]">
                <SplitLetters text="Let's talk cars." />
              </h1>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink font-medium leading-[1.4] tracking-[-0.015em] text-[clamp(17px,1.6vw,21px)]">
                Tell us about your vehicle and what you&apos;re after.{' '}
                <span className="text-ink-muted">
                  We&apos;ll get back with an honest read and a real quote.
                </span>
              </p>
              <p className="text-[14px] text-ink-muted leading-[1.5] tracking-[-0.005em]">
                Text is fastest. Most messages get a reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* FORM + INFO */}
      <section className="bg-white px-8 max-[900px]:px-5">
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-[1.1fr_0.9fr] gap-16 items-start pb-[120px] max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:pb-[72px] max-[900px]:mt-10">
          {/* Form */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] mb-7">
              <span className="inline-block w-2 h-2 rounded-full bg-ink" />
              Send a message
            </div>
            <ContactPageForm />
          </div>

          {/* Info sidebar */}
          <aside className="flex flex-col border border-ink">
            <InfoItem label="Call or text">
              <a href="tel:+12245724787" className="text-[18px] font-bold tracking-[-0.02em] text-ink no-underline hover:opacity-60 transition-opacity">
                (224) 572-4787
              </a>
              <span className="text-[13px] text-ink-muted leading-[1.4] tracking-[-0.005em]">
                Text preferred — fastest reply
              </span>
            </InfoItem>
            <InfoItem label="Email">
              <a href="mailto:hello@vanityworks.il" className="text-[18px] font-bold tracking-[-0.02em] text-ink no-underline hover:opacity-60 transition-opacity">
                hello@vanityworks.il
              </a>
              <span className="text-[13px] text-ink-muted leading-[1.4] tracking-[-0.005em]">
                Replies within 24 hours
              </span>
            </InfoItem>
            <InfoItem label="Location">
              <span className="text-[18px] font-bold tracking-[-0.02em] text-ink">Chicagoland</span>
              <span className="text-[13px] text-ink-muted leading-[1.4] tracking-[-0.005em]">
                Mobile · based in McHenry County — serving Lake County to the North Shore (Evanston · Glencoe)
              </span>
            </InfoItem>
            <InfoItem label="Hours">
              <div className="flex flex-col">
                {[
                  ['Mon — Fri', 'By appointment'],
                  ['Saturday', 'By appointment'],
                  ['Sunday', 'Closed'],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between text-[14px] tracking-[-0.01em] py-0.5">
                    <span className="text-ink font-medium">{d}</span>
                    <span className="text-ink-muted tabular-nums">{h}</span>
                  </div>
                ))}
              </div>
            </InfoItem>
            <InfoItem label={null}>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink">
                <span className="relative inline-block w-2 h-2 rounded-full bg-[#00b86b]">
                  <span className="absolute -inset-[3px] rounded-full bg-[#00b86b] opacity-30 animate-[pulse_2s_ease-in-out_infinite]" />
                </span>
                Now booking — Summer 2026
              </span>
            </InfoItem>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/7] overflow-hidden border border-ink bg-[#f4f4f4] max-[900px]:aspect-[4/3]">
            <span className="absolute top-4 left-4 z-[3] text-[10px] font-bold tracking-[0.14em] uppercase text-ink bg-white border border-ink px-3 py-2 pointer-events-none">
              Chicagoland
            </span>
            <iframe
              src="https://www.google.com/maps?q=Chicago,IL&t=&z=9&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VanityWorks — Chicagoland"
              className="absolute inset-0 w-full h-full block border-0"
            />
            <a
              href="https://www.google.com/maps/place/Chicago,+IL/"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="absolute bottom-4 left-4 z-[3] bg-ink text-white text-[11px] font-bold tracking-[0.14em] uppercase px-[14px] py-2.5 inline-flex items-center gap-2 no-underline transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5"
            >
              Open in Maps
              <svg viewBox="0 0 12 12" fill="none" className="w-[11px] h-[11px]">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoItem({ label, children }: { label: string | null; children: React.ReactNode }) {
  return (
    <div className="px-6 py-6 border-b border-line last:border-b-0 flex flex-col gap-1.5">
      {label && (
        <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-ink-muted">
          {label}
        </span>
      )}
      {children}
    </div>
  )
}
