import type { FAQ } from '@/types'

// Edit FAQ content here. audience: 'brands' | 'creators' | 'all'
// order determines display sequence (ascending).
export const faqs: FAQ[] = [
  {
    id: 'what-differentiates-campus',
    question: 'What differentiates the Glossy Campus creator community?',
    answer:
      'Glossy Campus is backed by Glossy — the definitive authority on fashion, beauty, and culture. Every creator in our network is vetted for content quality, engagement authenticity, and brand-fit. We coach creators on content standards and provide brands with reliable, on-time delivery. This isn\'t a marketplace — it\'s a curated, managed network.',
    audience: 'all',
    order: 1,
  },
  {
    id: 'how-students-benefit',
    question: 'How do students benefit from joining the Glossy Campus creator community?',
    answer:
      'Campus creators get access to exclusive workshops, Glossy events, and networking with industry professionals. You\'ll receive paid opportunities, free products from brand partners, and a complimentary Glossy+ membership. It\'s a genuine career launchpad for the next generation of fashion and beauty creators.',
    audience: 'creators',
    order: 2,
  },
  {
    id: 'how-campaigns-work',
    question: 'How do creator campaigns work?',
    answer:
      'Glossy handles all campaign logistics — creator matching, product shipping, briefing, and delivery. Brands approve content before it goes live. Creators produce authentic reviews, tutorials, and social content on their preferred platforms. Brands gain student reach without the overhead of direct creator management.',
    audience: 'all',
    order: 3,
  },
  {
    id: 'brand-business-goals',
    question: 'How does the creator community support brand business goals?',
    answer:
      'Our network provides vetted creators matched to your campaign needs. Brands can run authentic product reviews, creator-led content, paid social campaigns, and on-campus activations. With a 7.9% average engagement rate across 250+ creators and 25M+ followers, Campus consistently outperforms standard influencer benchmarks.',
    audience: 'brands',
    order: 4,
  },
  {
    id: 'paid-social-campaigns',
    question: 'How do paid social campaigns work?',
    answer:
      'Glossy manages every step: creator matching, product shipping, briefing, and content delivery. Creators produce authentic reviews and content, which can be amplified through paid social. Brands gain access to genuine student voices without the complexity of managing multiple creator relationships directly.',
    audience: 'brands',
    order: 5,
  },
]
