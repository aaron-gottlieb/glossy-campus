import Hero from '@/components/Hero'
import UniversityCard from '@/components/UniversityCard'
import CTASection from '@/components/CTASection'
import { getUniversities, getCampusStats } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'University Network',
  description:
    'Glossy Campus spans 70+ universities nationwide. Explore our growing creator network across Alabama, UCLA, Ohio State, USC, Michigan, and more.',
  canonical: '/network',
})

export default async function NetworkPage() {
  const [universities, stats] = await Promise.all([
    getUniversities(),
    getCampusStats(),
  ])

  return (
    <>
      <Hero
        eyebrow="The Network"
        title={`${stats.universities}+ universities. One community.`}
        body="From Alabama to USC, Glossy Campus creators are embedded in campus culture coast to coast. Each creator is vetted for content quality, engagement authenticity, and brand alignment."
        variant="centered"
        ctas={[
          { label: 'Apply to Join', href: '/creators/apply', variant: 'primary' },
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'outline' },
        ]}
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black">All Universities</h2>
            <span className="text-sm text-gray-500">{universities.length} schools</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((u) => (
              <UniversityCard key={u.slug} university={u} />
            ))}
          </div>

          {/* Expanding note */}
          <div className="mt-10 bg-[#efebe9] rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600">
              <strong className="text-black">Growing every semester.</strong> New universities join the Glossy Campus
              network each semester as we expand the creator community.{' '}
              <a href="/creators/apply" className="text-[#ef3325] font-semibold hover:underline">
                Is your school not listed? Apply and let us know.
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Is your university on the list?"
        body="Apply to join Glossy Campus and represent your school in the nation's leading college creator network."
        ctas={[
          { label: 'Apply Now', href: '/creators/apply', variant: 'primary' },
        ]}
        variant="red"
      />
    </>
  )
}
