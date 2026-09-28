import type { Brand } from '@/types'

interface LogoGridProps {
  brands: Brand[]
  title?: string
  subtitle?: string
}

export default function LogoGrid({ brands, title, subtitle }: LogoGridProps) {
  return (
    <section className="bg-[#efebe9] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">{title}</h2>
            )}
            {subtitle && (
              <p className="text-gray-600">{subtitle}</p>
            )}
          </div>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className="flex items-center justify-center"
            >
              {brand.logo ? (
                /* When actual logo files are available, replace with <Image> */
                <div className="h-10 w-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium">{brand.name}</span>
                </div>
              ) : (
                <span className="text-base font-bold text-black tracking-tight">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
