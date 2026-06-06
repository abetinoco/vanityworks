import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { serviceAreas, getServiceAreaBySlug, services } from '@/lib/data'
import { ServiceIcon, ArrowRightIcon, MapPinIcon, PhoneIcon, CheckIcon } from '@/components/Icons'
import GoogleMap from '@/components/GoogleMap'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getServiceAreaBySlug(params.slug)
  if (!area) return {}
  return {
    title: `Auto Detailing in ${area.city}, ${area.state}`,
    description: area.metaDescription,
    alternates: {
      canonical: `/service-area/${area.slug}`,
    },
    openGraph: {
      title: `VanityWorks Detailing · ${area.city}, ${area.state}`,
      description: area.metaDescription,
      url: `/service-area/${area.slug}`,
    },
  }
}

export default function ServiceAreaPage({ params }: Props) {
  const area = getServiceAreaBySlug(params.slug)
  if (!area) notFound()

  const popularServices = services.filter((s) => s.popular)

  const localBusinessAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDetailing',
    name: `VanityWorks Detailing — ${area.city}`,
    image: 'https://vanityworks.com/logo.png',
    url: `https://vanityworks.com/service-area/${area.slug}`,
    telephone: '+1-224-572-4787',
    priceRange: '$$-$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.city,
      addressRegion: area.state,
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: area.city },
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessAreaSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E0E0E0]">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path d="M0 420 Q360 260 720 240 Q1080 220 1440 380" stroke="#0A0A0A" strokeWidth="1" />
          <path d="M0 520 Q360 380 720 360 Q1080 340 1440 480" stroke="#0A0A0A" strokeWidth="0.5" />
        </svg>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase mb-6">
            <MapPinIcon className="w-3.5 h-3.5" />
            Mobile Service · {area.region}
          </div>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] leading-none mb-5"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Auto Detailing
            <br />
            <span className="text-[#888]">in {area.city}.</span>
          </h1>

          <p className="text-[#1A1A1A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {area.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book in {area.city}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="tel:+12245724787"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (224) 572-4787
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F5F5F5] border-b border-[#E0E0E0] py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Service Map
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A] mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              {area.city} & Surrounding Areas
            </h2>
            <p className="text-[#666] text-sm">{area.driveCopy}</p>
          </div>
          <GoogleMap query={`${area.city}, ${area.state}`} ariaLabel={`${area.city} service area`} />
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center">
            We Cover
          </p>
          <h2
            className="text-3xl sm:text-4xl text-[#0A0A0A] mb-8 text-center"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Neighborhoods & Areas Served
          </h2>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {area.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-wider"
              >
                <CheckIcon className="w-3 h-3 text-[#0A0A0A]" strokeWidth={2} />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Built for {area.region}
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Why {area.city} Clients Pick Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {area.highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
              >
                <h3
                  className="text-xl text-[#0A0A0A] mb-2"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {h.label}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Available in {area.city}
            </p>
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Services We Offer Here
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {popularServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-[#E0E0E0] hover:border-[#0A0A0A] rounded-xl p-5 transition-colors shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
              >
                <div className="mb-3 text-[#0A0A0A]">
                  <ServiceIcon slug={s.slug} className="w-7 h-7" />
                </div>
                <h3
                  className="text-lg text-[#0A0A0A] mb-1"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {s.name}
                </h3>
                <p className="text-[#666] text-xs leading-relaxed mb-3">{s.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-[#0A0A0A] text-xs font-bold tracking-wider uppercase group-hover:text-[#888] transition-colors">
                  Learn More
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other service areas */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Also Serving
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-area/${a.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#0A0A0A] text-[#0A0A0A] text-sm font-semibold tracking-wider uppercase hover:bg-[#0A0A0A] hover:text-white transition-colors"
                >
                  {a.city}
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl text-[#0A0A0A] mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Ready When You Are.
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Book your free consultation and we&apos;ll come to your {area.city} location.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
