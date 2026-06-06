import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRightIcon,
  LayersIcon,
  RulerIcon,
  ScissorsIcon,
  WrenchIcon,
  TrophyIcon,
  CameraIcon,
  ShieldIcon,
  SparkleIcon,
  SunIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'JDM & Exotic Specialists',
  description:
    'VanityWorks specializes in JDM imports and exotic vehicles — from Nissan GT-Rs and Toyota Supras to Ferraris and McLarens. We handle your build the way you would.',
}

const jdmRoster = [
  { car: 'Nissan GT-R', gen: 'R35 · R34 · R32', note: 'JDM factory clearcoat experience' },
  { car: 'Toyota Supra', gen: 'A90 · A80 · A70', note: 'GR Supra PPF precision fit' },
  { car: 'Honda NSX', gen: 'NA1 · NA2 · NC1', note: 'Aluminum panel care' },
  { car: 'Mitsubishi EVO', gen: 'VIII · IX · X', note: 'AWD fitment expertise' },
  { car: 'Subaru STI', gen: 'GC · GD · GR · VA', note: 'WRX & STI specialist' },
  { car: 'Mazda RX-7', gen: 'FC · FD3S', note: 'Rotary icon — delicate care' },
  { car: 'Honda S2000', gen: 'AP1 · AP2', note: 'Roadster + hood fitment' },
  { car: 'Lexus LFA', gen: 'Carbon fiber aware', note: 'Ultra-exotic handling' },
]

const exoticRoster = [
  { car: 'Ferrari', gen: '488 · F8 · SF90 · Roma', note: 'Carbon & specialty paint' },
  { car: 'Lamborghini', gen: 'Huracán · Urus · Revuelto', note: 'Full body PPF experience' },
  { car: 'McLaren', gen: '720S · Artura · GT', note: 'MSO & custom paint handling' },
  { car: 'Porsche', gen: '911 · GT3 · Cayman · Taycan', note: 'GT build expertise' },
  { car: 'Mercedes-AMG', gen: 'GT · C63 · E63 · G63', note: 'AMG performance line' },
  { car: 'BMW M Series', gen: 'M2 · M3 · M4 · M5 · M8', note: 'Competition package PKG' },
]

const whyJdm = [
  {
    Icon: LayersIcon,
    title: 'Japanese Factory Clearcoat',
    body: 'JDM vehicles are often shipped with thinner, softer Japanese-spec clearcoat. We meter paint depth on every panel before any polishing step to protect what\'s there.',
  },
  {
    Icon: RulerIcon,
    title: 'Precision Panel Gaps',
    body: 'Tight JDM panel tolerances and unique bumper cutout geometry require hand-cut film relief cuts. We don\'t rely on generic patterns — we fit to your specific car.',
  },
  {
    Icon: ScissorsIcon,
    title: 'JDM-Specific PPF Patterns',
    body: 'We use OPTICLE pattern libraries supplemented by our own hand-cut templates for vehicles not covered by off-the-shelf programs.',
  },
  {
    Icon: WrenchIcon,
    title: 'Modified Vehicle Experience',
    body: 'Aftermarket bumpers, widebody kits, carbon aero — we\'ve handled it. If your build has been modified, we adapt our process instead of turning you away.',
  },
  {
    Icon: TrophyIcon,
    title: 'Track & Show Builds',
    body: 'From track-prepped time attack cars to concours-level show builds, we understand the specific needs of cars that are used hard and displayed proudly.',
  },
  {
    Icon: CameraIcon,
    title: 'Documented Process',
    body: 'We photograph every stage of your vehicle\'s service under high-intensity lighting — so you see exactly what we found and what we did about it.',
  },
]

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E0E0E0]">
        {/* Graphic lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path d="M0 500 Q480 300 960 280 Q1200 270 1440 420" stroke="#0A0A0A" strokeWidth="1.5" />
          <path d="M0 620 Q480 450 960 420 Q1200 405 1440 540" stroke="#0A0A0A" strokeWidth="0.8" />
          <path d="M720 0 L680 800" stroke="#0A0A0A" strokeWidth="0.5" />
        </svg>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
            JDM · Exotic · Enthusiast
          </div>

          <h1
            className="text-5xl sm:text-7xl md:text-9xl text-[#0A0A0A] leading-none mb-5"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            We Speak
            <br />
            <span className="text-[#888]">Your Language</span>
          </h1>

          <p className="text-[#1A1A1A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your GT-R, Supra, or NSX isn&apos;t just a car — it&apos;s a build. VanityWorks was
            built by enthusiasts who understand the difference. We treat your machine the way
            you&nbsp;would.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/book"
              className="px-8 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services/paint-protection-film"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              PPF for Exotics
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Statement strip */}
      <div className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-8 md:gap-16 flex-wrap justify-center">
          {[
            { value: '400+', label: 'JDM Vehicles Serviced' },
            { value: '200+', label: 'Exotic Cars Protected' },
            { value: '5', label: 'Active Certifications' },
            { value: '100%', label: 'Mobile — We Come to You' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-4xl sm:text-5xl text-[#0A0A0A] leading-none mb-1"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {s.value}
              </div>
              <div className="text-[#888] text-xs tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why we're different */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              The VanityWorks Difference
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Why Enthusiasts
              <br />
              Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {whyJdm.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E0E0E0] hover:border-[#0A0A0A] rounded-xl p-4 sm:p-6 transition-colors shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
              >
                <div className="mb-3 text-[#0A0A0A]">
                  <item.Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3
                  className="text-base sm:text-xl text-[#0A0A0A] mb-1.5 leading-snug"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#666] text-xs sm:text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JDM Roster */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* JDM */}
            <div>
              <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Japanese Domestic Market
              </p>
              <h2
                className="text-3xl sm:text-5xl text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                JDM Icons We Know
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {jdmRoster.map((item) => (
                  <div
                    key={item.car}
                    className="flex items-center gap-3 bg-white border border-[#E0E0E0] rounded-xl p-3 sm:p-4 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
                  >
                    <div className="w-1 h-8 rounded-full bg-[#0A0A0A] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className="text-[#0A0A0A] text-sm leading-none"
                          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                        >
                          {item.car}
                        </span>
                        <span className="text-[#888] text-xs">{item.gen}</span>
                      </div>
                      <div className="text-[#666] text-xs mt-0.5 leading-snug">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exotic */}
            <div>
              <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Exotic & European
              </p>
              <h2
                className="text-3xl sm:text-5xl text-[#0A0A0A] mb-6"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                Exotic Builds We Handle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exoticRoster.map((item) => (
                  <div
                    key={item.car}
                    className="flex items-center gap-3 bg-white border border-[#E0E0E0] rounded-xl p-3 sm:p-4 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
                  >
                    <div className="w-1 h-8 rounded-full bg-[#0A0A0A] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className="text-[#0A0A0A] text-sm leading-none"
                          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                        >
                          {item.car}
                        </span>
                        <span className="text-[#888] text-xs">{item.gen}</span>
                      </div>
                      <div className="text-[#666] text-xs mt-0.5 leading-snug">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for JDM/Exotic */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Built for Your Build
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              The Full Protection Menu
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {[
              {
                href: '/services/paint-protection-film',
                Icon: ShieldIcon,
                title: 'Paint Protection Film',
                note: 'OPTICLE PPF trained. Full-front, partial zones, or full-body wraps.',
                cta: 'Starting at $899',
              },
              {
                href: '/services/ceramic-coating',
                Icon: SparkleIcon,
                title: 'Ceramic Coating',
                note: 'Professional-grade nano-ceramic SiO₂ for hydrophobic, UV-resistant gloss.',
                cta: 'Starting at $699',
              },
              {
                href: '/services/paint-correction',
                Icon: SunIcon,
                title: 'Paint Correction',
                note: 'DETAILWISE certified. Multi-stage machine polishing to 95%+ defect removal.',
                cta: 'Starting at $449',
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-[#0A0A0A] hover:bg-[#0A0A0A] rounded-xl p-4 sm:p-7 transition-colors shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
              >
                <div className="mb-3 text-[#0A0A0A] group-hover:text-white transition-colors">
                  <s.Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <h3
                  className="text-lg sm:text-2xl text-[#0A0A0A] group-hover:text-white mb-1.5 transition-colors"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {s.title}
                </h3>
                <p className="text-[#666] group-hover:text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 transition-colors">{s.note}</p>
                <div className="inline-flex items-center gap-1.5 text-[#0A0A0A] group-hover:text-[#888] font-bold text-xs sm:text-sm transition-colors">
                  {s.cta}
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F5F5] border-t border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] mb-5"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Got a Build?
            <br />
            <span className="text-[#888]">We Want It.</span>
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-md mx-auto">
            From track-prep to show-quality finish, every enthusiast vehicle deserves expert hands.
            Let&apos;s build a protection plan around your specific car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+12245724787"
              className="px-10 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              (224) 572-4787
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
