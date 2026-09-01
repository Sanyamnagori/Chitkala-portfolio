import type { ProjectDetailHero as HeroContent } from '../../types/projectDetail'
import { GoBackLink } from './GoBackLink'

interface Props {
  content: HeroContent
}

export function ProjectDetailHero({ content }: Props) {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={content.coverImage}
        alt={content.title}
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-x-0 top-0 mx-auto max-w-[1400px] px-8"
        style={{ paddingTop: '90px' }}
      >
        <GoBackLink />
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
