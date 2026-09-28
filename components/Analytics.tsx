'use client'

import { useEffect } from 'react'
import Script from 'next/script'

/**
 * Analytics client component.
 * Initializes GA4 from env var. No hardcoded credentials.
 * Place in root layout inside <body>.
 * See docs/analytics.md for full wiring guide.
 */
export default function Analytics() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

  useEffect(() => {
    // Add Parsely or other providers here.
    // They will auto-initialize if their scripts are injected below.
  }, [])

  if (!ga4Id) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga4Id}');
        `}
      </Script>
    </>
  )
}
