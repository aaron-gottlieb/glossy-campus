'use client'

import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/content/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#FDF9F5] border-t-2 border-b-2 border-[#FC4337]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span
            className="font-black text-[#FC4337] text-lg tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Glossy
          </span>
          <span
            className="font-black text-black text-lg tracking-tight uppercase"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Campus
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-black italic uppercase tracking-wide text-[#161616] hover:text-[#FC4337] transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/creators/apply"
            className="text-sm font-black px-5 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Apply to Join
          </Link>
          <Link
            href="/#brand-inquiry"
            className="text-sm font-black px-5 py-2 bg-[#FC4337] text-white rounded-full hover:bg-[#e03a2f] transition-colors"
            style={{ fontFamily: 'var(--font-poppins)' }}
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
        <div className="md:hidden bg-[#FDF9F5] border-t-2 border-[#FC4337] px-4 py-4 flex flex-col gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-black italic uppercase tracking-wide text-[#161616] hover:text-[#FC4337]"
              style={{ fontFamily: 'var(--font-poppins)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-[#FC4337]/30">
            <Link
              href="/creators/apply"
              className="font-black px-5 py-2.5 border-2 border-black text-black rounded-full text-center hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
              onClick={() => setMenuOpen(false)}
            >
              Apply to Join
            </Link>
            <Link
              href="/#brand-inquiry"
              className="font-black px-5 py-2.5 bg-[#FC4337] text-white rounded-full text-center hover:bg-[#e03a2f] transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
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
