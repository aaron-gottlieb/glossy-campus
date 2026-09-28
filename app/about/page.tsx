import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import { getCampusStats } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
  description:
    'Glossy Campus is a creator network for the fashion and beauty industry, powered by Glossy and Digiday Media.',
  canonical: '/about',
})

export default async function AboutPage() {
  const stats = await getCampusStats()

  return (
    <>
      <Hero
        eyebrow="About Glossy Campus"
        title="The next generation of fashion and beauty — on campus"
        body="Glossy Campus is the creator network built for the industry that shapes culture. Powered by Glossy, backed by Digiday Media."
        variant="centered"
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">What is Glossy Campus?</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Glossy Campus is a vetted creator network connecting beauty and wellness brands with college students
              who create authentic content for their Gen Z peers. We sit at the intersection of media authority and
              creator culture — giving brands real reach and giving creators real opportunity.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Campus creators receive product drops, paid campaign opportunities, Glossy+ membership, and access to
              Glossy events and workshops. Brands get curated creator matching, full campaign management, and
              content that actually performs.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 mt-12">Backed by Glossy</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Glossy is the leading media brand covering fashion, beauty, and the business of culture. Published by
              Digiday Media, Glossy reaches senior decision-makers across the industry — and Glossy Campus brings
              that authority to the next generation.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Campus creators are trained by the Glossy editorial team and coached on content standards that align
              with the brand&apos;s editorial values. This isn&apos;t a marketplace — it&apos;s a managed network with
              editorial backbone.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: stats.creators + '+', label: 'College Creators' },
              { value: stats.universities + '+', label: 'Universities' },
              { value: stats.totalReach ?? '25M+', label: 'Total Reach' },
              { value: stats.avgEngagementRate ?? '7.9%', label: 'Avg Engagement' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-[#ef3325]">{item.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossy link */}
      <section className="bg-[#efebe9] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-2">Part of</p>
            <h2 className="text-2xl font-bold text-black">Digiday Media</h2>
            <p className="text-gray-600 mt-2">
              Glossy Campus is a Glossy initiative, published by Digiday Media.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="https://www.glossy.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black border border-black rounded px-5 py-2.5 hover:bg-black hover:text-white transition-colors text-center"
            >
              Visit Glossy.co
            </a>
            <a
              href="https://digidaymedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-500 text-center hover:text-black transition-colors"
            >
              Digiday Media →
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Get involved"
        body="Whether you're a brand or a creator, there's a place for you in Glossy Campus."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'Apply to Join', href: '/creators/apply', variant: 'secondary' },
        ]}
        variant="black"
      />
    </>
  )
}
