import type { TypographyFont } from '../../types/projectDetail'

interface Props {
  fonts: TypographyFont[]
}

export function TypographySection({ fonts }: Props) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px]"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(80 / 1920 * 100cqw)',
        paddingBottom: 'calc(100 / 1920 * 100cqw)',
      }}
    >
      <div className="relative grid gap-12 md:grid-cols-2 md:gap-0">
        <div className="md:pr-[calc(60/1920*100cqw)]">
          <h3
            className="font-[family-name:var(--font-bebas)] uppercase text-[#1B1B1B]"
            style={{ fontSize: 'calc(50.82 / 1920 * 100cqw)', lineHeight: 1 }}
          >
            {fonts[0]?.name}
          </h3>
          <p
            className="mt-2 font-[family-name:var(--font-bebas)] text-[#1B1B1B]"
            style={{ fontSize: 'calc(29.04 / 1920 * 100cqw)' }}
          >
            {fonts[0]?.subtitle}
          </p>
          <p
            className="mt-4 font-[family-name:var(--font-bebas)] leading-[1.3] text-[#1B1B1B]"
            style={{ fontSize: 'calc(29.04 / 1920 * 100cqw)' }}
          >
            {fonts[0]?.description}
          </p>
        </div>

        <div
          className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-chitkala-red md:block"
          aria-hidden="true"
        />

        <div className="md:pl-[calc(60/1920*100cqw)]">
          <h3
            className="font-[family-name:var(--font-montserrat)] text-[#1B1B1B]"
            style={{ fontSize: 'calc(50.82 / 1920 * 100cqw)', lineHeight: 1.1 }}
          >
            {fonts[1]?.name}
          </h3>
          <p
            className="mt-2 font-[family-name:var(--font-montserrat)] text-[#1B1B1B]"
            style={{ fontSize: 'calc(29.04 / 1920 * 100cqw)' }}
          >
            {fonts[1]?.subtitle}
          </p>
          <p
            className="mt-4 whitespace-pre-line font-[family-name:var(--font-montserrat)] font-medium leading-[1.45] text-[#1B1B1B]"
            style={{ fontSize: 'calc(19.36 / 1920 * 100cqw)' }}
          >
            {fonts[1]?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
