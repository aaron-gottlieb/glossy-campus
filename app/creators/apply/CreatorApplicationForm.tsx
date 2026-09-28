'use client'

import { useState, FormEvent } from 'react'
import { trackEvent, events } from '@/lib/analytics'

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error'
  message?: string
}

const CURRENT_YEAR = new Date().getFullYear()
const GRAD_YEARS = Array.from({ length: 6 }, (_, i) => CURRENT_YEAR + i)

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY','DC',
]

export default function CreatorApplicationForm() {
  const [form, setForm] = useState<FormState>({ status: 'idle' })

  function handleFocus() {
    if (form.status === 'idle') {
      trackEvent(events.CREATOR_APPLICATION_START)
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setForm({ status: 'submitting' })

    const data = new FormData(e.currentTarget)
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

    if (!endpoint) {
      // Dev mode: simulate success
      console.log('[Form] Submission data:', Object.fromEntries(data.entries()))
      await new Promise((r) => setTimeout(r, 800))
      trackEvent(events.CREATOR_APPLICATION_SUBMIT, { env: 'dev' })
      setForm({ status: 'success' })
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        trackEvent(events.CREATOR_APPLICATION_SUBMIT, { status: 'success' })
        setForm({ status: 'success' })
      } else {
        throw new Error(`HTTP ${res.status}`)
      }
    } catch (err) {
      console.error('[Form] Submission error:', err)
      trackEvent(events.CREATOR_APPLICATION_SUBMIT, { status: 'error' })
      setForm({
        status: 'error',
        message: 'Something went wrong. Please try again or email campus@glossy.co.',
      })
    }
  }

  if (form.status === 'success') {
    return (
      <div className="bg-[#efebe9] rounded-lg p-8 sm:p-12 text-center">
        <div className="text-4xl mb-4">✨</div>
        <h2 className="text-2xl font-bold text-black mb-3">Application received!</h2>
        <p className="text-gray-600 leading-relaxed">
          Thank you for applying to Glossy Campus. Our team reviews applications on a rolling basis and will be in
          touch within 5–7 business days. Keep creating!
        </p>
        <a
          href="/creators"
          className="inline-block mt-6 text-sm font-semibold text-[#ef3325] hover:underline"
        >
          ← Back to Campus
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fafafa] border border-black/10 rounded-lg p-6 sm:p-8 flex flex-col gap-5"
      noValidate
    >
      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Creator Application</p>

      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="First Name" name="first_name" required onFocus={handleFocus} />
        <Field label="Last Name" name="last_name" required />
      </div>

      {/* Email */}
      <Field label="Email Address" name="email" type="email" required />

      {/* Phone */}
      <Field label="Phone Number" name="phone" type="tel" required />

      {/* College */}
      <Field label="College / University" name="college" required />

      {/* Graduation */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Graduation Year <span className="text-[#ef3325]">*</span>
        </label>
        <select
          name="graduation_year"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#ef3325]"
        >
          <option value="">Select year</option>
          {GRAD_YEARS.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>

      {/* Social handles */}
      <div>
        <p className="text-xs font-semibold text-gray-700 mb-3">
          Social Handles <span className="text-[#ef3325]">*</span>
          <span className="font-normal text-gray-400 ml-1">(at least one required)</span>
        </p>
        <div className="flex flex-col gap-3">
          <FieldWithPrefix label="TikTok" name="tiktok_handle" prefix="@" />
          <FieldWithPrefix label="Instagram" name="instagram_handle" prefix="@" />
          <FieldWithPrefix label="YouTube" name="youtube_handle" prefix="@" optional />
        </div>
      </div>

      {/* Content focus */}
      <div>
        <p className="text-xs font-semibold text-gray-700 mb-3">
          Content Focus <span className="text-[#ef3325]">*</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {['Beauty', 'Wellness', 'Fashion', 'Other'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="content_focus"
                value={opt.toLowerCase()}
                required
                className="accent-[#ef3325]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Mailing address */}
      <div>
        <p className="text-xs font-semibold text-gray-700 mb-1">
          Mailing Address <span className="text-[#ef3325]">*</span>
        </p>
        <p className="text-xs text-gray-400 mb-3">
          We&apos;ll exclusively use this to send your welcome package and product drops.
        </p>
        <div className="flex flex-col gap-3">
          <input
            name="address_street"
            type="text"
            placeholder="Street Address"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
          />
          <input
            name="address_line2"
            type="text"
            placeholder="Apt, Suite, etc. (optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              name="address_city"
              type="text"
              placeholder="City"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
            />
            <select
              name="address_state"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#ef3325]"
            >
              <option value="">State</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <input
            name="address_zip"
            type="text"
            placeholder="ZIP / Postal Code"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <p className="text-xs font-semibold text-gray-700 mb-3">
          Sign up for the Glossy POP newsletter?
        </p>
        <div className="flex gap-6">
          {['Yes', 'No'].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="newsletter_signup"
                value={opt.toLowerCase()}
                defaultChecked={opt === 'Yes'}
                className="accent-[#ef3325]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Error */}
      {form.status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3">
          {form.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={form.status === 'submitting'}
        className="w-full bg-black text-white font-semibold text-sm py-3 rounded hover:bg-[#ef3325] transition-colors disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {form.status === 'submitting' ? 'Submitting…' : 'Apply to Join'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to Digiday Media&apos;s{' '}
        <a
          href="https://digiday.com/privacy-policy"
          className="underline hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

// ─── Small reusable field components ──────────────────────────────────────────

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
  onFocus,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  optional?: boolean
  onFocus?: () => void
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor={name}>
        {label}{' '}
        {required && <span className="text-[#ef3325]">*</span>}
        {optional && <span className="font-normal text-gray-400">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        onFocus={onFocus}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
      />
    </div>
  )
}

function FieldWithPrefix({
  label,
  name,
  prefix,
  optional,
}: {
  label: string
  name: string
  prefix: string
  optional?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor={name}>
        {label}{' '}
        {optional && <span className="font-normal text-gray-400">(optional)</span>}
      </label>
      <div className="flex">
        <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l bg-gray-50 text-sm text-gray-500">
          {prefix}
        </span>
        <input
          id={name}
          name={name}
          type="text"
          className="flex-1 border border-gray-300 rounded-r px-3 py-2 text-sm focus:outline-none focus:border-[#ef3325]"
        />
      </div>
    </div>
  )
}
