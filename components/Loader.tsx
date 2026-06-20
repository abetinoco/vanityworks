'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Brand splash loader for initial page load.
 *
 * Two acts:
 *  1. Wipe — a rag sweeps across the logo; a clip-path reveals the clean wordmark in its wake.
 *  2. Shine — once revealed, a soft specular highlight sweeps across the clean logo.
 *
 * Mounts once at root layout — does NOT replay on client-side route changes.
 * F5 / fresh visits replay it. Reduced-motion users get a static logo, no animation.
 */
export default function Loader() {
  const [done, setDone] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Visible window covers both acts; fade-out then unmount.
    const visibleDuration = prefersReduced ? 500 : 1800
    const totalDuration = prefersReduced ? 800 : 2300

    const dismissTimer = setTimeout(() => setDone(true), visibleDuration)
    const removeTimer = setTimeout(() => setRemoved(true), totalDuration)
    return () => {
      clearTimeout(dismissTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (removed) return null

  return (
    <div
      role="status"
      aria-label="Loading VanityWorks Detailing"
      aria-hidden={done}
      className={`loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="loader-stage">
        <div className="loader-frame">
          <div className="loader-logo-wrap">
            <Image
              src="/logo.webp"
              alt=""
              width={1536}
              height={1024}
              priority
              className="loader-logo"
            />
            {/* Rag — sweeps across, clip-path on the logo reveals behind it */}
            <div className="loader-rag" aria-hidden />
            {/* Specular shine — diagonal sweep after reveal */}
            <div className="loader-shine" aria-hidden />
          </div>
        </div>

        <p className="loader-caption">Detailing — Chicagoland</p>
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}
