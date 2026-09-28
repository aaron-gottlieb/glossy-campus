import Hero from '@/components/Hero'
import CaseStudyCard from '@/components/CaseStudyCard'
import CTASection from '@/components/CTASection'
import { getCaseStudies } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Case Studies',
  description:
    'See how beauty and wellness brands achieved real results through Glossy Campus creator campaigns.',
  canonical: '/brands/case-studies',
})

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="Real campaigns. Real results."
        body="See how leading beauty and wellness brands used Glossy Campus to reach Gen Z authentically."
        variant="centered"
      />

      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p>Case studies coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        body="Partner with Glossy Campus to run your next creator campaign."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'View Campaigns', href: '/campaigns', variant: 'secondary' },
        ]}
        variant="black"
      />
    </>
  )
}
