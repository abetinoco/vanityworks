'use client'

import TestimonialCard from './TestimonialCard'
import type { Testimonial } from '@/lib/data'

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: Props) {
  return (
    <>
      {/* Mobile: horizontal scroll-snap carousel */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4">
          {testimonials.map((t) => (
            <div key={t.id} className="snap-center flex-shrink-0 w-[80vw] max-w-xs">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
        {/* Visual scroll hint dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {testimonials.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#CCCCCC]" />
          ))}
        </div>
      </div>

      {/* Desktop: standard grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </>
  )
}
