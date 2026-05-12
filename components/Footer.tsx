import Link from 'next/link'

const serviceLinks = [
  { href: '/services/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/interior-exterior', label: 'Interior & Exterior Detail' },
  { href: '/services/window-tint', label: 'Window Tint' },
  { href: '/services/interior-protection', label: 'Interior Protection' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/specialties', label: 'JDM & Exotic' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/book', label: 'Book a Consultation' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-[#0A0A0A] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>V</span>
              </div>
              <span
                className="text-xl tracking-widest text-[#0A0A0A]"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                VANITY<span className="text-[#888]">WORKS</span>
              </span>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed mb-2">
              Premium PPF, ceramic coating, and paint correction for JDM, exotic, and enthusiast vehicles. Serving Chicagoland — we come to you.
            </p>
            <p className="text-[#888] text-xs tracking-wider mb-6">Mobile Auto Detailing · Chicagoland, IL</p>
            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/vanityworks.il"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center text-xs text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center text-xs text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
                aria-label="TikTok"
              >
                TK
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#E0E0E0] bg-white flex items-center justify-center text-xs text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors"
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[#0A0A0A] text-base tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#666] text-sm hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-[#0A0A0A] text-base tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#666] text-sm hover:text-[#0A0A0A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#0A0A0A] text-base tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em' }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-[#666] text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#888]">·</span>
                <span>
                  Mobile Detailing Service<br />
                  <span className="text-[#888] text-xs">Chicagoland, IL & Surrounding Areas</span><br />
                  <span className="text-[#888] text-xs">We come to your home or office</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#888]">·</span>
                <a href="tel:+12245724787" className="hover:text-[#0A0A0A] transition-colors">(224) 572-4787</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#888]">·</span>
                <a
                  href="https://instagram.com/vanityworks.il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  @vanityworks.il
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#888]">·</span>
                <span>Mon–Sat: By Appointment<br />
                  <span className="text-[#888] text-xs">Contact us to schedule</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E0E0E0] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#888] text-xs">
            © {new Date().getFullYear()} VanityWorks. All rights reserved. Chicagoland, IL.
          </p>
          <p className="text-[#B5B5B5] text-xs">
            OPTICLE PPF · Ceramic Pro · DETAILWISE · XPEL Certified
          </p>
        </div>
      </div>
    </footer>
  )
}
