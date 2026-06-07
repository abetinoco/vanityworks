'use client'

import { useState, useEffect, useRef, useCallback, Fragment } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  ChevronDownIcon,
  ArrowRightIcon,
  ServiceIcon,
  XIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/Icons'
import { services, serviceAreas } from '@/lib/data'

const navLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const closeAll = useCallback(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [])

  // Hover-bridge for desktop mega-menu
  const handleEnter = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setServicesOpen(true)
  }, [])

  const handleLeave = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }, [])

  // Mount flag for portal (SSR safety)
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Outside-click for desktop mega-menu
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      closeAll()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeAll])

  // Body scroll lock + class tag while mobile overlay is open
  useEffect(() => {
    const priorOverflow = document.body.style.overflow
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.style.overflow = priorOverflow
      document.body.classList.remove('mobile-nav-open')
    }
    return () => {
      document.body.style.overflow = priorOverflow
      document.body.classList.remove('mobile-nav-open')
    }
  }, [menuOpen])

  const isServicesActive =
    pathname === '/services' || pathname.startsWith('/services/')

  // Transparent + white-text mode: only on homepage before scroll
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !servicesOpen

  return (
    <Fragment>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : scrolled || servicesOpen
              ? 'bg-white/95 backdrop-blur-md border-b border-[#E0E0E0] shadow-[0_1px_3px_rgba(10,10,10,0.04)]'
              : 'bg-white/90 backdrop-blur-sm'
        }`}
        onMouseLeave={handleLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo */}
            <Link
              href="/"
              data-hover
              className="flex items-center group"
              aria-label="VanityWorks Detailing — Home"
              onClick={closeAll}
            >
              <Image
                src="/logo.png"
                alt="VanityWorks Detailing"
                width={1536}
                height={1024}
                priority
                className={`block h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 ${
                  transparent ? 'invert brightness-105' : ''
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              <div onMouseEnter={handleEnter}>
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                    transparent
                      ? isServicesActive ? 'text-white' : 'text-white/70 hover:text-white'
                      : isServicesActive ? 'text-[#0A0A0A]' : 'text-[#888] hover:text-[#0A0A0A]'
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onFocus={handleEnter}
                >
                  Services
                  <ChevronDownIcon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Link>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={handleLeave}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                    transparent
                      ? pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
                      : pathname === link.href ? 'text-[#0A0A0A]' : 'text-[#888] hover:text-[#0A0A0A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4" onMouseEnter={handleLeave}>
              <Link
                href="tel:+12245724787"
                className={`text-xs tracking-wider transition-colors ${
                  transparent ? 'text-white/65 hover:text-white' : 'text-[#888] hover:text-[#0A0A0A]'
                }`}
              >
                (224) 572-4787
              </Link>
              <Link
                href="/book"
                className={`px-5 py-2 text-sm font-bold tracking-wider uppercase rounded transition-colors ${
                  transparent
                    ? 'bg-white text-[#0A0A0A] hover:bg-white/90'
                    : 'bg-[#0A0A0A] text-white hover:bg-[#1A1A1A]'
                }`}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative z-50 ml-auto flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 w-6 transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-[#0A0A0A]'}`} />
              <span className={`block h-0.5 w-6 transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-[#0A0A0A]'}`} />
              <span className={`block h-0.5 w-6 transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-[#0A0A0A]'}`} />
            </button>
          </div>
        </div>

        {/* ────────── Desktop Mega-Menu (Services) ────────── */}
        <div
          className={`absolute inset-x-0 top-full hidden lg:block bg-white border-b border-[#E0E0E0] shadow-[0_24px_48px_-12px_rgba(10,10,10,0.18)] transition-all duration-200 origin-top ${
            servicesOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          aria-hidden={!servicesOpen}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888] mb-1">
                  Detailing Services
                </p>
                <h3
                  className="text-3xl text-[#0A0A0A] leading-none"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  Built for Your Build.
                </h3>
              </div>
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#0A0A0A] hover:text-[#888] transition-colors flex-shrink-0"
              >
                View All Services
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service) => {
                const href = `/services/${service.slug}`
                const isActive = pathname === href
                return (
                  <Link
                    key={service.slug}
                    href={href}
                    onClick={() => setServicesOpen(false)}
                    className={`group flex items-start gap-4 rounded-xl border p-4 transition-all ${
                      isActive
                        ? 'border-[#0A0A0A] bg-[#F5F5F5]'
                        : 'border-transparent hover:border-[#0A0A0A] hover:bg-[#F5F5F5] hover:shadow-[0_1px_3px_rgba(10,10,10,0.04)]'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white'
                          : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:border-[#0A0A0A] group-hover:text-white'
                      }`}
                    >
                      <ServiceIcon slug={service.slug} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-base text-[#0A0A0A] leading-none mb-1.5"
                        style={{
                          fontFamily: 'Bebas Neue, sans-serif',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {service.name}
                      </p>
                      <p className="text-[11px] text-[#666] leading-snug line-clamp-2">
                        {service.tagline}
                      </p>
                      <p className="mt-2 text-[10px] font-bold tracking-widest uppercase text-[#888]">
                        From {service.startingPrice}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="mt-7 pt-6 border-t border-[#E0E0E0] flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-[#666]">
                <span className="text-[#0A0A0A] font-semibold">Not sure which package?</span> We&apos;ll help you pick after a free walkthrough.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="/specialties"
                  onClick={() => setServicesOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#0A0A0A] hover:text-[#888] transition-colors"
                >
                  JDM &amp; Exotic Specialty
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[#E0E0E0]">·</span>
                <Link
                  href="/book"
                  onClick={() => setServicesOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
                >
                  Book a Consultation
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ────────── Mobile Overlay — portal-rendered, Highview-pattern ────────── */}
      {mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            aria-hidden={!menuOpen}
            className={`fixed inset-0 z-[200] lg:hidden flex max-h-[100dvh] flex-col overflow-hidden bg-[#0A0A0A] text-white transition-opacity duration-200 ${
              menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Top bar */}
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/[0.08] px-5 py-[18px]">
              <Link
                href="/"
                onClick={closeAll}
                aria-label="VanityWorks Detailing — Home"
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="VanityWorks Detailing"
                  width={1536}
                  height={1024}
                  className="h-10 w-auto invert brightness-105"
                />
              </Link>
              <button
                type="button"
                onClick={closeAll}
                aria-label="Close menu"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white transition hover:bg-white/[0.14]"
              >
                <XIcon className="h-[18px] w-[18px]" strokeWidth={2} />
              </button>
            </div>

            {/* Body — two-pane on min-[540px]+ */}
            <div className="grid min-h-0 flex-1 grid-cols-1 divide-y divide-white/[0.07] overflow-y-auto overscroll-contain min-[540px]:grid-cols-2 min-[540px]:divide-x min-[540px]:divide-y-0">
              {/* Primary nav */}
              <nav className="flex flex-col px-6 pb-6 pt-6" aria-label="Primary">
                <p className="mb-6 text-[12px] italic leading-snug text-white/30 max-w-[18rem]">
                  Mobile PPF, ceramic & paint correction — we come to your driveway.
                </p>

                <MobileNavLink href="/" label="Home" active={pathname === '/'} onTap={closeAll} />

                {/* Services accordion */}
                <div className="border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className={`group flex w-full items-center justify-between gap-2 py-[11px] text-left transition-[padding] hover:pl-1 ${
                      isServicesActive ? 'text-white' : 'text-white/85'
                    }`}
                  >
                    <span
                      className="leading-none tracking-wider"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        letterSpacing: '0.04em',
                        fontSize: 'clamp(24px,7vw,30px)',
                      }}
                    >
                      Services
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-white/35 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-l border-white/[0.18] pl-3 pb-3 flex flex-col gap-0.5">
                      <Link
                        href="/services"
                        onClick={closeAll}
                        className="inline-flex items-center gap-1.5 py-2.5 text-[11px] font-bold tracking-[0.16em] uppercase text-white/55 hover:text-white transition-colors"
                      >
                        All Services
                        <ArrowRightIcon className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                      {services.map((service) => {
                        const href = `/services/${service.slug}`
                        const active = pathname === href
                        return (
                          <Link
                            key={service.slug}
                            href={href}
                            onClick={closeAll}
                            className={`flex items-center gap-3 py-2 text-sm font-medium transition-colors ${
                              active ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-white/75">
                              <ServiceIcon slug={service.slug} className="w-3.5 h-3.5" />
                            </span>
                            {service.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    active={pathname === link.href}
                    onTap={closeAll}
                  />
                ))}
              </nav>

              {/* Sidebar */}
              <aside className="flex flex-col gap-8 px-6 pb-6 pt-6">
                <div>
                  <p className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
                    Service Areas
                  </p>
                  <div className="flex flex-col gap-2">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-area/${area.slug}`}
                        onClick={closeAll}
                        className="group flex items-center justify-between gap-3 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2.5 transition hover:border-white/30 hover:bg-white/[0.08]"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/[0.06] text-white/75">
                            <MapPinIcon className="w-3.5 h-3.5" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-white/90 truncate leading-tight">
                              {area.city}, {area.state}
                            </p>
                            <p className="text-[10px] text-white/40 truncate leading-tight mt-0.5">
                              {area.region}
                            </p>
                          </div>
                        </div>
                        <ArrowRightIcon className="w-3.5 h-3.5 shrink-0 text-white/35 group-hover:text-white transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35">
                    Why VanityWorks
                  </p>
                  <ul className="space-y-2 text-[12px] text-white/65 leading-snug">
                    <li className="flex items-start gap-2">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40 shrink-0" />
                      Opticle PPF · DetailWise Academy trained
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40 shrink-0" />
                      Fully mobile — we come to you
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40 shrink-0" />
                      JDM &amp; exotic specialists
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-white/40 shrink-0" />
                      200+ five-star Google reviews
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            {/* Footer strip */}
            <div className="flex shrink-0 flex-col gap-3 border-t border-white/[0.08] bg-[#080808] px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href="tel:+12245724787"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/75 transition hover:text-white"
                >
                  <PhoneIcon className="w-3.5 h-3.5" />
                  (224) 572-4787
                </a>
                <a
                  href="https://instagram.com/vanityworks.il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/40 transition hover:text-white"
                >
                  @vanityworks.il
                </a>
              </div>
              <Link
                href="/book"
                onClick={closeAll}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-bold uppercase tracking-widest text-[#0A0A0A] shadow-lg transition hover:bg-white/90"
              >
                Book a Consultation
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>,
          document.body,
        )}
    </Fragment>
  )
}

function MobileNavLink({
  href,
  label,
  active,
  onTap,
}: {
  href: string
  label: string
  active?: boolean
  onTap: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onTap}
      className="group flex items-center justify-between gap-3 border-b border-white/[0.06] py-[11px] transition-[padding] duration-150 hover:pl-1"
    >
      <span
        className={`leading-none tracking-wider transition-colors ${
          active ? 'text-white' : 'text-white/85 group-hover:text-white'
        }`}
        style={{
          fontFamily: 'Bebas Neue, sans-serif',
          letterSpacing: '0.04em',
          fontSize: 'clamp(24px,7vw,30px)',
        }}
      >
        {label}
      </span>
      <ArrowRightIcon className="h-[1.1em] w-[1.1em] shrink-0 text-white/25 transition-colors group-hover:text-white" />
    </Link>
  )
}
