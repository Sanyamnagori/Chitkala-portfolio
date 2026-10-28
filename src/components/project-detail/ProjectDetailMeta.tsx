import type { ProjectDetailMeta as MetaContent } from '../../types/projectDetail'

interface Props {
  content: MetaContent
}

export function ProjectDetailMeta({ content }: Props) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px] grid grid-cols-1 lg:grid-cols-[718fr_267fr_775fr]"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(69 / 1920 * 100cqw)',
      }}
    >
      <div>
        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-dark-red"
          style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
        >
          {content.category}
        </p>

        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red uppercase tracking-wider"
          style={{
            marginTop: 'calc(60 / 1920 * 100cqw)',
            fontSize: 'calc(39.56 / 1920 * 100cqw)',
            lineHeight: 1.21,
          }}
        >
          {content.essenceLabel}
        </p>

        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
          style={{
            marginTop: 'calc(20 / 1920 * 100cqw)',
            fontSize: 'calc(24.45 / 1920 * 100cqw)',
            lineHeight: 1.36,
            textAlign: 'justify',
          }}
        >
          {content.essence}
        </p>
      </div>

      <div className="hidden lg:block" />

      <div
        className="mt-8 lg:mt-0"
        style={{ paddingTop: 'calc(108 / 1920 * 100cqw)' }}
      >
        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red uppercase tracking-wider"
          style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
        >
          {content.industryLabel}
        </p>
        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
          style={{
            marginTop: 'calc(20 / 1920 * 100cqw)',
            fontSize: 'calc(24.45 / 1920 * 100cqw)',
            lineHeight: 1.19,
          }}
        >
          {content.industry}
        </p>

        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red uppercase tracking-wider"
          style={{
            marginTop: 'calc(106 / 1920 * 100cqw)',
            fontSize: 'calc(39.56 / 1920 * 100cqw)',
            lineHeight: 1.21,
          }}
        >
          {content.scopeLabel}
        </p>
        <p
          className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
          style={{
            marginTop: 'calc(20 / 1920 * 100cqw)',
            fontSize: 'calc(24.45 / 1920 * 100cqw)',
            lineHeight: 1.19,
          }}
        >
          {content.scope}
        </p>
      </div>
    </section>
  )
}
