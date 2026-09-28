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

export interface SocialPost {
  id: string
  platform: 'instagram' | 'tiktok'
  handle: string       // @username
  caption: string      // excerpt shown in card
  imageUrl?: string    // real image when available; omit for placeholder
  likes?: number
  comments?: number
  postUrl?: string     // link to actual post
  university?: string  // university slug
  featured: boolean
}

export interface Event {
  slug: string
  title: string
  type: 'activation' | 'popup' | 'panel' | 'networking' | 'workshop' | 'other'
  brand?: string
  university?: string
  city: string
  state: string
  date: string          // ISO: '2025-04-12'
  endDate?: string      // for multi-day events
  description: string
  rsvpUrl?: string
  capacity?: number
  status: 'upcoming' | 'past' | 'cancelled'
  featured: boolean
}

export interface HomepageContent {
  hero: {
    eyebrow: string
    title: string
    body: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    subtitle: string
    steps: { step: string; title: string; body: string }[]
  }
  network: {
    eyebrow: string
    title: string
  }
  brandInquiry: {
    eyebrow: string
    title: string
    subtitle: string
    bullets: string[]
  }
  creatorCTA: {
    title: string
    body: string
  }
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
