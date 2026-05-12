import { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryItems } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse VanityWorks gallery — real work from our shop featuring PPF, ceramic coating, and paint correction on JDM and exotic vehicles.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-[#E0E0E0]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              From The Shop
            </p>
            <h1
              className="text-6xl sm:text-7xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Gallery
            </h1>
            <p className="text-[#666] mt-2 text-sm max-w-md">
              Real cars. Real results. Browse our recent work and see what VanityWorks can do for
              your vehicle.
            </p>
          </div>

          {/* IG CTA */}
          <div className="flex items-center gap-3 px-5 py-3 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold">
              IG
            </div>
            <div>
              <div className="text-[#0A0A0A] text-sm font-semibold">@vanityworks</div>
              <div className="text-[#888] text-xs">Follow on Instagram</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GalleryGrid items={galleryItems} showFilter />
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-[#F5F5F5] border border-[#0A0A0A] rounded-xl p-8 text-center">
          <h3
            className="text-4xl text-[#0A0A0A] mb-3"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Want Your Car In The Gallery?
          </h3>
          <p className="text-[#666] text-sm mb-6 max-w-md mx-auto">
            Book a service and we&apos;ll document the transformation with professional before/after photography.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-3.5 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
