import { Metadata } from 'next'
import CertBadge from '@/components/CertBadge'
import { certifications, stats } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about VanityWorks — our story, certifications, and commitment to protecting JDM and exotic vehicles.',
}

const team = [
  {
    name: 'Marcus Reyes',
    role: 'Founder & Lead Installer',
    certs: 'XPEL · Ceramic Pro · IGL',
    bio: 'Former dealership detailer turned independent specialist. 10+ years installing PPF and coatings on everything from daily drivers to Le Mans contenders.',
  },
  {
    name: 'Tiana Park',
    role: 'Paint Correction Specialist',
    certs: 'Detail King Pro · Rupes Certified',
    bio: 'Tiana obsesses over paint depth gauges and lighting. She leads all 2-stage and 3-stage correction jobs with documented results every time.',
  },
  {
    name: 'Dev Okonkwo',
    role: 'PPF & Tint Installer',
    certs: 'XPEL · Llumar Authorized',
    bio: 'Dev cut his teeth on JDM fitments where panel gaps are unforgiving. He handles all GT-R, NSX, and EVO PPF work personally.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-[#E0E0E0]">
        <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Our Story
        </p>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] mb-6"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Built for Car People.
          <br />
          <span className="text-[#888]">By Car People.</span>
        </h1>
        <p className="text-[#1A1A1A] text-base leading-relaxed max-w-2xl">
          VanityWorks started in 2016 with a single-car garage, a Rupes polisher, and an
          obsession with paint perfection. Eight years later we&apos;re a full-service protection
          studio with XPEL, Ceramic Pro, and IGL certifications — and we still treat every car
          like it&apos;s the first one.
        </p>
      </div>

      {/* Stats */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#E0E0E0] rounded-xl p-6 text-center shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
            >
              <div
                className="text-5xl text-[#0A0A0A] mb-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-[#888] text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2
              className="text-5xl text-[#0A0A0A] mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Why VanityWorks?
            </h2>
            <div className="space-y-5 text-[#1A1A1A] text-sm leading-relaxed">
              <p>
                Most detail shops treat paint protection as a product. We treat it as a craft.
                Every installation is documented, measured, and inspected under high-intensity
                lighting before you pick up your car.
              </p>
              <p>
                We specialize in JDM and exotic vehicles because they demand a higher standard.
                Factory clear coats, custom paint codes, and tight tolerances — we&apos;ve seen it all
                and know how to work with it.
              </p>
              <p>
                Our certifications aren&apos;t just wall decorations. They represent ongoing
                factory training, access to the latest products, and accountability to the brands
                that stand behind our work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'No shortcuts.', body: 'Every surface is decontaminated before any product goes on. No exceptions.' },
              { title: 'Documented results.', body: 'Before/after photos and paint thickness readings on every correction job.' },
              { title: 'Manufacturer-backed.', body: 'All protection packages include manufacturer warranties — not just our word.' },
              { title: 'JDM & exotic focus.', body: 'We own JDMs. We get it. Your build gets the respect it deserves.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] flex-shrink-0 mt-2" />
                <div>
                  <div className="text-[#0A0A0A] text-sm font-bold mb-1">{item.title}</div>
                  <div className="text-[#666] text-xs sm:text-sm">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2
          className="text-5xl text-[#0A0A0A] mb-10"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#0A0A0A] flex items-center justify-center mb-4">
                <span
                  className="text-2xl text-white font-bold"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3
                className="text-2xl text-[#0A0A0A] mb-0.5"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                {member.name}
              </h3>
              <p className="text-[#888] text-xs font-semibold tracking-wider uppercase mb-1">{member.role}</p>
              <p className="text-[#888] text-xs mb-4">{member.certs}</p>
              <p className="text-[#666] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl text-[#0A0A0A] mb-10"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Certifications & Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <CertBadge key={cert.badge} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2
          className="text-5xl text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Let&apos;s Work on Your Car
        </h2>
        <p className="text-[#666] mb-8 max-w-md mx-auto text-sm">
          Drop us a message and let&apos;s figure out the best protection plan for your build.
        </p>
        <Link
          href="/book"
          className="inline-block px-10 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
