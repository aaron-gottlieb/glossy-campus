import type { Brand } from '@/types'

// Add new brand partners here.
// These are the brands confirmed on the existing Campus page as of Sept 2026.
export const brands: Brand[] = [
  {
    slug: 'coco-and-eve',
    name: 'Coco & Eve',
    description: 'Hair and beauty brand known for its award-winning hair mask and tanning products.',
    industry: 'Beauty',
    featured: true,
  },
  {
    slug: 'grande-cosmetics',
    name: 'Grande Cosmetics',
    description: 'Clinically tested lash and brow serums loved by beauty editors and consumers alike.',
    industry: 'Beauty',
    featured: true,
  },
  {
    slug: 'medicube',
    name: 'Medicube',
    description: 'Korean derma-beauty brand bringing clinical skincare innovation to Gen Z.',
    industry: 'Skincare',
    featured: true,
  },
  {
    slug: 'fenty-beauty',
    name: 'Fenty Beauty',
    description: 'Rihanna\'s inclusive makeup brand, a cultural touchstone for Gen Z beauty consumers.',
    industry: 'Beauty',
    featured: true,
  },
]
