import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = process.env.BASE_URL || 'http://localhost:3002'
const OUT = process.env.OUT_DIR || '/tmp/vanity-screenshots'
const TAG = process.env.TAG || ''

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/book', name: 'book' },
  { path: '/gallery', name: 'gallery' },
  { path: '/about', name: 'about' },
]

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false },
]

mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
try {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.deviceScaleFactor,
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
      userAgent: vp.isMobile
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    })
    const page = await ctx.newPage()
    for (const route of ROUTES) {
      const url = `${BASE}${route.path}`
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
        // Scroll the full page in steps to trigger lazy-loaded images, then return to top
        await page.evaluate(async () => {
          const step = window.innerHeight * 0.7
          const total = document.documentElement.scrollHeight
          for (let y = 0; y < total; y += step) {
            window.scrollTo(0, y)
            await new Promise((r) => setTimeout(r, 250))
          }
          window.scrollTo(0, 0)
        })
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(800)
        const file = `${OUT}/${vp.name}-${route.name}${TAG ? `-${TAG}` : ''}.png`
        await page.screenshot({ path: file, fullPage: true })
        console.log(`  ✓ ${vp.name} ${route.path} → ${file}`)
      } catch (e) {
        console.log(`  ✗ ${vp.name} ${route.path}: ${e.message}`)
      }
    }
    await ctx.close()
  }
} finally {
  await browser.close()
}
