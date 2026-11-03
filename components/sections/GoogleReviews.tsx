import { SplitLetters } from '@/components/SplitLetters'

const GOOGLE_BUSINESS_URL =
  'https://www.google.com/maps/search/?api=1&query=VanityWorks+Detailing+Chicagoland'

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
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
            <SplitLetters text="What clients say." />
          </h2>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex justify-between items-center gap-8 flex-wrap max-[900px]:mt-5 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3">
          <p className="font-bold text-ink tracking-[-0.025em] leading-[1.2] text-[clamp(20px,2vw,26px)]">
            Our reviews are on Google.
            <br />
            <span className="text-ink-muted">Read what clients say for yourself.</span>
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
