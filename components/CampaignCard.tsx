import Link from 'next/link'
import type { Campaign } from '@/types'

interface CampaignCardProps {
  campaign: Campaign
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-600',
  upcoming: 'bg-blue-100 text-blue-800',
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <Link
      href={`/campaigns/${campaign.slug}`}
      className="group block bg-white border border-black/10 rounded-lg overflow-hidden hover:border-[#ef3325] hover:shadow-md transition-all"
    >
      {/* Status bar */}
      <div className={`h-1 w-full ${campaign.status === 'active' ? 'bg-[#ef3325]' : 'bg-gray-200'}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ef3325] mb-1">
              {campaign.brand.replace(/-/g, ' ')}
            </p>
            <h3 className="font-bold text-black text-base group-hover:text-[#ef3325] transition-colors leading-snug">
              {campaign.title}
            </h3>
          </div>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded shrink-0 ${statusColors[campaign.status]}`}
          >
            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
          </span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {campaign.description}
        </p>

        {campaign.metrics && (
          <div className="flex gap-4">
            {campaign.metrics.engagement && (
              <div>
                <div className="text-sm font-bold text-black">{campaign.metrics.engagement}</div>
                <div className="text-xs text-gray-400">Engagement</div>
              </div>
            )}
            {campaign.metrics.reach && (
              <div>
                <div className="text-sm font-bold text-black">{campaign.metrics.reach}</div>
                <div className="text-xs text-gray-400">Reach</div>
              </div>
            )}
            {campaign.creatorCount && (
              <div>
                <div className="text-sm font-bold text-black">{campaign.creatorCount}</div>
                <div className="text-xs text-gray-400">Creators</div>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
