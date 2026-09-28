'use client'

/**
 * Analytics abstraction layer for Glossy Campus.
 *
 * Swap the provider inside trackEvent() without touching any component.
 * Currently logs to console in development; sends to GA4 in production.
 *
 * See docs/analytics.md for wiring instructions.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(event: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties ?? {})
    return
  }

  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, properties ?? {})
  }
}

// Named events — import these in components for consistency.
export const events = {
  CAMPUS_CTA_CLICK: 'campus_cta_click',
  CREATOR_APPLICATION_START: 'creator_application_start',
  CREATOR_APPLICATION_SUBMIT: 'creator_application_submit',
  BRAND_INQUIRY_CLICK: 'brand_inquiry_click',
  BRAND_INQUIRY_SUBMIT: 'brand_inquiry_submit',
  UNIVERSITY_VIEW: 'university_view',
  CAMPAIGN_VIEW: 'campaign_view',
  CASE_STUDY_VIEW: 'case_study_view',
  FAQ_EXPAND: 'faq_expand',
  NAV_CLICK: 'nav_click',
} as const

export type AnalyticsEvent = (typeof events)[keyof typeof events]
