import Hero from '@/components/Hero'
import CampaignCard from '@/components/CampaignCard'
import CTASection from '@/components/CTASection'
import { getCampaigns } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Campaigns',
  description:
    'Explore Glossy Campus creator campaigns — active and completed brand programs across beauty, skincare, and wellness.',
  canonical: '/campaigns',
})

export default async function CampaignsPage() {
  const campaigns = await getCampaigns()

  const active = campaigns.filter((c) => c.status === 'active')
  const completed = campaigns.filter((c) => c.status === 'completed')
  const upcoming = campaigns.filter((c) => c.status === 'upcoming')

  return (
    <>
      <Hero
        eyebrow="Campaigns"
        title="Creator campaigns in action"
        body="From product launches to campus activations, see how brands and creators work together on Glossy Campus."

        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'See Case Studies', href: '/brands/case-studies', variant: 'outline' },
        ]}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
          {upcoming.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                Upcoming
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcoming.map((c) => <CampaignCard key={c.slug} campaign={c} />)}
              </div>
            </div>
          )}

          {active.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ef3325] rounded-full" />
                Active
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {active.map((c) => <CampaignCard key={c.slug} campaign={c} />)}
              </div>
            </div>
          )}

          {completed.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                Completed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completed.map((c) => <CampaignCard key={c.slug} campaign={c} />)}
              </div>
            </div>
          )}

          {campaigns.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p>Campaigns coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Launch your next campus campaign"
        body="Work with Glossy Campus to build a custom creator program for your brand."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
        ]}
        variant="black"
      />
    </>
  )
}
