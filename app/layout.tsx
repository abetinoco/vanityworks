import type { Metadata } from 'next'
import { Inter_Tight, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const SITE_URL = 'https://www.vanityworksdetailing.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VanityWorks Detailing | PPF & Ceramic Coating Chicagoland',
    template: '%s | VanityWorks Detailing',
  },
  description:
    'Mobile PPF, ceramic coating, paint correction & full detail across Chicagoland. Opticle & DetailWise certified. JDM & exotic specialists — we come to you.',
  keywords: [
    'paint protection film Chicago',
    'ceramic coating Chicagoland',
    'paint correction Chicago',
    'mobile auto detailing',
    'PPF installer near me',
    'Opticle PPF Chicago',
    'DetailWise Academy trained',
    'full detail Chicagoland',
    'mobile car detailing Lake County',
    'JDM detailing',
    'exotic car detailing Chicago',
    'GT-R PPF',
    'Porsche ceramic coating',
  ],
  openGraph: {
    type: 'website',
    siteName: 'VanityWorks Detailing',
    locale: 'en_US',
    url: SITE_URL,
    images: [
      {
        url: '/og-image.webp',
        width: 1734,
        height: 907,
        alt: 'VanityWorks Detailing — Your car, perfected.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.webp'],
  },
  // Icons are provided by the file-based convention: app/favicon.ico,
  // app/icon.png, and app/apple-icon.png (a real .ico + PNGs, so every
  // surface has a supported format — WebP-only favicons broke on some).
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailing',
  name: 'VanityWorks Detailing',
  image: `${SITE_URL}/logo.webp`,
  url: SITE_URL,
  telephone: '+1-224-572-4787',
  priceRange: '$$-$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.8781,
    longitude: -87.6298,
  },
  areaServed: [
    { '@type': 'City', name: 'Chicago' },
    { '@type': 'City', name: 'Evanston' },
    { '@type': 'City', name: 'Glencoe' },
    { '@type': 'AdministrativeArea', name: 'Lake County, IL' },
    { '@type': 'AdministrativeArea', name: 'North Shore' },
    { '@type': 'AdministrativeArea', name: 'Chicagoland' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://instagram.com/vanityworks.il',
    'https://tiktok.com/@vanityworks.il',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Detailing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Protection Film' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Coating' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint Correction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Detail' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.97',
    reviewCount: '200',
    bestRating: '5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${bebas.variable}`}>
      <body className="bg-white text-[#1A1A1A] font-sans antialiased">
        <Loader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script id="clarity-analytics" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xscs2uv8rs");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  )
}
