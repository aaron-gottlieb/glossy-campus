import type { CaseStudy } from '@/types'

// Add new case studies here.
// slug should match the caseStudy field on the corresponding campaign.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'fenty-beauty-gen-z-campus',
    brand: 'fenty-beauty',
    campaign: 'fenty-beauty-gen-z-launch',
    title: 'How Fenty Beauty Reached Gen Z Authentically Through Campus Creators',
    summary:
      'Fenty Beauty partnered with Glossy Campus to distribute new product launches to 25 vetted college creators across 5 campuses. The result was authentic peer-to-peer content that outperformed paid social benchmarks.',
    results: [
      '4.1M combined reach across TikTok and Instagram',
      '8.2% average engagement rate — 3x industry average',
      '25 creators across 5 universities',
      '100% on-time content delivery',
      'Significant lift in brand awareness among 18–22 demographics',
    ],
    publishedAt: '2026-06-15',
  },
  {
    slug: 'grande-cosmetics-lash-series',
    brand: 'grande-cosmetics',
    campaign: 'grande-cosmetics-lash-series',
    title: 'Grande Cosmetics Drives Trial and Awareness on Campus',
    summary:
      'Grande Cosmetics used the Glossy Campus creator network to introduce their lash and brow serums to college-age beauty consumers through authentic tutorials and before/after content.',
    results: [
      '7.4% average engagement rate',
      '15 creators across 3 campuses',
      'Before/after content format drove highest saves and shares',
      'Strong conversion signal from campus-specific discount codes',
    ],
    publishedAt: '2026-04-10',
  },
]
