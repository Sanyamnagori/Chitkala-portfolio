import type { ProjectDetailQuote as QuoteContent } from '../../types/projectDetail'

interface Props {
  content: QuoteContent
}

export function ProjectDetailQuote({ content }: Props) {
  return (
    <section
      className="mx-auto max-w-[1400px] text-center px-6"
      style={{ paddingTop: '48px' }}
    >
      {content.graphic && (
        <div className="mb-4 flex justify-center">
          <img
            src={content.graphic}
            alt="Sanskrit quote header"
            className="h-auto max-w-full"
            style={{ width: '620px' }}
          />
        </div>
      )}

      <blockquote
        className="mx-auto max-w-[480px] whitespace-pre-line font-[family-name:var(--font-cabinet)] font-medium leading-[1.3] text-[#2D2D2D]"
        style={{ fontSize: '18px' }}
      >
        {content.text}
        {'\n'}
        {content.attribution}
      </blockquote>
    </section>
  )
}
