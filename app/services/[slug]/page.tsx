import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { services, getServiceBySlug, type Service } from '@/lib/data'
import { portfolio, type PortfolioEntry } from '@/lib/portfolio'
import { SplitLetters } from '@/components/SplitLetters'
import FinalCta from '@/components/sections/FinalCta'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} · VanityWorks Detailing`,
      description: service.description,
      url: `/services/${service.slug}`,
      // A page-level openGraph replaces the root layout's wholesale in Next
      // rather than merging, so leaving images out shipped every service page
      // with no social image at all.
      images: [
        {
          url: '/og-image.webp',
          width: 1734,
          height: 907,
          alt: 'VanityWorks Detailing — Your car, perfected.',
        },
      ],
    },
  }
}

// Final-CTA background photo per service. Each one is a different cool car so
// the page closes on a fresh visual — and the photo doesn't repeat the hero
// tiles above it.
const FINAL_CTA_BG: Record<string, { src: string; position?: string }> = {
  'full-detail':            { src: '/portfolio/red-rx7-fd/01.webp',        position: 'center 60%' },
  'paint-correction':       { src: '/portfolio/yellow-lambo-gallardo/01.webp', position: 'center 55%' },
  'ceramic-coating':        { src: '/portfolio/white-r34-gtr/01.webp',     position: 'center 50%' },
  'paint-protection-film':  { src: '/portfolio/red-acura-nsx/01.webp',     position: 'center 55%' },
}

// Curated showcase cars per service page. Photos are honest beauty/detail
// shots of real client cars — they illustrate the kind of vehicle we work on,
// not the service action itself (the chips never claim an unpictured service).
// Each tile shows only the vehicle name. Edit these lists to re-curate a page.
const SERVICE_SHOWCASE: Record<string, string[]> = {
  'full-detail': ['black-porsche-cayenne', 'subaru-interior-detail', 'red-svt-lightning-wash'],
  'paint-correction': ['red-acura-nsx', 'red-r33-gtr', 'yellow-honda-s2000'],
  'ceramic-coating': ['black-amg-g63', 'yellow-lambo-gallardo', 'purple-r33-gtr'],
  'paint-protection-film': ['black-porsche-911', 'mclaren-720s', 'white-r34-gtr'],
}

interface HeroTile {
  src: string
  vehicle: string
}

function pickShowcasePhoto(entry: PortfolioEntry): string {
  // Prefer the "After" shot for before-after entries; fall back to the cover photo.
  const after = entry.photos.find((p) => p.label === 'After')
  return after?.src ?? entry.photos[0].src
}

function getHeroTiles(slug: string, n = 3): HeroTile[] {
  const curated = (SERVICE_SHOWCASE[slug] ?? [])
    .map((s) => portfolio.find((e) => e.slug === s))
    .filter((e): e is PortfolioEntry => Boolean(e && e.photos.length > 0))

  // Backfill with featured entries (then any entry) if a list is short.
  const backfill = portfolio
    .filter((e) => e.photos.length > 0 && !curated.includes(e))
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return [...curated, ...backfill].slice(0, n).map((entry) => ({
    src: pickShowcasePhoto(entry),
    vehicle: entry.vehicle,
  }))
}

// Splits a string on **bold** markers and renders <strong> for the bold spans.
function renderMarked(text: string, boldClassName = 'text-ink font-semibold') {
  return text.split('**').map((p, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={boldClassName}>
        {p}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}

const ArrowOut = (props: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={props.className}>
    <path d="M5 11L11 5M11 5H6.5M11 5V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowRight = (props: { className?: string }) => (
  <svg viewBox="0 0 14 14" fill="none" className={props.className}>
    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = ({ dark = false }: { dark?: boolean }) => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5">
    <path
      d="M2 7.5L5.5 11L12 3"
      stroke={dark ? '#fff' : '#000'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink mb-14 max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-7 max-[900px]:mb-9">
      <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px] max-[900px]:pb-0">
        <span className="inline-block w-2 h-2 rounded-full bg-ink" />
        {eyebrow}
      </span>
      <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(36px,5vw,80px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
        <SplitLetters text={title} />
      </h2>
    </div>
  )
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()
  // Type narrowing — old service entries lacking new fields will still render with safe fallbacks.
  const s = service as Service
  const heroTiles = getHeroTiles(s.slug, 3)

  const path = `/services/${s.slug}`
  const schemas = [
    serviceSchema({ name: s.name, description: s.description, path, startingPrice: s.startingPrice }),
    faqSchema(s.faq ?? []),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: s.name, path },
    ]),
  ].filter(Boolean)

  return (
    <div className="bg-white pt-20 md:pt-24 lg:pt-28">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* HERO */}
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Home
            </Link>
            <span className="text-line">/</span>
            <Link href="/services" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Services
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">{s.name}</span>
          </div>

          <div className="grid grid-cols-[1fr_0.8fr] gap-16 items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-8">
            <div>
              <div className="text-[13px] font-semibold text-ink-muted tracking-[0.04em] tabular-nums mb-5">
                Service / {s.number ?? '01'}
              </div>
              <h1 className="font-sans font-extrabold text-ink leading-[0.88] tracking-[-0.05em] mb-7 text-[clamp(56px,9vw,150px)] max-[900px]:text-[13vw]">
                <SplitLetters text={`${s.shortName ?? s.name}.`} />
              </h1>
              <p className="text-ink font-medium leading-[1.35] tracking-[-0.018em] max-w-[30ch] text-[clamp(18px,1.8vw,24px)]">
                {s.heroPromiseLead}{' '}
                {s.heroPromiseMuted && <span className="text-ink-muted">{s.heroPromiseMuted}</span>}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-px bg-line border border-line">
                {(s.specs ?? []).map((spec) => (
                  <div key={spec.label} className="bg-white px-[18px] py-5 flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink-muted">
                      {spec.label}
                    </span>
                    <span
                      className={`font-bold tracking-[-0.03em] text-ink leading-none tabular-nums ${
                        spec.value.length > 8 ? 'text-[15px] leading-[1.3]' : 'text-[24px]'
                      }`}
                    >
                      {spec.value}
                      {spec.unit && (
                        <span className="text-[13px] font-medium text-ink-muted"> {spec.unit}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={s.finalPrimaryCta?.href ?? '/book'}
                data-hover
                className="group bg-ink text-white rounded-full text-[15px] font-semibold px-6 py-[18px] inline-flex items-center justify-center gap-3 tracking-[-0.005em] transition-transform duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03]"
              >
                Book this service
                <ArrowOut className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Hero — 3 selected jobs from the portfolio that match this service */}
          <div className="mt-12 grid grid-cols-3 gap-px bg-line border border-ink max-[900px]:grid-cols-1 max-[900px]:mt-8">
            {heroTiles.map((t, i) => (
              <div
                key={t.src}
                className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#050505] max-[900px]:aspect-[16/9]"
              >
                <Image
                  src={t.src}
                  alt={`${t.vehicle} — ${s.name}`}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? undefined : 'lazy'}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 z-10 bg-black/55 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.16em] uppercase px-[10px] py-[6px] pointer-events-none">
                  {t.vehicle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* WHAT IT IS */}
      <section className="bg-white px-8 py-[120px] max-[900px]:px-5 max-[900px]:py-[72px]">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="What it is" title="Head to toe." />
          <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <p className="font-semibold text-ink leading-[1.2] tracking-[-0.03em] max-w-[18ch] text-[clamp(24px,2.6vw,36px)]">
              {s.whatisLead}
            </p>
            <div className="text-[16px] leading-[1.55] text-ink-muted tracking-[-0.005em] max-w-[52ch] space-y-4">
              {(s.whatisParagraphs ?? []).map((p, i) => (
                <p key={i}>{renderMarked(p)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="What it costs" title="One price. No surprises." />
          <div className="grid grid-cols-3 gap-px bg-line border border-ink max-[900px]:grid-cols-1">
            {(s.packages ?? []).map((p) => {
              const featured = p.featured
              return (
                <div
                  key={p.name}
                  className={`relative p-9 px-8 flex flex-col transition-[background-color] duration-[400ms] ${
                    featured ? 'bg-ink text-white hover:bg-[#111]' : 'bg-white hover:bg-[#fafafa]'
                  }`}
                >
                  <span
                    className={`text-[11px] font-semibold tracking-[0.1em] uppercase mb-4 ${
                      featured ? 'text-white/50' : 'text-ink-muted'
                    }`}
                  >
                    {p.tier}
                  </span>
                  <h3 className="text-[24px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-2">
                    {p.name}
                  </h3>
                  <p
                    className={`text-[13px] leading-[1.45] tracking-[-0.005em] mb-6 min-h-[56px] ${
                      featured ? 'text-white/60' : 'text-ink-muted'
                    }`}
                  >
                    {p.desc}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`block text-[11px] font-semibold tracking-[0.06em] uppercase mb-1.5 ${
                        featured ? 'text-white/50' : 'text-ink-muted'
                      }`}
                    >
                      {p.priceLabel}
                    </span>
                    <span
                      className={`font-extrabold tracking-[-0.04em] leading-none tabular-nums ${
                        p.priceValue.startsWith('$') ? 'text-[44px]' : 'text-[26px]'
                      }`}
                    >
                      {p.priceValue}
                    </span>
                  </div>
                  <ul className="list-none flex flex-col gap-2.5 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`text-[13px] leading-[1.4] tracking-[-0.005em] flex gap-2.5 items-start ${
                          featured ? 'text-white/85' : 'text-ink'
                        }`}
                      >
                        <CheckIcon dark={!featured} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.ctaHref}
                    data-hover
                    className={`text-[14px] font-semibold px-[18px] py-3.5 rounded-full text-center border tracking-[-0.005em] transition-colors duration-200 ${
                      featured
                        ? 'bg-white text-ink border-white hover:bg-transparent hover:text-white'
                        : 'border-ink text-ink hover:bg-ink hover:text-white'
                    }`}
                  >
                    {p.ctaLabel}
                  </Link>
                </div>
              )
            })}
          </div>
          {s.packagesNote && (
            <p className="mt-6 text-[13px] text-ink-muted leading-[1.5] tracking-[-0.005em]">
              {renderMarked(s.packagesNote, 'text-ink font-semibold')}
            </p>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="The process" title="How it goes." />
          <div className="grid grid-cols-4 gap-px bg-line border border-ink max-[900px]:grid-cols-2">
            {(s.process ?? []).map((step) => (
              <div
                key={step.num}
                className="bg-white px-6 py-8 flex flex-col gap-3 transition-colors duration-300 hover:bg-[#fafafa]"
              >
                <span className="text-[36px] font-extrabold tracking-[-0.04em] leading-none text-ink tabular-nums">
                  {step.num}
                </span>
                <span className="text-[16px] font-bold tracking-[-0.02em] leading-[1.1]">
                  {step.title}
                </span>
                <span className="text-[13px] leading-[1.45] text-ink-muted tracking-[-0.005em]">
                  {step.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Good to know" title="Questions." />
          <div className="border-t border-ink">
            {(s.faq ?? []).map((item, i) => (
              <details
                key={item.question}
                {...(i === 0 ? { open: true } : {})}
                className="group border-b border-line"
              >
                <summary
                  data-hover
                  className="list-none cursor-pointer py-[26px] flex justify-between items-center gap-6 [&::-webkit-details-marker]:hidden"
                >
                  <span className="font-semibold tracking-[-0.02em] text-ink text-[clamp(17px,1.6vw,21px)]">
                    {item.question}
                  </span>
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    className="w-[18px] h-[18px] flex-shrink-0 transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-open:rotate-45"
                  >
                    <path d="M9 1V17M1 9H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="pb-[26px]">
                  <p className="text-[15px] leading-[1.55] text-ink-muted tracking-[-0.005em] max-w-[60ch]">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="bg-white px-8 pb-[120px] max-[900px]:px-5 max-[900px]:pb-[72px]">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Build on it" title="Goes well with." />
          <div className="grid grid-cols-3 gap-px bg-line border border-ink max-[900px]:grid-cols-1">
            {(s.crossSell ?? []).map((c) => (
              <Link
                key={c.href}
                href={c.href}
                data-hover
                className="group bg-white p-8 no-underline flex flex-col gap-3.5 transition-colors duration-300 hover:bg-[#fafafa] relative overflow-hidden"
              >
                <span className="text-[11px] font-semibold text-ink-muted tracking-[0.04em]">
                  {c.num}
                </span>
                <span className="text-[22px] font-extrabold tracking-[-0.03em] leading-[1.05] text-ink">
                  {c.name}
                </span>
                <span className="text-[13px] font-semibold text-ink-muted">{c.price}</span>
                <span className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold text-ink transition-[gap] duration-300 group-hover:gap-3">
                  {c.arrowLabel}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — shared component, per-service copy + per-service car */}
      <FinalCta
        eyebrow={s.finalEyebrow}
        title={s.finalTitle}
        sub={s.finalSub}
        primaryCta={s.finalPrimaryCta}
        secondaryCta={s.finalSecondaryCta}
        bgSrc={FINAL_CTA_BG[s.slug]?.src}
        bgPosition={FINAL_CTA_BG[s.slug]?.position}
      />
    </div>
  )
}
