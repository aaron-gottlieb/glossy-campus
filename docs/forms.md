# Forms — Glossy Campus

## Existing Site Form Behavior (glossy.co/joincampus/)

- **Platform:** Gravity Forms (Form ID: 74) on WordPress/WP VIP
- **Submission:** AJAX POST to WordPress backend at glossy.co
- **Destination:** Unknown — likely stored in WP database and/or forwarded to email/CRM
- **Analytics:** Gravity Forms tracks submissions; Parsely and GTM fire on submit

The existing form endpoint is **not publicly accessible** and cannot be reused from a standalone app without CORS configuration or a proxy.

---

## This Implementation

### Creator Application Form (`/creators/apply`)

**Location:** `app/creators/apply/CreatorApplicationForm.tsx`

**Fields (matching Gravity Form 74):**
- First/Last Name
- Email address
- Phone number
- College/University name
- Graduation year (dropdown)
- TikTok handle (with @ prefix)
- Instagram handle (with @ prefix)
- YouTube handle (optional, with @ prefix)
- Content focus (radio: Beauty / Wellness / Fashion / Other)
- Mailing address (street, line 2, city, state, ZIP)
- Glossy POP newsletter signup (radio: Yes/No)

**Behavior:**
1. Validates required fields via native HTML5 `required` attributes
2. On submit:
   - If `NEXT_PUBLIC_FORM_ENDPOINT` is **not set** → logs FormData to console, waits 800ms, shows success state (dev mode)
   - If `NEXT_PUBLIC_FORM_ENDPOINT` **is set** → POSTs `FormData` to that endpoint with `Accept: application/json`
3. On success → shows thank-you state
4. On error → shows error message with fallback email

**Analytics events fired:**
- `creator_application_start` — on first field focus
- `creator_application_submit` — on submit (with status: 'success' | 'error')

---

### Brand Partner Inquiry Form (`/` homepage `#brand-inquiry`)

**Location:** Inline in `app/page.tsx`

**Fields (matching existing campus page):**
- First Name / Last Name
- Job Title
- Business Email
- Company Name

**Current behavior:** `action` points to `https://formspree.io/f/placeholder` — **replace before launch.**

---

## Production Recommendations

### Option A: Formspree (simplest)
1. Create account at formspree.io
2. Create two forms: one for creator applications, one for brand inquiries
3. Set `NEXT_PUBLIC_FORM_ENDPOINT` to your Formspree endpoint (e.g. `https://formspree.io/f/abcdefgh`)
4. Update the brand inquiry form `action` attribute similarly

### Option B: Make (Integromat) webhook
1. Create a Make scenario with a webhook trigger
2. Route submissions to CRM (HubSpot, Salesforce, Notion, Airtable — wherever Campus tracks these)
3. Set `NEXT_PUBLIC_FORM_ENDPOINT` to the Make webhook URL

### Option C: Custom Next.js API route
1. Create `app/api/apply/route.ts`
2. Validate `FORM_SECRET` header
3. Forward to CRM or email service
4. Set `NEXT_PUBLIC_FORM_ENDPOINT` to `/api/apply`

### Option D: Restore Gravity Forms
If the standalone app runs on glossy.co infrastructure with WP VIP access, the `action` could point to the existing WP endpoint with CORS headers added. Not recommended for standalone deploys.

---

## Differences from Existing Form

| Feature | Existing (glossy.co) | This App |
|---------|----------------------|----------|
| Country field | 249-country dropdown | US states only (MVP) |
| Form platform | Gravity Forms / WP | Native HTML / React state |
| Submission endpoint | WP backend | Env-configurable |
| Server-side storage | WP database | Depends on endpoint |
| Analytics | Gravity Forms + GTM | trackEvent() abstraction |

To add international country support, replace the US state dropdown with a full country list in `CreatorApplicationForm.tsx`.
