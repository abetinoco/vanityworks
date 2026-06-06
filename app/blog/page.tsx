import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Blog · Detailing Insights & Build Guides',
  description:
    'Articles, build guides, and detailing breakdowns from the VanityWorks shop floor — PPF, ceramic coating, paint correction, and JDM care.',
}

interface Article {
  slug: string
  title: string
  excerpt: string
  cover: string
  tag: string
  readTime: string
  date: string
}

const articles: Article[] = [
  {
    slug: 'why-ceramic-coating-is-worth-it',
    title: 'Why Ceramic Coating Is Worth It',
    excerpt:
      'Wax lasts weeks. Sealants last months. Ceramic coating lasts years — and the gloss, hydrophobics, and chemical resistance change how you maintain a car forever.',
    cover:
      'https://images.unsplash.com/photo-1605515298946-d062b6ce0e87?w=1200&q=80',
    tag: 'Ceramic Coating',
    readTime: '6 min read',
    date: 'May 2026',
  },
  {
    slug: 'ppf-vs-vinyl-wrap',
    title: 'PPF vs Vinyl Wrap: Which One Do You Actually Need?',
    excerpt:
      "They look similar in photos, but they protect, age, and cost completely differently. Here's how to choose between paint protection film and vinyl for your build.",
    cover:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    tag: 'PPF',
    readTime: '8 min read',
    date: 'April 2026',
  },
  {
    slug: 'maintain-your-jdm-build',
    title: 'How to Maintain Your JDM Build Year-Round',
    excerpt:
      'Salt, brake dust, summer sap, winter slush. A simple maintenance rhythm keeps your GT-R, Supra, or STI looking like the day it left our shop.',
    cover:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    tag: 'JDM Care',
    readTime: '5 min read',
    date: 'April 2026',
  },
  {
    slug: 'before-and-after-gtr-full-detail',
    title: 'Before & After: GT-R R35 Full Detail',
    excerpt:
      "A 2017 R35 came in with eight years of swirl marks, contamination, and a tired interior. Here's every step we took — and the photos that prove it worked.",
    cover:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    tag: 'Case Study',
    readTime: '10 min read',
    date: 'March 2026',
  },
  {
    slug: 'what-opticle-ppf-actually-does',
    title: 'What OPTICLE PPF Actually Does',
    excerpt:
      'Self-healing top coats, optical clarity, hydrophobic edges — we break down what makes OPTICLE different from older PPF films and why we install it.',
    cover:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
    tag: 'PPF',
    readTime: '7 min read',
    date: 'March 2026',
  },
  {
    slug: 'paint-correction-stages-explained',
    title: 'Paint Correction Stages, Explained',
    excerpt:
      'One-step? Two-stage? Show-car finish? The difference between a quick polish and a full multi-stage correction is bigger than most people realize.',
    cover:
      'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&q=80',
    tag: 'Paint Correction',
    readTime: '6 min read',
    date: 'February 2026',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-24 bg-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          From The Shop
        </p>
        <h1
          className="text-6xl sm:text-7xl md:text-8xl text-[#0A0A0A]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          The Blog
        </h1>
        <p className="text-[#1A1A1A] text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
          Build guides, detailing breakdowns, and case studies from cars we&apos;ve actually
          worked on — written by the people who did the work.
        </p>
      </section>

      {/* Articles grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white border border-[#E0E0E0] rounded-lg overflow-hidden hover:border-[#0A0A0A] transition-colors shadow-[0_1px_3px_rgba(10,10,10,0.04)] hover:shadow-[0_8px_24px_rgba(10,10,10,0.08)]"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.cover}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-[#E0E0E0]">
                    <span className="text-[#0A0A0A] text-[10px] font-semibold tracking-wider uppercase">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-[#888] text-xs mb-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#CCCCCC]" />
                    <span>{article.readTime}</span>
                  </div>
                  <h2
                    className="text-[#0A0A0A] text-2xl sm:text-3xl mb-3 group-hover:text-[#888] transition-colors leading-tight"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-[#666] text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase">
                    Read Article
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 md:mt-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Got A Question About Your Build?
        </h2>
        <p className="text-[#666] mb-8 text-sm leading-relaxed">
          We answer detailing questions for free. Slide into our DMs or book a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book"
            className="min-h-[44px] flex items-center justify-center px-8 py-3 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
          >
            Book a Consultation
          </Link>
          <a
            href="https://instagram.com/vanityworks.il"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center justify-center px-8 py-3 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
          >
            DM @vanityworks.il
          </a>
        </div>
      </section>
    </div>
  )
}
