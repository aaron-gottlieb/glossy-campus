import type { Metadata } from 'next'
import type { University, Campaign, CaseStudy } from '@/types'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus.glossy.co'
const SITE_NAME = 'Glossy Campus'
const DEFAULT_DESCRIPTION =
  'Glossy Campus connects beauty and wellness brands with 250+ vetted college creators across 70+ universities. Authentic Gen Z reach at scale.'
const DEFAULT_IMAGE = `${BASE_URL}/og-default.jpg`

export function generatePageMetadata({
  title,
  description,
  image,
  canonical,
}: {
  title: string
  description: string
  image?: string
  canonical?: string
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const ogImage = image ?? DEFAULT_IMAGE

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonical ?? '/',
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ?? BASE_URL,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}

export function generateUniversityMetadata(university: University): Metadata {
  return generatePageMetadata({
    title: `${university.name} | University Network`,
    description: `${university.name} is part of the Glossy Campus creator network in ${university.city}, ${university.state}. ${university.description}`,
    canonical: `/network/${university.slug}`,
  })
}

export function generateCampaignMetadata(campaign: Campaign): Metadata {
  return generatePageMetadata({
    title: campaign.title,
    description: campaign.description,
    canonical: `/campaigns/${campaign.slug}`,
  })
}

export function generateCaseStudyMetadata(caseStudy: CaseStudy): Metadata {
  return generatePageMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    canonical: `/brands/case-studies/${caseStudy.slug}`,
  })
}

// JSON-LD helpers

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/glossy-campus-logo.svg`,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Digiday Media',
      url: 'https://digidaymedia.com',
    },
    sameAs: [
      'https://www.instagram.com/glossyco',
      'https://twitter.com/glossyco',
      'https://www.linkedin.com/company/glossy-co',
    ],
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
