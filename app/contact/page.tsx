import type { Metadata } from 'next'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with VanityWorks. Tell us about your vehicle — we'll get back with an honest read and a real quote.",
}

const SUBMIT_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5 11L11 5M11 5H6.5M11 5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ContactPage() {
  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24">
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
            <form
              action="https://formspree.io/f/REPLACE_ME"
              method="POST"
              className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1"
            >
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field label="Phone" name="phone" type="tel" required placeholder="(224) 000-0000" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <Field label="Vehicle" name="vehicle" placeholder="Year / make / model" />
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="service" className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
                  Service interested in
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="appearance-none bg-no-repeat bg-[length:12px_8px] bg-[right_16px_center] pr-10 px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="">Select a service…</option>
                  <option value="full-detail">Full Detail — $250</option>
                  <option value="paint-correction">Paint Correction — from $350</option>
                  <option value="ceramic-coating">Ceramic Coating — from $750</option>
                  <option value="ppf">Paint Protection Film — by quote</option>
                  <option value="not-sure">Not sure yet — need advice</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="message" className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the car, the condition, and what you're hoping for."
                  className="px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors resize-y min-h-[130px] placeholder:text-[#c4c4c4]"
                />
              </div>
              <div className="col-span-2 flex items-center gap-6 flex-wrap mt-2 max-[900px]:flex-col max-[900px]:items-stretch">
                <button
                  type="submit"
                  data-hover
                  className="group bg-ink text-white rounded-full text-[15px] font-semibold px-7 py-[18px] inline-flex items-center justify-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] cursor-pointer"
                >
                  Send message {SUBMIT_ICON}
                </button>
                <span className="text-[12px] text-ink-muted tracking-[-0.005em]">
                  Or text us directly at{' '}
                  <a href="tel:+12245724787" className="text-ink font-semibold no-underline">
                    (224) 572-4787
                  </a>
                </span>
              </div>
            </form>
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
              <span className="text-[18px] font-bold tracking-[-0.02em] text-ink">Lakemoor, IL</span>
              <span className="text-[13px] text-ink-muted leading-[1.4] tracking-[-0.005em]">
                By appointment · mobile service across Chicagoland &amp; the North Shore
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
              Lakemoor · HQ
            </span>
            <iframe
              src="https://www.google.com/maps?q=Lakemoor,IL&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VanityWorks — Lakemoor, IL"
              className="absolute inset-0 w-full h-full block border-0"
            />
            <a
              href="https://www.google.com/maps/place/Lakemoor,+IL/"
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

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[11px] font-bold tracking-[0.1em] uppercase text-ink-muted">
        {label}{' '}
        {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="px-4 py-3.5 text-[15px] text-ink border border-line bg-white focus:outline-none focus:border-ink transition-colors placeholder:text-[#c4c4c4]"
      />
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
