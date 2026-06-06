import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ServiceCalculator from '@/components/ServiceCalculator'
import FaqAccordion from '@/components/FaqAccordion'
import GoogleMap from '@/components/GoogleMap'
import { PhoneIcon, MapPinIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description:
    'Book your free consultation with VanityWorks — Chicagoland\'s premier mobile auto detailer specializing in JDM and exotic vehicles.',
}

const process = [
  {
    step: '01',
    title: 'Tell Us About Your Build',
    description:
      'Fill out the form below or call us directly. We\'ll ask about your vehicle, current paint condition, and protection goals.',
  },
  {
    step: '02',
    title: 'We Come to You',
    description:
      'As a mobile service, we schedule at your home, office, or parking structure anywhere in Chicagoland. No drop-off needed.',
  },
  {
    step: '03',
    title: 'Inspection & Quote',
    description:
      'We perform a thorough paint inspection under high-intensity lighting and give you an honest, itemized quote — no pressure.',
  },
  {
    step: '04',
    title: 'We Get to Work',
    description:
      'Your vehicle receives the full VanityWorks treatment. We document every stage with photos so you can see the transformation.',
  },
]

const faqs = [
  {
    q: 'Are you a mobile service?',
    a: 'Yes — VanityWorks is fully mobile. We bring professional-grade equipment to your location anywhere in Chicagoland and surrounding areas. No shop drop-off required.',
  },
  {
    q: 'How long does a typical appointment take?',
    a: 'It depends on the service. A full detail runs 5–8 hours. PPF installation is typically 1–3 days. Ceramic coating is 1–2 days. We\'ll give you a precise timeline when we quote.',
  },
  {
    q: 'Do you work on JDM imports and exotics?',
    a: 'That\'s our specialty. We have hands-on experience with JDM fitments, factory Japanese clearcoats, and the unique panel geometry on exotic vehicles. If you have a rare build, we want it.',
  },
  {
    q: 'What areas do you service?',
    a: 'We cover Chicago and the greater Chicagoland area including the North Shore, Western Suburbs, and beyond. Contact us if you\'re outside the metro area — we often travel for the right project.',
  },
  {
    q: 'Do you offer warranties on your work?',
    a: 'Yes. Opticle PPF installs carry the manufacturer\'s warranty (per Opticle\'s film-specific terms). Ceramic coatings carry the coating manufacturer\'s standard warranty.',
  },
]

export default function BookPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-white">
      {/* Hero */}
      <div className="relative bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E0E0E0]">
        {/* Decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path d="M0 400 Q360 250 720 230 Q1080 210 1440 380" stroke="#0A0A0A" strokeWidth="1" />
          <path d="M0 500 Q360 380 720 360 Q1080 340 1440 480" stroke="#0A0A0A" strokeWidth="0.5" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
            Mobile Service · Chicagoland, IL
          </div>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] mb-5 leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Book a
            <br />
            <span className="text-[#888]">Consultation</span>
          </h1>

          <p className="text-[#1A1A1A] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your car and we&apos;ll craft a protection package around your goals.
            Free consultation, no pressure, just expertise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+12245724787"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              (224) 572-4787
            </a>
            <a
              href="https://instagram.com/vanityworks.il"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#E0E0E0] text-[#666] font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
            >
              @vanityworks.il
            </a>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              How It Works
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Simple From Start to Finish
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {/* Connector line (desktop only) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-full h-px bg-gradient-to-r from-[#0A0A0A]/30 to-transparent z-0" />
                )}
                <div className="relative z-10 bg-white border border-[#E0E0E0] rounded-xl p-4 sm:p-6 h-full shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
                  <div
                    className="text-3xl sm:text-4xl text-[#0A0A0A] mb-3 leading-none"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {step.step}
                  </div>
                  <h3
                    className="text-base sm:text-lg text-[#0A0A0A] mb-2 leading-tight"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left sidebar info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Get in Touch
                </p>
                <h2
                  className="text-4xl sm:text-5xl text-[#0A0A0A] mb-4 leading-tight"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  Let&apos;s Talk
                  <br />
                  About Your Car
                </h2>
                <p className="text-[#666] text-sm leading-relaxed">
                  Whether you&apos;re building a GT-R, daily-driving an M4, or just picked up your
                  dream car — we want to help you protect it right.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="tel:+12245724787"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] flex-shrink-0 group-hover:border-[#0A0A0A] transition-colors">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#888] text-xs tracking-wider uppercase">Call or Text</div>
                    <div className="text-[#0A0A0A] font-semibold">(224) 572-4787</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/vanityworks.il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] text-sm flex-shrink-0 group-hover:border-[#0A0A0A] transition-colors">
                    IG
                  </div>
                  <div>
                    <div className="text-[#888] text-xs tracking-wider uppercase">Instagram</div>
                    <div className="text-[#0A0A0A] font-semibold">@vanityworks.il</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] flex-shrink-0">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[#888] text-xs tracking-wider uppercase">Service Area</div>
                    <div className="text-[#0A0A0A] font-semibold">Chicagoland, IL</div>
                    <div className="text-[#888] text-xs">We come to you — fully mobile</div>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="border-t border-[#E0E0E0] pt-8">
                <p className="text-[#888] text-xs tracking-wider uppercase mb-4">Certified By</p>
                <div className="flex flex-wrap gap-2">
                  {['OPTICLE PPF', 'DETAILWISE ACADEMY'].map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 text-xs font-semibold tracking-wider rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form + Calculator */}
            <div className="lg:col-span-3 space-y-8">
              {/* Service Calculator */}
              <ServiceCalculator />

              {/* Contact Form */}
              <div className="bg-white border border-[#E0E0E0] rounded-2xl p-8 sm:p-10 shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
                <h3
                  className="text-3xl text-[#0A0A0A] mb-1"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  Request a Quote
                </h3>
                <p className="text-[#888] text-sm mb-8">
                  We typically respond within a few hours. Texts welcome at (224) 572-4787.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Where We Work
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A] mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Chicagoland & Surrounding Areas
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto">
              Fully mobile — we come to your home, condo garage, or office. Chicago, the North Shore, and the western suburbs.
            </p>
          </div>
          <GoogleMap query="Chicagoland, IL" ariaLabel="VanityWorks service area covering Chicagoland" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Questions
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Frequently Asked
            </h2>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#888] text-sm mb-3">Prefer to reach out directly?</p>
        <a
          href="tel:+12245724787"
          className="text-4xl sm:text-5xl text-[#0A0A0A] leading-none"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          (224) 572-4787
        </a>
        <p className="text-[#888] text-xs mt-2 tracking-wider">Call or text — we respond fast</p>
      </section>
    </div>
  )
}
