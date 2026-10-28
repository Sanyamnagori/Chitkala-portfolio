import type { BrandElement } from '../../types/projectDetail'

interface Props {
  elements: BrandElement[]
  bases: BrandElement[]
}

export function BrandElementsSection({ elements, bases }: Props) {
  const topGroup1 = elements.slice(0, 2)
  const topGroup2 = elements.slice(2, 4)

  return (
    <section
      className="mx-auto w-full max-w-[1920px]"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(80 / 1920 * 100cqw)',
        paddingBottom: 'calc(80 / 1920 * 100cqw)',
      }}
    >
      {/* Top Row: Grouped into 2 columns matching the bottom row */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[calc(52/1920*100cqw)]">
        {/* Left Sub-Grid (OCEAN & GREENERY) matching BASE */}
        <div className="grid grid-cols-2 gap-4 md:gap-[calc(20/1920*100cqw)]">
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
        <div className="grid grid-cols-2 gap-4 md:gap-[calc(20/1920*100cqw)]">
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
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[calc(52/1920*100cqw)]"
        style={{ marginTop: 'calc(24 / 1920 * 100cqw)' }}
      >
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
