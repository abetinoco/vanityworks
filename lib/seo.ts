// ─────────────────────────────────────────────
//  Shared SEO helpers — canonical base + JSON-LD builders.
//  Keeping schema construction here means every page emits consistent,
//  well-formed structured data.
// ─────────────────────────────────────────────

export const SITE_URL = 'https://vanityworksdetailing.com'

/** Absolute URL for a site-relative path (e.g. "/services" → full URL). */
export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

interface Crumb {
  name: string
  path: string
}

/** BreadcrumbList schema for a nested page. Pass the trail incl. the current page. */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

/** FAQPage schema from a list of Q&A pairs. Returns null if empty. */
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  if (!faqs?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

/**
 * Service schema with an Offer built from a starting-price string.
 * Non-numeric prices (e.g. "By vehicle") emit the Service without a price.
 */
export function serviceSchema(opts: {
  name: string
  description: string
  path: string
  startingPrice?: string
}) {
  const numeric = opts.startingPrice?.match(/[\d,]+(\.\d+)?/)?.[0]?.replace(/,/g, '')
  const offers = numeric
    ? {
        offers: {
          '@type': 'Offer',
          price: numeric,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: numeric,
            priceCurrency: 'USD',
          },
          availability: 'https://schema.org/InStock',
          url: abs(opts.path),
        },
      }
    : {}
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: {
      '@type': 'AutoDetailing',
      name: 'VanityWorks Detailing',
      telephone: '+1-224-572-4787',
      url: SITE_URL,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Chicagoland, IL' },
    ...offers,
  }
}
