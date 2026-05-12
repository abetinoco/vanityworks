import { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full menu of VanityWorks services — PPF, Ceramic Coating, Paint Correction, Window Tint, Interior Protection, and Full Detail.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-center border-b border-[#E0E0E0]">
        <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          What We Offer
        </p>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Our Services
        </h1>
        <p className="text-[#666] max-w-xl mx-auto text-sm leading-relaxed">
          Every service is performed by certified installers using industry-leading products. We
          obsess over the details so you don&apos;t have to.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      {/* Package note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] border border-[#0A0A0A] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl sm:text-3xl text-[#0A0A0A] mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Bundle & Save
            </h3>
            <p className="text-[#666] text-sm max-w-md">
              Combining PPF with ceramic coating? Paint correction before a full wrap? We offer
              custom package pricing — just tell us what you need.
            </p>
          </div>
          <Link
            href="/book"
            className="flex-shrink-0 px-7 py-3.5 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
