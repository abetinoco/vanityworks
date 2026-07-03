import type { Metadata } from 'next'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How VanityWorks Detailing collects, uses, and protects the information you share through our website and contact form.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

const UPDATED = 'July 2026'

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-20 md:pt-24 lg:pt-28">
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Home
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">Privacy</span>
          </div>
          <h1 className="font-sans font-extrabold text-ink leading-[0.9] tracking-[-0.05em] text-[clamp(40px,6vw,84px)] pb-8 border-b border-ink">
            <SplitLetters text="Privacy Policy." />
          </h1>
          <p className="mt-5 text-[13px] font-medium text-ink-muted tracking-[-0.005em]">
            Last updated: {UPDATED}
          </p>
        </div>
      </header>

      <section className="bg-white px-8 py-16 max-[900px]:px-5 max-[900px]:py-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-9 text-[15px] leading-[1.65] text-ink-muted tracking-[-0.005em]">
          <p>
            VanityWorks Detailing (&ldquo;VanityWorks,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This policy explains what we collect when you use{' '}
            <strong className="text-ink font-semibold">vanityworksdetailing.com</strong> and how we
            use it. We keep it simple because we collect very little.
          </p>

          <Block title="Information we collect">
            When you submit our contact or booking form, we collect the details you provide —
            typically your name, phone number, email address, vehicle, the service you&apos;re
            interested in, and your message. We may also collect basic, non-identifying analytics
            (such as pages visited and general device type) to understand how the site is used.
          </Block>

          <Block title="How we use it">
            We use your information only to respond to your inquiry, prepare a quote, schedule
            service, and follow up about your vehicle. We do not sell, rent, or trade your personal
            information to anyone.
          </Block>

          <Block title="Text messages">
            If you text us or share your phone number, you consent to receive text messages from
            VanityWorks about your inquiry, quote, and appointment. Message and data rates may
            apply and message frequency varies. Reply STOP to opt out at any time or HELP for help.
            Opting out won&apos;t affect a service you&apos;ve already booked.
          </Block>

          <Block title="How it&apos;s shared">
            Your form submission is delivered to us by email through our email provider (Resend).
            Analytics, if enabled, are processed by our hosting and analytics providers (such as
            Vercel). These providers process data on our behalf and are not permitted to use it for
            their own purposes. We may disclose information if required by law.
          </Block>

          <Block title="Data retention">
            We keep inquiry emails for as long as needed to serve you and maintain our records. You
            can ask us to delete your information at any time.
          </Block>

          <Block title="Your choices">
            You can request a copy of the information we hold about you, ask us to correct it, or ask
            us to delete it. Reach out through our{' '}
            <Link href="/book" className="text-ink font-semibold no-underline border-b border-ink">
              booking page
            </Link>{' '}
            and we&apos;ll take care of it.
          </Block>

          <Block title="Cookies & analytics">
            The site may use minimal cookies or similar technology to keep it working smoothly and
            to measure traffic in aggregate. We do not use advertising trackers.
          </Block>

          <Block title="Children">
            Our site and services are intended for adults. We do not knowingly collect information
            from anyone under 18.
          </Block>

          <Block title="Changes to this policy">
            We may update this policy from time to time. The &ldquo;last updated&rdquo; date above
            reflects the latest version.
          </Block>

          <Block title="Contact">
            Questions about your privacy? Get in touch through our{' '}
            <Link href="/book" className="text-ink font-semibold no-underline border-b border-ink">
              booking page
            </Link>{' '}
            or text us at{' '}
            <a href="tel:+12245724787" className="text-ink font-semibold no-underline">
              (224) 572-4787
            </a>
            .
          </Block>
        </div>
      </section>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="text-[18px] font-extrabold text-ink tracking-[-0.02em]">{title}</h2>
      <p>{children}</p>
    </div>
  )
}
