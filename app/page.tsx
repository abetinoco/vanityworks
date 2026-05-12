import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import HowItWorks from '@/components/sections/HowItWorks'
import SocialFeed from '@/components/sections/SocialFeed'
import GoogleReviews from '@/components/sections/GoogleReviews'
import ServiceCard from '@/components/ServiceCard'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import CertBadge from '@/components/CertBadge'
import GalleryGrid from '@/components/GalleryGrid'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { services, certifications, testimonials, galleryItems } from '@/lib/data'
import Link from 'next/link'

const beforeAfterExamples = [
  {
    title: 'Stage 2 Paint Correction',
    vehicle: 'Nissan GT-R R35',
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
  },
  {
    title: 'Full Detail + Ceramic',
    vehicle: 'BMW M4 Competition',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
  },
]

export default function HomePage() {
  const featuredServices = services.filter((s) => s.popular)
  const galleryPreview = galleryItems.slice(0, 8)

  return (
    <>
      {/* ─── Hero ─────────────────────────────────── */}
      <Hero />

      {/* ─── Stats Bar ────────────────────────────── */}
      <StatsBar />

      {/* ─── Services Overview ────────────────────── */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Protection. Perfection. Prestige.
            </h2>
            <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              From JDM track builds to exotic daily drivers, every car that rolls through our doors
              gets treated like it belongs on a show floor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────── */}
      <HowItWorks />

      {/* ─── JDM / Exotic Specialty Strip ─────────── */}
      <section className="bg-white border-y border-[#E0E0E0] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <span className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase block mb-2">
              Specialty Focus
            </span>
            <h3
              className="text-4xl sm:text-5xl text-[#0A0A0A] mb-3"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              JDM & Exotic Specialists
            </h3>
            <p className="text-[#666] text-sm leading-relaxed max-w-lg">
              We understand that your GT-R, Supra, NSX, or Evo isn&apos;t just transportation —
              it&apos;s a build. Our team has hands-on experience with JDM fitments, factory
              coatings, and the unique panel gaps that come with exotic machinery. We handle your
              car the way you would.
            </p>
          </div>
          {/* Horizontal scroll on mobile, 3×2 grid on md+ */}
          <div className="w-full md:flex-shrink-0">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 md:grid md:grid-cols-3">
              {['GT-R', 'NSX', 'SUPRA', 'EVO', 'STI', '911'].map((car) => (
                <div
                  key={car}
                  className="flex-shrink-0 w-20 h-20 rounded-lg bg-[#F5F5F5] border border-[#E0E0E0] flex items-center justify-center"
                >
                  <span
                    className="text-[#0A0A0A] text-xs text-center leading-tight"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}
                  >
                    {car}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Before / After ───────────────────────── */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              The Difference
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              See It For Yourself
            </h2>
            <p className="text-[#666] mt-3 text-sm">
              Drag the slider. The results speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterExamples.map((ex) => (
              <BeforeAfterSlider
                key={ex.title}
                beforeSrc={ex.before}
                afterSrc={ex.after}
                title={ex.title}
                vehicle={ex.vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certifications Strip ─────────────────── */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Certified & Approved
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              Industry-Recognized Credentials
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <CertBadge key={cert.badge} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview ──────────────────────── */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Recent Work
              </p>
              <h2
                className="text-5xl sm:text-6xl text-[#0A0A0A]"
                style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
              >
                From The Shop
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:flex items-center gap-2 text-[#0A0A0A] text-sm font-semibold tracking-wider uppercase hover:text-[#888] transition-colors"
            >
              Full Gallery →
            </Link>
          </div>
          <GalleryGrid items={galleryPreview} />
          <div className="mt-6 sm:hidden text-center">
            <Link href="/gallery" className="text-[#0A0A0A] text-sm font-semibold tracking-wider uppercase">
              Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Social Feed ──────────────────────────── */}
      <SocialFeed />

      {/* ─── Testimonials ─────────────────────────── */}
      <section className="bg-[#F5F5F5] border-y border-[#E0E0E0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Client Stories
            </p>
            <h2
              className="text-5xl sm:text-6xl text-[#0A0A0A]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
            >
              They Trust Us With Their Cars
            </h2>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ─── Google Reviews ───────────────────────── */}
      <GoogleReviews />

      {/* ─── Final CTA ────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#E0E0E0]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, #F5F5F5 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className="text-5xl sm:text-7xl md:text-8xl text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Ready To
            <br />
            <span className="text-[#888]">Protect Your Build?</span>
          </h2>
          <p className="text-[#666] mb-10 max-w-md mx-auto">
            Book a free consultation and let&apos;s talk about what your car needs. No pressure —
            just expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
