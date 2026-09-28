export interface University {
  slug: string
  name: string
  city: string
  state: string
  logo?: string
  description: string
  creatorCount?: number
  socialReach?: string
  active: boolean
  featured: boolean
}

export interface Creator {
  slug: string
  name: string
  university?: string
  handle?: string
  platform?: string
  followers?: number
  bio?: string
  avatar?: string
  featured: boolean
}

export interface Brand {
  slug: string
  name: string
  logo?: string
  description?: string
  industry?: string
  featured: boolean
}

export interface Campaign {
  slug: string
  brand: string
  title: string
  description: string
  status: 'active' | 'completed' | 'upcoming'
  startDate?: string
  endDate?: string
  universities?: string[]
  creatorCount?: number
  heroImage?: string
  metrics?: {
    impressions?: number
    engagement?: string
    reach?: string
  }
  caseStudy?: string
}

export interface CaseStudy {
  slug: string
  brand: string
  campaign?: string
  title: string
  summary: string
  results?: string[]
  heroImage?: string
  publishedAt?: string
}

export interface CampusStats {
  creators: number
  universities: number
  brands: number
  campaigns?: number
  totalReach?: string
  avgEngagementRate?: string
  updatedAt: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  audience?: 'brands' | 'creators' | 'all'
  order: number
}

export interface CTA {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'outline'
  tracking?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  nav: NavItem[]
  footerNav: {
    label: string
    links: NavItem[]
  }[]
  socialLinks: {
    platform: string
    href: string
    label: string
  }[]
  primaryCTAs: {
    brands: CTA
    creators: CTA
  }
}
