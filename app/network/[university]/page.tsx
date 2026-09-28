import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import { getUniversity, getUniversitySlugs } from '@/lib/data'
import { generateUniversityMetadata, breadcrumbSchema } from '@/lib/metadata'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ university: string }>
}

export async function generateStaticParams() {
  const slugs = await getUniversitySlugs()
  return slugs.map((slug) => ({ university: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { university: slug } = await params
  const university = await getUniversity(slug)
  if (!university) return {}
  return generateUniversityMetadata(university)
}

export default async function UniversityPage({ params }: PageProps) {
  const { university: slug } = await params
  const university = await getUniversity(slug)

  if (!university) notFound()

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus.glossy.co'

  const breadcrumb = breadcrumbSchema([
    { name: 'Glossy Campus', url: BASE_URL },
    { name: 'Network', url: `${BASE_URL}/network` },
    { name: university.name, url: `${BASE_URL}/network/${university.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <a href="/network" className="hover:text-black transition-colors">
              Network
            </a>
            <span>→</span>
            <span className="text-black font-medium">{university.name}</span>
          </nav>
        </div>
      </div>

      <Hero
        eyebrow={`${university.city}, ${university.state}`}
        title={university.name}
        body={university.description}
        ctas={[
          { label: 'Apply to Join', href: '/creators/apply', variant: 'primary' },
          { label: 'Back to Network', href: '/network', variant: 'outline' },
        ]}
      />

      {/* Stats */}
      {(university.creatorCount || university.socialReach) && (
        <section className="bg-white py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-8">
              {university.creatorCount && (
                <div>
                  <div className="text-4xl font-bold text-[#ef3325]">{university.creatorCount}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Campus Creators</div>
                </div>
              )}
              {university.socialReach && (
                <div>
                  <div className="text-4xl font-bold text-[#ef3325]">{university.socialReach}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Combined Reach</div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Info */}
      <section className="bg-[#efebe9] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-black mb-6">About this campus</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{university.description}</p>
          <div className="mt-8 bg-white rounded-lg p-6 border border-black/5">
            <p className="text-sm text-gray-600">
              <strong className="text-black">Are you a student at {university.name}?</strong> Apply to join
              the Glossy Campus creator network and start earning through brand partnerships.
            </p>
            <a
              href="/creators/apply"
              className="inline-block mt-4 text-sm font-semibold text-[#ef3325] hover:underline"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Represent your campus"
        body="Glossy Campus is growing. Join the network and be the face of your school."
        ctas={[
          { label: 'Apply to Join', href: '/creators/apply', variant: 'primary' },
          { label: 'View All Universities', href: '/network', variant: 'secondary' },
        ]}
        variant="black"
      />
    </>
  )
}
