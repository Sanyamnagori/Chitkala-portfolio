interface FilterTagProps {
  label: string
  active?: boolean
  width?: number
}

export function FilterTag({ label, active = false, width }: FilterTagProps) {
  const displayLabel = label.replace(/\s+$/, '')

  return (
    <button
      type="button"
      className={[
        'responsive-filter-tag inline-flex shrink-0 items-center justify-center font-[family-name:var(--font-cabinet)] font-normal uppercase whitespace-nowrap transition-all duration-200',
        active
          ? 'bg-chitkala-red text-white'
          : 'border border-chitkala-red bg-white text-chitkala-red hover:bg-chitkala-red hover:text-white',
      ].join(' ')}
      style={{
        height: 'var(--tag-height, 64px)',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: width ? `calc(${width}px * var(--scale-factor, 1))` : 'auto',
        borderRadius: 'var(--tag-radius, 20px)',
        fontSize: 'var(--tag-font-size, 24px)',
        paddingLeft: width ? undefined : 'var(--tag-padding, 24px)',
        paddingRight: width ? undefined : 'var(--tag-padding, 24px)',
      }}
    >
      {displayLabel}
      <span className="ml-4">+</span>
    </button>
  )
}
