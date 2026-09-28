import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import { getCampaign, getCampaignSlugs, getUniversity } from '@/lib/data'
import { generateCampaignMetadata, breadcrumbSchema } from '@/lib/metadata'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getCampaignSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const campaign = await getCampaign(slug)
  if (!campaign) return {}
  return generateCampaignMetadata(campaign)
}

const statusColors = {
  active: 'bg-green-100 text-green-800',
  completed: 'bg-gray-100 text-gray-600',
  upcoming: 'bg-blue-100 text-blue-800',
}

export default async function CampaignPage({ params }: PageProps) {
  const { slug } = await params
  const campaign = await getCampaign(slug)
  if (!campaign) notFound()

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus.glossy.co'

  const universityNames = await Promise.all(
    (campaign.universities ?? []).map(async (s) => {
      const u = await getUniversity(s)
      return u?.name ?? s
    })
  )

  const breadcrumb = breadcrumbSchema([
    { name: 'Glossy Campus', url: BASE_URL },
    { name: 'Campaigns', url: `${BASE_URL}/campaigns` },
    { name: campaign.title, url: `${BASE_URL}/campaigns/${campaign.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <a href="/campaigns" className="hover:text-black">Campaigns</a>
            <span>→</span>
            <span className="text-black font-medium">{campaign.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ef3325]">
              {campaign.brand.replace(/-/g, ' ')}
            </span>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColors[campaign.status]}`}
            >
              {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] mb-6 max-w-3xl">
            {campaign.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{campaign.description}</p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Metrics */}
            {campaign.metrics && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-black mb-5">Results</h2>
                <div className="grid grid-cols-3 gap-4">
                  {campaign.metrics.engagement && (
                    <div className="bg-[#efebe9] rounded-lg p-5 text-center">
                      <div className="text-3xl font-bold text-[#ef3325]">{campaign.metrics.engagement}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Engagement</div>
                    </div>
                  )}
                  {campaign.metrics.reach && (
                    <div className="bg-[#efebe9] rounded-lg p-5 text-center">
                      <div className="text-3xl font-bold text-[#ef3325]">{campaign.metrics.reach}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Reach</div>
                    </div>
                  )}
                  {campaign.creatorCount && (
                    <div className="bg-[#efebe9] rounded-lg p-5 text-center">
                      <div className="text-3xl font-bold text-[#ef3325]">{campaign.creatorCount}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Creators</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {campaign.caseStudy && (
              <div className="border border-[#ef3325]/20 rounded-lg p-6 bg-[#efebe9]">
                <p className="text-sm text-gray-600 mb-3">Want the full story?</p>
                <a
                  href={`/brands/case-studies/${campaign.caseStudy}`}
                  className="text-sm font-semibold text-[#ef3325] hover:underline"
                >
                  Read the case study →
                </a>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5">
            <div className="bg-[#efebe9] rounded-lg p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">Campaign Details</h3>
              <dl className="flex flex-col gap-3 text-sm">
                <div>
                  <dt className="text-gray-500">Brand</dt>
                  <dd className="font-semibold text-black capitalize">{campaign.brand.replace(/-/g, ' ')}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Status</dt>
                  <dd className="font-semibold text-black capitalize">{campaign.status}</dd>
                </div>
                {campaign.startDate && (
                  <div>
                    <dt className="text-gray-500">Start Date</dt>
                    <dd className="font-semibold text-black">{campaign.startDate}</dd>
                  </div>
                )}
                {campaign.endDate && (
                  <div>
                    <dt className="text-gray-500">End Date</dt>
                    <dd className="font-semibold text-black">{campaign.endDate}</dd>
                  </div>
                )}
                {universityNames.length > 0 && (
                  <div>
                    <dt className="text-gray-500 mb-1">Universities</dt>
                    <dd>
                      <ul className="flex flex-col gap-0.5">
                        {universityNames.map((name) => (
                          <li key={name} className="text-black font-medium">{name}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Want to run a campaign like this?"
        body="Partner with Glossy Campus to launch your next creator program."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'View All Campaigns', href: '/campaigns', variant: 'secondary' },
        ]}
        variant="black"
      />
    </>
  )
}
