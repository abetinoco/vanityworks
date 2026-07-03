import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@sentry/nextjs'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.instagram.com' },
    ],
  },
  // 301 the pages we consolidated so their link equity + any inbound links
  // route to the surviving pages instead of 404-ing.
  async redirects() {
    return [
      { source: '/gallery', destination: '/portfolio', permanent: true },
      { source: '/specialties', destination: '/services', permanent: true },
      { source: '/certifications', destination: '/services', permanent: true },
      { source: '/contact', destination: '/book', permanent: true },
    ]
  },
};

export default withSentryConfig(nextConfig, {
  org: 'halo-web-agency',
  project: 'vanityworks',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
})
