import type { Testimonial } from '@/lib/data'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[#888]' : 'text-[#E0E0E0]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 flex flex-col gap-4 shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
      {/* Quote mark */}
      <div
        className="text-5xl leading-none text-[#888] -mb-2"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        &ldquo;
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="text-[#1A1A1A] text-sm leading-relaxed flex-1">{testimonial.text}</p>

      <div className="flex items-center gap-3 pt-3 border-t border-[#E0E0E0]">
        {/* Avatar placeholder */}
        <div className="w-9 h-9 rounded-full bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">{testimonial.author.charAt(0)}</span>
        </div>
        <div>
          <div className="text-[#0A0A0A] text-sm font-semibold">{testimonial.author}</div>
          <div className="text-[#888] text-xs">{testimonial.vehicle}</div>
        </div>
      </div>
    </div>
  )
}
