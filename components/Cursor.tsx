'use client'

import { useEffect, useRef } from 'react'

/**
 * Custom mouse-follower cursor used inside the home Hero.
 *
 * Reacts to viewport changes (e.g. dev-tools mobile simulation toggled on/off
 * after mount) by subscribing to the media query so the body's `cursor-none`
 * class is added/removed correctly. Without this, a desktop → mobile resize
 * leaves the body with `cursor-none` and the CSS media query hides the custom
 * dot — net result: zero cursor visible.
 */
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const cursor = cursorRef.current
    if (!cursor) return

    const mq = window.matchMedia('(max-width: 900px)')

    let mouseX = 0
    let mouseY = 0
    let curX = 0
    let curY = 0
    let rafId = 0
    let active = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return
      if (target.closest('[data-tile]')) cursor.classList.add('view')
      else if (target.closest('[data-hover]')) cursor.classList.add('expand')
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return
      if (target.closest('[data-tile]')) cursor.classList.remove('view')
      else if (target.closest('[data-hover]')) cursor.classList.remove('expand')
    }

    const tick = () => {
      curX += (mouseX - curX) * 0.18
      curY += (mouseY - curY) * 0.18
      cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }

    const activate = () => {
      if (active) return
      active = true
      document.body.classList.add('cursor-none')
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseover', onOver)
      window.addEventListener('mouseout', onOut)
      tick()
    }

    const deactivate = () => {
      if (!active) return
      active = false
      document.body.classList.remove('cursor-none')
      cursor.classList.remove('expand')
      cursor.classList.remove('view')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
    }

    const apply = () => {
      if (mq.matches) deactivate()
      else activate()
    }

    apply()
    mq.addEventListener('change', apply)

    return () => {
      mq.removeEventListener('change', apply)
      deactivate()
    }
  }, [])

  return <div ref={cursorRef} className="cursor" aria-hidden />
}
