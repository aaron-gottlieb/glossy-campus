import type { Event } from '@/types'

// Add new events here.
// type: 'activation' | 'popup' | 'panel' | 'networking' | 'workshop' | 'other'
// status: 'upcoming' | 'past' | 'cancelled'
// featured: true shows the event in highlighted sections
// date: ISO format 'YYYY-MM-DD'
export const events: Event[] = [
  {
    slug: 'medicube-popup-ucla-spring-2025',
    title: 'Medicube Skincare Pop-Up @ UCLA',
    type: 'popup',
    brand: 'medicube',
    university: 'ucla',
    city: 'Los Angeles',
    state: 'CA',
    date: '2025-04-12',
    description:
      'Campus creators and students are invited to experience Medicube\'s derma-beauty lineup in person. Free samples, creator meet & greet, and exclusive discount codes.',
    rsvpUrl: undefined,
    capacity: 150,
    status: 'past',
    featured: false,
  },
  {
    slug: 'glossy-campus-creator-meetup-nyc-2025',
    title: 'Glossy Campus Creator Meetup — New York',
    type: 'networking',
    city: 'New York',
    state: 'NY',
    date: '2025-05-08',
    description:
      'An invite-only evening for Glossy Campus creators in the NYC area. Connect with peers, meet the Glossy editorial team, and hear about upcoming campaign opportunities.',
    capacity: 60,
    status: 'past',
    featured: true,
  },
]
