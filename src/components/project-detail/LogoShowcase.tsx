interface Props {
  image: string
  alt?: string
}

export function LogoShowcase({ image, alt = 'Logo showcase' }: Props) {
  return (
    <section
      className="mx-auto w-full max-w-[1920px]"
      style={{
        paddingLeft: 'calc(80 / 1920 * 100%)',
        paddingRight: 'calc(80 / 1920 * 100%)',
        paddingTop: 'calc(60 / 1920 * 100cqw)',
      }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-auto object-cover rounded-none block"
      />
    </section>
  )
}
