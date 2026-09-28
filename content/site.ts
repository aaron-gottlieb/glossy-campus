import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Glossy Campus',
  tagline: 'Where beauty and wellness brands meet the next generation',
  description:
    'Glossy Campus connects beauty and wellness brands with a vetted community of college creators. 250+ creators. 70+ universities. 25M+ followers. 7.9% average engagement rate.',
  url: 'https://campus.glossy.co',

  nav: [
    { label: 'For Brands', href: '/brands' },
    { label: 'For Creators', href: '/creators' },
    { label: 'Network', href: '/network' },
    { label: 'Campaigns', href: '/campaigns' },
    { label: 'About', href: '/about' },
  ],

  footerNav: [
    {
      label: 'Campus',
      links: [
        { label: 'For Brands', href: '/brands' },
        { label: 'For Creators', href: '/creators' },
        { label: 'University Network', href: '/network' },
        { label: 'Campaigns', href: '/campaigns' },
        { label: 'Case Studies', href: '/brands/case-studies' },
        { label: 'About', href: '/about' },
        { label: 'Apply to Join', href: '/creators/apply' },
      ],
    },
    {
      label: 'Glossy',
      links: [
        { label: 'Glossy.co', href: 'https://www.glossy.co', external: true },
        { label: 'Glossy+', href: 'https://www.glossy.co/subscribe', external: true },
        { label: 'Glossy POP Newsletter', href: 'https://www.glossy.co/newsletters', external: true },
        { label: 'Events', href: 'https://events.glossy.co', external: true },
        { label: 'Advertise', href: 'https://www.glossy.co/advertise', external: true },
      ],
    },
    {
      label: 'Digiday Media',
      links: [
        { label: 'About Us', href: 'https://digiday.com/about', external: true },
        { label: 'Privacy Policy', href: 'https://digiday.com/privacy-policy', external: true },
        { label: 'Terms & Conditions', href: 'https://digiday.com/terms', external: true },
      ],
    },
  ],

  socialLinks: [
    { platform: 'Instagram', href: 'https://www.instagram.com/glossyco', label: 'Glossy on Instagram' },
    { platform: 'TikTok', href: 'https://www.tiktok.com/@glossyco', label: 'Glossy on TikTok' },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/glossy-co', label: 'Glossy on LinkedIn' },
    { platform: 'Twitter', href: 'https://twitter.com/glossyco', label: 'Glossy on X/Twitter' },
  ],

  primaryCTAs: {
    brands: {
      label: 'Partner With Us',
      href: '/#brand-inquiry',
      variant: 'primary',
      tracking: 'brand_inquiry_click',
    },
    creators: {
      label: 'Apply to Join',
      href: '/creators/apply',
      variant: 'secondary',
      tracking: 'creator_application_start',
    },
  },
}
