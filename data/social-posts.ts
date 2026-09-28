import type { SocialPost } from '@/types'

// Add real posts here as they come in.
// imageUrl: drop in the CDN URL of the post image (square crop preferred).
// postUrl: link directly to the IG or TikTok post.
// likes/comments: update periodically for social proof numbers.
export const socialPosts: SocialPost[] = [
  {
    id: 'ig-maya-1',
    platform: 'instagram',
    handle: '@mayabeautyco',
    caption: 'Obsessed with my @medicube kit this week 🧴 honest review dropping tomorrow — tag #GlossyCampus if you want to see it #ad',
    likes: 3_200,
    comments: 84,
    university: 'alabama',
    featured: true,
  },
  {
    id: 'tt-jordan-1',
    platform: 'tiktok',
    handle: '@jordantaylorbeauty',
    caption: 'POV: you joined @glossycampus and your skin care routine is now fully funded 💅 #GlossyCampus #CampusCreator #BeautyTok',
    likes: 18_400,
    comments: 312,
    university: 'usc',
    featured: true,
  },
  {
    id: 'ig-priya-1',
    platform: 'instagram',
    handle: '@priyaskintalk',
    caption: 'What it\'s actually like being a Glossy Campus creator ✨ brands, products, and a community of girls who get it. Link in bio to apply 🔗 #GlossyCampus',
    likes: 2_800,
    comments: 67,
    university: 'michigan',
    featured: true,
  },
  {
    id: 'tt-casey-1',
    platform: 'tiktok',
    handle: '@caseyglowup',
    caption: 'My @glossycampus haul just arrived and I\'m not okay 😭✨ Grande lashes + Medicube + a whole vibe. #GlossyCampus #UnboxingTok',
    likes: 9_100,
    comments: 198,
    university: 'ucla',
    featured: true,
  },
  {
    id: 'ig-bri-1',
    platform: 'instagram',
    handle: '@bribeautyreport',
    caption: 'Doing my part for Gen Z skincare education, one Glossy Campus campaign at a time 🫶 #GlossyCampus #CampusLife',
    likes: 4_600,
    comments: 103,
    university: 'ohio-state',
    featured: true,
  },
  {
    id: 'tt-simone-1',
    platform: 'tiktok',
    handle: '@simoneatsuga',
    caption: 'The brands paying college girls to talk about their products > everything else rn. Apply through the link #GlossyCampus #CollegeCreator',
    likes: 22_700,
    comments: 445,
    university: 'lsu',
    featured: true,
  },
]
