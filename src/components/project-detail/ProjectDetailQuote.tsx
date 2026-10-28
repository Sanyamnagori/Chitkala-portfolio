import type { ProjectDetailQuote as QuoteContent } from '../../types/projectDetail'

interface Props {
  content: QuoteContent
}

export function ProjectDetailQuote({ content }: Props) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px] text-center"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(79 / 1920 * 100cqw)',
      }}
    >
      {content.graphic && (
        <div className="mb-4 flex justify-center">
          <img
            src={content.graphic}
            alt="Sanskrit quote header"
            className="h-auto max-w-full"
            style={{ width: 'calc(620 / 1920 * 100cqw)', minWidth: '320px' }}
          />
        </div>
      )}

      <blockquote
        className="mx-auto max-w-[calc(1400/1920*100cqw)] whitespace-pre-line font-[family-name:var(--font-cabinet)] font-medium leading-[1.3] text-[#2D2D2D]"
        style={{ fontSize: 'calc(24.45 / 1920 * 100cqw)' }}
      >
        {content.text}
        {'\n'}
        {content.attribution}
      </blockquote>
    </section>
  )
}
