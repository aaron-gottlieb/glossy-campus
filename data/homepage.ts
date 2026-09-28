import type { HomepageContent } from '@/types'

// All homepage copy lives here. Edit this file to update text without touching page.tsx.
export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: 'Glossy Campus',
    title: 'Where beauty and wellness brands meet the next generation',
    body: 'Connect with a vetted community of college creators ready to produce authentic content, drive product awareness, and share the brands they love — across 70+ universities nationwide.',
  },

  howItWorks: {
    eyebrow: 'How It Works',
    title: 'Authentic reach. Managed by Glossy.',
    subtitle:
      'Glossy handles creator matching, briefing, product shipping, and content delivery. Brands get genuine student voices. Creators get paid opportunities, free products, and career launchpad access.',
    steps: [
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
    ],
  },

  network: {
    eyebrow: 'The Network',
    title: '70+ Universities Nationwide',
  },

  brandInquiry: {
    eyebrow: 'For Brands',
    title: 'Ready to reach Gen Z on campus?',
    subtitle:
      'Tell us about your brand and campaign goals. Our team will match you with the right creators and build a custom program.',
    bullets: [
      'Access to 250+ vetted college creators',
      '70+ universities nationwide',
      '7.9% average engagement rate',
      'Full campaign management by Glossy',
      'Authentic paid social, product reviews, and activations',
    ],
  },

  creatorCTA: {
    title: 'Are you a college creator?',
    body: 'Join 250+ vetted creators across 70+ universities. Get paid opportunities, free products, Glossy+ membership, and a direct line to the beauty and fashion industry.',
  },
}
