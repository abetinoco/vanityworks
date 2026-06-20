# VanityWorks — Launch Readiness

Same stabilization pass we ran on SDR Imports: images, forms, SEO, legal, and
build health. Status as of this pass.

## ✅ Done

**Images** — fully optimized. Every image is WebP; the largest is 185 KB (all
under the 200 KB target). Favicon, OG image, and logo are WebP too. No code, CSS,
or metadata reference points at a missing `.jpg`/`.png`.

**Contact form** — now actually sends. Both the `/contact` form and the `/book`
form post to a new **`/api/contact`** route that emails the shop via **Resend**
(REST API, no SDK dependency). Loading + error states added; on success the user
sees a confirmation. *Requires env vars below to go live.*

**Legal pages** — `/privacy` and `/terms` were linked in the footer but didn't
exist (404). Both are now built in the site style and added to the sitemap.

**SEO** — title/description, OpenGraph + Twitter cards, keywords, JSON-LD
`AutoDetailing` business schema, `robots.ts`, and `sitemap.xml` are all present
and location/keyword-rich (Chicagoland, Lake County, North Shore, JDM models).

**Analytics** — Vercel Analytics is mounted in the layout.

**Type safety** — `tsc --noEmit` passes clean.

## ⚠️ Needs you / the client before launch

1. **Confirm the contact email + socials.** The site uses `vanityworks.il`
   (Israel TLD) for the email and IG/TikTok, but the real domain is
   `vanityworksdetailing.com`. Confirm the real inbox and handles — once known
   it's a quick find-and-replace. (Per your note, you're checking with the client.)

2. **Set the Resend env vars in Vercel** (Project → Settings → Environment
   Variables), then redeploy:

   | Variable | Value |
   |---|---|
   | `RESEND_API_KEY` | API key from resend.com |
   | `CONTACT_TO_EMAIL` | inbox that should receive inquiries |
   | `CONTACT_FROM_EMAIL` *(optional)* | e.g. `VanityWorks <hello@vanityworksdetailing.com>` — must be on a Resend-verified domain |

   Steps: create a Resend account → verify the sending domain
   (`vanityworksdetailing.com`) via the DNS records Resend gives you → create an
   API key → set the three vars. Until `CONTACT_FROM_EMAIL` is set, the form
   falls back to Resend's shared `onboarding@resend.dev` sender so you can test
   immediately. If the key/inbox aren't set, the form tells the user to call/text
   instead of failing silently.

3. **Real Google reviews.** The reviews section still uses placeholder cards.
   Send the real review text + names and I'll drop them in.

4. **Run the production deploy.** The full `next build` can't complete in this
   sandbox (it fetches Google Fonts at build time, which is network-restricted
   here) — it builds normally on Vercel. Push and let Vercel build.

## Optional cleanup (not blockers)

- `public/portfolio/_videos/*.mp4` (~15 MB, 5 files) aren't referenced anywhere
  on the site — safe to delete to slim the deploy.
- `components/ContactFormSimple.tsx` is an unused leftover with a TODO — safe to
  delete.
