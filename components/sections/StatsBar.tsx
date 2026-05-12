const items = [
  { value: '500+', label: 'Cars Detailed' },
  { value: '200+', label: '5-Star Reviews' },
  { value: '4', label: 'Brand Certifications' },
  { value: '#1', label: "Chicagoland's JDM Detailer" },
]

export default function StatsBar() {
  return (
    <section className="bg-[#F5F5F5] border-y border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex gap-6 sm:gap-10 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-4 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex-shrink-0 flex items-center gap-3 sm:gap-4 sm:justify-center ${
                i > 0 ? 'sm:border-l sm:border-[#E0E0E0] sm:pl-6' : ''
              }`}
            >
              <span
                className="text-3xl sm:text-4xl text-[#0A0A0A] leading-none"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
              >
                {item.value}
              </span>
              <span className="text-[#666] text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
