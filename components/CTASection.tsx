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
    red: 'bg-[#ef3325] text-white',
    black: 'bg-black text-white',
    cream: 'bg-[#efebe9] text-black',
  }[variant]

  const buttonStyles = {
    primary:
      variant === 'cream'
        ? 'bg-[#ef3325] text-white hover:bg-[#d42b1e]'
        : 'bg-white text-black hover:bg-gray-100',
    secondary:
      variant === 'cream'
        ? 'bg-black text-white hover:bg-gray-800'
        : 'border-2 border-white text-white hover:bg-white hover:text-black',
    outline: 'border-2 border-current hover:bg-white/10',
  }

  return (
    <section className={`${bg} py-14 sm:py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">{title}</h2>
        {body && (
          <p className="text-base sm:text-lg opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed">{body}</p>
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded transition-colors ${buttonStyles[cta.variant]}`}
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
