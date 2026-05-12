// ─────────────────────────────────────────────
//  VanityWorks — Data Layer
// ─────────────────────────────────────────────

export interface Service {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  startingPrice: string
  duration: string
  popular?: boolean
  jdmExotic?: boolean
}

export interface Certification {
  name: string
  issuer: string
  badge: string
  description: string
  color: string
  detail: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface Testimonial {
  id: string
  author: string
  vehicle: string
  rating: number
  text: string
  avatar?: string
}

export interface GalleryItem {
  id: string
  title: string
  service: string
  before?: string
  after?: string
  image: string
  vehicle: string
  make?: string
}

// ─────────────────────────────────────────────
//  Services
// ─────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    tagline: 'Invisible armor. Unmatched protection.',
    description:
      'OPTICLE & XPEL-certified PPF installation that shields your paint from rock chips, scratches, and road debris — self-healing technology keeps it looking perfect.',
    longDescription:
      'Our OPTICLE PPF and XPEL-certified technicians apply premium Paint Protection Film using precision computer-cut patterns for your exact vehicle model. PPF is an invisible, self-healing urethane film that absorbs the impact of road debris, rock chips, and scratches — protecting your paint while preserving the original color and finish. We offer full-front coverage, full-body wraps, and custom zone packages. As a certified OPTICLE installer, we have access to their full lineup of gloss, matte, and satin finish films.',
    icon: '🛡️',
    features: [
      'OPTICLE PPF & XPEL ULTIMATE PLUS™ films',
      'Computer-cut precision patterns',
      'Full front, partial, or full-body options',
      '10-year manufacturer warranty',
      'UV resistance — no yellowing',
      'Self-healing top coat technology',
      'JDM & exotic fitments available',
    ],
    startingPrice: '$899',
    duration: '1–3 days',
    popular: true,
    jdmExotic: true,
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    tagline: 'Liquid glass. Years of shine.',
    description:
      "Ceramic Pro certified coatings that bond permanently to your paint, delivering mirror-like gloss and chemical resistance that wax can't match.",
    longDescription:
      "VanityWorks uses Ceramic Pro and IGL Coatings systems to deliver a semi-permanent nano-ceramic layer that bonds chemically to your car's paint. The result is extreme hydrophobic behavior, UV protection, chemical resistance, and a depth of gloss that gets better with every wash. As a certified Ceramic Pro installer, we back our work with the Ceramic Pro warranty program. Choose from our single-stage Express to our flagship Gold Package for maximum protection.",
    icon: '✨',
    features: [
      'Ceramic Pro Certified Installer',
      'Nano-ceramic SiO₂ technology',
      'Hydrophobic self-cleaning surface',
      'UV and oxidation protection',
      '3H–9H hardness packages',
      'Express, Silver, Gold tiers',
      'Available on paint, wheels, glass & plastic',
    ],
    startingPrice: '$699',
    duration: '1–2 days',
    popular: true,
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    tagline: 'Erase years of damage. Reveal perfection.',
    description:
      'Multi-stage machine polishing that removes swirls, scratches, oxidation, and water spots — restoring depth and clarity to your factory finish.',
    longDescription:
      "Paint correction is the art of machine polishing a vehicle's clear coat to remove defects like swirl marks, fine scratches, water spots, oxidation, and buffer trails. Our detailers use Rupes, Flex, and Griots polishers with tailored compound and polish combos to achieve up to 95%+ defect removal on show-quality finishes. The process is documented with paint depth gauges and high-intensity lighting at every step.",
    icon: '🔆',
    features: [
      'Single, 2-stage, and 3-stage correction',
      'Rupes & Flex rotary/DA polishers',
      'Paint depth measurement (PTG)',
      'High-intensity lighting inspection',
      'Swirl, scratch & oxidation removal',
      'Show-car or pre-PPF prep available',
      'Documented before/after photography',
    ],
    startingPrice: '$449',
    duration: '8–16 hrs',
    popular: true,
    jdmExotic: true,
  },
  {
    slug: 'interior-exterior',
    name: 'Interior & Exterior Detail',
    tagline: 'Head to toe. Inside and out.',
    description:
      'The complete VanityWorks treatment — exterior wash, clay bar, hand polish, interior deep clean, leather care, carpet shampoo, and full dress-out.',
    longDescription:
      'Our Interior & Exterior Detail is the cornerstone reconditioning service every car deserves. We hand-wash, clay bar decontaminate, hand polish all painted surfaces, dress exterior trim and tires, clean all glass inside and out, deep-clean the cabin, shampoo carpets and upholstery, condition leather, and dress every interior surface back to showroom spec. Perfect as a standalone rejuvenation or as a prep step before any protection package.',
    icon: '🚗',
    features: [
      'Hand wash & iron decontamination',
      'Clay bar paint decontamination',
      'Hand polish & gloss enhancement',
      'Tire & exterior trim dressing',
      'Interior vacuum & full wipe-down',
      'Carpet & upholstery shampoo',
      'Leather conditioning & protection',
    ],
    startingPrice: '$249',
    duration: '5–8 hrs',
    popular: true,
    jdmExotic: true,
  },
  {
    slug: 'window-tint',
    name: 'Window Tint',
    tagline: 'Heat rejection. Privacy. Style.',
    description:
      "Premium ceramic window film installation — from privacy darkness to nearly clear infrared-rejecting film that keeps your cabin cool.",
    longDescription:
      "We offer Llumar, XPEL Prime, and FormulaOne ceramic window films — not dyed polyester. Ceramic film rejects up to 99% of UV rays and up to 65% of solar heat without interfering with cell signals, GPS, or radar detectors. Available from 5% (limo dark) to 90% (nearly clear IR film) in VLT levels to suit your state's legal limits and personal preferences.",
    icon: '🌫️',
    features: [
      'Llumar, XPEL Prime, FormulaOne films',
      'Ceramic IR-rejection technology',
      '99% UV blockage',
      'State-legal VLT options',
      'No signal interference',
      'Lifetime warranty against fading/bubbling',
      'Windshield ceramic strip available',
    ],
    startingPrice: '$249',
    duration: '3–5 hrs',
  },
  {
    slug: 'interior-protection',
    name: 'Interior Protection',
    tagline: 'Protect the inside as much as the outside.',
    description:
      'Leather sealing, fabric protection, and ceramic coating for interior surfaces — keeping your cabin looking showroom fresh.',
    longDescription:
      'Your interior takes daily abuse. VanityWorks offers comprehensive interior protection including Ceramic Pro Leather for seats, dashboards, and door panels; fabric/carpet coating for spill resistance; and UV-blocking treatments for plastics and vinyl. We also offer interior deep cleaning as a standalone or bundled service to prep surfaces before protection is applied.',
    icon: '🪑',
    features: [
      'Ceramic Pro Leather sealing',
      'Fabric & carpet nano-coating',
      'UV protection for plastics/vinyl',
      'Interior deep clean included',
      'Anti-microbial treatment available',
      'Odor elimination',
      'Exotic/JDM material handling',
    ],
    startingPrice: '$299',
    duration: '4–8 hrs',
    jdmExotic: true,
  },
]

// ─────────────────────────────────────────────
//  Certifications
// ─────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    name: 'OPTICLE PPF Certified',
    issuer: 'OPTICLE',
    badge: 'OPT',
    description:
      'Certified OPTICLE Paint Protection Film installer — full access to their gloss, matte, and satin film lineup with factory-backed installation standards.',
    color: '',
    detail:
      'OPTICLE PPF is engineered for enthusiast and exotic vehicles requiring precision fitment and optically clear finish. Their self-healing urethane technology ranks among the most advanced films on the market.',
  },
  {
    name: 'Ceramic Pro Certified',
    issuer: 'Ceramic Pro',
    badge: 'CP',
    description:
      'Authorized Ceramic Pro installer — certified for Sport, Silver, and Gold coating packages with the ability to issue Ceramic Pro warranty documentation.',
    color: '',
    detail:
      'Ceramic Pro is the global standard in nano-ceramic coatings. Certification requires hands-on training and quality audits. Only certified installers can issue the transferable Ceramic Pro warranty.',
  },
  {
    name: 'DETAILWISE Certified',
    issuer: 'DETAILWISE Pro Academy',
    badge: 'DW',
    description:
      'DETAILWISE professional certification covering advanced paint correction, multi-stage polishing, and surface preparation techniques.',
    color: '',
    detail:
      'DETAILWISE certification is an industry benchmark for paint correction skill. The program covers defect analysis, polisher mechanics, compound selection, and finish verification using PTG and light inspection.',
  },
  {
    name: 'XPEL Certified',
    issuer: 'XPEL Technologies',
    badge: 'XPL',
    description:
      "Authorized XPEL PPF & window film installer with factory training on XPEL ULTIMATE PLUS™ and Prime window film systems.",
    color: '',
    detail:
      'XPEL certification requires direct factory training and pattern accuracy verification. Certified installers have access to XPEL DAP software for computer-cut precision patterns on every make and model.',
  },
  {
    name: 'IGL Coatings Approved',
    issuer: 'IGL Coatings',
    badge: 'IGL',
    description:
      'Approved applicator for IGL Kenzo, Quartz, and Premier coating lines — eco-friendly, high-solids nano-ceramic formulas.',
    color: '',
    detail:
      'IGL Coatings are renowned for their eco-conscious chemistry and industry-leading hardness ratings. Their Kenzo line delivers 10H ceramic protection with exceptional slickness and longevity.',
  },
]

// ─────────────────────────────────────────────
//  Stats
// ─────────────────────────────────────────────

export const stats: Stat[] = [
  { value: '8', label: 'Years in Business', suffix: '+' },
  { value: '2,400', label: 'Vehicles Protected', suffix: '+' },
  { value: '97', label: 'Client Satisfaction', suffix: '%' },
  { value: '5', label: 'Active Certifications' },
]

// ─────────────────────────────────────────────
//  Testimonials
// ─────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Marcus D.',
    vehicle: '2023 Nissan GT-R Premium',
    rating: 5,
    text: 'These guys know R35s inside and out. Full PPF + ceramic on my GT-R and the result was insane. Not a single installer bubble, perfect edge work on the bumper cutouts. Worth every penny.',
  },
  {
    id: '2',
    author: 'Sofia R.',
    vehicle: '2022 Porsche 911 GT3',
    rating: 5,
    text: 'Brought in my GT3 for a 3-stage paint correction before ceramic coating. The paint looks better than it did at the dealership. The before/after photos they sent me were jaw-dropping.',
  },
  {
    id: '3',
    author: 'Jake T.',
    vehicle: '2021 Subaru WRX STI',
    rating: 5,
    text: 'Got the full front PPF package and ceramic coating. The customer service and communication throughout was top tier. Car looks absolutely mint and I trust them with my build 100%.',
  },
  {
    id: '4',
    author: 'Kira M.',
    vehicle: '2024 BMW M4 Competition',
    rating: 5,
    text: "Full body PPF wrap in stealth finish. I've been to a few shops in the city and VanityWorks is in a different league. The attention to detail on every panel is unreal.",
  },
]

// ─────────────────────────────────────────────
//  Gallery
// ─────────────────────────────────────────────

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'GT-R R35 Full PPF Wrap',
    service: 'Paint Protection Film',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    vehicle: 'Nissan GT-R R35',
    make: 'Nissan',
  },
  {
    id: '2',
    title: 'M4 Competition Ceramic',
    service: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    vehicle: 'BMW M4 Competition',
    make: 'BMW',
  },
  {
    id: '3',
    title: 'GR Supra Paint Correction',
    service: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    vehicle: 'Toyota GR Supra A90',
    make: 'Toyota',
  },
  {
    id: '4',
    title: 'McLaren 720S Ceramic',
    service: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    vehicle: 'McLaren 720S',
    make: 'McLaren',
  },
  {
    id: '5',
    title: 'WRX STI Interior + Exterior',
    service: 'Interior & Exterior Detail',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
    vehicle: 'Subaru WRX STI',
    make: 'Subaru',
  },
  {
    id: '6',
    title: '992 Turbo S Full PPF',
    service: 'Paint Protection Film',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    vehicle: 'Porsche 992 Turbo S',
    make: 'Porsche',
  },
  {
    id: '7',
    title: 'EVO X Ceramic + Detail',
    service: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    vehicle: 'Mitsubishi EVO X',
    make: 'Mitsubishi',
  },
  {
    id: '8',
    title: 'E46 M3 Paint Correction',
    service: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80',
    vehicle: 'BMW E46 M3',
    make: 'BMW',
  },
  {
    id: '9',
    title: 'Honda Prelude SiR Full Detail',
    service: 'Interior & Exterior Detail',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    vehicle: 'Honda Prelude SiR',
    make: 'Honda',
  },
  {
    id: '10',
    title: 'Skyline R34 PPF + Ceramic',
    service: 'Paint Protection Film',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    vehicle: 'Nissan Skyline R34',
    make: 'Nissan',
  },
  {
    id: '11',
    title: 'M3 Competition Ceramic',
    service: 'Ceramic Coating',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    vehicle: 'BMW M3 Competition',
    make: 'BMW',
  },
  {
    id: '12',
    title: '911 GT3 Paint Correction',
    service: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80',
    vehicle: 'Porsche 911 GT3',
    make: 'Porsche',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
