import { Metadata } from 'next'
import Image from 'next/image'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    "Book a free consultation with VanityWorks — Chicagoland mobile detailing for JDM and exotic vehicles. Tell us about your car and we come to you.",
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden text-white">
      {/* Background photo — same hero.webp the homepage uses */}
      <Image
        src="/hero.webp"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover z-0"
        style={{ objectPosition: '60% center' }}
        aria-hidden
      />
      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 pointer-events-none"
      />

      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — pitch */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase text-white/60 mb-5">
              <span className="relative inline-block w-[7px] h-[7px] rounded-full bg-[#00ff88]">
                <span className="absolute -inset-[3px] rounded-full bg-[#00ff88] opacity-30 animate-[pulse_2s_ease-in-out_infinite]" />
              </span>
              Now booking — Summer 2026
            </div>

            <h1 className="font-sans font-extrabold text-white leading-[0.9] tracking-[-0.055em] mb-5 text-[clamp(44px,6vw,84px)]">
              Let&apos;s book
              <br />
              your car in.
            </h1>

            <p className="text-white/65 font-medium leading-[1.5] tracking-[-0.011em] max-w-[44ch] mx-auto lg:mx-0 text-[clamp(15px,1.3vw,17px)] mb-8">
              Tell us a little about your car and we&apos;ll reach out to set it up.
              Free consultation, no pressure — and we come to you, anywhere in Chicagoland.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-[14px] text-white/70 font-medium">
              <a href="tel:+12245724787" data-hover className="hover:text-white transition-colors">
                Call or text{' '}
                <span className="text-white font-semibold">(224) 572-4787</span>
              </a>
              <a
                href="https://instagram.com/vanityworks.il"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="hover:text-white transition-colors"
              >
                <span className="text-white font-semibold">@vanityworks.il</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
              {['Opticle PPF Trained', 'DetailWise Certified', '4.97★ rating'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-[11px] font-semibold tracking-[0.04em] rounded-full border border-white/20 text-white/75"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — the form card */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]">
              <h2 className="font-sans font-extrabold text-[#0A0A0A] text-[clamp(22px,2.4vw,28px)] tracking-[-0.04em] leading-[0.95] mb-1.5">
                Request your spot
              </h2>
              <p className="text-[#888] text-[14px] mb-6">
                Takes 30 seconds. Just the basics — we&apos;ll handle the rest.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
