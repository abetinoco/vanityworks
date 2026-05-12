import type { Certification } from '@/lib/data'

interface CertBadgeProps {
  cert: Certification
  size?: 'sm' | 'md'
}

export default function CertBadge({ cert, size = 'md' }: CertBadgeProps) {
  if (size === 'sm') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E0E0E0] bg-white">
        <span className="font-bold text-xs tracking-wider text-[#0A0A0A]">{cert.badge}</span>
        <span className="text-[#666] text-xs">{cert.name}</span>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-[#E0E0E0] bg-white p-5 flex flex-col gap-2 shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
      {/* Badge circle */}
      <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center mb-1">
        <span
          className="text-lg font-bold tracking-wider text-[#0A0A0A]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          {cert.badge}
        </span>
      </div>
      <div>
        <h4
          className="text-[#0A0A0A] text-base leading-tight mb-0.5"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          {cert.name}
        </h4>
        <p className="text-[#888] text-xs">{cert.issuer}</p>
      </div>
      <p className="text-[#666] text-xs leading-relaxed border-t border-[#E0E0E0] pt-2 mt-1">
        {cert.description}
      </p>
    </div>
  )
}
