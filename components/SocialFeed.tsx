import type { SocialPost } from '@/types'

interface SocialFeedProps {
  posts: SocialPost[]
}

// Platform colour treatments
const PLATFORM = {
  instagram: {
    label: 'Instagram',
    badge: 'bg-gradient-to-br from-[#f9a825] via-[#e91e8c] to-[#6c3cbf]',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  tiktok: {
    label: 'TikTok',
    badge: 'bg-[#010101]',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
      </svg>
    ),
  },
}

function fmtNum(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k'
  return n.toString()
}

// Placeholder gradient backgrounds by index
const PLACEHOLDERS = [
  'from-[#fce4ec] to-[#f8bbd0]',
  'from-[#e8eaf6] to-[#c5cae9]',
  'from-[#e0f2f1] to-[#b2dfdb]',
  'from-[#fff8e1] to-[#ffecb3]',
  'from-[#fce4ec] to-[#f48fb1]',
  'from-[#f3e5f5] to-[#ce93d8]',
]

export default function SocialFeed({ posts }: SocialFeedProps) {
  return (
    <section className="bg-[#161616] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p
              className="text-xs font-semibold italic uppercase tracking-[0.2em] text-[#FC4337] mb-3"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              As Seen On Campus
            </p>
            <h2
              className="text-3xl sm:text-5xl text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', fontWeight: 400 }}
            >
              #GlossyCampus
            </h2>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://www.instagram.com/glossyco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-black uppercase tracking-wider transition-colors"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f9a825] via-[#e91e8c] to-[#6c3cbf] flex items-center justify-center text-white">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              @glossyco
            </a>
          </div>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => {
            const p = PLATFORM[post.platform]
            return (
              <a
                key={post.id}
                href={post.postUrl ?? '#'}
                target={post.postUrl ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-0.5"
              >
                {/* Image / placeholder */}
                <div className={`aspect-square w-full bg-gradient-to-br ${PLACEHOLDERS[i % PLACEHOLDERS.length]} relative flex items-end`}>
                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={`Post by ${post.handle}`} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      {p.icon && <span className="text-black scale-[4]">{p.icon}</span>}
                    </div>
                  )}
                  {/* Platform badge */}
                  <span className={`relative m-2 inline-flex items-center gap-1 ${p.badge} text-white text-[10px] font-bold px-2 py-1 rounded-full`}>
                    {p.icon}
                  </span>
                </div>

                {/* Caption + stats */}
                <div className="p-3 flex flex-col gap-2 flex-1">
                  <p
                    className="text-[10px] font-black text-[#FC4337]"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {post.handle}
                  </p>
                  <p
                    className="text-[11px] text-white/60 leading-snug line-clamp-3 flex-1"
                    style={{ fontFamily: 'var(--font-heebo)' }}
                  >
                    {post.caption}
                  </p>
                  {(post.likes || post.comments) && (
                    <div className="flex gap-3 mt-auto pt-1 border-t border-white/5">
                      {post.likes && (
                        <span className="text-[10px] text-white/30 flex items-center gap-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                          ♥ {fmtNum(post.likes)}
                        </span>
                      )}
                      {post.comments && (
                        <span className="text-[10px] text-white/30 flex items-center gap-1" style={{ fontFamily: 'var(--font-poppins)' }}>
                          ✦ {fmtNum(post.comments)}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <p
          className="text-center text-white/30 text-xs mt-10 tracking-wide"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Tag <span className="text-white/50 font-semibold">#GlossyCampus</span> or{' '}
          <span className="text-white/50 font-semibold">@glossycampus</span> to be featured
        </p>
      </div>
    </section>
  )
}
