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
    <section className={`py-12 sm:py-16 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div
                className={`text-4xl sm:text-5xl font-bold mb-2 ${isDark ? 'text-[#ef3325]' : 'text-[#ef3325]'}`}
              >
                {item.value}
              </div>
              <div className={`text-xs sm:text-sm font-medium uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
