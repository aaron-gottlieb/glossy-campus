import type { Brand } from '@/types'

interface LogoGridProps {
  brands: Brand[]
  title?: string
}

export default function LogoGrid({ brands, title }: LogoGridProps) {
  // Duplicate for seamless loop
  const ticker = [...brands, ...brands, ...brands, ...brands]

  return (
    <section className="bg-[#efebe9] py-12 sm:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        {title && (
          <p
            className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337]"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {title}
          </p>
        )}
      </div>

      {/* Marquee row 1 — left */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex animate-marquee whitespace-nowrap gap-0 shrink-0">
          {ticker.map((brand, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-[#161616]/50 text-2xl font-black uppercase tracking-tight shrink-0"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {brand.name}
              <span className="text-[#FC4337] text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-0 shrink-0">
          {[...ticker].reverse().map((brand, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-[#161616]/30 text-xl font-black uppercase tracking-tight shrink-0"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="text-[#FC4337] text-sm">✦</span>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
