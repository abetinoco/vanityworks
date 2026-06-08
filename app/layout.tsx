import type { Metadata } from 'next'
import { Inter_Tight, Bebas_Neue, Allura } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
  display: 'swap',
})

const SITE_URL = 'https://vanityworks.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VanityWorks Detailing | Mobile PPF, Ceramic Coating & Paint Correction in Chicagoland',
    template: '%s | VanityWorks Detailing',
  },
  description:
    'Mobile auto detailing in Chicagoland. Opticle PPF & DetailWise Academy trained — paint protection film, ceramic coating, paint correction, and full detail, specializing in JDM and exotic vehicles. We come to you.',
  keywords: [
    'paint protection film Chicago',
    'ceramic coating Chicagoland',
    'paint correction Chicago',
    'mobile auto detailing',
    'PPF installer near me',
    'Opticle PPF Chicago',
    'DetailWise Academy trained',
    'window tint Chicagoland',
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
        url: '/og-image.png',
        width: 1734,
        height: 907,
        alt: 'VanityWorks Detailing — Your car, perfected.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailing',
  name: 'VanityWorks Detailing',
  image: `${SITE_URL}/logo.png`,
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
    { '@type': 'City', name: 'Naperville' },
    { '@type': 'City', name: 'Evanston' },
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Tint' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Protection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior & Exterior Detail' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '200',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${bebas.variable} ${allura.variable}`}>
      <body className="bg-white text-[#1A1A1A] font-sans antialiased">
        <Loader />
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  )
}
