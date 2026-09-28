import Link from 'next/link'
import type { CTA } from '@/types'

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  body?: string
  ctas?: CTA[]
}

export default function Hero({ eyebrow, title, body, ctas = [] }: HeroProps) {
  return (
    <section className="bg-[#FDF9F5] min-h-[90vh] flex flex-col justify-center pt-4 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

        {/* Eyebrow */}
        {eyebrow && (
          <p
            className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-8"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            {eyebrow}
          </p>
        )}

        {/* Headline — Later-style: huge, tight leading */}
        <h1
          className="text-[clamp(3.2rem,8.5vw,7.5rem)] text-black leading-[0.93] tracking-tight mb-10 max-w-5xl"
          style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400 }}
        >
          {title}
        </h1>

        {/* Divider + body + CTAs */}
        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          {body && (
            <p
              className="text-lg sm:text-xl text-[#161616]/60 leading-relaxed max-w-xl"
              style={{ fontFamily: 'var(--font-heebo)' }}
            >
              {body}
            </p>
          )}
          {ctas.length > 0 && (
            <div className="flex flex-wrap gap-3 shrink-0">
              {ctas.map((cta) => <CTAButton key={cta.href} cta={cta} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function CTAButton({ cta }: { cta: CTA }) {
  const base = 'inline-flex items-center font-black text-sm px-8 py-3.5 rounded-full transition-colors'
  const variants = {
    primary:   'bg-[#FC4337] text-white hover:bg-[#e03a2f]',
    secondary: 'bg-black text-white hover:bg-[#161616]/80',
    outline:   'border-2 border-black text-black hover:bg-black hover:text-white',
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
