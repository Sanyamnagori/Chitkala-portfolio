import type { TypographyFont } from '../../types/projectDetail'

interface Props {
  fonts: TypographyFont[]
}

export function TypographySection({ fonts }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16 pb-24">
      <div className="relative grid gap-12 md:grid-cols-2 md:gap-0">
        <div className="md:pr-10">
          <h3
            className="font-[family-name:var(--font-bebas)] uppercase text-[#1B1B1B]"
            style={{ fontSize: '50.82px', lineHeight: 1 }}
          >
            {fonts[0]?.name}
          </h3>
          <p
            className="mt-2 font-[family-name:var(--font-bebas)] text-[#1B1B1B]"
            style={{ fontSize: '29.04px' }}
          >
            {fonts[0]?.subtitle}
          </p>
          <p
            className="mt-4 max-w-[560px] font-[family-name:var(--font-bebas)] leading-[1.3] text-[#1B1B1B]"
            style={{ fontSize: '29.04px' }}
          >
            {fonts[0]?.description}
          </p>
        </div>

        <div
          className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-chitkala-red md:block"
          aria-hidden="true"
        />

        <div className="md:pl-10">
          <h3
            className="font-[family-name:var(--font-montserrat)] text-[#1B1B1B]"
            style={{ fontSize: '50.82px', lineHeight: 1.1 }}
          >
            {fonts[1]?.name}
          </h3>
          <p
            className="mt-2 font-[family-name:var(--font-montserrat)] text-[#1B1B1B]"
            style={{ fontSize: '29.04px' }}
          >
            {fonts[1]?.subtitle}
          </p>
          <p
            className="mt-4 max-w-[620px] whitespace-pre-line font-[family-name:var(--font-montserrat)] font-medium leading-[1.45] text-[#1B1B1B]"
            style={{ fontSize: '19.36px' }}
          >
            {fonts[1]?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
