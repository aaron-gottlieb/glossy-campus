import Hero from '@/components/Hero'
import StatGrid from '@/components/StatGrid'
import LogoGrid from '@/components/LogoGrid'
import UniversityCard from '@/components/UniversityCard'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import {
  getCampusStats,
  getFeaturedBrands,
  getFeaturedUniversities,
  getFAQs,
} from '@/lib/data'
import { organizationSchema } from '@/lib/metadata'

export default async function HomePage() {
  const [stats, brands, universities, faqs] = await Promise.all([
    getCampusStats(),
    getFeaturedBrands(),
    getFeaturedUniversities(),
    getFAQs(),
  ])

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />

      {/* Hero */}
      <Hero
        eyebrow="Glossy Campus"
        title="Where beauty and wellness brands meet the next generation"
        body="Connect with a vetted community of college creators ready to produce authentic content, drive product awareness, and share the brands they love — across 70+ universities nationwide."
        ctas={[
          { label: 'Partner With Us', href: '/#brand-inquiry', variant: 'primary' },
          { label: 'Apply to Join', href: '/creators/apply', variant: 'secondary' },
        ]}
      />

      {/* Stats */}
      <StatGrid stats={stats} />

      {/* Brand partners */}
      <LogoGrid
        brands={brands}
        title="Brand Partners"
        subtitle="Leading beauty and wellness brands trust Glossy Campus to reach the next generation."
      />

      {/* How it works */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Authentic reach. Managed by Glossy.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Glossy handles creator matching, briefing, product shipping, and content delivery. Brands get
              genuine student voices. Creators get paid opportunities, free products, and career launchpad access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Brand Campaigns',
                body: 'Brands brief Glossy on their goals. We match them with the right creators across our vetted network of 250+ college students.',
              },
              {
                step: '02',
                title: 'Creator Content',
                body: 'Creators receive products, produce authentic reviews, tutorials, and social content — on their platforms, in their voice.',
              },
              {
                step: '03',
                title: 'Campus Activations',
                body: 'Beyond social, Campus creators can host on-campus events, pop-ups, and activations that drive real-world brand presence.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#efebe9] rounded-lg p-8">
                <div className="text-4xl font-bold text-[#ef3325] mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University network preview */}
      <section className="bg-[#efebe9] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-2">The Network</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">70+ Universities Nationwide</h2>
            </div>
            <a href="/network" className="text-sm font-semibold text-[#ef3325] hover:underline shrink-0">
              View all universities →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((u) => (
              <UniversityCard key={u.slug} university={u} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand CTA + inquiry form */}
      <section id="brand-inquiry" className="bg-black text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">For Brands</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to reach Gen Z on campus?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tell us about your brand and campaign goals. Our team will match you with the right creators
                and build a custom program.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Access to 250+ vetted college creators',
                  '70+ universities nationwide',
                  '7.9% average engagement rate',
                  'Full campaign management by Glossy',
                  'Authentic paid social, product reviews, and activations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#ef3325] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner inquiry form */}
            <div className="bg-white text-black rounded-lg p-6 sm:p-8">
              <h3 className="text-lg font-bold mb-5">Partner Inquiry</h3>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="flex flex-col gap-4"
              >
                {/* NOTE: Replace action URL with real form endpoint before launch. See docs/forms.md */}
                <input type="hidden" name="_subject" value="Glossy Campus Brand Inquiry" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="first-name">
                      First Name <span className="text-[#ef3325]">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="first_name"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="last-name">
                      Last Name <span className="text-[#ef3325]">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="last_name"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="job-title">
                    Job Title <span className="text-[#ef3325]">*</span>
                  </label>
                  <input
                    id="job-title"
                    name="job_title"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="business-email">
                    Business Email <span className="text-[#ef3325]">*</span>
                  </label>
                  <input
                    id="business-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="company">
                    Company Name <span className="text-[#ef3325]">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ef3325] text-white font-semibold text-sm py-3 rounded hover:bg-[#d42b1e] transition-colors mt-1"
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Student creator?{' '}
                  <a href="/creators/apply" className="text-[#ef3325] hover:underline">
                    Apply to join the network →
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Creator CTA */}
      <CTASection
        title="Are you a college creator?"
        body="Join 250+ vetted creators across 70+ universities. Get paid opportunities, free products, Glossy+ membership, and a direct line to the beauty and fashion industry."
        ctas={[
          { label: 'Apply to Join', href: '/creators/apply', variant: 'primary' },
          { label: 'Learn More', href: '/creators', variant: 'secondary' },
        ]}
        variant="cream"
      />
    </>
  )
}
