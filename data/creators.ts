import type { Creator } from '@/types'

// Add new creators here.
// platform: 'instagram' | 'tiktok' | 'youtube' | 'multi'
// followers: approximate total across primary platform
// featured: true shows the creator in highlighted sections
export const creators: Creator[] = [
  {
    slug: 'maya-alabama',
    name: 'Maya R.',
    university: 'alabama',
    handle: '@mayabeautyco',
    platform: 'instagram',
    followers: 42000,
    bio: 'Beauty and lifestyle creator at UA. Known for drugstore dupes and campus GRWM content.',
    featured: true,
  },
  {
    slug: 'jordan-usc',
    name: 'Jordan T.',
    university: 'usc',
    handle: '@jordantaylorbeauty',
    platform: 'tiktok',
    followers: 88000,
    bio: 'Skincare-first creator at USC. LA-based, viral for "derm-approved" haul content.',
    featured: true,
  },
  {
    slug: 'priya-michigan',
    name: 'Priya S.',
    university: 'michigan',
    handle: '@priyaskintalk',
    platform: 'multi',
    followers: 31000,
    bio: 'Pre-med student and wellness creator at U of M. Covers clean beauty and stress-skin science.',
    featured: true,
  },
]
