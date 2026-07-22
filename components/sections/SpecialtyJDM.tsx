import { SplitLetters } from '@/components/SplitLetters'

const marqueeItems: { name: string; outline?: boolean }[] = [
  { name: 'Nissan GT-R' },
  { name: 'Toyota Supra', outline: true },
  { name: 'Honda NSX' },
  { name: 'Mitsubishi Evo', outline: true },
  { name: 'Subaru STI' },
  { name: 'Porsche 911', outline: true },
  { name: 'RX-7' },
  { name: 'Lamborghini Huracán', outline: true },
]

export default function SpecialtyJDM() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <section className="bg-white pt-[120px] mt-10 border-t border-line max-[900px]:pt-20 max-[900px]:mt-0">
      <div className="max-w-7xl mx-auto px-8 max-[900px]:px-5">
        {/* Header */}
        <div className="grid grid-cols-[auto_1fr] gap-x-[60px] items-end pb-12 border-b border-ink max-[900px]:grid-cols-1 max-[900px]:gap-4 max-[900px]:pb-8">
          <div className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[-0.005em] pb-[18px]">
            <span className="inline-block w-2 h-2 rounded-full bg-ink" />
            Specialty focus
          </div>
          <h2 className="font-sans font-extrabold text-ink leading-[0.92] tracking-[-0.045em] text-right justify-self-end text-[clamp(40px,6vw,96px)] max-[900px]:text-left max-[900px]:justify-self-start max-[900px]:text-[11vw]">
            <SplitLetters text="We speak JDM." />
          </h2>
        </div>

        {/* Statement */}
        <div className="my-20 grid grid-cols-2 gap-20 items-start max-[900px]:my-12 max-[900px]:grid-cols-1 max-[900px]:gap-7">
          <p className="font-sans font-bold text-ink tracking-[-0.035em] leading-[1.05] text-[clamp(28px,3.4vw,48px)] max-[900px]:text-[9vw]">
            Your GT-R isn’t a Camry.
            <br />
            <span className="text-ink-muted font-bold">We don’t treat it like one.</span>
          </p>
          <div className="text-base leading-[1.55] tracking-[-0.005em] text-ink-muted max-w-[52ch] space-y-3.5">
            <p>
              Imported chassis have quirks domestic detailers miss — factory panel gaps that read
              as “damage,” OEM coatings that react badly to off-the-shelf chemistry, body lines
              that need different lighting to inspect properly.
            </p>
            <p>
              We’ve worked on every platform below. We know where the clips are, which films flex
              around aggressive aero, and how to handle a car that’s worth more than the shop it’s
              parked in.{' '}
              <strong className="text-ink font-semibold">
                If you brought it home from Japan, we’ll send it home better.
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative overflow-hidden border-t border-b border-ink mt-[15px] pt-[15px] pb-[25px] max-[900px]:mt-[10px] max-[900px]:pt-[9px] max-[900px]:pb-[15px]">
        <div className="max-w-7xl mx-auto flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-ink-muted mb-2 px-8 max-[900px]:px-5 max-[900px]:mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ink" />
          Platforms we specialize in
        </div>
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={i}
              data-text={item.outline ? item.name : undefined}
              aria-hidden={i >= marqueeItems.length || undefined}
              className={`flex items-center gap-10 font-sans font-extrabold leading-[0.92] tracking-[-0.045em] px-10 whitespace-nowrap text-[clamp(15px,2.5vw,40px)] after:content-[''] after:w-[18px] after:h-[18px] after:rounded-full after:bg-ink after:flex-shrink-0 max-[900px]:text-[4.5vw] max-[900px]:gap-6 max-[900px]:px-6 max-[900px]:after:w-3 max-[900px]:after:h-3 ${
                item.outline ? 'marquee-item-outline' : 'text-ink'
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
