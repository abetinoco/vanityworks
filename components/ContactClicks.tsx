'use client'

import { useEffect } from 'react'

// Reports phone and email clicks to GA4.
export default function ContactClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="mailto:"]')
      if (!link) return
      const name = link.getAttribute('href')!.startsWith('tel:') ? 'click_to_call' : 'email_click'
      ;(window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.('event', name, { page: window.location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
