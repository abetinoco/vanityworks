import type { Metadata } from 'next'
import Link from 'next/link'
import { SplitLetters } from '@/components/SplitLetters'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that apply when you use the VanityWorks Detailing website and book our services.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

const UPDATED = 'July 2026'

export default function TermsPage() {
  return (
    <div className="bg-white pt-20 md:pt-24 lg:pt-28">
      <header className="bg-white px-8 pt-16 max-[900px]:px-5 max-[900px]:pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[12px] font-medium text-ink-muted tracking-[-0.005em] mb-12 flex gap-2 items-center max-[900px]:mb-7">
            <Link href="/" className="text-ink-muted no-underline hover:text-ink transition-colors">
              Home
            </Link>
            <span className="text-line">/</span>
            <span className="text-ink font-semibold">Terms</span>
          </div>
          <h1 className="font-sans font-extrabold text-ink leading-[0.9] tracking-[-0.05em] text-[clamp(40px,6vw,84px)] pb-8 border-b border-ink">
            <SplitLetters text="Terms of Service." />
          </h1>
          <p className="mt-5 text-[13px] font-medium text-ink-muted tracking-[-0.005em]">
            Last updated: {UPDATED}
          </p>
        </div>
      </header>

      <section className="bg-white px-8 py-16 max-[900px]:px-5 max-[900px]:py-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-9 text-[15px] leading-[1.65] text-ink-muted tracking-[-0.005em]">
          <p>
            These terms apply to your use of{' '}
            <strong className="text-ink font-semibold">vanityworksdetailing.com</strong> and to the
            detailing services provided by VanityWorks Detailing (&ldquo;VanityWorks,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the site or booking with us, you agree to
            these terms.
          </p>

          <Block title="Quotes & pricing">
            Prices shown on this site are starting points and estimates. Final pricing depends on
            the vehicle&apos;s size, condition, and the scope of work, and is confirmed in writing
            before any work begins. A quote is not a contract until both sides agree to it.
          </Block>

          <Block title="Booking & appointments">
            Appointments are scheduled by agreement. We&apos;re a mobile-first, appointment-only
            operation, so please give as much notice as possible for changes. We may ask to
            reschedule for weather or other conditions that would affect quality of work.
          </Block>

          <Block title="Cancellations & rescheduling">
            If you need to cancel or reschedule, let us know as early as you can. Because we reserve
            a time slot and travel to your location, we ask for reasonable notice. Significant
            no-shows or last-minute cancellations may be subject to a fee, which we&apos;ll always
            tell you about in advance.
          </Block>

          <Block title="Your vehicle">
            You confirm you&apos;re the owner of the vehicle or are authorized to approve service on
            it. Please remove personal belongings before service. We treat every car with care, but
            we are not responsible for pre-existing damage, wear, aftermarket parts that fail during
            normal service, or items left in the vehicle.
          </Block>

          <Block title="Results & warranties">
            Detailing, paint correction, ceramic coating, and paint protection film results vary
            with a vehicle&apos;s paint, history, and condition. Any manufacturer warranty (for
            example, on film or coatings) is provided by that manufacturer under its own terms, and
            holds only when the product is maintained as directed. We will always give you an honest
            assessment of what your vehicle needs.
          </Block>

          <Block title="Payment">
            Payment is due as agreed at or before completion of service unless arranged otherwise.
          </Block>

          <Block title="Photography & marketing">
            We often photograph and film the vehicles we work on and may use those images to show
            our work — on this site, in our portfolio, and on social media. We won&apos;t publish
            your name, license plate, or personal details. If you&apos;d prefer we not feature your
            vehicle, just let us know before your appointment and we&apos;ll keep it private.
          </Block>

          <Block title="Website content">
            Photos, text, and design on this site are owned by VanityWorks and may not be reused
            without permission. Portfolio images show real vehicles we&apos;ve worked on; captions
            describe what is shown in each photo.
          </Block>

          <Block title="Limitation of liability">
            To the extent permitted by law, our liability for any claim related to our services or
            this site is limited to the amount you paid for the service in question.
          </Block>

          <Block title="Governing law">
            These terms are governed by the laws of the State of Illinois, without regard to its
            conflict-of-laws rules. Any dispute relating to our services or this site will be
            handled in the state or federal courts located in Illinois.
          </Block>

          <Block title="Changes">
            We may update these terms from time to time. The &ldquo;last updated&rdquo; date above
            reflects the current version.
          </Block>

          <Block title="Contact">
            Questions about these terms? Reach us through our{' '}
            <Link href="/book" className="text-ink font-semibold no-underline border-b border-ink">
              booking page
            </Link>{' '}
            or text{' '}
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
