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
    red:   'bg-[#FC4337] text-white',
    black: 'bg-[#161616] text-white',
    cream: 'bg-[#efebe9] text-black',
  }[variant]

  const buttonStyles = {
    primary: {
      red:   'bg-black text-white hover:bg-[#161616]/80',
      black: 'bg-[#FC4337] text-white hover:bg-[#e03a2f]',
      cream: 'bg-[#FC4337] text-white hover:bg-[#e03a2f]',
    },
    secondary: {
      red:   'border-2 border-black text-black hover:bg-black hover:text-white',
      black: 'border-2 border-white text-white hover:bg-white hover:text-black',
      cream: 'border-2 border-black text-black hover:bg-black hover:text-white',
    },
    outline: {
      red:   'border-2 border-current hover:bg-white/10',
      black: 'border-2 border-current hover:bg-white/10',
      cream: 'border-2 border-current hover:bg-black/10',
    },
  }

  return (
    <section className={`${bg} py-16 sm:py-24`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
          <div className="max-w-2xl">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.0] tracking-tight mb-5"
              style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400 }}
            >
              {title}
            </h2>
            {body && (
              <p
                className="text-base sm:text-lg opacity-70 leading-relaxed"
                style={{ fontFamily: 'var(--font-heebo)' }}
              >
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`inline-flex items-center font-black text-sm px-8 py-3.5 rounded-full transition-colors ${buttonStyles[cta.variant][variant]}`}
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '13px', letterSpacing: '0.02em' }}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
