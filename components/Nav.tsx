'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const serviceLinks = [
  { href: '/services/paint-protection-film', label: 'Paint Protection Film' },
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/interior-exterior', label: 'Interior & Exterior Detail' },
  { href: '/services/window-tint', label: 'Window Tint' },
  { href: '/services/interior-protection', label: 'Interior Protection' },
]

const navLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isServicesActive =
    pathname === '/services' || pathname.startsWith('/services/')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E0E0E0] shadow-[0_1px_3px_rgba(10,10,10,0.04)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  isServicesActive ? 'text-[#0A0A0A]' : 'text-[#888] hover:text-[#0A0A0A]'
                }`}
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
              >
                Services
                <span className={`text-[10px] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_8px_24px_rgba(10,10,10,0.10)] overflow-hidden transition-all duration-200 origin-top ${
                  servicesOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="block px-4 py-3 text-xs font-bold tracking-widest uppercase text-[#888] hover:text-[#0A0A0A] hover:bg-[#F5F5F5] border-b border-[#F0F0F0] transition-colors"
                >
                  All Services
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-colors hover:bg-[#F5F5F5] ${
                      pathname === link.href ? 'text-[#0A0A0A]' : 'text-[#666] hover:text-[#0A0A0A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#0A0A0A]'
                    : 'text-[#888] hover:text-[#0A0A0A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+12245724787"
              className="text-xs text-[#888] hover:text-[#0A0A0A] tracking-wider transition-colors"
            >
              (224) 572-4787
            </Link>
            <Link
              href="/book"
              className="px-5 py-2 text-sm font-bold tracking-wider uppercase rounded bg-[#0A0A0A] text-white hover:bg-[#1A1A1A] transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#0A0A0A] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0A0A0A] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#0A0A0A] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-[#E0E0E0] bg-white">
          {/* Mobile Services accordion */}
          <button
            className={`text-base font-semibold tracking-wider uppercase min-h-[44px] flex items-center justify-between transition-colors duration-200 ${
              isServicesActive ? 'text-[#0A0A0A]' : 'text-[#1A1A1A]'
            }`}
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services
            <span className={`text-xs text-[#888] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pl-4 flex flex-col gap-1 pb-2">
              <Link
                href="/services"
                onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                className="text-xs font-bold tracking-widest uppercase text-[#888] min-h-[36px] flex items-center hover:text-[#0A0A0A]"
              >
                All Services
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                  className={`text-sm font-semibold tracking-wide uppercase min-h-[36px] flex items-center transition-colors ${
                    pathname === link.href ? 'text-[#0A0A0A]' : 'text-[#666] hover:text-[#0A0A0A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-semibold tracking-wider uppercase min-h-[44px] flex items-center transition-colors duration-200 ${
                pathname === link.href ? 'text-[#0A0A0A]' : 'text-[#1A1A1A] hover:text-[#0A0A0A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a
              href="tel:+12245724787"
              onClick={() => setMenuOpen(false)}
              className="min-h-[44px] flex items-center justify-center border border-[#E0E0E0] text-[#1A1A1A] font-semibold text-sm tracking-wider uppercase rounded-lg text-center hover:border-[#0A0A0A] transition-colors"
            >
              (224) 572-4787
            </a>
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="min-h-[44px] flex items-center justify-center text-sm font-bold tracking-wider uppercase rounded-lg bg-[#0A0A0A] text-white text-center hover:bg-[#1A1A1A] transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
