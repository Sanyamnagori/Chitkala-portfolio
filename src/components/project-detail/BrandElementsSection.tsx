import type { BrandElement } from '../../types/projectDetail'

interface Props {
  elements: BrandElement[]
  bases: BrandElement[]
}

export function BrandElementsSection({ elements, bases }: Props) {
  return (
    <section
      className="mx-auto max-w-[1400px] px-6"
      style={{ paddingTop: '48px' }}
    >
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
        {elements.map((element) => (
          <div key={element.name} className="overflow-hidden">
            <img
              src={element.image}
              alt={element.name}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
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
