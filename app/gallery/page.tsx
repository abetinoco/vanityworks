import { Metadata } from 'next'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'
import { allPortfolioPhotos } from '@/lib/portfolio'
import GalleryLightbox, { type GalleryPhoto } from '@/components/GalleryLightbox'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Paint corrections, ceramic coatings, PPF installs, and full details. The VanityWorks gallery — the finish speaks for itself.',
}

// 14 hand-picked photos for the editorial grid. Tile 5 (index 4) spans 2 columns.
const PICKS: GalleryPhoto[] = [
  { src: '/portfolio/mclaren-720s/01.jpg', caption: 'McLaren 720S · ceramic + PPF' },
  { src: '/portfolio/white-r34-gtr/01.jpg', caption: 'Nissan R34 GT-R · showcase detail' },
  { src: '/portfolio/red-acura-nsx/01.jpg', caption: 'Acura NSX · show build detail' },
  { src: '/portfolio/purple-r33-gtr/01.jpg', caption: 'Nissan R33 GT-R · showcase detail' },
  { src: '/portfolio/black-amg-g63/01.jpg', caption: 'Mercedes-AMG G63 · ceramic' },
  { src: '/portfolio/black-porsche-911/01.jpg', caption: 'Porsche 911 (992) · PPF' },
  { src: '/portfolio/yellow-lambo-gallardo/01.jpg', caption: 'Lamborghini Gallardo · coating' },
  { src: '/portfolio/yellow-honda-s2000/01.jpg', caption: 'Honda S2000 · interior detail' },
  { src: '/portfolio/red-rx7-fd/01.jpg', caption: 'Mazda RX-7 (FD) · show prep' },
  { src: '/portfolio/silver-supra-2jz/01.jpg', caption: 'Toyota Supra MkIV · engine bay' },
  { src: '/portfolio/white-evo/01.jpg', caption: 'Mitsubishi Evo · engine bay' },
  { src: '/portfolio/black-porsche-cayenne/01.jpg', caption: 'Porsche Cayenne · detail + interior' },
  { src: '/portfolio/red-svt-lightning-wash/after.jpg', caption: 'Ford SVT Lightning · wash + detail' },
  { src: '/portfolio/subaru-interior-detail/after.jpg', caption: 'Subaru Outback · interior detail' },
]

// Safety net: if any handpicked path isn't in the flat list, fall back to whatever's there.
const fallback = allPortfolioPhotos
  .slice(0, 14)
  .map((p) => ({ src: p.src, caption: `${p.vehicle} · ${p.service}` }))

const photos = PICKS.length === 14 ? PICKS : fallback

export default function GalleryPage() {
  return (
    <div className="bg-white pt-16 md:pt-20 lg:pt-24">
      {/* HERO */}
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Home
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">Gallery</span>
          </div>
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-16 items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-ink" />
                The work
              </div>
              <h1 className="font-sans font-extrabold text-ink leading-[0.88] tracking-[-0.05em] text-[clamp(48px,7.5vw,120px)] max-[900px]:text-[14vw]">
                <SplitLetters text="Recent work." />
              </h1>
            </div>
            <div className="flex flex-col gap-[18px]">
              <p className="text-ink font-medium leading-[1.4] tracking-[-0.015em] text-[clamp(17px,1.6vw,21px)]">
                Paint corrections, ceramic coatings, PPF installs, and full details.{' '}
                <span className="text-ink-muted">The finish speaks for itself.</span>
              </p>
              <p className="text-[14px] text-ink-muted leading-[1.5] tracking-[-0.005em]">
                Tap any photo to enlarge. More on{' '}
                <a
                  href="https://instagram.com/vanityworks.il"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline hover:opacity-60 transition-opacity"
                >
                  Instagram
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* GRID + LIGHTBOX */}
      <section className="bg-white px-8 pt-16 pb-[120px] max-[900px]:px-5 max-[900px]:pt-10 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <GalleryLightbox photos={photos} wideIndex={4} />
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCta
        title="Yours could be next."
        sub="Every car here started with a conversation. **Start yours.**"
        primaryCta={{ label: 'Book a consultation', href: '/contact' }}
        secondaryCta={{ label: 'View services', href: '/services' }}
      />
    </div>
  )
}
