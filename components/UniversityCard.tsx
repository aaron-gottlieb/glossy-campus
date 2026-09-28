import Link from 'next/link'
import type { University } from '@/types'

interface UniversityCardProps {
  university: University
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Link
      href={`/network/${university.slug}`}
      className="group inline-flex flex-col items-center justify-center bg-[#efebe9] hover:bg-[#FC4337] hover:text-white transition-colors text-center px-5 py-3 rounded-[20px]"
      style={{ minWidth: 180, maxWidth: 250, minHeight: 54 }}
    >
      <span
        className="text-[13px] font-black text-black group-hover:text-white leading-tight transition-colors"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {university.name}
      </span>
      <span
        className="text-[10px] font-semibold text-[#161616]/50 group-hover:text-white/80 transition-colors mt-0.5"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {university.city}, {university.state}
      </span>
    </Link>
  )
}
