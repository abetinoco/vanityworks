import type { Metadata } from 'next'

// The portfolio page itself is a client component (lightbox state), so its
// metadata lives here in a server layout.
export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Real VanityWorks work — paint protection film, ceramic coating and paint correction on JDM and exotic cars across Chicagoland.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'VanityWorks Portfolio — Real Client Cars',
    description:
      'PPF, ceramic coating, and paint correction on JDM and exotic builds across Chicagoland. Real before-and-after work.',
    url: '/portfolio',
    // A page-level openGraph replaces the root layout's wholesale in Next, so
    // the shared images have to be repeated here or og:image goes missing.
    images: [{ url: '/og-image.webp', width: 1734, height: 907, alt: 'VanityWorks Detailing — Your car, perfected.' }],
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
