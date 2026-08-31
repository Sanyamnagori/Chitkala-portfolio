import type { ProjectDetailMeta as MetaContent } from '../../types/projectDetail'

interface Props {
  content: MetaContent
}

export function ProjectDetailMeta({ content }: Props) {
  return (
    <section
      className="mx-auto grid max-w-[1400px] gap-8 md:grid-cols-2 px-8"
      style={{ paddingTop: '48px' }}
    >
      <div>
        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-dark-red"
          style={{ fontSize: '32px' }}
        >
          {content.category}
        </p>

        <p
          className="mt-[36px] font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
          style={{ fontSize: '22px' }}
        >
          {content.essenceLabel}
        </p>

        <p
          className="mt-[12px] max-w-[580px] font-[family-name:var(--font-cabinet)] font-medium leading-[1.5] text-[#2D2D2D]"
          style={{ fontSize: '17px' }}
        >
          {content.essence}
        </p>
      </div>

      <div className="md:pl-12">
        <p
          className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
          style={{ fontSize: '22px' }}
        >
          {content.industryLabel}
        </p>
        <p
          className="mt-[12px] font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
          style={{ fontSize: '17px' }}
        >
          {content.industry}
        </p>

        <p
          className="mt-[36px] font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
          style={{ fontSize: '22px' }}
        >
          {content.scopeLabel}
        </p>
        <p
          className="mt-[12px] font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
          style={{ fontSize: '17px' }}
        >
          {content.scope}
        </p>
      </div>
    </section>
  )
}
