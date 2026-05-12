import { Metadata } from 'next'
import Link from 'next/link'
import { certifications } from '@/lib/data'
import CertBadge from '@/components/CertBadge'
import BrandAccordion from '@/components/BrandAccordion'

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    'VanityWorks holds certifications from OPTICLE PPF, Ceramic Pro, DETAILWISE, XPEL, and IGL Coatings — the most trusted names in automotive paint protection.',
}

const whatItMeans = [
  {
    icon: '◆',
    title: 'Factory Training Standards',
    body: 'Each certification program requires hands-on training with the brand\'s actual products, application tools, and quality control standards — not just online coursework.',
  },
  {
    icon: '◇',
    title: 'Warranty Eligibility',
    body: 'Manufacturer warranties on PPF and ceramic coatings are only valid when installed by certified applicators. We can issue warranty documentation for your vehicle.',
  },
  {
    icon: '◈',
    title: 'Product Access',
    body: 'Certified installers get access to professional-grade films, coatings, and pattern software not available to the general public. Your car gets the real thing.',
  },
  {
    icon: '◉',
    title: 'Ongoing Recertification',
    body: 'Our certifications aren\'t one-time credentials. We maintain active standing with each brand, staying current with new product lines, updated installation techniques, and quality benchmarks.',
  },
]

const brandDetails = [
  {
    badge: 'OPT',
    name: 'OPTICLE PPF',
    headline: 'Premium Paint Protection Film',
    description:
      'OPTICLE manufactures high-performance PPF films specifically engineered for enthusiast and exotic vehicle applications. Their gloss, matte, and satin finish films feature advanced self-healing urethane technology with an optically clear TPU base that resists yellowing for a decade or more.',
    features: [
      'Self-healing top coat — minor scratches disappear with heat',
      'Optically clear TPU base — zero orange peel appearance',
      'Available in gloss, matte, satin, and stealth finishes',
      'Chemical and UV resistant formulation',
      '10-year manufacturer warranty on certified installs',
      'Precision pattern library for all makes and models',
    ],
    accentColor: '',
    textColor: '',
  },
  {
    badge: 'CP',
    name: 'Ceramic Pro',
    headline: 'Nano-Ceramic Surface Coating',
    description:
      'Ceramic Pro is the global benchmark for professional-grade nano-ceramic coatings. Their coating systems bond chemically to clear coat, glass, wheels, and interior surfaces — creating a semi-permanent protective layer that dramatically enhances gloss, repels contaminants, and blocks UV degradation. Certified installs come with Ceramic Pro warranty registration.',
    features: [
      'Sport, Silver, Gold, and Platinum package tiers',
      'SiO₂ nano-ceramic formulation — up to 9H hardness',
      'Extreme hydrophobic surface — water beads and sheets off',
      'UV and chemical resistance prevents oxidation',
      'Ceramic Pro warranty issued by certified installers only',
      'Available on paint, glass, wheels, leather, and fabric',
    ],
    accentColor: '',
    textColor: '',
  },
  {
    badge: 'DW',
    name: 'DETAILWISE Pro',
    headline: 'Advanced Paint Correction Certification',
    description:
      'DETAILWISE certification is a professional benchmark for paint correction excellence. The program is built around hands-on defect analysis, machine polishing technique, compound and polish science, and finish verification. DETAILWISE certified detailers understand how to read paint under high-intensity lighting and work systematically from inspection to a flawless result.',
    features: [
      'Paint depth gauge (PTG) measurement and interpretation',
      'Multi-stage compound and polish selection methodology',
      'Rotary and dual-action polisher technique mastery',
      'High-intensity lighting inspection protocols',
      'Defect classification — swirls, RIDS, water etching, oxidation',
      'Pre-protection surface prep standards',
    ],
    accentColor: '',
    textColor: '',
  },
  {
    badge: 'XPL',
    name: 'XPEL Certified',
    headline: 'PPF & Window Film Installation',
    description:
      'XPEL is one of the world\'s most recognized Paint Protection Film and window tint brands. Certified installers receive factory training on proper film preparation, application technique, and edge work — plus access to the XPEL DAP software library with computer-cut patterns for virtually every vehicle make and model.',
    features: [
      'XPEL ULTIMATE PLUS™ self-healing PPF',
      'XPEL Prime window film — ceramic IR rejection',
      'DAP pattern software access — precision computer-cut',
      'Full front, zones, and full-body wrap capability',
      'Stealth matte finish application certified',
      'XPEL manufacturer warranty eligible',
    ],
    accentColor: '',
    textColor: '',
  },
  {
    badge: 'IGL',
    name: 'IGL Coatings Approved',
    headline: 'Eco-Certified Nano-Ceramic Coatings',
    description:
      'IGL Coatings is a Malaysia-based global coating manufacturer known for their eco-conscious chemistry and exceptionally high hardness ratings. As an approved IGL applicator, we can install their Kenzo (flagship), Quartz, and Premier lines — covering everything from daily drivers to show cars with proven longevity and slickness.',
    features: [
      'IGL Kenzo — 10H hardness, flagship slickness',
      'IGL Quartz — high-gloss entry protection',
      'Eco-certified low-VOC formulations',
      'Industry-leading gloss retention over time',
      'Available on paint, glass, wheels, trim, and plastic',
      'IGL approved installer warranty available',
    ],
    accentColor: '',
    textColor: '',
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <div className="relative bg-white py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E0E0E0]">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path d="M0 450 Q360 280 720 260 Q1080 240 1440 400" stroke="#0A0A0A" strokeWidth="1" />
          <path d="M200 0 L250 700" stroke="#0A0A0A" strokeWidth="0.4" />
          <path d="M1200 0 L1160 700" stroke="#0A0A0A" strokeWidth="0.4" />
        </svg>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
            Industry-Recognized Credentials
          </div>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] leading-none mb-5"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Certified.
            <br />
            <span className="text-[#888]">Qualified. Trusted.</span>
          </h1>

          <p className="text-[#1A1A1A] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our certifications aren&apos;t wall decorations — they represent real factory training,
            ongoing quality standards, and the ability to back our work with manufacturer warranties.
          </p>
        </div>
      </div>

      {/* Badge overview strip */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#888] text-xs tracking-[0.2em] uppercase mb-10">
            Active Certifications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <CertBadge key={cert.badge} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* What certification means */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Why It Matters
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              What Certified
              <br />
              Actually Means
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {whatItMeans.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white border border-[#E0E0E0] rounded-xl p-5 sm:p-6 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
              >
                <div className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5 text-[#888]">{item.icon}</div>
                <div>
                  <h3
                    className="text-lg sm:text-xl text-[#0A0A0A] mb-1.5"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#666] text-xs sm:text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand deep-dives */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              The Brands We Represent
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              In-Depth: Every
              <br />
              Certification
            </h2>
          </div>

          <BrandAccordion brands={brandDetails} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#E0E0E0]">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] mb-5"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Protect Your Car
            <br />
            <span className="text-[#888]">The Right Way.</span>
          </h2>
          <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Every certification we hold means your vehicle gets treated by someone who was trained,
            tested, and trusted by the brands that make the products protecting your car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
