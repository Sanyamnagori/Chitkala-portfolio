import { filterTags } from '../data/projects'
import { FilterTag } from './FilterTag'

const row1Widths = [184, 413, 493, 493] as const
const row2Widths = [229, 413, 289, 378] as const

export function FilterTags() {
  return (
    <section className="w-full xl:px-[80px]">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-[var(--filter-gap)] xl:gap-[var(--filter-gap)]">
        <div className="responsive-filter flex flex-wrap gap-[var(--filter-gap)] px-5 pt-[40px] md:px-10 xl:px-[44px] xl:pt-[40px]">
          {filterTags.row1.map((tag, index) => (
            <FilterTag
              key={tag}
              label={tag}
              active={index === 0}
              width={row1Widths[index]}
            />
          ))}
        </div>
        <div className="responsive-filter flex flex-wrap gap-[var(--filter-gap)] px-5 md:px-10 xl:px-[44px]">
          {filterTags.row2.map((tag, index) => (
            <FilterTag key={tag} label={tag} width={row2Widths[index]} />
          ))}
        </div>
      </div>
    </section>
  )
}
