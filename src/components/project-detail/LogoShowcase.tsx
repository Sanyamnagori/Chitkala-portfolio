interface Props {
  image: string
  alt?: string
}

export function LogoShowcase({ image, alt = 'Logo showcase' }: Props) {
  return (
    <section
      className="mx-auto max-w-[1400px] px-6"
      style={{ paddingTop: '48px' }}
    >
      <img
        src={image}
        alt={alt}
        className="w-full rounded-none object-cover"
        style={{ maxHeight: '340px', objectFit: 'cover' }}
      />
    </section>
  )
}
