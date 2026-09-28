import Link from 'next/link'
import { siteConfig } from '@/content/site'

export default function Footer() {
  return (
    <footer className="bg-[#FC4337] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span
                className="font-black text-white text-lg tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Glossy
              </span>
              <span
                className="font-black text-white/70 text-lg tracking-tight uppercase"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Campus
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-heebo)' }}>
              Where beauty and wellness brands meet the next generation of creators.
            </p>
            <div className="flex gap-3">
              {siteConfig.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/70 hover:text-white transition-colors text-xs uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {s.platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {siteConfig.footerNav.map((section) => (
            <div key={section.label}>
              <h3
                className="text-xs font-black uppercase tracking-widest text-white mb-4"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {section.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-heebo)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50" style={{ fontFamily: 'var(--font-heebo)' }}>
            &copy; {new Date().getFullYear()} Digiday Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://digiday.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-heebo)' }}
            >
              Privacy Policy
            </a>
            <a
              href="https://digiday.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-heebo)' }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
