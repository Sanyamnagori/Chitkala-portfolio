interface Props {
  image: string
  title: string
}

export function LogoDisplaySection({ image, title }: Props) {
  return (
    <section
      className="relative mx-auto max-w-[1920px] overflow-hidden"
      style={{ padding: '80px 0 0', minHeight: '600px' }}
    >
      <img
        src={image}
        alt={title}
        className="mx-auto w-full max-w-[1622px] object-contain"
      />
      <h2
        className="pointer-events-none absolute right-[80px] top-[180px] hidden origin-center rotate-90 font-[family-name:var(--font-cabinet)] font-bold text-chitkala-dark-red xl:block"
        style={{ fontSize: '84px' }}
      >
        {title}
      </h2>
    </section>
  )
}
