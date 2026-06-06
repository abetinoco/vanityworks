'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

export interface GalleryPhoto {
  src: string
  caption: string
}

interface Props {
  photos: GalleryPhoto[]
  /** 0-based index of the tile that should span 2 columns. */
  wideIndex?: number
}

export default function GalleryLightbox({ photos, wideIndex = 4 }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const total = photos.length

  const close = useCallback(() => setOpenIdx(null), [])
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + total) % total)),
    [total],
  )
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % total)),
    [total],
  )

  useEffect(() => {
    if (openIdx === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [openIdx, close, prev, next])

  const open = openIdx !== null ? photos[openIdx] : null

  return (
    <>
      <div className="grid grid-cols-4 gap-px bg-line border border-ink max-[900px]:grid-cols-2">
        {photos.map((p, i) => {
          const wide = i === wideIndex
          return (
            <button
              key={p.src}
              type="button"
              data-tile
              onClick={() => setOpenIdx(i)}
              aria-label={`View ${p.caption}`}
              className={`group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#050505] cursor-pointer border-0 p-0 ${
                wide ? 'col-span-2 aspect-[8/5]' : 'aspect-[4/5]'
              }`}
            >
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes={wide ? '(max-width: 900px) 100vw, 50vw' : '(max-width: 900px) 50vw, 25vw'}
                className="object-cover transition-transform duration-[700ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.05]"
              />
              <span
                className="absolute top-3 left-3 z-[2] text-[10px] font-bold tracking-[0.1em] text-white tabular-nums"
                style={{ mixBlendMode: 'difference' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="absolute bottom-3 left-3 right-3 z-[2] text-white text-[12px] font-semibold tracking-[-0.01em] opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-left">
                {p.caption}
              </span>
            </button>
          )
        })}
      </div>

      {open && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            aria-label="Close"
            className="absolute top-5 right-5 z-[3] w-10 h-10 rounded-full border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.14] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-[3] w-12 h-12 rounded-full border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.14] transition-colors max-[600px]:w-10 max-[600px]:h-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next"
            className="absolute right-5 top-1/2 -translate-y-1/2 z-[3] w-12 h-12 rounded-full border border-white/15 bg-white/[0.06] text-white flex items-center justify-center hover:bg-white/[0.14] transition-colors max-[600px]:w-10 max-[600px]:h-10"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-auto h-[85vh] max-w-[92vw] aspect-[4/5] max-[900px]:h-auto max-[900px]:w-full max-[900px]:aspect-auto"
          >
            <Image
              src={open.src}
              alt={open.caption}
              fill
              sizes="92vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[3] text-white/70 text-[11px] font-bold tracking-[0.14em] uppercase tabular-nums">
            {String(openIdx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
        </div>
      )}
    </>
  )
}
