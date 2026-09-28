import type { Metadata } from 'next'
import { Playfair_Display, Heebo, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Glossy Campus | Where Beauty & Wellness Brands Meet Gen Z Creators',
    template: '%s | Glossy Campus',
  },
  description:
    'Glossy Campus connects beauty and wellness brands with 250+ vetted college creators across 70+ universities. 25M+ combined followers. 7.9% average engagement rate.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://campus.glossy.co'),
  openGraph: {
    type: 'website',
    siteName: 'Glossy Campus',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${heebo.variable} ${poppins.variable}`}>
      <body className="bg-[#FDF9F5] text-[#161616] antialiased" style={{ fontFamily: 'var(--font-heebo), sans-serif' }}>
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
