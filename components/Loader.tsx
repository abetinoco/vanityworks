'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

/**
 * Brand splash loader for initial page load.
 *
 * Three acts:
 *  1. Spray — a spray bottle slides in from the left and fires droplets at the logo.
 *  2. Wipe — a rag sweeps across the logo; a clip-path reveals the clean wordmark in its wake.
 *  3. Shine — once revealed, a diagonal specular highlight sweeps across the clean logo.
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

    // Visible window covers all 3 acts; fade-out then unmount.
    const visibleDuration = prefersReduced ? 500 : 2700
    const totalDuration = prefersReduced ? 800 : 3200

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
          {/* Spray bottle — slides in from off-screen left, fires, exits */}
          <svg
            className="loader-spray"
            viewBox="0 0 60 90"
            fill="none"
            aria-hidden
          >
            {/* Bottle body */}
            <rect x="14" y="34" width="32" height="52" rx="3" fill="#0a0a0a" stroke="#fff" strokeWidth="1.2" />
            {/* Liquid level */}
            <rect x="16.5" y="50" width="27" height="33.5" rx="2" fill="rgba(255,255,255,0.10)" />
            {/* Label */}
            <rect x="20" y="56" width="20" height="18" rx="1.5" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
            <text x="30" y="68" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.5" fill="rgba(255,255,255,0.65)">
              VW
            </text>
            {/* Cap / shoulder */}
            <rect x="17" y="26" width="26" height="10" fill="#1a1a1a" stroke="#fff" strokeWidth="1.2" />
            {/* Trigger guard */}
            <path d="M9 36 Q9 30 14 30 L17 30 L17 38 L14 38 Q9 38 9 42 Z" fill="#1a1a1a" stroke="#fff" strokeWidth="1.2" />
            {/* Nozzle extending right */}
            <path d="M43 28 L56 24 L56 34 L43 34 Z" fill="#1a1a1a" stroke="#fff" strokeWidth="1.2" />
            <circle cx="55" cy="29" r="1.2" fill="#000" />
          </svg>

          {/* Droplets — burst from nozzle position toward the logo */}
          <svg
            className="loader-droplets"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            aria-hidden
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <circle
                key={i}
                className={`loader-droplet loader-droplet-${i + 1}`}
                cx="0"
                cy="30"
                r="1.8"
                fill="#fff"
              />
            ))}
          </svg>

          <div className="loader-logo-wrap">
            <Image
              src="/logo.png"
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
