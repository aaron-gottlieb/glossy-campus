import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import StatGrid from '@/components/StatGrid'
import { getCampusStats, getFAQs } from '@/lib/data'
import { generatePageMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'For Creators',
  description:
    'Join 250+ vetted college creators in the Glossy Campus network. Get paid opportunities, free products, Glossy+ membership, and direct access to the beauty and fashion industry.',
  canonical: '/creators',
})

export default async function CreatorsPage() {
  const [stats, faqs] = await Promise.all([
    getCampusStats(),
    getFAQs('creators'),
  ])

  return (
    <>
      <Hero
        eyebrow="For Creators"
        title="Turn your campus presence into a career"
        body="Glossy Campus is a vetted network of college creators in beauty, fashion, and wellness. Get paid opportunities, free products, industry access, and a Glossy+ membership — while you're still in school."
        ctas={[
          { label: 'Apply to Join', href: '/creators/apply', variant: 'primary' },
          { label: 'Learn How It Works', href: '#how-it-works', variant: 'outline' },
        ]}
      />

      <StatGrid stats={stats} />

      {/* What you get */}
      <section id="how-it-works" className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-3">What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black">More than just brand deals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: 'Paid opportunities',
                body: 'Earn money creating content for leading beauty and wellness brands — matched to your aesthetic and audience.',
              },
              {
                icon: '📦',
                title: 'Free products',
                body: 'Receive product drops from brand partners before your audience can buy them — and give authentic reviews.',
              },
              {
                icon: '✨',
                title: 'Glossy+ membership',
                body: 'Full access to Glossy+ premium content — industry analysis, insider reporting, and everything the fashion and beauty industry reads.',
              },
              {
                icon: '🎤',
                title: 'Workshops & events',
                body: "Exclusive invites to Glossy events, creator workshops, and networking opportunities with the fashion and beauty industry's top names.",
              },
              {
                icon: '📈',
                title: 'Career launchpad',
                body: "Build a real portfolio with brand work, industry connections, and Glossy's editorial backing — before you graduate.",
              },
              {
                icon: '🤝',
                title: 'Creator community',
                body: 'Connect with 250+ creators across 70+ campuses — a network of peers who are serious about building in beauty and fashion.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#efebe9] rounded-lg p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-black text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="bg-[#efebe9] py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-3">Requirements</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Who we're looking for</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Glossy Campus is selective. We curate our network to ensure quality for both creators and brands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Currently enrolled in college or university',
              'Active on TikTok, Instagram, or YouTube',
              'Focused on beauty, fashion, wellness, or lifestyle',
              'Authentic engagement with your audience',
              'Ability to deliver content on brief and on time',
              'Genuinely passionate about beauty and fashion culture',
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <span className="text-[#ef3325] font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-gray-700">{req}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Follower minimums are not strictly enforced — we care more about engagement quality and content authenticity.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Creator FAQ" />

      <CTASection
        title="Ready to join Campus?"
        body="Applications are reviewed on a rolling basis. Apply today and our team will be in touch."
        ctas={[
          { label: 'Apply Now', href: '/creators/apply', variant: 'primary' },
        ]}
        variant="red"
      />
    </>
  )
}
