import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import CaseStudyCard from '@/components/CaseStudyCard'
import StatGrid from '@/components/StatGrid'
import { getBrands, getCaseStudies, getCampusStats } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'For Brands',
  description:
    'Partner with Glossy Campus to reach Gen Z through 250+ vetted college creators across 70+ universities. Authentic product reviews, paid social, and campus activations.',
  canonical: '/brands',
})

export default async function BrandsPage() {
  const [brands, caseStudies, stats] = await Promise.all([
    getBrands(),
    getCaseStudies(),
    getCampusStats(),
  ])

  return (
    <>
      <Hero
        eyebrow="For Brands"
        title="Reach Gen Z where they live, study, and create"
        body="Glossy Campus gives beauty and wellness brands access to 250+ vetted college creators — with full campaign management, authentic content production, and on-campus activations. No overhead. Real results."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'See Case Studies', href: '/brands/case-studies', variant: 'outline' },
        ]}
      />

      <StatGrid stats={stats} />

      {/* Why Glossy Campus */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-3">Why Campus</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">The Glossy difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Vetted, not random',
                body: 'Every creator in our network is selected for content quality, engagement authenticity, and brand alignment. No marketplace mass-blast.',
              },
              {
                title: 'Fully managed',
                body: 'Glossy handles creator matching, briefing, product shipping, content review, and delivery. Your team stays focused on strategy, not logistics.',
              },
              {
                title: 'Glossy authority',
                body: 'Creators are coached on content standards by the Glossy editorial team. The brand association elevates both creator and product.',
              },
              {
                title: 'Gen Z first',
                body: '7.9% average engagement rate across creators who are genuinely embedded in campus culture — not just digital audiences.',
              },
              {
                title: 'Paid social ready',
                body: "Creator content is produced to brand spec and can be amplified through paid social — seamlessly. You own the rights.",
              },
              {
                title: 'On-campus activations',
                body: "Beyond social: pop-ups, in-person events, campus partnerships. Creators become your brand's physical presence on campus.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-black/10 rounded-lg p-6">
                <h3 className="font-bold text-black text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand list */}
      <section className="bg-[#efebe9] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-3">Current Partners</p>
            <h2 className="text-3xl font-bold text-black">Brands on Campus</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div key={brand.slug} className="bg-white rounded-lg p-6 text-center border border-black/5">
                <p className="font-bold text-black">{brand.name}</p>
                {brand.industry && (
                  <p className="text-xs text-gray-400 mt-1">{brand.industry}</p>
                )}
                {brand.description && (
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">{brand.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study previews */}
      {caseStudies.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-2">Results</p>
                <h2 className="text-3xl font-bold text-black">Case Studies</h2>
              </div>
              <a href="/brands/case-studies" className="text-sm font-semibold text-[#ef3325] hover:underline">
                View all →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.slice(0, 2).map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to launch your campus campaign?"
        body="Fill out the partner inquiry form and our team will be in touch within 48 hours."
        ctas={[
          { label: 'Get Started', href: '/#brand-inquiry', variant: 'primary' },
        ]}
        variant="black"
      />
    </>
  )
}
