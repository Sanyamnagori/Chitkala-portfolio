import type { ProjectDetailHero as HeroContent } from '../../types/projectDetail'

interface Props {
  content: HeroContent
}

export function ProjectDetailHero({ content }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="w-full flex justify-center items-center">
        <img
          src={content.coverImage}
          alt={content.title}
          className="w-full max-w-full h-auto object-contain block"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[1400px] px-8 pb-12 md:pb-16"
      >
        <h1
          className="font-[family-name:var(--font-cabinet)] font-bold text-white tracking-tight drop-shadow-md"
          style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: 1.1 }}
        >
          {content.title}
        </h1>
      </div>
    </section>
  )
}

