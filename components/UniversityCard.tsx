import Link from 'next/link'
import type { University } from '@/types'

interface UniversityCardProps {
  university: University
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <Link
      href={`/network/${university.slug}`}
      className="group block bg-white border border-black/10 rounded-lg p-6 hover:border-[#ef3325] hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-black text-base group-hover:text-[#ef3325] transition-colors">
            {university.name}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            {university.city}, {university.state}
          </p>
        </div>
        {university.creatorCount && (
          <span className="text-xs font-semibold bg-[#efebe9] text-black px-2 py-1 rounded shrink-0 ml-2">
            {university.creatorCount} creators
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{university.description}</p>
      {university.socialReach && (
        <p className="text-xs text-gray-400 mt-3 font-medium">{university.socialReach} reach</p>
      )}
    </Link>
  )
}
