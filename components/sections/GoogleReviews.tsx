import { SplitLetters } from '@/components/SplitLetters'

const GOOGLE_BUSINESS_URL =
  'https://www.google.com/maps/search/?api=1&query=VanityWorks+Detailing+Chicagoland'

interface Review {
  author: string
  car: string
  text: string
  date: string
}

const featured: Review = {
  author: 'Kira M.',
  car: 'BMW M4 Competition',
  date: '2 months ago',
  text: "I've used three shops in Chicagoland and VanityWorks isn't even close. The attention to detail on every panel is in a different league.",
}

const reviews: Review[] = [
  {
    author: 'Marcus D.',
    car: 'Nissan GT-R R35',
    text: 'My GT-R came back looking better than the day I bought it. The PPF edge work on the front bumper is flawless. These guys clearly know R35s.',
    date: '2 weeks ago',
  },
  {
    author: 'Sofia R.',
    car: 'Porsche 911 GT3',
    text: '3-stage paint correction before ceramic coating. The depth and clarity is unreal — paint looks deeper than it did at the dealership.',
    date: '1 month ago',
  },
  {
    author: 'Jake T.',
    car: 'Subaru WRX STI',
    text: 'Communication was top tier from quote to pickup. Full front PPF + ceramic and the result is mint. Will be sending my buddies here.',
    date: '3 weeks ago',
  },
  {
    author: 'Ryan H.',
    car: 'Toyota GR Supra A90',
    text: 'They treated my Supra like it was their own. Sent me progress photos at every stage. Paint looks like glass now. Highly recommend.',
    date: '6 weeks ago',
  },
  {
    author: 'Amelia P.',
    car: 'McLaren 720S',
    text: 'Trusted them with my 720S and they delivered. The ceramic coating beads water like crazy and the gloss is insane. Worth every dollar.',
    date: '1 month ago',
  },
]

const TOTAL = (reviews.length + 1).toString().padStart(2, '0') // includes featured

function Star({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 0.5L10 5.5L15.5 6L11.5 9.5L13 14.5L8 11.5L3 14.5L4.5 9.5L0.5 6L6 5.5L8 0.5Z" />
    </svg>
  )
}

function FiveStars({ size = 'w-3.5 h-3.5' }: { size?: string }) {
  return (
    <span className="inline-flex gap-[3px] text-ink" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={size} />
      ))}
    </span>
  )
}

export default function GoogleReviews() {
  return (
    <section id="reviews" className="bg-white px-8 py-[120px] max-[900px]:px-5 max-[900px]:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-8 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-6">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            On the record
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[13vw]">
            <SplitLetters text="What clients say." />
          </h2>
        </div>

        {/* Rating strip */}
        <div className="mt-9 mb-14 flex justify-between items-center gap-6 flex-wrap max-[900px]:mt-5 max-[900px]:mb-6 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3">
          <div className="flex items-baseline gap-4 max-[900px]:gap-3">
            <span className="font-extrabold text-ink leading-none tracking-[-0.045em] tabular-nums text-[clamp(56px,6vw,88px)] max-[900px]:text-[44px]">
              5.0
            </span>
            <span className="text-[18px] font-medium text-ink-muted tracking-[-0.01em]">
              / 5 average
            </span>
            <FiveStars size="w-[18px] h-[18px]" />
          </div>
          <div className="flex flex-col gap-1 text-right max-[900px]:text-left">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
              Verified on <strong className="text-ink font-bold">Google</strong>
            </span>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="self-end max-[900px]:self-start text-[14px] font-semibold text-ink border-b border-ink pb-0.5 hover:opacity-60 transition-opacity"
            >
              Read all on Google →
            </a>
          </div>
        </div>

        {/* Featured */}
        <div className="pt-14 pb-14 border-t border-ink border-b border-b-line max-[900px]:pt-6 max-[900px]:pb-6">
          <p className="font-semibold text-ink leading-[1.15] tracking-[-0.035em] max-w-[22ch] mb-9 text-[clamp(28px,3.6vw,52px)] max-[900px]:text-[19px] max-[900px]:leading-[1.25] max-[900px]:mb-5 max-[900px]:max-w-none">
            &ldquo;<span className="text-ink">I&apos;ve used three shops in Chicagoland and VanityWorks isn&apos;t even close.</span>{' '}
            <span className="text-ink-muted font-semibold">
              The attention to detail on every panel is in a different league.&rdquo;
            </span>
          </p>
          <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-center max-[900px]:grid-cols-1 max-[900px]:gap-3">
            <FiveStars size="w-[14px] h-[14px]" />
            <span className="text-[16px] font-bold text-ink tracking-[-0.015em] leading-[1.2]">
              {featured.author}
              <span className="block text-[13px] font-medium text-ink-muted mt-[3px]">
                {featured.car}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-ink-muted max-[900px]:justify-self-start">
              <span className="w-1 h-1 rounded-full bg-ink-muted" />
              Google review · {featured.date}
            </span>
          </div>
        </div>

        {/* Review list */}
        <div className="max-[900px]:overflow-x-auto max-[900px]:mt-6">
          <div className="grid grid-cols-1 max-[900px]:flex max-[900px]:flex-nowrap max-[900px]:gap-4 max-[900px]:pb-4">
          {reviews.map((r, i) => (
            <div
              key={r.author}
              data-hover
              className="group relative grid grid-cols-[80px_1fr_220px] gap-8 items-start py-8 border-b border-line transition-[padding] duration-[400ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-[60%] before:bg-ink before:transition-[width] before:duration-[400ms] before:[transition-timing-function:cubic-bezier(0.65,0,0.35,1)] hover:before:w-[3px] max-[900px]:grid-cols-1 max-[900px]:gap-3 max-[900px]:w-[260px] max-[900px]:flex-shrink-0 max-[900px]:border max-[900px]:border-line max-[900px]:rounded-xl max-[900px]:p-4 max-[900px]:hover:pl-4"
            >
              <span className="text-[13px] font-semibold text-ink-muted tracking-[0.02em] tabular-nums pt-1 max-[900px]:pt-0">
                <strong className="text-ink font-bold">
                  {(i + 1).toString().padStart(2, '0')}
                </strong>{' '}
                / {TOTAL}
              </span>
              <div className="flex flex-col">
                <span className="inline-flex gap-[3px] mb-2">
                  <FiveStars size="w-[13px] h-[13px]" />
                </span>
                <p className="font-medium text-ink leading-[1.5] tracking-[-0.011em] text-[clamp(15px,1.3vw,17px)] max-[900px]:text-[14px] max-[900px]:leading-[1.4]">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-right max-[900px]:text-left max-[900px]:flex-row max-[900px]:flex-wrap max-[900px]:items-baseline max-[900px]:gap-x-3 max-[900px]:gap-y-1.5">
                <span className="text-[15px] font-bold text-ink tracking-[-0.015em] leading-[1.2]">
                  {r.author}
                </span>
                <span className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] max-[900px]:before:content-['·_'] max-[900px]:before:text-ink-muted">
                  {r.car}
                </span>
                <span className="text-[11px] font-semibold text-ink-muted tracking-[0.04em] uppercase mt-1 max-[900px]:mt-0 max-[900px]:before:content-['·_']">
                  {r.date}
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-10 border-t border-ink flex justify-between items-center gap-8 flex-wrap max-[900px]:mt-5 max-[900px]:pt-5 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3">
          <p className="font-bold text-ink tracking-[-0.025em] leading-[1.2] text-[clamp(20px,2vw,26px)]">
            Every review is on Google.
            <br />
            <span className="text-ink-muted">Verify any of them yourself.</span>
          </p>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="group bg-ink text-white rounded-full text-[15px] font-semibold px-[26px] py-[18px] inline-flex items-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.04]"
          >
            Read all reviews
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
    </section>
  )
}
