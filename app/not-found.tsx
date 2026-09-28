import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#efebe9]">
      <div className="text-center max-w-md mx-auto px-4">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#ef3325] mb-4">404</p>
        <h1 className="text-4xl font-bold text-black mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          This page doesn&apos;t exist — or it may have moved. Head back to Campus.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="text-sm font-semibold px-5 py-2.5 bg-[#ef3325] text-white rounded hover:bg-[#d42b1e] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/creators/apply"
            className="text-sm font-semibold px-5 py-2.5 border border-black text-black rounded hover:bg-black hover:text-white transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </div>
    </div>
  )
}
