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
  if (variant === 'split' && image) {
    return (
      <section className="bg-[#FDF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {eyebrow && (
              <p
                className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-4"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {eyebrow}
              </p>
            )}
            <h1
              className="text-4xl sm:text-5xl text-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-[#161616]/70 mb-4" style={{ fontFamily: 'var(--font-heebo)' }}>
                {subtitle}
              </p>
            )}
            {body && (
              <p className="text-lg text-[#161616]/70 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-heebo)' }}>
                {body}
              </p>
            )}
            {ctas.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => <CTAButton key={cta.href} cta={cta} />)}
              </div>
            )}
          </div>
          <div className="relative aspect-[4/3] bg-[#efebe9] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[#161616]/40 text-sm">
              {imageAlt ?? 'Hero image'}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default / centered — matches existing Campus hero: centered, large Playfair headline
  return (
    <section className="bg-[#FDF9F5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {eyebrow && (
          <p
            className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-5"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl text-black leading-tight mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-xl sm:text-2xl text-[#161616]/70 mb-4"
            style={{ fontFamily: 'var(--font-heebo)' }}
          >
            {subtitle}
          </p>
        )}
        {body && (
          <p
            className="text-lg sm:text-xl text-[#161616]/70 leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-heebo)', lineHeight: 1.5 }}
          >
            {body}
          </p>
        )}
        {ctas.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta) => <CTAButton key={cta.href} cta={cta} />)}
          </div>
        )}
      </div>
    </section>
  )
}

export function CTAButton({ cta }: { cta: CTA }) {
  const base = 'inline-flex items-center font-black text-sm px-8 py-3 rounded-full transition-colors'
  const variants = {
    primary: 'bg-[#FC4337] text-white hover:bg-[#e03a2f]',
    secondary: 'bg-black text-white hover:bg-[#161616]/80',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
  }

  return (
    <Link
      href={cta.href}
      className={`${base} ${variants[cta.variant]}`}
      style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', letterSpacing: '0.02em' }}
    >
      {cta.label}
    </Link>
  )
}
