// ─────────────────────────────────────────────
//  VanityWorks — Data Layer
// ─────────────────────────────────────────────

export interface ServiceSpec {
  label: string
  value: string
  unit?: string
}

export interface ServicePackage {
  tier: string
  name: string
  desc: string
  priceLabel: string
  priceValue: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
}

export interface ServiceProcessStep {
  num: string
  title: string
  body: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceCrossSell {
  num: string
  name: string
  price: string
  arrowLabel: string
  href: string
}

export interface Service {
  slug: string
  name: string
  number: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  startingPrice: string
  duration: string
  popular?: boolean
  jdmExotic?: boolean

  // New editorial fields
  shortName?: string
  indexBlurb?: string
  indexTags?: string[]
  indexPriceLabel?: string
  indexPriceValue?: string
  indexCtaLabel?: string
  heroPromiseLead?: string
  heroPromiseMuted?: string
  specs?: ServiceSpec[]
  whatisLead?: string
  whatisParagraphs?: string[]
  packages?: ServicePackage[]
  packagesNote?: string
  process?: ServiceProcessStep[]
  faq?: ServiceFaq[]
  crossSell?: ServiceCrossSell[]
  finalEyebrow?: string
  finalTitle?: string
  finalSub?: string
  finalPrimaryCta?: { label: string; href: string }
  finalSecondaryCta?: { label: string; href: string }
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

export interface ServiceArea {
  slug: string
  city: string
  state: string
  region: string
  tagline: string
  intro: string
  neighborhoods: string[]
  highlights: { label: string; body: string }[]
  driveCopy: string
  metaDescription: string
}

// ─────────────────────────────────────────────
//  Services
// ─────────────────────────────────────────────

export const services: Service[] = [
  {
    slug: 'full-detail',
    name: 'Full Detail',
    shortName: 'Full Detail',
    number: '01',
    tagline: 'Clean inside and out. The reset every car needs.',
    description:
      'A complete reset — every surface inside and out, cleaned by hand. The foundation under every other service we offer.',
    longDescription:
      'The Full Detail is exactly what it sounds like: every surface, inside and out, cleaned by hand.',
    features: [
      'Full interior deep clean',
      'Steam clean + stain extraction',
      'Leather clean + treatment',
      '2-step hand wash + wheels',
      'Exterior spray wax finish',
    ],
    startingPrice: '$250',
    duration: '5–8 hrs',
    popular: true,

    indexBlurb:
      "A complete reset — every surface inside and out, cleaned by hand. Interior deep clean, steam, stain extraction, leather treatment, and a 2-step hand wash. The foundation under everything else.",
    indexTags: ['Interior + exterior', '2-step wash', '5–8 hrs'],
    indexPriceLabel: 'Flat rate',
    indexPriceValue: '$250',
    indexCtaLabel: 'View service',
    heroPromiseLead: 'Inside and out, by hand.',
    heroPromiseMuted:
      'The reset every car needs before anything else — and the foundation under every other service we offer.',
    specs: [
      { label: 'Starting at', value: '$250' },
      { label: 'Time', value: '5–8', unit: 'hrs' },
      { label: 'Includes', value: 'Interior + 2-step wash' },
      { label: 'Best for', value: 'Daily drivers, resale prep' },
    ],
    whatisLead:
      "A complete reset — the deep clean a car gets before it earns the good stuff.",
    whatisParagraphs: [
      "The Full Detail is exactly what it sounds like: **every surface, inside and out, cleaned by hand.** Interior gets a thorough vacuum, every panel scrubbed and wiped, steam cleaning, stain extraction, and leather cleaning and treatment.",
      "Outside, a **two-step hand wash** with deep-cleaned wheels — faces, spokes, and barrels — finished with an exterior spray wax for protection and shine.",
      "It's also the foundation for everything else. **Correction and ceramic both start here**, because you can't protect or polish paint that isn't clean first.",
    ],
    packages: [
      {
        tier: 'Tier 01 — Base',
        name: 'Full Detail',
        desc: 'The complete interior + exterior reset. Where every car starts.',
        priceLabel: 'Flat rate',
        priceValue: '$250',
        features: [
          'Full interior deep clean',
          'Steam clean + stain extraction',
          'Leather clean + treatment',
          '2-step hand wash + wheels',
          'Exterior spray wax finish',
        ],
        ctaLabel: 'Book Full Detail',
        ctaHref: '/book?service=Full+Detail',
        featured: true,
      },
      {
        tier: 'Tier 02 — Add gloss',
        name: '+ Paint Correction',
        desc: "Remove swirls and defects. Restore the gloss the wash can't.",
        priceLabel: 'From',
        priceValue: '$350',
        features: [
          'Everything in Full Detail',
          'Paint decontamination',
          '1, 2, or full-step polish',
          'Up to 99% defect removal',
        ],
        ctaLabel: 'View Correction →',
        ctaHref: '/services/paint-correction',
      },
      {
        tier: 'Tier 03 — Lock it in',
        name: '+ Ceramic Coating',
        desc: 'Years of gloss and protection. Easier washes for the life of the coat.',
        priceLabel: 'From',
        priceValue: '$750',
        features: [
          'Everything above, plus',
          '1-step polish included',
          '1, 3, or 5-year coatings',
          'Hydrophobic + UV protection',
        ],
        ctaLabel: 'View Ceramic →',
        ctaHref: '/services/ceramic-coating',
      },
    ],
    packagesNote:
      "**Full Detail is the foundation.** Correction and ceramic both include the interior clean and decontamination — so adding them isn't double-paying, it's building up. Not sure where to start? Book a Full Detail and we'll tell you what your paint actually needs.",
    process: [
      { num: '01', title: 'Intake & vacuum', body: 'Full assessment, then a thorough vacuum of carpets, seats, mats, and every crevice.' },
      { num: '02', title: 'Interior deep clean', body: 'Panels scrubbed and wiped, steam cleaning, stain extraction, leather cleaned and treated.' },
      { num: '03', title: '2-step hand wash', body: 'Exterior washed by hand, wheels deep-cleaned — faces, spokes, and barrels.' },
      { num: '04', title: 'Wax & walkthrough', body: 'Exterior spray wax for shine and protection, then a final walkthrough together.' },
    ],
    faq: [
      { question: 'How long does a full detail take?', answer: "Typically 5–8 hours depending on the size of the vehicle and how dirty it is. We don't rush — the price is for the result, not the clock." },
      { question: 'Do I need a correction or ceramic too?', answer: "Not necessarily. A full detail restores a car that's just dirty. Correction is for paint with swirls and scratches; ceramic is for long-term protection. If you're not sure, book the detail and we'll tell you honestly what — if anything — your paint needs." },
      { question: 'Can you come to me?', answer: 'Yes — mobile service is available across Chicagoland and the North Shore for your home garage, condo parking, or office driveway. Reach out with your location for details.' },
      { question: 'What if my interior has heavy stains or pet hair?', answer: "Stain extraction and steam cleaning are included. Severe cases (heavy pet hair, deep stains, odor treatment) may need extra time — we'll flag it up front and never surprise you with the bill." },
    ],
    crossSell: [
      { num: '/ 02', name: 'Paint Correction', price: 'From $350', arrowLabel: 'Restore the gloss', href: '/services/paint-correction' },
      { num: '/ 03', name: 'Ceramic Coating', price: 'From $750', arrowLabel: 'Lock in the shine', href: '/services/ceramic-coating' },
      { num: '/ 04', name: 'Paint Protection Film', price: 'Quote by vehicle', arrowLabel: 'Armor the paint', href: '/services/paint-protection-film' },
    ],
    finalEyebrow: 'Now booking — Summer 2026',
    finalTitle: 'Start with clean.',
    finalSub:
      "Book a Full Detail and we'll give you an honest read on what your car actually needs — **no upsell, no pressure.**",
    finalPrimaryCta: { label: 'Book Full Detail', href: '/book?service=Full+Detail' },
    finalSecondaryCta: { label: 'All services', href: '/services' },
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    shortName: 'Paint Correction',
    number: '02',
    tagline: 'Erase years of damage. Reveal perfection.',
    description:
      'Multi-stage machine polishing that removes swirls, scratches, oxidation, and water spots — up to 99% defect removal.',
    longDescription:
      "Multi-stage machine polishing that restores the depth and clarity factory paint loses over time.",
    features: [
      'Removes up to 99% of defects',
      'Single, 2-stage, full-step options',
      'Paint depth measurement',
      'Show-car or pre-PPF prep',
    ],
    startingPrice: '$350',
    duration: '8–16 hrs',
    popular: true,
    jdmExotic: true,

    indexBlurb:
      "Multi-stage machine polishing that removes swirls, scratches, oxidation, and water spots. One, two, or full-step depending on your paint — up to 99% defect removal. Interior clean and decon included.",
    indexTags: ['1 / 2 / full-step', 'Up to 99%', '8–16 hrs'],
    indexPriceLabel: 'From',
    indexPriceValue: '$350',
    indexCtaLabel: 'View service',
    heroPromiseLead: 'Erase the years off your paint.',
    heroPromiseMuted:
      'Swirls, scratches, oxidation, water spots — machine-polished out until the finish looks deeper than the showroom floor.',
    specs: [
      { label: 'Starting at', value: '$350' },
      { label: 'Time', value: '8–16', unit: 'hrs' },
      { label: 'Includes', value: 'Interior clean + decon' },
      { label: 'Removes', value: 'Up to 99% of defects' },
    ],
    whatisLead:
      'Multi-stage machine polishing that restores the depth and clarity factory paint loses over time.',
    whatisParagraphs: [
      "Paint correction means **carefully cutting and refining the clear coat** with rotary and dual-action polishers to remove the swirls, scratches, oxidation, and water spots that build up over the years.",
      'Every job starts with the **full detail and paint decontamination** included — you can\'t polish dirty paint. From there, we choose between **1-step, 2-step, or full-step correction** depending on how much defect we\'re removing.',
      'The result is paint that **looks deeper than it did at the dealership** — under any lighting. Most clients add a ceramic coating after to lock the gloss in.',
    ],
    packages: [
      {
        tier: 'Tier 01 — Light',
        name: '1-Step Polish',
        desc: 'A single refining pass for lighter paint that needs a gloss boost.',
        priceLabel: 'From',
        priceValue: '$350',
        features: [
          'Removes 30–40% of defects',
          'Light swirls + haze',
          'Improves overall gloss',
          'Interior clean + decon included',
        ],
        ctaLabel: 'Book 1-Step',
        ctaHref: '/book?service=1-Step+Polish',
      },
      {
        tier: 'Tier 02 — Sweet spot',
        name: '2-Step Correction',
        desc: 'A cutting pass plus a polish — the sweet spot for most cars.',
        priceLabel: 'From',
        priceValue: '$450',
        features: [
          'Removes 60–80% of defects',
          'Buffing pass for swirls',
          'Moderate scratches removed',
          'Finished with refining polish',
        ],
        ctaLabel: 'Book 2-Step',
        ctaHref: '/book?service=2-Step+Correction',
        featured: true,
      },
      {
        tier: 'Tier 03 — Maximum',
        name: 'Full-Step Correction',
        desc: 'Maximum cut and refinement for paint that needs everything.',
        priceLabel: 'From',
        priceValue: '$550',
        features: [
          'Removes 85–99% of defects',
          'Heavy cut for deep swirls',
          'Targets deep defects',
          'Finished for a show-ready gloss',
        ],
        ctaLabel: 'Book Full-Step',
        ctaHref: '/book?service=Full-Step+Correction',
      },
    ],
    packagesNote:
      "**Not sure how many stages you need?** Book a Full Detail first — we\'ll measure your paint depth, check it under lighting, and give you an honest read before recommending the right level of correction.",
    process: [
      { num: '01', title: 'Wash & decon', body: 'Full interior clean, then paint decontamination to strip embedded contaminants.' },
      { num: '02', title: 'Inspect & measure', body: 'Paint depth measured, defects assessed under high-intensity lighting.' },
      { num: '03', title: 'Cut & polish', body: 'The right number of correction stages with rotary and DA polishers.' },
      { num: '04', title: 'Final inspection', body: 'Re-checked under lighting, wiped down, and walked through with you.' },
    ],
    faq: [
      { question: "What's the difference between the stages?", answer: "It's how aggressively we cut the clear coat. 1-step enhances and removes light defects (30–40%). 2-step adds a cutting pass for moderate damage (60–80%). Full-step is maximum correction for heavily damaged paint (85–99%). More stages = more defect removal, more time, higher cost." },
      { question: 'Will correction last forever?', answer: 'The defects we remove are gone for good, but new swirls can form from washing and daily use. To protect the work, most clients add a ceramic coating on top — it locks in the gloss and makes the finish far easier to maintain.' },
      { question: 'Why does it take so long?', answer: 'Correction is slow, careful work — 8 to 16 hours depending on the stage and the car. Every panel is polished by hand-guided machine, checked under lighting, and refined. Rushing it risks burning through clear coat. The time is the craft.' },
      { question: 'Is the interior clean really included?', answer: "Yes. Every correction includes a full interior cleaning and paint decontamination at no extra charge — they're part of the prep, not an add-on." },
    ],
    crossSell: [
      { num: '/ 01', name: 'Full Detail', price: 'Flat $250', arrowLabel: 'Start with clean', href: '/services/full-detail' },
      { num: '/ 03', name: 'Ceramic Coating', price: 'From $750', arrowLabel: 'Lock in the gloss', href: '/services/ceramic-coating' },
      { num: '/ 04', name: 'Paint Protection Film', price: 'Quote by vehicle', arrowLabel: 'Armor the paint', href: '/services/paint-protection-film' },
    ],
    finalEyebrow: 'Now booking — Summer 2026',
    finalTitle: 'Restore the gloss.',
    finalSub:
      "We'll measure your paint, recommend the right number of stages, and tell you exactly what you'll get — **no overselling.**",
    finalPrimaryCta: { label: 'Book Correction', href: '/book?service=Paint+Correction' },
    finalSecondaryCta: { label: 'All services', href: '/services' },
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    shortName: 'Ceramic Coating',
    number: '03',
    tagline: 'Liquid glass. Years of shine.',
    description:
      'A bonded nano-ceramic layer that beads water, repels contaminants, and holds gloss for years — not weeks like wax.',
    longDescription:
      'A durable protective layer that bonds to your paint and changes how you own the car.',
    features: [
      '1, 3, or 5-year coatings',
      'Hydrophobic + UV protection',
      'Detail + decon + 1-step polish included',
      'Wheels & glass option',
    ],
    startingPrice: '$750',
    duration: '1–2 days',
    popular: true,

    indexBlurb:
      'A bonded nano-ceramic layer that beads water, repels contaminants, and holds its gloss for years. One, three, or five-year coatings. Includes the detail, decon, and a 1-step polish before sealing.',
    indexTags: ['1 / 3 / 5-year', 'Hydrophobic', 'Wheels + glass option'],
    indexPriceLabel: 'From',
    indexPriceValue: '$750',
    indexCtaLabel: 'View service',
    heroPromiseLead: 'Liquid glass for your paint.',
    heroPromiseMuted:
      'A permanent bonded layer that beads water, repels contaminants, and keeps the gloss for years — not the weeks a wax gives you.',
    specs: [
      { label: 'Starting at', value: '$750' },
      { label: 'Lasts', value: '1–5', unit: 'yrs' },
      { label: 'Includes', value: 'Detail + decon + 1-step' },
      { label: 'Finish', value: 'Hydrophobic gloss' },
    ],
    whatisLead:
      'A durable protective layer that bonds to your paint and changes how you own the car.',
    whatisParagraphs: [
      "Ceramic coating is a **nano-ceramic liquid that chemically bonds to your clear coat**, leaving a hard, glassy layer that water beads off and dirt won\'t stick to.",
      'Every coating job includes **the Full Detail and a 1-step polish** before sealing — because once the coating is on, whatever\'s underneath is locked in for years.',
      'The result: **deeper gloss, easier washing, and protection that holds for 1, 3, or 5 years** depending on the package. After a coating, most of your maintenance is just rinsing.',
    ],
    packages: [
      {
        tier: 'Tier 01 — Entry',
        name: '1-Year Coating',
        desc: 'Real ceramic protection at the most accessible tier. Great first step.',
        priceLabel: 'From',
        priceValue: '$750',
        features: [
          '1 year of protection',
          'Hydrophobic self-cleaning',
          'Gloss + UV protection',
          'Detail + decon + 1-step included',
        ],
        ctaLabel: 'Book 1-Year',
        ctaHref: '/book?service=1-Year+Ceramic',
      },
      {
        tier: 'Tier 02 — Sweet spot',
        name: '3-Year Coating',
        desc: 'The sweet spot of cost and longevity. What most clients choose.',
        priceLabel: 'From',
        priceValue: '$900',
        features: [
          '3 years of protection',
          'Stronger hydrophobic finish',
          'Deeper, longer-lasting gloss',
          'Detail + decon + 1-step included',
        ],
        ctaLabel: 'Book 3-Year',
        ctaHref: '/book?service=3-Year+Ceramic',
        featured: true,
      },
      {
        tier: 'Tier 03 — Maximum',
        name: '5-Year Coating',
        desc: 'The longest protection we offer. Set it and forget it for years.',
        priceLabel: 'From',
        priceValue: '$1,100',
        features: [
          '5 years of protection',
          'Maximum hardness + durability',
          'Best long-term value',
          'Detail + decon + 1-step included',
        ],
        ctaLabel: 'Book 5-Year',
        ctaHref: '/book?service=5-Year+Ceramic',
      },
    ],
    packagesNote:
      "**All ceramic packages include the Full Detail, decontamination, and a 1-step polish** — so you\'re not paying for prep separately. Heavier swirls may need a deeper correction first; we\'ll flag it before sealing anything in.",
    process: [
      { num: '01', title: 'Clean & decon', body: 'Full interior clean and paint decontamination to strip the surface bare.' },
      { num: '02', title: '1-step polish', body: 'A polishing pass so the paint is flawless before anything gets sealed in.' },
      { num: '03', title: 'Coat & cure', body: 'Nano-ceramic applied by hand in controlled conditions, then left to cure.' },
      { num: '04', title: 'Inspect & hand off', body: 'Final inspection, beading check, and aftercare instructions for the cure window.' },
    ],
    faq: [
      { question: 'How is this different from wax?', answer: "Wax sits on top of the paint and washes away in weeks. Ceramic coating chemically bonds to the clear coat and lasts years — with far stronger gloss, water beading, and resistance to contaminants and UV. It's a different category of protection entirely." },
      { question: 'Can I wash my car after coating?', answer: "Yes — and washing gets easier, since dirt and water sheet right off. We'll give you a short cure-window guideline (usually a few days of no washing right after application) and simple maintenance tips to get the full life out of the coating." },
      { question: 'Do I need a correction first?', answer: "A 1-step polish is already included. If your paint has heavier swirls or scratches, we may recommend a fuller correction before coating — because the coating locks in whatever's underneath. We'll discuss it with you before sealing anything in." },
      { question: 'Can you coat wheels and windows too?', answer: 'Yes, wheels and windows can be added depending on the wheel specs. Coated wheels are much easier to keep clean and coated glass sheds rain. Ask the detailer when you book and we\'ll quote it for your setup.' },
    ],
    crossSell: [
      { num: '/ 01', name: 'Full Detail', price: 'Flat $250', arrowLabel: 'Start with clean', href: '/services/full-detail' },
      { num: '/ 02', name: 'Paint Correction', price: 'From $350', arrowLabel: 'Deeper gloss first', href: '/services/paint-correction' },
      { num: '/ 04', name: 'Paint Protection Film', price: 'Quote by vehicle', arrowLabel: 'Add physical armor', href: '/services/paint-protection-film' },
    ],
    finalEyebrow: 'Now booking — Summer 2026',
    finalTitle: 'Lock in the shine.',
    finalSub:
      "Pick the package, we'll handle the prep, polish, and seal — **gloss that lasts for years.**",
    finalPrimaryCta: { label: 'Book Ceramic', href: '/book?service=Ceramic+Coating' },
    finalSecondaryCta: { label: 'All services', href: '/services' },
  },
  {
    slug: 'paint-protection-film',
    name: 'Paint Protection Film',
    shortName: 'Protection Film',
    number: '04',
    tagline: 'Invisible armor. Quoted by vehicle.',
    description:
      'Self-healing urethane film that takes rock chips, road rash, and bug etching so your paint never does.',
    longDescription:
      "A clear urethane film that takes the damage so your paint doesn't.",
    features: [
      'Self-healing top coat',
      'Computer-cut precision',
      'Partial to full-body coverage',
      'Manufacturer warranty',
    ],
    startingPrice: 'By vehicle',
    duration: '1–3 days',
    jdmExotic: true,

    indexBlurb:
      'Self-healing urethane film that takes rock chips, road rash, and bug etching so your paint never does. Partial to full-body coverage, computer-cut and hand-finished. Priced per vehicle and install.',
    indexTags: ['Self-healing', 'Partial → full body', 'By quote'],
    indexPriceLabel: 'Pricing',
    indexPriceValue: 'By vehicle',
    indexCtaLabel: 'Request quote',
    heroPromiseLead: 'Invisible armor for your paint.',
    heroPromiseMuted:
      'A self-healing urethane film that takes the rock chips, road rash, and bug etching so your clear coat never has to.',
    specs: [
      { label: 'Pricing', value: 'By vehicle' },
      { label: 'Coverage', value: 'Partial to full body' },
      { label: 'Film', value: 'Self-healing urethane' },
      { label: 'Quote', value: 'Message detailer' },
    ],
    whatisLead:
      "A clear urethane film that takes the damage so your paint doesn't.",
    whatisParagraphs: [
      "PPF is a **thick, optically clear film** applied directly to your paint. It absorbs the impacts that cause rock chips, road rash, and bug etching — and its **self-healing top coat** flattens out light scratches with heat.",
      "We use **computer-cut precision patterns** for each vehicle, hand-wrap every edge, and finish with bulk inspection so nothing lifts. Coverage scales from high-impact zones to **full body wraps**.",
      "PPF is the **only physical chip defense** for your paint. Add a ceramic on top of the film for the best of both — gloss, water beading, and self-healing armor underneath.",
    ],
    packages: [
      {
        tier: 'Tier 01 — High-impact',
        name: 'High-Impact',
        desc: 'The areas that take the most abuse — front bumper, partial hood, mirrors.',
        priceLabel: 'Quoted by vehicle',
        priceValue: 'Front-end',
        features: [
          'Front bumper',
          'Partial hood + fenders',
          'Mirrors + headlights',
          'Best value entry point',
        ],
        ctaLabel: 'Request quote',
        ctaHref: '/contact?service=PPF+High-Impact',
      },
      {
        tier: 'Tier 02 — Full front',
        name: 'Full Front',
        desc: 'Complete frontal protection — everything the road throws at you, covered.',
        priceLabel: 'Quoted by vehicle',
        priceValue: 'Full front',
        features: [
          'Full hood + full fenders',
          'Front bumper + mirrors',
          'Headlights + A-pillars',
          'The complete daily-driver answer',
        ],
        ctaLabel: 'Request quote',
        ctaHref: '/contact?service=PPF+Full+Front',
        featured: true,
      },
      {
        tier: 'Tier 03 — Full body',
        name: 'Full Body',
        desc: 'Every painted panel wrapped. Maximum protection for the cars worth it.',
        priceLabel: 'Quoted by vehicle',
        priceValue: 'Full body',
        features: [
          'Every painted panel',
          'Total chip + scratch defense',
          'Preserves resale value',
          'For exotics + collectibles',
        ],
        ctaLabel: 'Request quote',
        ctaHref: '/contact?service=PPF+Full+Body',
      },
    ],
    packagesNote:
      "**PPF is quoted, not priced.** An honest number depends on your exact vehicle, the panels, and edges involved. Send us your car and the coverage you\'re thinking — we\'ll come back with a real quote, not a placeholder.",
    process: [
      { num: '01', title: 'Prep & decon', body: 'Paint washed and decontaminated so the film bonds to a flawless surface.' },
      { num: '02', title: 'Computer-cut', body: 'Film precision-cut to your exact vehicle for clean, accurate panel coverage.' },
      { num: '03', title: 'Install & finish', body: 'Film laid, squeegeed, and edges hand-wrapped so nothing lifts.' },
      { num: '04', title: 'Cure & inspect', body: 'Left to set, final-inspected, and walked through with aftercare guidance.' },
    ],
    faq: [
      { question: "Why isn't PPF priced on the site?", answer: "Because an honest PPF price depends on the vehicle and the install. A compact car's front end and an exotic's full body are completely different jobs. Rather than post a fake \"starting at\" number, we quote your actual car and coverage so the price you hear is the price you pay." },
      { question: 'Will the film yellow or peel?', answer: "Quality modern film is UV-stable and engineered not to yellow, with a manufacturer warranty behind it. Properly installed with hand-wrapped edges, it won't peel or lift. Cheap film and rushed installs are where those horror stories come from — which is exactly what we don't do." },
      { question: 'What does "self-healing" actually mean?', answer: "The film's top layer is designed so light scratches and swirl marks reflow and disappear with heat — sun, warm water, or a heat gun. Deeper impacts the film absorbs to protect the paint underneath; minor surface marks simply heal out." },
      { question: 'Should I add ceramic on top?', answer: "It's a great combo. PPF takes the impacts; ceramic on top of the film adds gloss, water beading, and makes the whole surface easier to clean. Many clients do both — ask about bundling when you request your quote." },
    ],
    crossSell: [
      { num: '/ 01', name: 'Full Detail', price: 'Flat $250', arrowLabel: 'Start with clean', href: '/services/full-detail' },
      { num: '/ 02', name: 'Paint Correction', price: 'From $350', arrowLabel: 'Polish first', href: '/services/paint-correction' },
      { num: '/ 03', name: 'Ceramic Coating', price: 'From $750', arrowLabel: 'Add gloss on top', href: '/services/ceramic-coating' },
    ],
    finalEyebrow: 'Now booking — Summer 2026',
    finalTitle: 'Quote your build.',
    finalSub:
      "Tell us about the car and the coverage you want — **we\'ll quote a real number, not a placeholder.**",
    finalPrimaryCta: { label: 'Request PPF quote', href: '/contact?service=PPF' },
    finalSecondaryCta: { label: 'All services', href: '/services' },
  },
]


// ─────────────────────────────────────────────
//  Certifications
// ─────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    name: 'DetailWise Academy — PPF Training',
    issuer: 'DetailWise Academy',
    badge: 'DW',
    description:
      'Certificate of completion in Paint Protection Film Training — hands-on credential issued by DetailWise Academy in partnership with Opticle and Car Supplies Warehouse.',
    color: '',
    detail:
      'A multi-day hands-on PPF training program: pattern selection, film handling, edge wrapping, live install practice, and final inspection. Trainers: Jason Otterness and Shane Stoleton. The credential covers Opticle gloss, matte, and satin films.',
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
//  Gallery — flat list across every photo of every portfolio entry.
//  44 tiles total (every picture surfaced, not just covers).
// ─────────────────────────────────────────────

import { allPortfolioPhotos } from './portfolio'

export const galleryItems: GalleryItem[] = allPortfolioPhotos.map((photo) => ({
  id: photo.id,
  title: photo.vehicle,
  service: photo.service,
  image: photo.src,
  vehicle: photo.vehicle,
  make: photo.make,
}))

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

// ─────────────────────────────────────────────
//  Service Areas
// ─────────────────────────────────────────────

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'chicago',
    city: 'Chicago',
    state: 'IL',
    region: 'Cook County',
    tagline: 'Mobile detailing across every Chicago neighborhood.',
    intro:
      "VanityWorks brings DetailWise Academy–certified Opticle PPF installs and professional ceramic coatings to driveways, parking garages, and condo buildings across Chicago. Whether your build lives in a Gold Coast tower, a Lincoln Park brownstone, or a West Loop garage, we'll come to you with everything we need.",
    neighborhoods: [
      'Lincoln Park',
      'Gold Coast',
      'River North',
      'West Loop',
      'Wicker Park',
      'Logan Square',
      'Lakeview',
      'Bucktown',
      'Old Town',
      'South Loop',
    ],
    highlights: [
      {
        label: 'Indoor garage work',
        body: 'PPF and ceramic coating require clean, climate-controlled space. We bring lighting, power, and containment to your building garage.',
      },
      {
        label: 'High-rise & condo friendly',
        body: 'No need to drop off — schedule a multi-day install at your residence and we coordinate with your building staff.',
      },
      {
        label: 'JDM & exotic specialists',
        body: 'Chicago has a serious enthusiast scene. From R35s in West Town to McLarens in River North, we handle the rare stuff.',
      },
    ],
    driveCopy: 'Centrally located — we cover all 77 Chicago community areas.',
    metaDescription:
      'Mobile PPF, ceramic coating, and paint correction in Chicago, IL. DetailWise Academy–certified Opticle PPF installer — we come to your home, condo garage, or office anywhere in the city.',
  },
  {
    slug: 'naperville',
    city: 'Naperville',
    state: 'IL',
    region: 'DuPage County',
    tagline: 'Premium auto detailing for Naperville and the western suburbs.',
    intro:
      "From Cress Creek to downtown Naperville, our team brings full-spec PPF installs, ceramic coating, and paint correction directly to your driveway or office. Naperville's high-end residential garages are perfect for the multi-day installs that PPF and coatings require.",
    neighborhoods: [
      'Downtown Naperville',
      'Cress Creek',
      'White Eagle',
      'Mission Oaks',
      'Tall Grass',
      'Hobson West',
      'Stonebridge',
      'Saybrook',
    ],
    highlights: [
      {
        label: 'Driveway installations',
        body: 'Most Naperville homes have the garage space and driveway access we need for full-front and full-body PPF jobs.',
      },
      {
        label: 'Office park pickups',
        body: 'We service the corporate corridors — schedule a coating during your workday and pick up a transformed car at 5pm.',
      },
      {
        label: 'Multi-vehicle households',
        body: 'Family fleet? Daily driver plus a weekend build? We offer package pricing on multi-car protection plans.',
      },
    ],
    driveCopy: '30-minute drive from our base — full coverage across DuPage County.',
    metaDescription:
      'Naperville mobile auto detailing — PPF, ceramic coating, paint correction & window tint. Certified installers come to your home or office in DuPage County.',
  },
  {
    slug: 'evanston',
    city: 'Evanston',
    state: 'IL',
    region: 'North Shore',
    tagline: 'North Shore mobile detailing — from Evanston up.',
    intro:
      "We cover Evanston, Wilmette, Winnetka, Glencoe, and the rest of the North Shore. The corridor has one of the densest concentrations of enthusiast and exotic vehicles in the Midwest — and the residential garages and estates that make multi-day PPF jobs straightforward.",
    neighborhoods: [
      'Evanston',
      'Wilmette',
      'Kenilworth',
      'Winnetka',
      'Glencoe',
      'Highland Park',
      'Lake Forest',
      'Northbrook',
    ],
    highlights: [
      {
        label: 'Estate garages',
        body: 'Multi-bay residential garages are ideal for our flagship Gold Package ceramic and full-body PPF installs.',
      },
      {
        label: 'Concours-prep work',
        body: 'Several of our North Shore clients show at concours events. We do show-prep correction and protection on tight timelines.',
      },
      {
        label: 'Lake-effect ready',
        body: 'North Shore winters are harsh on paint. Opticle PPF and professional ceramic coatings protect against salt, slush, and UV through every season.',
      },
    ],
    driveCopy: '20 minutes north — full coverage from Evanston through Lake Forest.',
    metaDescription:
      'North Shore auto detailing — Evanston, Wilmette, Winnetka, Glencoe, Highland Park. Certified PPF & ceramic coating installs at your residence.',
  },
]

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug)
}
