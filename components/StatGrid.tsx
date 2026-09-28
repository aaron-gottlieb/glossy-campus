import type { CampusStats } from '@/types'

interface StatGridProps {
  stats: CampusStats
}

export default function StatGrid({ stats }: StatGridProps) {
  const items = [
    { value: stats.creators.toLocaleString() + '+', label: 'College Creators' },
    { value: stats.totalReach ?? '25M+',            label: 'Combined Reach' },
    { value: stats.universities + '+',              label: 'Universities' },
    { value: stats.avgEngagementRate ?? '7.9%',     label: 'Avg Engagement Rate' },
  ]

  return (
    <section className="bg-[#161616] text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {items.map((item) => (
            <div key={item.label} className="text-center px-6 py-8 lg:py-0 first:pt-0 last:pb-0 lg:first:pl-0 lg:last:pr-0">
              <div
                className="text-[clamp(3rem,6vw,5.5rem)] font-black leading-none text-white mb-3"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 800 }}
              >
                {item.value}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
