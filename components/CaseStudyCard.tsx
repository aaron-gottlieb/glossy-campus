import Link from 'next/link'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/brands/case-studies/${caseStudy.slug}`}
      className="group block bg-white border border-black/10 rounded-lg overflow-hidden hover:border-[#ef3325] hover:shadow-md transition-all"
    >
      {/* Hero placeholder */}
      <div className="aspect-[16/7] bg-[#efebe9] flex items-center justify-center">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          {caseStudy.brand.replace(/-/g, ' ')}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#ef3325] mb-2">
          Case Study
        </p>
        <h3 className="font-bold text-black text-lg group-hover:text-[#ef3325] transition-colors leading-snug mb-3">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{caseStudy.summary}</p>
        {caseStudy.results && caseStudy.results.length > 0 && (
          <div className="border-t border-black/5 pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Results</p>
            <ul className="flex flex-col gap-1">
              {caseStudy.results.slice(0, 2).map((result, i) => (
                <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                  <span className="text-[#ef3325] mt-0.5 shrink-0">→</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  )
}
