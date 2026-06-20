// ─────────────────────────────────────────────
//  VanityWorks — Portfolio Manifest
//  Each entry is grouped by visual content (same car across one shoot).
//  IMPORTANT: chips/captions describe what is actually visible in the
//  photos — exterior showcase, interior, engine bay, wash, bodywork.
//  We do not label a photo with a service (PPF, ceramic, correction)
//  that isn't actually pictured. Service-page placement is curated
//  separately in app/services/[slug]/page.tsx.
// ─────────────────────────────────────────────

export type PortfolioType = 'showcase' | 'before-after'

export interface PortfolioPhoto {
  src: string
  label?: string
}

export interface PortfolioEntry {
  slug: string
  vehicle: string
  make: string
  service: string
  type: PortfolioType
  photos: PortfolioPhoto[]
  caption?: string
  featured?: boolean
}

export const portfolio: PortfolioEntry[] = [
  // ─── Showcase entries ───────────────────────
  {
    slug: 'mclaren-720s',
    vehicle: 'McLaren 720S',
    make: 'McLaren',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'Silver McLaren 720S — exterior showcase with wheel and brake-caliper detail, plus cockpit.',
    photos: [
      { src: '/portfolio/mclaren-720s/01.webp' },
      { src: '/portfolio/mclaren-720s/02.webp' },
      { src: '/portfolio/mclaren-720s/03.webp' },
      { src: '/portfolio/mclaren-720s/04.webp' },
      { src: '/portfolio/mclaren-720s/05.webp' },
      { src: '/portfolio/mclaren-720s/06.webp' },
    ],
  },
  {
    slug: 'black-porsche-911',
    vehicle: 'Porsche 911 (992)',
    make: 'Porsche',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'Black 992 — exterior showcase at the shop and a full interior shot.',
    photos: [
      { src: '/portfolio/black-porsche-911/01.webp' },
      { src: '/portfolio/black-porsche-911/02.webp' },
      { src: '/portfolio/black-porsche-911/03.webp' },
    ],
  },
  {
    slug: 'black-amg-g63',
    vehicle: 'Mercedes-AMG G63',
    make: 'Mercedes-AMG',
    service: 'Exterior & Interior Detail',
    type: 'showcase',
    featured: true,
    caption: 'Black G63 with red leather interior — exterior detail and full cabin.',
    photos: [
      { src: '/portfolio/black-amg-g63/01.webp' },
      { src: '/portfolio/black-amg-g63/02.webp' },
      { src: '/portfolio/black-amg-g63/03.webp' },
      { src: '/portfolio/black-amg-g63/04.webp' },
    ],
  },
  {
    slug: 'white-r34-gtr',
    vehicle: 'Nissan Skyline R34 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'White R34 GT-R — full showcase: exterior, rear, wheel, RB26 engine bay, and interior.',
    photos: [
      { src: '/portfolio/white-r34-gtr/01.webp' },
      { src: '/portfolio/white-r34-gtr/02.webp' },
      { src: '/portfolio/white-r34-gtr/03.webp' },
      { src: '/portfolio/white-r34-gtr/04.webp' },
      { src: '/portfolio/white-r34-gtr/05.webp' },
    ],
  },
  {
    slug: 'red-acura-nsx',
    vehicle: 'Acura NSX',
    make: 'Acura',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'Formula Red NSX on Desmond EVO wheels — night exterior and wheel detail.',
    photos: [
      { src: '/portfolio/red-acura-nsx/01.webp' },
      { src: '/portfolio/red-acura-nsx/02.webp' },
    ],
  },
  {
    slug: 'purple-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Midnight Purple R33 GT-R — exterior showcase.',
    photos: [
      { src: '/portfolio/purple-r33-gtr/01.webp' },
    ],
  },
  {
    slug: 'red-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Red R33 GT-R — golden-hour exterior.',
    photos: [
      { src: '/portfolio/red-r33-gtr/01.webp' },
    ],
  },
  {
    slug: 'yellow-lambo-gallardo',
    vehicle: 'Lamborghini Gallardo',
    make: 'Lamborghini',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Yellow Gallardo — exterior showcase and interior.',
    photos: [
      { src: '/portfolio/yellow-lambo-gallardo/01.webp' },
      { src: '/portfolio/yellow-lambo-gallardo/02.webp' },
      { src: '/portfolio/yellow-lambo-gallardo/03.webp' },
    ],
  },
  {
    slug: 'yellow-honda-s2000',
    vehicle: 'Honda S2000',
    make: 'Honda',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Yellow AP1 S2000 with carbon hood — exterior, F-series engine bay, and interior.',
    photos: [
      { src: '/portfolio/yellow-honda-s2000/06.webp' },
      { src: '/portfolio/yellow-honda-s2000/01.webp' },
      { src: '/portfolio/yellow-honda-s2000/02.webp' },
      { src: '/portfolio/yellow-honda-s2000/03.webp' },
      { src: '/portfolio/yellow-honda-s2000/04.webp' },
      { src: '/portfolio/yellow-honda-s2000/05.webp' },
    ],
  },
  {
    slug: 'red-rx7-fd',
    vehicle: 'Toyota Supra MkIV',
    make: 'Toyota',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Red MkIV Supra on display — show-floor showcase, front and rear angles.',
    photos: [
      { src: '/portfolio/red-rx7-fd/01.webp' },
      { src: '/portfolio/red-rx7-fd/02.webp' },
    ],
  },
  {
    slug: 'black-porsche-cayenne',
    vehicle: 'Porsche Cayenne',
    make: 'Porsche',
    service: 'Exterior & Interior Detail',
    type: 'showcase',
    caption: 'Black Porsche Cayenne — exterior detail and cabin.',
    photos: [
      { src: '/portfolio/black-porsche-cayenne/01.webp' },
      { src: '/portfolio/black-porsche-cayenne/02.webp' },
    ],
  },

  // ─── Engine bay & bodywork ──────────────────
  {
    slug: 'silver-supra-2jz',
    vehicle: 'Toyota Supra MkIV',
    make: 'Toyota',
    service: 'Engine Bay Detail',
    type: 'showcase',
    caption: 'Silver MkIV Supra — 2JZ-GTE engine bay, two angles.',
    photos: [
      { src: '/portfolio/silver-supra-2jz/01.webp' },
      { src: '/portfolio/silver-supra-2jz/02.webp' },
    ],
  },
  {
    slug: 'white-evo',
    vehicle: 'Mitsubishi Lancer Evolution',
    make: 'Mitsubishi',
    service: 'Engine Bay Detail',
    type: 'showcase',
    caption: 'White EVO — 4G63T engine bay with red valve cover, two angles.',
    photos: [
      { src: '/portfolio/white-evo/01.webp' },
      { src: '/portfolio/white-evo/02.webp' },
    ],
  },
  {
    slug: 'silver-r34',
    vehicle: 'Nissan Skyline R34',
    make: 'Nissan',
    service: 'Bodywork',
    type: 'showcase',
    caption: 'Silver R34 mid-build — fresh front-bumper respray and bodywork.',
    photos: [
      { src: '/portfolio/silver-r34/01.webp' },
    ],
  },

  // ─── Wash & interior (before / after) ───────
  {
    slug: 'red-svt-lightning-wash',
    vehicle: 'Ford F-150 SVT Lightning',
    make: 'Ford',
    service: 'Hand Wash & Decon',
    type: 'before-after',
    featured: true,
    caption: 'Red SVT Lightning — full foam bath and decontamination, finished at golden hour.',
    photos: [
      { src: '/portfolio/red-svt-lightning-wash/before.webp', label: 'Before' },
      { src: '/portfolio/red-svt-lightning-wash/after.webp', label: 'After' },
    ],
  },
  {
    slug: 'silver-jeep-cherokee-wash',
    vehicle: 'Jeep Cherokee',
    make: 'Jeep',
    service: 'Hand Wash & Decon',
    type: 'before-after',
    caption: 'Silver Jeep Cherokee — full hand wash with snow-foam decontamination.',
    photos: [
      { src: '/portfolio/silver-jeep-cherokee-wash/before.webp', label: 'Before' },
      { src: '/portfolio/silver-jeep-cherokee-wash/after.webp', label: 'After' },
    ],
  },
  {
    slug: 'black-vw-atlas-wash',
    vehicle: 'Volkswagen Atlas',
    make: 'Volkswagen',
    service: 'Hand Wash & Decon',
    type: 'before-after',
    caption: 'Black VW Atlas — exterior wash, decontamination, dry-and-dress finish.',
    photos: [
      { src: '/portfolio/black-vw-atlas-wash/before.webp', label: 'Before' },
      { src: '/portfolio/black-vw-atlas-wash/after.webp', label: 'After' },
    ],
  },
  {
    slug: 'subaru-interior-detail',
    vehicle: 'Subaru Outback',
    make: 'Subaru',
    service: 'Interior Detail',
    type: 'before-after',
    caption: 'Subaru interior — full deep-clean of seats, carpets, and dash.',
    photos: [
      { src: '/portfolio/subaru-interior-detail/before.webp', label: 'Before' },
      { src: '/portfolio/subaru-interior-detail/after.webp', label: 'After' },
    ],
  },
]

export function getPortfolioBySlug(slug: string): PortfolioEntry | undefined {
  return portfolio.find((p) => p.slug === slug)
}

/** Flat list of every photo across every entry — one record per image.
 *  Each photo keeps a back-pointer to its parent entry so a tile can open
 *  the right multi-photo or before/after view. */
export interface FlatPhoto {
  id: string
  src: string
  label?: string
  vehicle: string
  service: string
  make: string
  entry: PortfolioEntry
  indexInEntry: number
}

export const allPortfolioPhotos: FlatPhoto[] = portfolio.flatMap((entry) =>
  entry.photos.map((photo, i) => ({
    id: `${entry.slug}-${i}`,
    src: photo.src,
    label: photo.label,
    vehicle: entry.vehicle,
    service: entry.service,
    make: entry.make,
    entry,
    indexInEntry: i,
  }))
)

export const portfolioBeforeAfter = portfolio.filter((p) => p.type === 'before-after')
