import type { ProjectDetailConcept as ConceptContent } from '../../types/projectDetail'

interface Props {
  content: ConceptContent
}

export function ConceptSection({ content }: Props) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px]"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(79 / 1920 * 100cqw)',
      }}
    >
      <div className="relative mx-auto w-full flex flex-col items-center justify-between gap-6 xl:flex-row xl:items-start">
        {/* Left side text blocks (1 & 3) */}
        <div className="flex flex-col justify-between gap-8 xl:w-[calc(420/1920*100cqw)] xl:pt-10">
          {content.annotations[0] && (
            <div>
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: 'calc(24.45 / 1920 * 100cqw)' }}
              >
                {content.annotations[0].text}
                <span className="ml-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chitkala-red text-[10px] font-bold text-white align-middle">
                  1
                </span>
              </p>
            </div>
          )}

          {content.annotations[2] && (
            <div className="xl:mt-24">
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: 'calc(24.45 / 1920 * 100cqw)' }}
              >
                {content.annotations[2].text}
                <span className="ml-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chitkala-red text-[10px] font-bold text-white align-middle">
                  3
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Center Golden Ratio diagram image */}
        <div className="relative w-full shrink-0 xl:w-[calc(760/1920*100cqw)] flex justify-center">
          <img
            src={content.image}
            alt="Brand concept diagram"
            className="w-full h-auto object-contain"
            style={{ maxWidth: 'calc(760 / 1920 * 100cqw)' }}
          />
        </div>

        {/* Right side text blocks (2 & 4) */}
        <div className="flex flex-col justify-between gap-8 xl:w-[calc(420/1920*100cqw)] xl:pt-10">
          {content.annotations[1] && (
            <div style={{ marginTop: '30px' }}>
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: 'calc(24.45 / 1920 * 100cqw)' }}
              >
                Inspired by the <strong>Pancha Bhutas. Earth, Water, Fire, Air, & Space.</strong> It represents the forces that shape our world. A sixth element, human experience, brings meaning to the journey.
                <span className="ml-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chitkala-red text-[10px] font-bold text-white align-middle">
                  2
                </span>
              </p>
            </div>
          )}

          {content.annotations[3] && (
            <div className="xl:mt-20">
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: 'calc(24.45 / 1920 * 100cqw)' }}
              >
                {content.annotations[3].text}
                <span className="ml-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chitkala-red text-[10px] font-bold text-white align-middle">
                  4
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
