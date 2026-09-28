import type { CampusStats } from '@/types'

interface StatGridProps {
  stats: CampusStats
  variant?: 'light' | 'dark'
}

interface StatItem {
  value: string
  label: string
}

export default function StatGrid({ stats, variant = 'light' }: StatGridProps) {
  const items: StatItem[] = [
    { value: stats.creators.toLocaleString() + '+', label: 'College Creators' },
    { value: stats.totalReach ?? '25M+', label: 'Total Followers' },
    { value: stats.universities + '+', label: 'Universities' },
    { value: stats.avgEngagementRate ?? '7.9%', label: 'Avg Engagement Rate' },
  ]

  const isDark = variant === 'dark'

  return (
    <section className={`py-12 sm:py-16 ${isDark ? 'bg-black text-white' : 'bg-[#FDF9F5] text-black'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div
                className="text-6xl sm:text-7xl font-black text-black mb-2 leading-none"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 800 }}
              >
                {item.value}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#161616]/50"
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
