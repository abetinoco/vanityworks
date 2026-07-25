import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { href: '/services/full-detail', label: 'Full Detail' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-protection-film', label: 'Paint Protection Film' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#reviews', label: 'Reviews' },
]

const areaLinks = [
  { href: '/book', label: 'Lake County' },
  { href: '/service-area/evanston', label: 'North Shore' },
  { href: '/service-area/chicago', label: 'Chicago + North Shore' },
  { href: '/service-area/naperville', label: 'Western suburbs' },
]

const linkBaseClass =
  "group relative inline-flex items-center gap-2 text-white text-[14px] max-[900px]:text-[12px] font-medium tracking-[-0.011em] transition-[padding] duration-300 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:pl-3.5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-px before:bg-white before:transition-[width] before:duration-300 before:[transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:before:w-2.5"

function GreenPulseDot({ size = 8 }: { size?: number }) {
  return (
    <span
      className="relative inline-block rounded-full bg-[#00ff88]"
      style={{ width: size, height: size }}
    >
      <span className="absolute -inset-[3px] rounded-full bg-[#00ff88] opacity-30 animate-[pulse_2s_ease-in-out_infinite]" />
    </span>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1f1f1f] px-8 pt-20 pb-8 max-[900px]:px-5 max-[900px]:pt-6 max-[900px]:pb-4">
      <div className="max-w-[1280px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-12 pb-14 max-[900px]:grid-cols-2 max-[900px]:gap-y-4 max-[900px]:gap-x-4 max-[900px]:pb-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-[900px]:col-span-2 max-[900px]:gap-2">
            <Link
              href="/"
              data-hover
              aria-label="VanityWorks Detailing — Home"
              className="inline-flex items-center no-underline"
            >
              <Image
                src="/logo.webp"
                alt="VanityWorks Detailing"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-16 w-auto object-contain invert brightness-105 max-[900px]:h-9"
              />
            </Link>
            <p className="text-[13px] leading-[1.55] text-[#888] tracking-[-0.005em] max-w-[32ch] max-[900px]:text-[11px] max-[900px]:leading-[1.4] max-[900px]:max-w-[44ch]">
              PPF, ceramic coating, and surgical-grade paint correction for JDM, exotic, and the
              cars worth obsessing over.
            </p>
            <p className="text-[11px] font-semibold tracking-[0.04em] text-[#888] max-[900px]:text-[10px]">
              EST. <strong className="text-white font-semibold">2023</strong> · Chicagoland
            </p>

            <div className="flex gap-2 mt-1 max-[900px]:mt-0">
              <a
                href="https://instagram.com/vanityworks.il"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-hover
                className="w-[38px] h-[38px] max-[900px]:w-9 max-[900px]:h-9 rounded-full border border-[#1f1f1f] flex items-center justify-center text-white transition-[background-color,border-color,transform,color] duration-300 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=VanityWorks+Detailing+Chicagoland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                data-hover
                className="w-[38px] h-[38px] max-[900px]:w-9 max-[900px]:h-9 rounded-full border border-[#1f1f1f] flex items-center justify-center text-white transition-[background-color,border-color,transform,color] duration-300 [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M21.6 12.227c0-.709-.064-1.39-.182-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35zM12 22c2.7 0 4.964-.895 6.618-2.423l-3.232-2.51c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.598-4.123H3.064v2.59A9.996 9.996 0 0 0 12 22zM6.402 13.9a6.001 6.001 0 0 1 0-3.8v-2.59H3.064a9.996 9.996 0 0 0 0 8.98l3.338-2.59zM12 5.977c1.468 0 2.786.504 3.823 1.495l2.866-2.866C16.96 3.073 14.697 2 12 2A9.996 9.996 0 0 0 3.064 7.51L6.402 10.1C7.19 7.737 9.395 5.977 12 5.977z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 max-[900px]:gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#888] mb-1 max-[900px]:text-[10px] max-[900px]:mb-0">
              Services
            </span>
            {serviceLinks.map((l) => (
              <Link key={l.href} href={l.href} data-hover className={linkBaseClass}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 max-[900px]:gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#888] mb-1 max-[900px]:text-[10px] max-[900px]:mb-0">
              Company
            </span>
            {companyLinks.map((l) => (
              <Link key={l.href} href={l.href} data-hover className={linkBaseClass}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Service areas */}
          <div className="flex flex-col gap-4 max-[900px]:gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#888] mb-1 max-[900px]:text-[10px] max-[900px]:mb-0">
              Service areas
            </span>
            {areaLinks.map((l) => (
              <Link key={l.label} href={l.href} data-hover className={linkBaseClass}>
                {l.label}
              </Link>
            ))}
            <Link href="/book" data-hover className={linkBaseClass}>
              Ask about your area
              <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5 opacity-50">
                <path
                  d="M3 7L7 3M7 3H4M7 3V6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[18px] max-[900px]:gap-1.5">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#888] mb-1 max-[900px]:text-[10px] max-[900px]:mb-0">
              Contact
            </span>

            <a
              href="tel:+12245724787"
              data-hover
              className="grid grid-cols-[22px_1fr] gap-3.5 max-[900px]:gap-2.5 items-start text-white text-[13px] max-[900px]:text-[11px] font-medium leading-[1.4] tracking-[-0.005em] transition-opacity duration-200 hover:opacity-70"
            >
              <span className="w-5 h-5 max-[900px]:w-4 max-[900px]:h-4 text-[#888] flex-shrink-0 mt-px">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M16.5 14.5v2.6a1.4 1.4 0 0 1-1.5 1.4 13.9 13.9 0 0 1-6-2.2 13.7 13.7 0 0 1-4.2-4.2 13.9 13.9 0 0 1-2.2-6 1.4 1.4 0 0 1 1.4-1.5h2.6a1.4 1.4 0 0 1 1.4 1.2 9 9 0 0 0 .5 2 1.4 1.4 0 0 1-.3 1.5l-1.1 1.1a11.2 11.2 0 0 0 4.2 4.2l1.1-1.1a1.4 1.4 0 0 1 1.5-.3 9 9 0 0 0 2 .5 1.4 1.4 0 0 1 1.2 1.4z" />
                </svg>
              </span>
              <span>
                <strong className="block font-semibold text-white mb-0.5 max-[900px]:mb-0">(224) 572-4787</strong>
                <span className="text-[#888] text-[12px] font-medium max-[900px]:hidden">Text preferred</span>
              </span>
            </a>

            <a
              href="mailto:hello@vanityworks.il"
              data-hover
              className="grid grid-cols-[22px_1fr] gap-3.5 max-[900px]:gap-2.5 items-start text-white text-[13px] max-[900px]:text-[11px] font-medium leading-[1.4] tracking-[-0.005em] transition-opacity duration-200 hover:opacity-70"
            >
              <span className="w-5 h-5 max-[900px]:w-4 max-[900px]:h-4 text-[#888] flex-shrink-0 mt-px">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M3 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                  <polyline points="18 6 10 12 2 6" />
                </svg>
              </span>
              <span>
                <strong className="block font-semibold text-white mb-0.5 max-[900px]:mb-0">
                  hello@vanityworks.il
                </strong>
                <span className="text-[#888] text-[12px] font-medium max-[900px]:hidden">Replies within 24h</span>
              </span>
            </a>

            <div className="grid grid-cols-[22px_1fr] gap-3.5 max-[900px]:gap-2.5 items-start text-white text-[13px] max-[900px]:text-[11px] font-medium leading-[1.4] tracking-[-0.005em]">
              <span className="w-5 h-5 max-[900px]:w-4 max-[900px]:h-4 text-[#888] flex-shrink-0 mt-px">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M17 8a7 7 0 1 0-14 0c0 5 7 11 7 11s7-6 7-11z" />
                  <circle cx="10" cy="8" r="2.5" />
                </svg>
              </span>
              <span>
                <strong className="block font-semibold text-white mb-0.5 max-[900px]:mb-0">Chicagoland</strong>
                <span className="text-[#888] text-[12px] font-medium max-[900px]:hidden">Mobile · by appointment</span>
              </span>
            </div>

            <div className="grid grid-cols-[22px_1fr] gap-3.5 items-start text-white text-[13px] font-medium leading-[1.4] tracking-[-0.005em] max-[900px]:hidden">
              <span className="w-5 h-5 max-[900px]:w-4 max-[900px]:h-4 text-[#888] flex-shrink-0 mt-px">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <circle cx="10" cy="10" r="8" />
                  <polyline points="10 5 10 10 13 12" />
                </svg>
              </span>
              <span>
                <strong className="block font-semibold text-white mb-0.5 max-[900px]:mb-0">Mon–Sat</strong>
                <span className="text-[#888] text-[12px] font-medium max-[900px]:hidden">By appointment only</span>
              </span>
            </div>
          </div>
        </div>

        {/* Booking strip */}
        <div className="grid grid-cols-[1fr_auto] gap-6 items-center py-7 border-t border-b border-[#1f1f1f] max-[900px]:grid-cols-1 max-[900px]:gap-2 max-[900px]:py-3">
          <div className="flex items-center gap-6 flex-wrap max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-1.5">
            <span className="inline-flex items-center gap-2.5 text-[13px] max-[900px]:text-[11px] font-semibold text-white tracking-[-0.005em]">
              <GreenPulseDot />
              Now booking Summer 2026
            </span>
            <span className="text-[11px] max-[900px]:text-[9px] font-semibold tracking-[0.08em] uppercase text-[#888]">
              <strong className="text-white">Opticle PPF</strong> ·{' '}
              <strong className="text-white">DetailWise Academy</strong> trained
            </span>
          </div>
          <Link
            href="/book"
            data-hover
            className="bg-white text-black rounded-full text-[14px] font-semibold px-[22px] py-3.5 inline-flex items-center justify-center gap-2.5 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04] max-[900px]:w-full max-[900px]:text-[12px] max-[900px]:py-2.5 max-[900px]:px-4"
          >
            Book a consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M4 10L10 4M10 4H5M10 4V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Bottom row */}
        <div className="pt-7 flex justify-between items-center gap-6 flex-wrap text-[11px] max-[900px]:text-[10px] font-medium text-[#888] tracking-[-0.005em] max-[900px]:pt-3 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-1.5">
          <div>© {year} VanityWorks LLC · All rights reserved.</div>
          <div>Site by <a href="https://haloweb.agency" target="_blank" rel="noopener">Halo Web Agency</a></div>
          <div className="flex gap-5 max-[900px]:gap-3 flex-wrap">
            <Link
              href="/privacy"
              data-hover
              className="text-[#888] no-underline transition-colors duration-200 hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              data-hover
              className="text-[#888] no-underline transition-colors duration-200 hover:text-white"
            >
              Terms
            </Link>
            <a
              href="https://halo.web"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="text-[#888] no-underline transition-colors duration-200 hover:text-white"
            >
              Site by Halo Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
