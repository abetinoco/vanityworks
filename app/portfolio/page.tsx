'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { galleryItems } from '@/lib/data'

const makes = ['All', 'Nissan', 'BMW', 'Toyota', 'Porsche', 'McLaren', 'Subaru', 'Honda', 'Mitsubishi']

const serviceFilters = ['All Services', 'Paint Protection Film', 'Ceramic Coating', 'Paint Correction', 'Interior & Exterior Detail']

type GalleryItem = typeof galleryItems[number]

function PortfolioCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-[#F5F5F5] border border-[#E0E0E0] hover:border-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-50 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full bg-white/95 text-[#0A0A0A] border border-white/40">
            {item.make}
          </span>
        </div>
        <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
        <p className="text-white/70 text-xs mt-0.5">{item.service}</p>
      </div>
    </button>
  )
}

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#E0E0E0] bg-white"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
        <div className="bg-white px-6 py-5 flex items-center justify-between border-t border-[#E0E0E0]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-full bg-[#0A0A0A] text-white">
                {item.make}
              </span>
              <span className="text-[#888] text-xs uppercase tracking-wider">{item.service}</span>
            </div>
            <h3 className="text-[#0A0A0A] text-xl" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}>
              {item.title}
            </h3>
            <p className="text-[#888] text-xs mt-0.5">{item.vehicle}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="px-4 py-2 bg-[#0A0A0A] text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
              onClick={onClose}
            >
              Book This Service
            </Link>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [activeMake, setActiveMake] = useState('All')
  const [activeService, setActiveService] = useState('All Services')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = galleryItems.filter(item => {
    const makeMatch = activeMake === 'All' || item.make === activeMake
    const serviceMatch = activeService === 'All Services' || item.service === activeService
    return makeMatch && serviceMatch
  })

  return (
    <div className="min-h-screen pt-20 pb-32 bg-white">
      {/* Hero band */}
      <div className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E0E0E0]">
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M0 400 Q480 240 960 220 Q1200 210 1440 360" stroke="#0A0A0A" strokeWidth="1" />
          <path d="M0 500 Q480 360 960 340 Q1200 325 1440 460" stroke="#0A0A0A" strokeWidth="0.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E0E0E0] bg-white text-[#0A0A0A] text-[10px] font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] animate-pulse" />
                Real Work · Real Results
              </div>
              <h1
                className="text-6xl sm:text-7xl md:text-8xl text-[#0A0A0A] leading-none mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                Portfolio
              </h1>
              <p className="text-[#666] text-base max-w-lg leading-relaxed">
                Every car in this portfolio was serviced by VanityWorks. Browse by make or service
                to find vehicles like yours — and see what we can do.
              </p>
            </div>

            {/* IG badge */}
            <a
              href="https://instagram.com/vanityworks.il"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3.5 bg-white border border-[#E0E0E0] rounded-xl hover:border-[#0A0A0A] transition-colors group flex-shrink-0 shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
            >
              <div className="w-9 h-9 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                IG
              </div>
              <div>
                <div className="text-[#0A0A0A] text-sm font-semibold group-hover:text-[#888] transition-colors">@vanityworks.il</div>
                <div className="text-[#888] text-xs">New work posted weekly</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E0E0E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
          {/* Make filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-[#888] text-[10px] tracking-widest uppercase flex-shrink-0 mr-1">Make</span>
            {makes.map(make => (
              <button
                key={make}
                onClick={() => setActiveMake(make)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                  activeMake === make
                    ? 'bg-[#0A0A0A] text-white'
                    : 'border border-[#E0E0E0] bg-white text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                {make}
              </button>
            ))}
          </div>

          {/* Service filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-[#888] text-[10px] tracking-widest uppercase flex-shrink-0 mr-1">Service</span>
            {serviceFilters.map(s => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeService === s
                    ? 'bg-[#F5F5F5] border border-[#0A0A0A] text-[#0A0A0A]'
                    : 'border border-[#E0E0E0] bg-white text-[#888] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#888] text-lg mb-2">No results for this filter combo.</p>
            <button
              onClick={() => { setActiveMake('All'); setActiveService('All Services') }}
              className="text-[#0A0A0A] text-sm font-semibold tracking-wider uppercase hover:text-[#888]"
            >
              Clear Filters →
            </button>
          </div>
        ) : (
          <>
            <p className="text-[#888] text-xs tracking-widest uppercase mb-6">
              {filtered.length} {filtered.length === 1 ? 'Result' : 'Results'}
              {activeMake !== 'All' && ` · ${activeMake}`}
              {activeService !== 'All Services' && ` · ${activeService}`}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map(item => (
                <PortfolioCard key={item.id} item={item} onClick={() => setLightbox(item)} />
              ))}
              {/* IG placeholder cells */}
              <div className="relative aspect-square rounded-xl bg-[#FAFAFA] border border-[#E0E0E0] border-dashed flex flex-col items-center justify-center gap-2 p-4">
                <span className="text-3xl text-[#B5B5B5]">·</span>
                <span className="text-[#888] text-xs text-center leading-snug">
                  Follow <span className="text-[#888]">@vanityworks.il</span> for the latest
                </span>
              </div>
              <div className="relative aspect-square rounded-xl bg-[#FAFAFA] border border-[#E0E0E0] border-dashed flex flex-col items-center justify-center gap-2 p-4">
                <span className="text-3xl text-[#B5B5B5]">·</span>
                <span className="text-[#888] text-xs text-center leading-snug">
                  New work added after every appointment
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] border border-[#0A0A0A] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl text-[#0A0A0A] mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}>
              Want Your Car In Here?
            </h3>
            <p className="text-[#666] text-sm max-w-md">
              Book a service and we document every stage. Your build could be the next one in the portfolio.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/book"
              className="px-7 py-3.5 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+12245724787"
              className="px-7 py-3.5 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors text-center"
            >
              (224) 572-4787
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  )
}
