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
      <section className="bg-[#FDF9F5] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl text-black" style={{ fontFamily: 'var(--font-playfair)' }}>
              Authentic reach. Managed by Glossy.
            </h2>
            <p
              className="text-[#161616]/60 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-heebo)' }}
            >
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
              <div key={item.step} className="bg-[#efebe9] rounded-2xl p-8">
                <div
                  className="text-4xl font-black text-[#FC4337] mb-4"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl text-black mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-[#161616]/60 leading-relaxed"
                  style={{ fontFamily: 'var(--font-heebo)' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University network preview */}
      <section className="bg-[#efebe9] py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p
              className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              The Network
            </p>
            <h2
              className="text-3xl sm:text-4xl text-black mb-2"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              70+ Universities Nationwide
            </h2>
            <a
              href="/network"
              className="text-sm font-black text-[#FC4337] hover:underline"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              View all universities →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-[820px] mx-auto">
            {universities.map((u) => (
              <UniversityCard key={u.slug} university={u} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand CTA + inquiry form */}
      <section id="brand-inquiry" className="bg-[#161616] text-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-4"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                For Brands
              </p>
              <h2
                className="text-3xl sm:text-4xl text-white mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Ready to reach Gen Z on campus?
              </h2>
              <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-heebo)' }}>
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
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70" style={{ fontFamily: 'var(--font-heebo)' }}>
                    <span className="text-[#FC4337] mt-0.5 shrink-0 font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner inquiry form */}
            <div className="bg-white text-black rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl text-black mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>Partner Inquiry</h3>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="flex flex-col gap-4"
              >
                {/* NOTE: Replace action URL with real form endpoint before launch. See docs/forms.md */}
                <input type="hidden" name="_subject" value="Glossy Campus Brand Inquiry" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#161616]/60 mb-1" style={{ fontFamily: 'var(--font-poppins)' }} htmlFor="first-name">
                      First Name <span className="text-[#FC4337]">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="first_name"
                      type="text"
                      required
                      className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FC4337]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#161616]/60 mb-1" style={{ fontFamily: 'var(--font-poppins)' }} htmlFor="last-name">
                      Last Name <span className="text-[#FC4337]">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="last_name"
                      type="text"
                      required
                      className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FC4337]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/60 mb-1" style={{ fontFamily: 'var(--font-poppins)' }} htmlFor="job-title">
                    Job Title <span className="text-[#FC4337]">*</span>
                  </label>
                  <input
                    id="job-title"
                    name="job_title"
                    type="text"
                    required
                    className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FC4337]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/60 mb-1" style={{ fontFamily: 'var(--font-poppins)' }} htmlFor="business-email">
                    Business Email <span className="text-[#FC4337]">*</span>
                  </label>
                  <input
                    id="business-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FC4337]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#161616]/60 mb-1" style={{ fontFamily: 'var(--font-poppins)' }} htmlFor="company">
                    Company Name <span className="text-[#FC4337]">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full border border-black/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FC4337]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FC4337] text-white font-black text-sm py-3 rounded-full hover:bg-[#e03a2f] transition-colors mt-1"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-[#161616]/40 text-center" style={{ fontFamily: 'var(--font-heebo)' }}>
                  Student creator?{' '}
                  <a href="/creators/apply" className="text-[#FC4337] hover:underline">
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
