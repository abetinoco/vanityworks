'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  allPortfolioPhotos,
  type PortfolioEntry,
  type FlatPhoto,
} from '@/lib/portfolio'
import { XIcon } from '@/components/Icons'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

function PhotoTile({
  photo,
  onClick,
}: {
  photo: FlatPhoto
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-[#F5F5F5] border border-[#E0E0E0] hover:border-[#0A0A0A] transition-all duration-300 hover:-translate-y-0.5 shadow-[0_1px_3px_rgba(10,10,10,0.04)] text-left"
    >
      <Image
        src={photo.src}
        alt={photo.vehicle}
        fill
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {photo.label && (
        <div className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full bg-[#0A0A0A] text-white">
          {photo.label}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm font-semibold leading-tight">{photo.vehicle}</p>
      </div>
    </button>
  )
}

function Lightbox({
  entry,
  initialIdx,
  onClose,
}: {
  entry: PortfolioEntry
  initialIdx: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(initialIdx)

  useEffect(() => {
    setIdx(initialIdx)
  }, [initialIdx, entry])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (entry.type === 'showcase') {
        if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % entry.photos.length)
        if (e.key === 'ArrowLeft')
          setIdx((i) => (i - 1 + entry.photos.length) % entry.photos.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [entry, onClose])

  const beforeSrc =
    entry.photos.find((p) => p.label === 'Before')?.src ?? entry.photos[0].src
  const afterSrc =
    entry.photos.find((p) => p.label === 'After')?.src ??
    entry.photos[entry.photos.length - 1].src

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full my-auto" onClick={(e) => e.stopPropagation()}>
        {entry.type === 'before-after' ? (
          <BeforeAfterSlider
            beforeSrc={beforeSrc}
            afterSrc={afterSrc}
            title={entry.vehicle}
            vehicle={entry.service}
          />
        ) : (
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E0E0E0] bg-white">
            <Image
              src={entry.photos[idx].src}
              alt={entry.vehicle}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {entry.photos.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIdx((i) => (i - 1 + entry.photos.length) % entry.photos.length)
                  }
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center transition-colors text-lg"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % entry.photos.length)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#0A0A0A] flex items-center justify-center transition-colors text-lg"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/35 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {entry.photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/55 text-white text-[10px] font-semibold tracking-wider uppercase rounded-full backdrop-blur-sm">
                  {idx + 1} / {entry.photos.length}
                </div>
              </>
            )}
          </div>
        )}

        <div className="mt-4 bg-white border border-[#E0E0E0] rounded-2xl px-6 py-5 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[#888] text-xs uppercase tracking-wider mb-1">
              {entry.service}
            </p>
            <h3
              className="text-[#0A0A0A] text-2xl leading-none"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              {entry.vehicle}
            </h3>
            {entry.caption && (
              <p className="text-[#666] text-sm mt-2 leading-relaxed max-w-2xl">
                {entry.caption}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/book"
              className="hidden sm:inline-flex px-4 py-2 bg-[#0A0A0A] text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
              onClick={onClose}
            >
              Book This Service
            </Link>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState<{
    entry: PortfolioEntry
    idx: number
  } | null>(null)

  useEffect(() => {
    if (lightbox) {
      const prior = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prior
      }
    }
  }, [lightbox])

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-32 bg-white">
      {/* Hero band */}
      <div className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#E0E0E0]">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
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
                className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] leading-none mb-4"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                Portfolio
              </h1>
              <p className="text-[#666] text-base max-w-lg leading-relaxed">
                Every photo on this page is real work from the shop. Tap any tile to view the full
                set — multi-angle showcases open as a carousel, before/after jobs open as a drag slider.
              </p>
            </div>

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
                <div className="text-[#0A0A0A] text-sm font-semibold group-hover:text-[#888] transition-colors">
                  @vanityworks.il
                </div>
                <div className="text-[#888] text-xs">New work posted weekly</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Grid — all 44 photos, no filter UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {allPortfolioPhotos.map((photo) => (
            <PhotoTile
              key={photo.id}
              photo={photo}
              onClick={() => setLightbox({ entry: photo.entry, idx: photo.indexInEntry })}
            />
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F5F5] border border-[#0A0A0A] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-3xl text-[#0A0A0A] mb-2"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
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

      {lightbox && (
        <Lightbox
          entry={lightbox.entry}
          initialIdx={lightbox.idx}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
