import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import { getCaseStudy, getCaseStudies } from '@/lib/data'
import { generateCaseStudyMetadata, breadcrumbSchema } from '@/lib/metadata'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const all = await getCaseStudies()
  return all.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  if (!cs) return {}
  return generateCaseStudyMetadata(cs)
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)
  if (!cs) notFound()

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus.glossy.co'

  const breadcrumb = breadcrumbSchema([
    { name: 'Glossy Campus', url: BASE_URL },
    { name: 'Case Studies', url: `${BASE_URL}/brands/case-studies` },
    { name: cs.title, url: `${BASE_URL}/brands/case-studies/${cs.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <a href="/brands/case-studies" className="hover:text-black">Case Studies</a>
            <span>→</span>
            <span className="text-black font-medium">{cs.brand.replace(/-/g, ' ')}</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">Case Study</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-[1.1] mb-6">
            {cs.title}
          </h1>
          {cs.publishedAt && (
            <p className="text-sm text-gray-400">Published {cs.publishedAt}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-[#ef3325] pl-5">
            {cs.summary}
          </p>

          {cs.results && cs.results.length > 0 && (
            <div className="bg-[#efebe9] rounded-lg p-8 mt-8">
              <h2 className="text-xl font-bold text-black mb-6">Key Results</h2>
              <ul className="flex flex-col gap-4">
                {cs.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#ef3325] font-bold shrink-0 text-lg leading-snug">→</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cs.campaign && (
            <div className="mt-10 border border-black/10 rounded-lg p-6">
              <p className="text-sm text-gray-500 mb-2">Related Campaign</p>
              <a
                href={`/campaigns/${cs.campaign}`}
                className="text-sm font-semibold text-[#ef3325] hover:underline"
              >
                View the campaign →
              </a>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Ready to create your own success story?"
        body="Partner with Glossy Campus to launch a creator campaign that delivers results."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'More Case Studies', href: '/brands/case-studies', variant: 'secondary' },
        ]}
        variant="black"
      />
    </>
  )
}
