import type { Campaign } from '@/types'

// Add new campaigns here.
// status: 'active' | 'completed' | 'upcoming'
// universities: array of university slugs from data/universities.ts
export const campaigns: Campaign[] = [
  {
    slug: 'fenty-beauty-gen-z-launch',
    brand: 'fenty-beauty',
    title: 'Fenty Beauty Gen Z Campus Launch',
    description:
      'College creators across 10+ campuses received exclusive early access to new Fenty launches, producing authentic content for their Gen Z audiences.',
    status: 'completed',
    universities: ['ucla', 'usc', 'ohio-state', 'alabama', 'michigan'],
    creatorCount: 25,
    metrics: {
      engagement: '8.2%',
      reach: '4.1M',
    },
    caseStudy: 'fenty-beauty-gen-z-campus',
  },
  {
    slug: 'grande-cosmetics-lash-series',
    brand: 'grande-cosmetics',
    title: 'Grande Cosmetics Lash & Brow Creator Series',
    description:
      'Vetted campus creators demonstrated Grande serums through authentic before/after content, tutorials, and campus event coverage.',
    status: 'completed',
    universities: ['uconn', 'florida', 'lsu'],
    creatorCount: 15,
    metrics: {
      engagement: '7.4%',
    },
    caseStudy: 'grande-cosmetics-lash-series',
  },
  {
    slug: 'medicube-skincare-campus',
    brand: 'medicube',
    title: 'Medicube Skincare Campus Activation',
    description:
      'Medicube partnered with Glossy Campus to introduce their derma-beauty products to college consumers through creator reviews and campus pop-ups.',
    status: 'active',
    universities: ['ucla', 'usc', 'michigan', 'texas-am'],
    creatorCount: 20,
    metrics: {
      engagement: '9.1%',
    },
  },
]
