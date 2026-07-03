import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import WhatWeDo from '@/components/sections/WhatWeDo'
import HowItWorks from '@/components/sections/HowItWorks'
import SocialFeed from '@/components/sections/SocialFeed'
import GoogleReviews from '@/components/sections/GoogleReviews'
import SeeItYourself from '@/components/sections/SeeItYourself'
import SpecialtyJDM from '@/components/sections/SpecialtyJDM'
import Certifications from '@/components/sections/Certifications'
import RecentWork from '@/components/sections/RecentWork'
import ServiceArea from '@/components/sections/ServiceArea'
import FinalCta from '@/components/sections/FinalCta'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────── */}
      <Hero />

      {/* ─── Trust Strip ──────────────────────────── */}
      <TrustStrip />

      {/* ─── What We Do (editorial accordion rows) ── */}
      <WhatWeDo />

      {/* ─── See It Yourself (proof, right after the value claim) ──── */}
      <SeeItYourself />

      {/* ─── How It Works ─────────────────────────── */}
      <HowItWorks />

      {/* ─── JDM / Exotic Specialty ───────────────── */}
      <SpecialtyJDM />

      {/* ─── Certifications ───────────────────────── */}
      <Certifications />

      {/* ─── Recent Work ──────────────────────────── */}
      <RecentWork />

      {/* ─── Social Feed ──────────────────────────── */}
      <SocialFeed />

      {/* ─── Reviews (single unified Google-verified section) ───── */}
      <GoogleReviews />

      {/* ─── Service Area ─────────────────────────── */}
      <ServiceArea />

      {/* ─── Final CTA ────────────────────────────── */}
      <FinalCta />
    </>
  )
}
