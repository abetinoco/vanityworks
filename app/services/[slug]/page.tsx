import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/lib/data'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero band */}
      <div className="relative bg-[#F5F5F5] border-b border-[#E0E0E0] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#888] text-xs mb-8">
            <Link href="/" className="hover:text-[#0A0A0A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0A0A0A] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#666]">{service.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.popular && (
                  <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-[#0A0A0A] text-white">
                    Popular
                  </span>
                )}
                {service.jdmExotic && (
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-[#E0E0E0] bg-white text-[#666]">
                    JDM / Exotic Specialty
                  </span>
                )}
              </div>

              <div className="text-5xl mb-4">{service.icon}</div>
              <h1
                className="text-6xl sm:text-7xl md:text-8xl text-[#0A0A0A] mb-3"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                {service.name}
              </h1>
              <p className="text-[#888] font-semibold tracking-wider uppercase text-sm mb-6">
                {service.tagline}
              </p>
              <p className="text-[#1A1A1A] text-base leading-relaxed max-w-2xl">
                {service.longDescription}
              </p>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <span className="text-[#888] text-xs uppercase tracking-wider block">Starting At</span>
                  <span className="text-[#0A0A0A] text-2xl font-bold">{service.startingPrice}</span>
                </div>
                <div>
                  <span className="text-[#888] text-xs uppercase tracking-wider block">Est. Time</span>
                  <span className="text-[#0A0A0A] text-2xl font-bold">{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="md:w-72 bg-white border border-[#E0E0E0] rounded-xl p-6 flex-shrink-0 shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
              <h3
                className="text-2xl text-[#0A0A0A] mb-1"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                Get a Quote
              </h3>
              <p className="text-[#888] text-xs mb-5">Tell us about your vehicle and we&apos;ll tailor a package.</p>
              <Link
                href={`/book?service=${encodeURIComponent(service.name)}`}
                className="block w-full py-3 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg text-center hover:bg-[#1A1A1A] transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                href="tel:+12245724787"
                className="block w-full py-3 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-wider uppercase rounded-lg text-center hover:bg-[#0A0A0A] hover:text-white transition-colors mt-3"
              >
                Call (224) 572-4787
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2
          className="text-4xl text-[#0A0A0A] mb-10"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          What&apos;s Included
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white border border-[#E0E0E0] rounded-xl p-5 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
            >
              <div className="w-6 h-6 rounded-full bg-[#F5F5F5] border border-[#0A0A0A] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
              </div>
              <span className="text-[#1A1A1A] text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl sm:text-5xl text-[#0A0A0A] mb-3"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Ready to Book?
            </h2>
            <p className="text-[#666] text-sm">Fill out the form and we&apos;ll be in touch within 24 hours.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2
          className="text-4xl text-[#0A0A0A] mb-8"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Other Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </div>
  )
}
