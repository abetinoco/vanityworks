import Image from 'next/image'
import { SplitLetters } from '@/components/SplitLetters'

const IG_URL = 'https://instagram.com/vanityworks.il'

export default function SocialFeed() {
  return (
    <section className="bg-white px-8 py-[120px] max-[900px]:px-5 max-[900px]:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-8 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-6">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            On the channel
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
            <SplitLetters text="Follow the build." />
          </h2>
        </div>

        {/* Layout */}
        <div className="mt-16 grid grid-cols-[1fr_1.1fr] gap-16 items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:mt-7">
          {/* Pinned image */}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-tile
            className="group relative block aspect-[4/5] overflow-hidden bg-[#0A0A0A] max-[900px]:aspect-[16/10]"
            aria-label="Open @vanityworks.il on Instagram"
          >
            <Image
              src="/portfolio/mclaren-720s/01.webp"
              alt="McLaren 720S — pinned post on Instagram"
              fill
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover transition-transform duration-[900ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />

            <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-[7px] bg-black/55 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-[7px] pointer-events-none">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5">
                <path d="M9.5 1.5L9 4L12 4L11.5 6L13.5 6.5L11.5 8.5L11 10.5L9.5 10L9 12.5L7.5 11.5L7 14L5.5 11L4 12L4.5 9.5L2.5 8.5L4 7L2.5 5L5 5L4.5 2.5L7 3.5L7.5 1L9.5 1.5Z" />
              </svg>
              Pinned post
            </span>

            <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
              <div className="text-[17px] font-bold tracking-[-0.025em] leading-[1.1] mb-1">
                McLaren 720S
              </div>
              <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/70">
                @vanityworks.il · Tap to view
              </div>
            </div>
          </a>

          {/* Type column */}
          <div className="flex flex-col justify-center">
            <div className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.05em] text-[clamp(48px,9vw,128px)] max-[900px]:text-[9vw]">
              <span className="font-normal text-ink-muted">
                <SplitLetters text="@" />
              </span>
              <SplitLetters text="vanityworks" />
              <span className="font-normal text-ink-muted">
                <SplitLetters text=".il" />
              </span>
            </div>

            <p className="mt-7 text-ink-muted font-medium tracking-[-0.011em] leading-[1.45] max-w-[42ch] text-[clamp(16px,1.3vw,19px)] max-[900px]:text-[14px] max-[900px]:leading-[1.4] max-[900px]:mt-4">
              The gallery shows the finish.{' '}
              <strong className="text-ink font-semibold">
                Instagram shows everything in between.
              </strong>{' '}
              Daily wraps, paint corrections in motion, and the detail breakdowns that don&apos;t
              make the homepage.
            </p>

            <div className="mt-9 flex gap-3 max-[900px]:mt-5">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group bg-ink text-white rounded-full text-[15px] font-semibold px-[26px] py-[18px] inline-flex items-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04]"
              >
                Follow on Instagram
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M5 11L11 5M11 5H6.5M11 5V9.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
