import { generatePageMetadata, faqSchema } from '@/lib/metadata'
import { getFAQs } from '@/lib/data'
import type { Metadata } from 'next'
import CreatorApplicationForm from './CreatorApplicationForm'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = generatePageMetadata({
  title: 'Apply to Join',
  description:
    'Apply to join the Glossy Campus creator network. Get paid brand opportunities, free products, Glossy+ membership, and direct access to the beauty and fashion industry.',
  canonical: '/creators/apply',
})

export default async function ApplyPage() {
  const faqs = await getFAQs('creators')

  return (
    <>
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Page header */}
      <section className="bg-[#efebe9] border-t-[6px] border-[#ef3325]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-[#ef3325] font-semibold">Glossy</span>
            <span className="font-bold text-xl tracking-tight">Campus</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] mb-4">
            Join the Glossy Campus creator community
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            A vetted community of college creators ready to produce content, drive awareness, and share the products
            they love. Applications are reviewed on a rolling basis.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <CreatorApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Questions about joining?" />
    </>
  )
}
