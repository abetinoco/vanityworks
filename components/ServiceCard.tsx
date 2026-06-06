import Link from 'next/link'
import type { Service } from '@/lib/data'
import { ServiceIcon, ArrowRightIcon } from '@/components/Icons'

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured'
}

export default function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  const isFeatured = variant === 'featured' || service.popular

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white shadow-[0_1px_3px_rgba(10,10,10,0.04)] hover:shadow-[0_8px_24px_rgba(10,10,10,0.08)] ${
        isFeatured
          ? 'border border-[#0A0A0A]'
          : 'border border-[#E0E0E0] hover:border-[#0A0A0A]'
      }`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#0A0A0A] text-white z-10">
          Popular
        </div>
      )}

      {/* Icon area */}
      <div className="px-6 pt-8 pb-4">
        <div className="mb-4 text-[#0A0A0A]">
          <ServiceIcon slug={service.slug} className="w-9 h-9" />
        </div>
        <h3
          className="text-2xl text-[#0A0A0A] mb-1 group-hover:text-[#888] transition-colors"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          {service.name}
        </h3>
        <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-3">
          {service.tagline}
        </p>
        <p className="text-[#666] text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Features preview */}
      <div className="px-6 py-4 flex-1">
        <ul className="space-y-1.5">
          {service.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-[#666]">
              <span className="mt-0.5 w-3 h-3 rounded-full border border-[#0A0A0A] flex-shrink-0 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#0A0A0A]" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="px-6 py-5 mt-auto border-t border-[#E0E0E0] flex items-center justify-between">
        <div>
          <span className="text-[#888] text-xs">Starting at</span>
          <div className="text-[#0A0A0A] text-xl font-bold">{service.startingPrice}</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#888] text-xs">{service.duration}</span>
          <span className="w-7 h-7 rounded-full border border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
