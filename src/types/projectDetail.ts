export interface ProjectDetailHero {
  coverImage: string
  title: string
}

export interface ProjectDetailMeta {
  category: string
  essenceLabel: string
  essence: string
  industryLabel: string
  industry: string
  scopeLabel: string
  scope: string
}

export interface ProjectDetailQuote {
  text: string
  attribution: string
  graphic?: string
}

export interface ConceptAnnotation {
  id: number
  dotPosition: { x: number; y: number }
  text: string
  textAlign: 'left' | 'right'
  textPosition: { x: number; y: number }
}

export interface ProjectDetailConcept {
  image: string
  annotations: ConceptAnnotation[]
}

export interface BrandElement {
  name: string
  image: string
}

export interface TypographyFont {
  name: string
  subtitle: string
  description: string
}

export interface ApplicationImage {
  src: string
  alt: string
  className?: string
}

export interface ProjectDetailFounder {
  name: string
  bio: string
  instagram: string
  website: string
  image?: string
}

export interface NextProjectPreview {
  slug: string
  title: string
  year: string
  services: string
}

export interface ProjectDetailContent {
  slug: string
  hero: ProjectDetailHero
  meta: ProjectDetailMeta
  quote: ProjectDetailQuote
  concept: ProjectDetailConcept
  logoShowcase: { image: string }
  brandElements: BrandElement[]
  brandElementBases: BrandElement[]
  typography: TypographyFont[]
  logoDisplay: { image: string; title: string }
  applications: {
    banner: string
    title: string
    gallery: ApplicationImage[]
  }
  founder: ProjectDetailFounder
  nextProjects: NextProjectPreview[]
  footer: {
    copyright: string
    tagline: string
  }
}
