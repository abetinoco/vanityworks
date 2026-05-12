'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  title?: string
  vehicle?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  vehicle,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 2), 98))
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    updateSlider(e.clientX)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return
      updateSlider(e.clientX)
    },
    [dragging, updateSlider]
  )

  const handleMouseUp = useCallback(() => setDragging(false), [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragging(true)
    updateSlider(e.touches[0].clientX)
  }

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!dragging) return
      e.preventDefault()
      updateSlider(e.touches[0].clientX)
    },
    [dragging, updateSlider]
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <div className="rounded-xl overflow-hidden border border-[#E0E0E0] bg-white shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
      {title && (
        <div className="px-4 py-3 bg-white border-b border-[#E0E0E0] flex items-center justify-between">
          <div>
            <span
              className="text-[#0A0A0A] text-lg"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              {title}
            </span>
            {vehicle && <span className="text-[#888] text-xs ml-2">{vehicle}</span>}
          </div>
          <span className="text-[#888] text-xs font-semibold tracking-wider uppercase">Paint Correction</span>
        </div>
      )}

      {/* Slider container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After image (full width, base layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterLabel}
            fill
            className="object-cover"
            draggable={false}
          />
          {/* After label */}
          <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase bg-[#0A0A0A] text-white">
            {afterLabel}
          </div>
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${(100 / sliderPos) * 100}%` }}>
            <Image
              src={beforeSrc}
              alt={beforeLabel}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          {/* Before label */}
          <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase bg-white/90 text-[#0A0A0A] border border-[#E0E0E0]">
            {beforeLabel}
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#0A0A0A] flex items-center justify-center shadow-lg">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M4 5H1M1 5L3 3M1 5L3 7" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 5H13M13 5L11 3M13 5L11 7" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
