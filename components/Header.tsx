'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/content/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xs tracking-[0.2em] uppercase text-[#ef3325] font-semibold">Glossy</span>
          <span className="text-black font-bold text-xl tracking-tight">Campus</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/creators/apply"
            className="text-sm font-semibold px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white transition-colors"
          >
            Apply to Join
          </Link>
          <Link
            href="/#brand-inquiry"
            className="text-sm font-semibold px-4 py-2 bg-[#ef3325] text-white rounded hover:bg-[#d42b1e] transition-colors"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/10 px-4 py-4 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-black/10">
            <Link
              href="/creators/apply"
              className="text-sm font-semibold px-4 py-2.5 border border-black text-black rounded text-center hover:bg-black hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Apply to Join
            </Link>
            <Link
              href="/#brand-inquiry"
              className="text-sm font-semibold px-4 py-2.5 bg-[#ef3325] text-white rounded text-center hover:bg-[#d42b1e] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
