type Platform = 'instagram' | 'tiktok'

interface Post {
  platform: Platform
  caption: string
  likes: string
  comments: string
  views?: string
  tone: 'light' | 'dark'
}

const posts: Post[] = [
  {
    platform: 'instagram',
    caption: 'GT-R R35 full PPF — that bumper edge work',
    likes: '2.4k',
    comments: '186',
    tone: 'dark',
  },
  {
    platform: 'tiktok',
    caption: 'POV: ceramic coating on a McLaren 720S',
    likes: '18.2k',
    comments: '412',
    views: '247k',
    tone: 'light',
  },
  {
    platform: 'instagram',
    caption: 'Supra A90 paint correction — swirl-free under the lights',
    likes: '3.1k',
    comments: '94',
    tone: 'light',
  },
  {
    platform: 'tiktok',
    caption: 'Before / after that nobody asked for but everyone needed',
    likes: '42.7k',
    comments: '1.2k',
    views: '1.1M',
    tone: 'dark',
  },
  {
    platform: 'instagram',
    caption: 'WRX STI cabin reset — full leather + carpet revival',
    likes: '1.8k',
    comments: '63',
    tone: 'light',
  },
  {
    platform: 'tiktok',
    caption: 'Detailing a $500k 992 Turbo S',
    likes: '67.4k',
    comments: '2.4k',
    views: '2.3M',
    tone: 'dark',
  },
  {
    platform: 'instagram',
    caption: 'EVO X stealth wrap — matte never gets old',
    likes: '4.6k',
    comments: '218',
    tone: 'dark',
  },
  {
    platform: 'tiktok',
    caption: 'Fixing a $40k paint correction job in 60 seconds',
    likes: '94.2k',
    comments: '3.1k',
    views: '3.7M',
    tone: 'light',
  },
]

export default function SocialFeed() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#888] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            On The &apos;Gram
          </p>
          <h2
            className="text-5xl sm:text-6xl text-[#0A0A0A]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Follow The Build
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Daily wraps, paint corrections, and detail breakdowns from the shop floor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {posts.map((post, i) => {
            const isDark = post.tone === 'dark'
            const surface = isDark
              ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
              : 'bg-white text-[#0A0A0A] border-[#E0E0E0]'
            return (
              <a
                key={i}
                href={
                  post.platform === 'instagram'
                    ? 'https://instagram.com/vanityworks.il'
                    : 'https://tiktok.com/@vanityworks.il'
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col aspect-square border rounded-lg overflow-hidden p-5 sm:p-6 transition-all hover:-translate-y-0.5 ${surface}`}
              >
                <div className="flex items-center justify-between mb-auto">
                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                      isDark ? 'text-white/60' : 'text-[#888]'
                    }`}
                  >
                    {post.platform === 'instagram' ? 'Instagram' : 'TikTok'}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDark ? 'bg-white' : 'bg-[#0A0A0A]'
                    }`}
                  />
                </div>

                <p
                  className="text-base sm:text-lg leading-tight mt-4"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
                >
                  {post.caption}
                </p>

                <div
                  className={`mt-auto pt-4 flex items-center gap-3 text-[11px] sm:text-xs font-medium ${
                    isDark ? 'text-white/60' : 'text-[#888]'
                  }`}
                >
                  <span>♥ {post.likes}</span>
                  <span>· {post.comments}</span>
                  {post.views && <span className="ml-auto">▶ {post.views}</span>}
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <a
            href="https://instagram.com/vanityworks.il"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center justify-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#1A1A1A] transition-colors"
          >
            Follow @vanityworks.il
          </a>
          <a
            href="https://tiktok.com/@vanityworks.il"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center justify-center gap-2 px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
          >
            Follow on TikTok
          </a>
        </div>
      </div>
    </section>
  )
}
