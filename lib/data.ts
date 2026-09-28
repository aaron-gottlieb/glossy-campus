/**
 * Data access layer for Glossy Campus.
 *
 * Components NEVER import data files directly.
 * All data access goes through these functions.
 *
 * Future: swap implementations below for Supabase queries.
 * The component interface stays identical.
 */

import type { University, Brand, Campaign, CaseStudy, CampusStats, FAQ, Event, Creator, HomepageContent } from '@/types'
import { universities } from '@/data/universities'
import { brands } from '@/data/brands'
import { campaigns } from '@/data/campaigns'
import { caseStudies } from '@/data/case-studies'
import { campusStats } from '@/data/stats'
import { faqs } from '@/content/faqs'
import { events } from '@/data/events'
import { creators } from '@/data/creators'
import { homepageContent } from '@/data/homepage'

// ─── Universities ────────────────────────────────────────────────────────────

export async function getUniversities(): Promise<University[]> {
  return universities.filter((u) => u.active)
}

export async function getFeaturedUniversities(): Promise<University[]> {
  return universities.filter((u) => u.active && u.featured)
}

export async function getUniversity(slug: string): Promise<University | undefined> {
  return universities.find((u) => u.slug === slug && u.active)
}

export async function getUniversitySlugs(): Promise<string[]> {
  return universities.filter((u) => u.active).map((u) => u.slug)
}

// ─── Brands ──────────────────────────────────────────────────────────────────

export async function getBrands(): Promise<Brand[]> {
  return brands
}

export async function getFeaturedBrands(): Promise<Brand[]> {
  return brands.filter((b) => b.featured)
}

export async function getBrand(slug: string): Promise<Brand | undefined> {
  return brands.find((b) => b.slug === slug)
}

// ─── Campaigns ───────────────────────────────────────────────────────────────

export async function getCampaigns(): Promise<Campaign[]> {
  return campaigns
}

export async function getActiveCampaigns(): Promise<Campaign[]> {
  return campaigns.filter((c) => c.status === 'active')
}

export async function getCampaign(slug: string): Promise<Campaign | undefined> {
  return campaigns.find((c) => c.slug === slug)
}

export async function getCampaignSlugs(): Promise<string[]> {
  return campaigns.map((c) => c.slug)
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return caseStudies
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return caseStudies.find((cs) => cs.slug === slug)
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function getCampusStats(): Promise<CampusStats> {
  return campusStats
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export async function getFAQs(audience?: string): Promise<FAQ[]> {
  const sorted = [...faqs].sort((a, b) => a.order - b.order)
  if (!audience) return sorted
  return sorted.filter((f) => f.audience === audience || f.audience === 'all')
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function getEvents(): Promise<Event[]> {
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getUpcomingEvents(): Promise<Event[]> {
  return events
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export async function getFeaturedEvents(): Promise<Event[]> {
  return events.filter((e) => e.featured)
}

export async function getEvent(slug: string): Promise<Event | undefined> {
  return events.find((e) => e.slug === slug)
}

// ─── Creators ─────────────────────────────────────────────────────────────────

export async function getCreators(): Promise<Creator[]> {
  return creators
}

export async function getFeaturedCreators(): Promise<Creator[]> {
  return creators.filter((c) => c.featured)
}

export async function getCreator(slug: string): Promise<Creator | undefined> {
  return creators.find((c) => c.slug === slug)
}

// ─── Homepage Content ─────────────────────────────────────────────────────────

export async function getHomepageContent(): Promise<HomepageContent> {
  return homepageContent
}
