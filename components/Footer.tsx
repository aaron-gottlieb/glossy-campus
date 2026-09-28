import Link from 'next/link'
import { siteConfig } from '@/content/site'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs tracking-[0.2em] uppercase text-[#ef3325] font-semibold">Glossy</span>
              <span className="text-white font-bold text-xl tracking-tight">Campus</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
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
                  className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-wider"
                >
                  {s.platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {siteConfig.footerNav.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {section.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Digiday Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://digiday.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://digiday.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
