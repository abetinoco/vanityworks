interface Review {
  author: string
  car: string
  text: string
  date: string
}

const reviews: Review[] = [
  {
    author: 'Marcus D.',
    car: 'Nissan GT-R R35',
    text: 'My GT-R came back looking better than the day I bought it. The PPF edge work on the front bumper is flawless. These guys clearly know R35s.',
    date: '2 weeks ago',
  },
  {
    author: 'Sofia R.',
    car: 'Porsche 911 GT3',
    text: '3-stage paint correction before ceramic coating. The depth and clarity is unreal — paint looks deeper than it did at the dealership.',
    date: '1 month ago',
  },
  {
    author: 'Jake T.',
    car: 'Subaru WRX STI',
    text: 'Communication was top tier from quote to pickup. Full front PPF + ceramic and the result is mint. Will be sending my buddies here.',
    date: '3 weeks ago',
  },
  {
    author: 'Kira M.',
    car: 'BMW M4 Competition',
    text: "I've used three shops in Chicagoland and VanityWorks isn't even close. The attention to detail on every panel is in a different league.",
    date: '2 months ago',
  },
  {
    author: 'Ryan H.',
    car: 'Toyota GR Supra A90',
    text: 'They treated my Supra like it was their own. Sent me progress photos at every stage. Paint looks like glass now. Highly recommend.',
    date: '6 weeks ago',
  },
  {
    author: 'Amelia P.',
    car: 'McLaren 720S',
    text: 'Trusted them with my 720S and they delivered. The ceramic coating beads water like crazy and the gloss is insane. Worth every dollar.',
    date: '1 month ago',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[#888] text-base leading-none">
          ★
        </span>
      ))}
    </div>
  )
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm font-bold tracking-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
      <span className="text-[#888] text-[10px] tracking-wider uppercase">Review</span>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-[#E0E0E0] rounded-lg p-5 sm:p-6 h-full flex flex-col shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
      <div className="flex items-center justify-between mb-4">
        <Stars />
        <GoogleBadge />
      </div>
      <p className="text-[#1A1A1A] text-sm leading-relaxed flex-1 mb-5">&ldquo;{review.text}&rdquo;</p>
      <div className="pt-4 border-t border-[#E0E0E0]">
        <p className="text-[#0A0A0A] text-sm font-semibold">{review.author}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-[#888] text-xs tracking-wider">{review.car}</p>
          <p className="text-[#888] text-xs">{review.date}</p>
        </div>
      </div>
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          5.0 Stars · 200+ Reviews
        </p>
        <h2
          className="text-5xl sm:text-6xl text-[#0A0A0A]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Reviewed On Google
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <Stars />
          <span className="text-[#666] text-sm">5.0 average</span>
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap carousel */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4">
          {reviews.map((r, i) => (
            <div key={i} className="snap-center flex-shrink-0 w-[85vw] max-w-sm">
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {reviews.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#CCCCCC]" />
          ))}
        </div>
      </div>

      {/* Desktop: 3-col grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/search?q=vanityworks+chicagoland+detailing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors"
        >
          See All Google Reviews →
        </a>
      </div>
    </section>
  )
}
