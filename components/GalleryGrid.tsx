'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/data'
import { XIcon } from '@/components/Icons'

interface GalleryGridProps {
  items: GalleryItem[]
  showFilter?: boolean
}

const filters = ['All', 'Paint Protection Film', 'Ceramic Coating', 'Paint Correction', 'Window Tint', 'Full Detail', 'Interior Protection']

export default function GalleryGrid({ items, showFilter = false }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = activeFilter === 'All' ? items : items.filter((i) => i.service === activeFilter)

  return (
    <div>
      {/* Filter tabs — horizontal scroll on mobile */}
      {showFilter && (
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 min-h-[36px] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeFilter === f
                  ? 'bg-[#0A0A0A] text-white'
                  : 'border border-[#E0E0E0] bg-white text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative aspect-square rounded-lg overflow-hidden bg-[#F5F5F5] border border-[#E0E0E0] hover:border-[#0A0A0A] transition-all"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <p className="text-white text-xs font-semibold">{item.title}</p>
              <p className="text-[#888] text-[10px] uppercase tracking-wider">{item.vehicle}</p>
            </div>
            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[8px] text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity">
              {idx + 1}
            </div>
          </button>
        ))}

        {/* Instagram placeholder tiles */}
        {showFilter && (
          <>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#FAFAFA] border border-[#E0E0E0] border-dashed flex flex-col items-center justify-center gap-2">
              <span className="text-2xl text-[#B5B5B5]">·</span>
              <span className="text-[#888] text-xs text-center px-3">Follow @vanityworks on IG for more</span>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-[#FAFAFA] border border-[#E0E0E0] border-dashed flex flex-col items-center justify-center gap-2">
              <span className="text-2xl text-[#B5B5B5]">·</span>
              <span className="text-[#888] text-xs text-center px-3">New work posted weekly</span>
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-cover" />
            </div>
            <div className="bg-white px-5 py-4 flex items-center justify-between border-t border-[#E0E0E0]">
              <div>
                <h3
                  className="text-[#0A0A0A] text-xl"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
                >
                  {lightbox.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[#888] text-xs uppercase tracking-wider">{lightbox.service}</span>
                  <span className="text-[#888] text-xs">{lightbox.vehicle}</span>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
