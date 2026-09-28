'use client'

import { useState } from 'react'
import type { FAQ } from '@/types'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8">{title}</h2>
        <div className="flex flex-col divide-y divide-black/10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                aria-expanded={openId === faq.id}
              >
                <span className="font-semibold text-black text-sm sm:text-base group-hover:text-[#ef3325] transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`text-[#ef3325] shrink-0 mt-0.5 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-45' : ''
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openId === faq.id && (
                <div className="pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
