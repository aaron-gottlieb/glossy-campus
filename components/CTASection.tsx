import Link from 'next/link'
import type { CTA } from '@/types'

interface CTASectionProps {
  title: string
  body?: string
  ctas: CTA[]
  variant?: 'red' | 'black' | 'cream'
}

export default function CTASection({ title, body, ctas, variant = 'red' }: CTASectionProps) {
  const bg = {
    red: 'bg-[#FC4337] text-white',
    black: 'bg-black text-white',
    cream: 'bg-[#efebe9] text-black',
  }[variant]

  const buttonStyles = {
    primary:
      variant === 'cream'
        ? 'bg-[#FC4337] text-white hover:bg-[#e03a2f]'
        : 'bg-black text-white hover:bg-[#161616]/80',
    secondary:
      variant === 'cream'
        ? 'bg-black text-white hover:bg-[#161616]/80'
        : 'border-2 border-black text-black bg-white hover:bg-black hover:text-white',
    outline: 'border-2 border-current hover:bg-white/10',
  }

  return (
    <section className={`${bg} py-14 sm:py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl leading-tight mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h2>
        {body && (
          <p
            className="text-base sm:text-lg opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-heebo)' }}
          >
            {body}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`inline-flex items-center font-black text-sm px-8 py-3 rounded-full transition-colors ${buttonStyles[cta.variant]}`}
              style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', letterSpacing: '0.02em' }}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
