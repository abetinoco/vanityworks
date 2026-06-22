'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

/**
 * Route-level error boundary (Next.js App Router convention).
 * Shows a friendly recovery screen instead of a blank page when a
 * route segment throws during render.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div
      role="alert"
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Something went wrong</h1>
      <p style={{ margin: 0, opacity: 0.7 }}>
        Please try again. If the problem persists, contact us.
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: '0.6rem 1.2rem',
          cursor: 'pointer',
          borderRadius: 6,
          border: '1px solid currentColor',
          background: 'transparent',
        }}
      >
        Try again
      </button>
    </div>
  )
}
