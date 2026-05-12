import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'VanityWorks | PPF · Ceramic Coating · Paint Correction',
    template: '%s | VanityWorks',
  },
  description:
    'VanityWorks is a premium auto detailing studio specializing in Paint Protection Film, Ceramic Coating, Paint Correction, and JDM/exotic vehicle care.',
  keywords: [
    'paint protection film',
    'ceramic coating',
    'paint correction',
    'PPF',
    'auto detailing',
    'XPEL',
    'window tint',
    'JDM',
    'exotic car detailing',
  ],
  openGraph: {
    type: 'website',
    siteName: 'VanityWorks',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1A1A1A] font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
