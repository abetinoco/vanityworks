// ─────────────────────────────────────────────
//  VanityWorks — Portfolio Manifest
//  Generated from /Users/.../Downloads/VanityWorks Portfolio/.
//  Each entry was grouped by visual content (license plates, scene,
//  same-car-across-multiple-Instagram-posts).
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
    slug: 'red-acura-nsx',
    vehicle: 'Acura NSX',
    make: 'Acura',
    service: 'Show Build Detail',
    type: 'showcase',
    featured: true,
    caption: 'Red Acura NSX — show-prep detail with full body gloss and wheel work.',
    photos: [
      { src: '/portfolio/red-acura-nsx/01.jpg' },
      { src: '/portfolio/red-acura-nsx/02.jpg' },
    ],
  },
  {
    slug: 'purple-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Midnight Purple R33 GT-R — showcase detail.',
    photos: [
      { src: '/portfolio/purple-r33-gtr/01.jpg' },
    ],
  },
  {
    slug: 'red-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    caption: 'Red R33 GT-R — showcase detail.',
    type: 'showcase',
    photos: [
      { src: '/portfolio/red-r33-gtr/01.jpg' },
    ],
  },
  {
    slug: 'black-porsche-cayenne',
    vehicle: 'Porsche Cayenne',
    make: 'Porsche',
    service: 'Detail & Interior',
    type: 'showcase',
    caption: 'Black Porsche Cayenne — full detail with interior reset.',
    photos: [
      { src: '/portfolio/black-porsche-cayenne/01.jpg' },
      { src: '/portfolio/black-porsche-cayenne/02.jpg' },
    ],
  },
  {
    slug: 'mclaren-720s',
    vehicle: 'McLaren 720S',
    make: 'McLaren',
    service: 'Ceramic Coating & PPF',
    type: 'showcase',
    featured: true,
    caption: 'Silver McLaren 720S — full protection package, with detailed wheel and brake-caliper work.',
    photos: [
      { src: '/portfolio/mclaren-720s/01.jpg' },
      { src: '/portfolio/mclaren-720s/02.jpg' },
      { src: '/portfolio/mclaren-720s/03.jpg' },
      { src: '/portfolio/mclaren-720s/04.jpg' },
      { src: '/portfolio/mclaren-720s/05.jpg' },
      { src: '/portfolio/mclaren-720s/06.jpg' },
    ],
  },
  {
    slug: 'black-amg-g63',
    vehicle: 'Mercedes-AMG G63',
    make: 'Mercedes-AMG',
    service: 'Ceramic Coating',
    type: 'showcase',
    featured: true,
    caption: 'Obsidian black G63 with red leather interior — ceramic coating on body, glass, and wheels.',
    photos: [
      { src: '/portfolio/black-amg-g63/01.jpg' },
      { src: '/portfolio/black-amg-g63/02.jpg' },
      { src: '/portfolio/black-amg-g63/03.jpg' },
      { src: '/portfolio/black-amg-g63/04.jpg' },
    ],
  },
  {
    slug: 'black-porsche-911',
    vehicle: 'Porsche 911 (992)',
    make: 'Porsche',
    service: 'Paint Protection Film',
    type: 'showcase',
    featured: true,
    caption: 'Black 992 in for full-front PPF and ceramic coating — interior + exterior package.',
    photos: [
      { src: '/portfolio/black-porsche-911/01.jpg' },
      { src: '/portfolio/black-porsche-911/02.jpg' },
      { src: '/portfolio/black-porsche-911/03.jpg' },
    ],
  },
  {
    slug: 'white-r34-gtr',
    vehicle: 'Nissan Skyline R34 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'White R34 GT-R — full showcase covering exterior, rear, wheel detail, RB26 engine bay, and interior.',
    photos: [
      { src: '/portfolio/white-r34-gtr/01.jpg' },
      { src: '/portfolio/white-r34-gtr/02.jpg' },
      { src: '/portfolio/white-r34-gtr/03.jpg' },
      { src: '/portfolio/white-r34-gtr/04.jpg' },
      { src: '/portfolio/white-r34-gtr/05.jpg' },
    ],
  },
  {
    slug: 'yellow-honda-s2000',
    vehicle: 'Honda S2000',
    make: 'Honda',
    service: 'Paint Correction & Detail',
    type: 'showcase',
    caption: 'Yellow AP1 S2000 with carbon hood — full interior detail and exterior polish.',
    photos: [
      { src: '/portfolio/yellow-honda-s2000/06.jpg' },
      { src: '/portfolio/yellow-honda-s2000/01.jpg' },
      { src: '/portfolio/yellow-honda-s2000/02.jpg' },
      { src: '/portfolio/yellow-honda-s2000/03.jpg' },
      { src: '/portfolio/yellow-honda-s2000/04.jpg' },
      { src: '/portfolio/yellow-honda-s2000/05.jpg' },
    ],
  },
  {
    slug: 'yellow-lambo-gallardo',
    vehicle: 'Lamborghini Gallardo',
    make: 'Lamborghini',
    service: 'Ceramic Coating',
    type: 'showcase',
    caption: 'Yellow Gallardo (SDR) — exterior gloss, interior detail, and rear angle.',
    photos: [
      { src: '/portfolio/yellow-lambo-gallardo/01.jpg' },
      { src: '/portfolio/yellow-lambo-gallardo/02.jpg' },
      { src: '/portfolio/yellow-lambo-gallardo/03.jpg' },
    ],
  },
  {
    slug: 'red-rx7-fd',
    vehicle: 'Mazda RX-7 (FD)',
    make: 'Mazda',
    service: 'Show Build Detail',
    type: 'showcase',
    caption: 'Red FD RX-7 widebody on display — show-quality prep, front and rear angles.',
    photos: [
      { src: '/portfolio/red-rx7-fd/01.jpg' },
      { src: '/portfolio/red-rx7-fd/02.jpg' },
    ],
  },
  {
    slug: 'silver-supra-2jz',
    vehicle: 'Toyota Supra MkIV',
    make: 'Toyota',
    service: 'Engine Bay Detail',
    type: 'showcase',
    caption: 'Silver MkIV Supra — 2JZ-GTE engine bay detail, two angles.',
    photos: [
      { src: '/portfolio/silver-supra-2jz/01.jpg' },
      { src: '/portfolio/silver-supra-2jz/02.jpg' },
    ],
  },
  {
    slug: 'white-evo',
    vehicle: 'Mitsubishi Lancer Evolution',
    make: 'Mitsubishi',
    service: 'Engine Bay Detail',
    type: 'showcase',
    caption: 'White EVO — 4G63T engine bay with red valve cover, multi-angle detail shots.',
    photos: [
      { src: '/portfolio/white-evo/01.jpg' },
      { src: '/portfolio/white-evo/02.jpg' },
    ],
  },
  {
    slug: 'silver-r34',
    vehicle: 'Nissan Skyline R34',
    make: 'Nissan',
    service: 'Paint Work',
    type: 'showcase',
    caption: 'Silver R34 mid-paint — body in primer/factory finish with newly-painted bumper section.',
    photos: [
      { src: '/portfolio/silver-r34/01.jpg' },
    ],
  },
  {
    slug: 'red-acura-nsx',
    vehicle: 'Acura NSX',
    make: 'Acura',
    service: 'Show Build Detail',
    type: 'showcase',
    featured: true,
    caption: 'Formula Red NA1 NSX on Desmond EVO wheels — show-quality prep, lead night-shot.',
    photos: [
      { src: '/portfolio/red-acura-nsx/01.jpg' },
      { src: '/portfolio/red-acura-nsx/02.jpg' },
    ],
  },
  {
    slug: 'purple-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    featured: true,
    caption: 'Midnight Purple R33 GT-R — clean show prep, residential install front-angle.',
    photos: [
      { src: '/portfolio/purple-r33-gtr/01.jpg' },
    ],
  },
  {
    slug: 'red-r33-gtr',
    vehicle: 'Nissan Skyline R33 GT-R',
    make: 'Nissan',
    service: 'Showcase Detail',
    type: 'showcase',
    caption: 'Red R33 GT-R — golden-hour exterior at a snow-edged field.',
    photos: [
      { src: '/portfolio/red-r33-gtr/01.jpg' },
    ],
  },
  {
    slug: 'black-porsche-cayenne',
    vehicle: 'Porsche Cayenne',
    make: 'Porsche',
    service: 'Detail & Interior',
    type: 'showcase',
    caption: 'Black Cayenne at the shop — exterior detail and cabin reset.',
    photos: [
      { src: '/portfolio/black-porsche-cayenne/01.jpg' },
      { src: '/portfolio/black-porsche-cayenne/02.jpg' },
    ],
  },

  // ─── Before / After entries ────────────────
  {
    slug: 'red-svt-lightning-wash',
    vehicle: 'Ford F-150 SVT Lightning',
    make: 'Ford',
    service: 'Hand Wash & Detail',
    type: 'before-after',
    featured: true,
    caption: 'Red SVT Lightning — full foam bath and decontamination, finished at golden hour.',
    photos: [
      { src: '/portfolio/red-svt-lightning-wash/before.jpg', label: 'Before' },
      { src: '/portfolio/red-svt-lightning-wash/after.jpg', label: 'After' },
    ],
  },
  {
    slug: 'silver-jeep-cherokee-wash',
    vehicle: 'Jeep Cherokee',
    make: 'Jeep',
    service: 'Hand Wash & Detail',
    type: 'before-after',
    caption: 'Silver Jeep Cherokee — full hand wash with snow-foam decontamination.',
    photos: [
      { src: '/portfolio/silver-jeep-cherokee-wash/before.jpg', label: 'Before' },
      { src: '/portfolio/silver-jeep-cherokee-wash/after.jpg', label: 'After' },
    ],
  },
  {
    slug: 'black-vw-atlas-wash',
    vehicle: 'Volkswagen Atlas',
    make: 'Volkswagen',
    service: 'Hand Wash & Detail',
    type: 'before-after',
    caption: 'Black VW Atlas — exterior wash, decontamination, dry-and-dress finish.',
    photos: [
      { src: '/portfolio/black-vw-atlas-wash/before.jpg', label: 'Before' },
      { src: '/portfolio/black-vw-atlas-wash/after.jpg', label: 'After' },
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
      { src: '/portfolio/subaru-interior-detail/before.jpg', label: 'Before' },
      { src: '/portfolio/subaru-interior-detail/after.jpg', label: 'After' },
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
