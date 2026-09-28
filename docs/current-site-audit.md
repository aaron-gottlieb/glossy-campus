# Glossy Campus — Current Site Audit

**Audited:** 2026-09-25  
**URLs:** https://www.glossy.co/campus/ and https://www.glossy.co/joincampus/

---

## /campus/ — Main Campus Page

### Navigation
- Sticky nav with Campus logo on scroll
- Anchor links: Brands, Action, Network, Partner
- Main site nav: Beauty, Fashion, Pop, Glossy+, Events, Podcasts, Newsletters, Campus

### Hero
- Headline: "Where beauty and wellness brands meet the next generation"
- Description: Platform connecting brands with vetted college creators for content production, awareness, and product advocacy through campaigns and campus activations targeting Gen Z

### Brand Partners (confirmed logos/names)
- Coco & Eve
- Grande Cosmetics
- Medicube
- Fenty Beauty

### Statistics
| Stat | Value |
|------|-------|
| College Creators | 250 |
| Total Followers | 25M+ |
| Universities | 70+ |
| Avg Engagement Rate | 7.9% |

### University Locations (listed in page)
- Alabama (Tuscaloosa)
- UConn (Storrs)
- Ohio State (Columbus)
- UCLA (Los Angeles)
- Florida (Gainesville)
- LSU (Baton Rouge)
- Texas A&M (College Station)
- Michigan (Ann Arbor)
- USC (Los Angeles)
- Additional unlisted schools (70+ total)

### FAQ Section
**Q: How does the creator community support brand business goals?**
Network provides vetted creators, matched to campaign needs, delivering authentic reviews, creator content, paid social campaigns, and on-campus activations.

**Q: How do paid social campaigns work?**
Glossy manages matching, shipping, and delivery; creators produce reviews; brands gain student reach without direct management burden.

### Partner Form (brand inquiry)
- First/Last Name (required)
- Job Title (required)
- Business Email (required)
- Company Name (required)
- Submit button

Note: "Student creators directed to separate application link"

### Design
- Primary red: #FC4337 (slightly different from join page — use #ef3325 from joincampus/)
- Background: Cream (#FDF9F5 / #efebe9)
- Fonts: Poppins (headers), Heebo, Crimson Text
- Video player present with play/pause overlays

### Analytics/Tracking
- Google Tag Manager: GTM-WPJMZ6L (also referenced on joincampus)
- Piano (subscription management)
- Jetpack Stats
- Parsely

---

## /joincampus/ — Creator Application Page

### Hero
- Heading: "Where beauty & wellness brands meet the next generation of creators"
- Body: connecting brands with "a vetted community of college creators ready to produce content, drive awareness and share the products they love"
- CTA text: "Students can apply to be a part of the Glossy Campus creator community below."

### Application Form (Gravity Forms ID: 74)
Full field list in order:
1. Name — First/Last (text)
2. Email address — (email, required)
3. Phone — (tel, required)
4. College name — (text, required)
5. Graduation Date — (date picker)
6. TikTok handle — (text, required)
7. Instagram handle — (text, required)
8. YouTube handle — (text, optional)
9. Content focus — (radio, required): Beauty / Wellness / Fashion / Other
10. Mailing address — (address block, required):
    - Street Address
    - Address Line 2
    - City
    - State/Province/Region
    - ZIP/Postal Code
    - Country (249-country dropdown)
    - Note shown: "We'll exclusively use this to send your welcome package and product drops"
11. Glossy POP newsletter signup — (radio): Yes / No

**Form submission:** Gravity Forms AJAX to WordPress backend at glossy.co. Not publicly accessible.  
**Submit button style:** Black background, uppercase, red hover (#ef3325).

### FAQ Section (expandable)
1. "What differentiates the Glossy Campus creator community?" — Glossy authority, curation, vetting, coaching, reliability
2. "How do students benefit from joining?" — Workshops, events, networking, paid opportunities, free products, Glossy+ membership
3. "How do the creator campaigns work?" — Brand management, product shipping, content delivery
4. "How can the community support brand business goals?" — Curated network, authentic reviews, on-campus activations

### Design System
- Primary red: #ef3325
- Black: #000000
- White: #ffffff
- Beige background: #efebe9
- Border top accent: 6px solid red
- Headers: Playfair Display (serif), weights 400/600/700
- Body: Inter (sans-serif), weights 300/400/500/600
- H2: 3.5rem
- H3: 2rem
- Max-width: 1000px

### Tracking/Analytics
- Google Tag Manager: GTM-WPJMZ6L
- Google Ad Manager (DFP)
- Piano
- Gravity Forms AJAX
- Jetpack Stats
- Parsely

### Responsive Breakpoints
- Desktop: 1440px+
- Tablet: 759–1110px
- Mobile: <600px

---

## What this app reproduces
- All statistics (250, 25M+, 70+, 7.9%) from real data
- All 9 universities confirmed on campus page
- All 4 brand partners (Coco & Eve, Grande Cosmetics, Medicube, Fenty Beauty)
- All 4 FAQs from joincampus + 1 additional from campus
- Exact form fields from Gravity Form 74 (excl. country dropdown simplified to US states for MVP)
- Design colors: #ef3325 red, #efebe9 cream, #000 black, #fafafa card bg
- Typography: Inter (body), clean editorial headings
- 6px red top border accent
- Footer: Digiday Media copyright, Privacy Policy, Terms

## What differs from existing site
- **No WordPress** — standalone Next.js, no Gutenberg, no plugin dependencies
- **Form destination** — existing uses Gravity Forms to WP backend; new uses `NEXT_PUBLIC_FORM_ENDPOINT` (dev: console log)
- **Country field** — existing has 249-country dropdown; new uses US states only for MVP
- **Playfair Display** not loaded (using Inter with bold weights — closely matches editorial style)
- **Video player** — existing has embedded video; VideoEmbed component built but no asset URL sourced
- **Logo images** — brand logos are text fallbacks until actual SVG/PNG assets provided
- **GTM ID** — GTM-WPJMZ6L is on the existing WP site. New site uses `NEXT_PUBLIC_GA4_MEASUREMENT_ID` env var
- **Piano/Parsely** — abstracted; can be added via Analytics.tsx

## What needs attention before production
1. Source actual brand logo files (Coco & Eve, Grande, Medicube, Fenty)
2. Wire NEXT_PUBLIC_FORM_ENDPOINT to real form service (Formspree, Make, or custom API route)
3. Source/create OG image at /public/og-default.jpg
4. Add country dropdown to application form if international creators are expected
5. Connect GA4 measurement ID in .env.local
6. Add Parsely snippet via Analytics.tsx if needed
7. Confirm final domain (campus.glossy.co vs other)
8. Source video asset URL if video section is wanted
9. Expand university list beyond 9 (the site claims 70+)
