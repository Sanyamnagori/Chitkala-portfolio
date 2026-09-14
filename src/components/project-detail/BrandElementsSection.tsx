import type { BrandElement } from '../../types/projectDetail'

interface Props {
  elements: BrandElement[]
  bases: BrandElement[]
}

export function BrandElementsSection({ elements, bases }: Props) {
  const topGroup1 = elements.slice(0, 2)
  const topGroup2 = elements.slice(2, 4)

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16">
      {/* Top Row: Grouped into 2 columns matching the bottom row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-13">
        {/* Left Sub-Grid (OCEAN & GREENERY) matching BASE */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {topGroup1.map((element) => (
            <div key={element.name} className="overflow-hidden">
              <img
                src={element.image}
                alt={element.name}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Sub-Grid (LAND & SUN) matching SPACE */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {topGroup2.map((element) => (
            <div key={element.name} className="overflow-hidden">
              <img
                src={element.image}
                alt={element.name}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: BASE & SPACE */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-13">
        {bases.map((element) => (
          <div key={element.name} className="overflow-hidden">
            <img
              src={element.image}
              alt={element.name}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

