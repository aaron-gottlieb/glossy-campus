'use client'

import { useState } from 'react'

interface VideoEmbedProps {
  youtubeId?: string
  vimeoId?: string
  title: string
  thumbnailUrl?: string
}

export default function VideoEmbed({ youtubeId, vimeoId, title, thumbnailUrl }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)

  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
    : vimeoId
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1`
    : null

  if (!embedUrl) return null

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      {playing ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center group"
          aria-label={`Play ${title}`}
        >
          {thumbnailUrl && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10 w-16 h-16 bg-[#ef3325] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}
