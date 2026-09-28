# Analytics — Glossy Campus

## Architecture

Analytics is abstracted through two files:
- `lib/analytics.ts` — event tracking functions and named event constants
- `components/Analytics.tsx` — client component that initializes providers from env vars

**Components never call analytics providers directly.** They call `trackEvent()` from `lib/analytics.ts`.

---

## Current Providers

### GA4 (Google Analytics 4)
- Set `NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX` in `.env.local`
- GA4 script is injected by `Analytics.tsx` via `next/script` (afterInteractive strategy)
- Events fire via `window.gtag('event', name, properties)`

### Development
- No env var needed
- All events log to browser console: `[Analytics] event_name { properties }`

---

## Adding a New Provider

### Parsely
Add to `Analytics.tsx`:
```tsx
{process.env.NEXT_PUBLIC_PARSELY_SITE_ID && (
  <Script
    src={`//cdn.parsely.com/keys/${process.env.NEXT_PUBLIC_PARSELY_SITE_ID}/p.js`}
    strategy="afterInteractive"
  />
)}
```

### Segment
```tsx
// In Analytics.tsx
<Script id="segment-init" strategy="afterInteractive">
  {`
    !function(){var analytics=window.analytics=...}
    analytics.load("${process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY}");
  `}
</Script>
```

Then update `trackEvent()` in `lib/analytics.ts`:
```typescript
if (typeof window.analytics?.track === 'function') {
  window.analytics.track(event, properties)
}
```

---

## Named Events

All event names are exported as constants from `lib/analytics.ts`:

| Constant | Value | Fires On |
|----------|-------|----------|
| `CAMPUS_CTA_CLICK` | `campus_cta_click` | Any primary CTA click |
| `CREATOR_APPLICATION_START` | `creator_application_start` | First field focus on apply form |
| `CREATOR_APPLICATION_SUBMIT` | `creator_application_submit` | Form submit (with status) |
| `BRAND_INQUIRY_CLICK` | `brand_inquiry_click` | Brand CTA clicks |
| `BRAND_INQUIRY_SUBMIT` | `brand_inquiry_submit` | Brand form submit |
| `UNIVERSITY_VIEW` | `university_view` | University detail page load |
| `CAMPAIGN_VIEW` | `campaign_view` | Campaign detail page load |
| `CASE_STUDY_VIEW` | `case_study_view` | Case study page load |
| `FAQ_EXPAND` | `faq_expand` | FAQ accordion open |
| `NAV_CLICK` | `nav_click` | Header nav link click |

---

## Existing Site Analytics (reference)

The existing glossy.co/campus/ and /joincampus/ pages use:
- **GTM container:** GTM-WPJMZ6L
- **Parsely:** active for content analytics
- **Google Ad Manager (DFP):** ad serving
- **Piano:** subscription/paywall tracking
- **Jetpack Stats:** WordPress site stats

For the standalone app, DFP and Piano are not needed. GTM can optionally be added via `@next/third-parties/google` or a custom Script tag.

---

## Key Conversion Funnels to Track

1. **Creator funnel:** Homepage → /creators → /creators/apply → form submit
2. **Brand funnel:** Homepage → /brands → #brand-inquiry → form submit
3. **Content funnel:** Homepage → /campaigns or /brands/case-studies → CTA click
