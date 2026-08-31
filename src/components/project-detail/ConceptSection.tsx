import type { ProjectDetailConcept as ConceptContent } from '../../types/projectDetail'

interface Props {
  content: ConceptContent
}

export function ConceptSection({ content }: Props) {
  return (
    <section
      className="mx-auto max-w-[1400px] px-6"
      style={{ paddingTop: '48px' }}
    >
      <div className="relative mx-auto flex flex-col items-center justify-center gap-6 xl:flex-row xl:items-start xl:gap-8">
        {/* Left side text blocks (1 & 3) */}
        <div className="flex flex-col justify-between gap-8 xl:w-[260px] xl:pt-10">
          {content.annotations[0] && (
            <div>
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: '17px' }}
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
                style={{ fontSize: '17px' }}
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
        <div className="relative w-full shrink-0 xl:max-w-[560px]">
          <img
            src={content.image}
            alt="Brand concept diagram"
            className="mx-auto w-full object-contain"
            style={{ maxWidth: '560px' }}
          />
        </div>

        {/* Right side text blocks (2 & 4) */}
        <div className="flex flex-col justify-between gap-8 xl:w-[280px] xl:pt-10">
          {content.annotations[1] && (
            <div>
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: '17px' }}
              >
                Inspired by the <strong>Pancha Bhutas. Earth, Water, Fire, Air, & Space.</strong> It represents the forces that shape our world. A sixth element, human experience, brings meaning to the journey.
                <span className="ml-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chitkala-red text-[10px] font-bold text-white align-middle">
                  2
                </span>
              </p>
            </div>
          )}

          {content.annotations[3] && (
            <div className="xl:mt-28">
              <p
                className="font-[family-name:var(--font-cabinet)] font-medium leading-[1.45] text-[#2D2D2D]"
                style={{ fontSize: '17px' }}
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
