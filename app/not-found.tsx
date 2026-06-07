import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 lg:pt-28 bg-white flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center py-16">
        <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          404 · Page Not Found
        </p>
        <h1
          className="text-7xl sm:text-9xl text-[#0A0A0A] leading-none mb-4"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
        >
          Off The
          <br />
          <span className="text-[#888]">Map.</span>
        </h1>
        <p className="text-[#666] text-base leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — or it moved. Let&apos;s get you back to something useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
          >
            Back Home
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}
