import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle warm wash from below */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 100%, #F5F5F5 0%, transparent 70%)',
          }}
        />
        {/* Faint architectural lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 600 Q360 400 720 380 Q1080 360 1440 520" stroke="#0A0A0A" strokeWidth="1" />
          <path d="M0 700 Q360 550 720 520 Q1080 490 1440 640" stroke="#0A0A0A" strokeWidth="0.5" />
          <path d="M200 0 L300 900" stroke="#0A0A0A" strokeWidth="0.3" />
          <path d="M1200 0 L1100 900" stroke="#0A0A0A" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
          XPEL Certified · Ceramic Pro Installer
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none tracking-wider text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          YOUR CAR.
          <br />
          <span className="text-[#888]">PERFECTED.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#666] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Premium PPF, ceramic coating, and paint correction for JDM, exotic, and enthusiast vehicles.
          We protect what you love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/book"
            className="px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded hover:bg-[#0A0A0A] hover:text-white transition-colors"
          >
            View Services
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-16">
          {[
            { value: '8+', label: 'Years of Experience' },
            { value: '2,400+', label: 'Cars Protected' },
            { value: '97%', label: 'Satisfaction Rate' },
            { value: '5', label: 'Certified Installers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl sm:text-4xl text-[#0A0A0A] leading-none mb-1"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-[#888] text-xs tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#B5B5B5] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      </div>
    </section>
  )
}
