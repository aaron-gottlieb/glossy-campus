# Data Architecture — Glossy Campus

## Current: TypeScript Files

```
data/
  stats.ts          → campusStats object
  universities.ts   → universities array
  brands.ts         → brands array
  campaigns.ts      → campaigns array
  case-studies.ts   → caseStudies array

content/
  faqs.ts           → faqs array
  site.ts           → siteConfig object (nav, footer, CTAs)
```

Components **never import these files directly.** All data access goes through `lib/data.ts`.

```
lib/data.ts
  getUniversities()         → filters active universities
  getFeaturedUniversities() → filters active + featured
  getUniversity(slug)       → finds by slug
  getUniversitySlugs()      → for generateStaticParams
  getBrands()               → all brands
  getFeaturedBrands()       → featured only
  getBrand(slug)            → finds by slug
  getCampaigns()            → all campaigns
  getActiveCampaigns()      → status === 'active'
  getCampaign(slug)         → finds by slug
  getCampaignSlugs()        → for generateStaticParams
  getCaseStudies()          → all case studies
  getCaseStudy(slug)        → finds by slug
  getCampusStats()          → single stats object
  getFAQs(audience?)        → sorted, optionally filtered by audience
```

---

## Supabase Migration Path

When data volume grows or CMS-style editing is needed:

### Step 1: Schema
```sql
create table universities (
  slug text primary key,
  name text not null,
  city text,
  state text,
  description text,
  creator_count int,
  social_reach text,
  active boolean default true,
  featured boolean default false
);

create table brands (
  slug text primary key,
  name text not null,
  description text,
  industry text,
  logo_url text,
  featured boolean default false
);

create table campaigns (
  slug text primary key,
  brand text references brands(slug),
  title text not null,
  description text,
  status text check (status in ('active','completed','upcoming')),
  start_date date,
  end_date date,
  creator_count int,
  metrics jsonb
);

create table case_studies (
  slug text primary key,
  brand text references brands(slug),
  campaign text references campaigns(slug),
  title text not null,
  summary text,
  results text[],
  published_at date
);

create table campus_stats (
  id int primary key default 1,
  creators int,
  universities int,
  brands int,
  total_reach text,
  avg_engagement_rate text,
  updated_at date
);

create table faqs (
  id text primary key,
  question text not null,
  answer text not null,
  audience text check (audience in ('brands','creators','all')),
  sort_order int
);
```

### Step 2: Update lib/data.ts
Replace each function body:

```typescript
// Before (TypeScript files):
export async function getUniversities(): Promise<University[]> {
  return universities.filter((u) => u.active)
}

// After (Supabase):
export async function getUniversities(): Promise<University[]> {
  const { data } = await supabase
    .from('universities')
    .select('*')
    .eq('active', true)
  return (data ?? []) as University[]
}
```

**Components are unchanged.** The migration is entirely contained in `lib/data.ts`.

---

## How AI Agents Should Edit Data

### Change a stat (e.g. creator count)
Edit `data/stats.ts`:
```typescript
creators: 275,  // was 250
```
Only one file, one number. No component changes needed.

### Add a university
Add an entry to `data/universities.ts`:
```typescript
{
  slug: 'duke',
  name: 'Duke University',
  city: 'Durham',
  state: 'NC',
  description: '...',
  active: true,
  featured: false,
},
```
The university automatically appears on /network and gets a page at /network/duke.

### Add a campaign
Add an entry to `data/campaigns.ts` with a unique slug. Add `caseStudy` field if a case study exists. The campaign appears on /campaigns and gets a page at /campaigns/[slug].

### Add a brand
Add an entry to `data/brands.ts`. Featured brands appear on the homepage logo grid.

### Edit nav or CTAs
Edit `content/site.ts`. Changes propagate to Header, Footer, and any component that reads siteConfig.
