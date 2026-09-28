import Link from 'next/link'
import type { CTA } from '@/types'

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  body?: string
  ctas?: CTA[]
  image?: string
  imageAlt?: string
  variant?: 'default' | 'centered' | 'split'
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  body,
  ctas = [],
  image,
  imageAlt,
  variant = 'default',
}: HeroProps) {
  if (variant === 'centered') {
    return (
      <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl font-light text-gray-700 mb-4">{subtitle}</p>
          )}
          {body && <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">{body}</p>}
          {ctas.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {ctas.map((cta) => (
                <CTAButton key={cta.href} cta={cta} />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  if (variant === 'split' && image) {
    return (
      <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">{eyebrow}</p>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] mb-6">{title}</h1>
            {subtitle && <p className="text-xl font-light text-gray-700 mb-4">{subtitle}</p>}
            {body && <p className="text-base text-gray-600 leading-relaxed mb-8">{body}</p>}
            {ctas.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <CTAButton key={cta.href} cta={cta} />
                ))}
              </div>
            )}
          </div>
          <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
            {/* Image placeholder — replace src with actual asset */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
              {imageAlt ?? 'Hero image'}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default
  return (
    <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] mb-6 max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl font-light text-gray-700 mb-4 max-w-2xl">{subtitle}</p>
        )}
        {body && (
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">{body}</p>
        )}
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <CTAButton key={cta.href} cta={cta} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function CTAButton({ cta }: { cta: CTA }) {
  const base = 'inline-flex items-center font-semibold text-sm px-6 py-3 rounded transition-colors'
  const variants = {
    primary: 'bg-[#ef3325] text-white hover:bg-[#d42b1e]',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
  }

  return (
    <Link href={cta.href} className={`${base} ${variants[cta.variant]}`}>
      {cta.label}
    </Link>
  )
}
