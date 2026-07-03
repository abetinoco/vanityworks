import type { Metadata } from 'next'

// The portfolio page itself is a client component (lightbox state), so its
// metadata lives here in a server layout.
export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'See real VanityWorks work — paint protection film, ceramic coating, and paint correction on JDM, exotic, and enthusiast cars across Chicagoland. Before-and-after details from actual client vehicles.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'VanityWorks Portfolio — Real Client Cars',
    description:
      'PPF, ceramic coating, and paint correction on JDM and exotic builds across Chicagoland. Real before-and-after work.',
    url: '/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
