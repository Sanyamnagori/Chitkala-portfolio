import { useEffect, useState, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectDetail } from '../services/contentApi'
import type { ProjectDetailContent } from '../types/projectDetail'
import { projects } from '../data/projects'

// Import components
import { ProjectCard } from '../components/ProjectCard'
import { Footer } from '../components/Footer'
import { ProjectDetailHero } from '../components/project-detail/ProjectDetailHero'
import { ProjectDetailMeta } from '../components/project-detail/ProjectDetailMeta'
import { ProjectDetailQuote } from '../components/project-detail/ProjectDetailQuote'
import { ConceptSection } from '../components/project-detail/ConceptSection'
import { LogoShowcase } from '../components/project-detail/LogoShowcase'
import { BrandElementsSection } from '../components/project-detail/BrandElementsSection'
import { TypographySection } from '../components/project-detail/TypographySection'

import { ApplicationsSection } from '../components/project-detail/ApplicationsSection'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'

function FounderTestimonialVideo({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let wasIntersecting = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!wasIntersecting) {
              wasIntersecting = true
              // Start from beginning and unmute when entering this section
              video.currentTime = 0
              video.muted = false

              const playPromise = video.play()
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Fallback if browser requires gesture before playing unmuted audio
                  video.muted = true
                  video.play().catch(() => {})

                  const handleInteraction = () => {
                    if (videoRef.current) {
                      videoRef.current.muted = false
                    }
                    window.removeEventListener('click', handleInteraction)
                    window.removeEventListener('touchstart', handleInteraction)
                  }
                  window.addEventListener('click', handleInteraction, { once: true })
                  window.addEventListener('touchstart', handleInteraction, { once: true })
                })
              }
            }
          } else {
            wasIntersecting = false
            video.pause()
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop
      controls
      playsInline
      preload="auto"
      className="w-full max-w-[360px] rounded-2xl object-cover shadow-md bg-black"
      style={{ maxHeight: '460px' }}
    >
      Your browser does not support the video tag.
    </video>
  )
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [content, setContent] = useState<ProjectDetailContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeNextCard, setActiveNextCard] = useState<string | null>(null)

  // Find current project index and retrieve next projects in cyclic order
  const currentIndex = projects.findIndex((p) => p.id === slug)
  const otherProjects = projects.filter((p) => p.id !== slug)
  const nextProjectsList = [
    projects[(currentIndex + 1) % projects.length] ?? otherProjects[0],
    projects[(currentIndex + 2) % projects.length] ?? otherProjects[1],
  ].filter((p): p is (typeof projects)[0] => Boolean(p && p.id !== slug))

  useEffect(() => {
    if (!slug) return

    setLoading(true)
    getProjectDetail(slug)
      .then((data) => {
        setContent(data)
        setLoading(false)
        // Scroll to top on load/change
        window.scrollTo(0, 0)
      })
      .catch((err) => {
        console.error('Error fetching project detail:', err)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-chitkala-red">
        <div className="font-[family-name:var(--font-cabinet)] text-2xl font-bold">
          Loading Project...
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
        <h2 className="font-[family-name:var(--font-cabinet)] text-4xl font-bold text-chitkala-red">
          Project Not Found
        </h2>
        <button
          onClick={() => navigate('/')}
          className="mt-6 rounded bg-chitkala-red px-6 py-3 font-[family-name:var(--font-cabinet)] font-bold text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Navbar */}
      <ProjectNavbar />

      {/* 1. Hero Cover & Title */}
      <ProjectDetailHero content={content.hero} />

      {/* 2. Project Meta & Essence */}
      <ProjectDetailMeta content={content.meta} />

      {/* 3. Quote Section */}
      {content.quote && <ProjectDetailQuote content={content.quote} />}

      {/* 4. Brand Concept Diagram */}
      {content.concept && <ConceptSection content={content.concept} />}

      {/* 5. Logo Showcase */}
      {content.logoShowcase && <LogoShowcase image={content.logoShowcase.image} />}

      {/* 6. Brand Elements & Colors */}
      {content.brandElements && content.brandElementBases && (
        <BrandElementsSection
          elements={content.brandElements}
          bases={content.brandElementBases}
        />
      )}

      {/* 7. Typography / Fonts */}
      {content.typography && <TypographySection fonts={content.typography} />}

      {/* 8. Brand Applications */}
      {content.applications && (
        <ApplicationsSection
          banner={content.applications.banner}
          title={content.applications.title}
          gallery={content.applications.gallery}
        />
      )}

      {/* 10. Founder Profile & Bio */}
      {content.founder && (
        <section
          className="mx-auto max-w-[1400px] mt-24 px-8"
          style={{ paddingTop: '60px' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left: Founder Video / Portrait */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              {content.founder.video ? (
                <FounderTestimonialVideo
                  src={content.founder.video}
                  poster={content.founder.image}
                />
              ) : content.founder.image ? (
                <img
                  src={content.founder.image}
                  alt={content.founder.name}
                  className="w-full max-w-[360px] rounded-2xl object-cover shadow-md"
                  style={{ maxHeight: '460px' }}
                />
              ) : null}
            </div>

            {/* Right: Founder Profile Details (Noticeably wider column) */}
            <div className="w-full md:w-2/3 flex flex-col items-center text-center justify-center max-w-[780px]">
              <h3
                className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red text-center"
                style={{ fontSize: '43.56px' }}
              >
                {content.founder.name}
              </h3>

              <div className="mt-6 space-y-4 font-[family-name:var(--font-cabinet)] font-medium text-gray-700 leading-relaxed text-lg text-center w-full max-w-[850px]">
                {content.founder.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Social / Website Links */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 font-[family-name:var(--font-cabinet)] font-medium text-base text-gray-800">
                <a
                  href={content.founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-chitkala-red transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>aakanksha.monga</span>
                </a>

                <a
                  href={content.founder.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-chitkala-red transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                  </svg>
                  <span>www.travelamore.club</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 11. Next Projects Nav */}
      {nextProjectsList.length > 0 && (
        <section className="mx-auto max-w-[1400px] mt-24 px-8">
          <div className="w-full border-t-2 border-chitkala-red pt-6 mb-8 flex justify-between items-center">
            <h4
              className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
              style={{ fontSize: '29.04px' }}
            >
              NEXT PROJECT
            </h4>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-chitkala-red bg-white px-5 py-2 rounded-full font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider hover:bg-chitkala-red hover:text-white transition-all duration-200 text-sm md:text-base shadow-xs"
            >
              <span>VIEW ALL</span>
              <span className="text-lg leading-none">+</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-5 w-full items-stretch">
            {nextProjectsList.map((project) => {
              const isHovered = activeNextCard === project.id
              const isSiblingHovered =
                activeNextCard !== null &&
                activeNextCard !== project.id &&
                nextProjectsList.some((p) => p.id === activeNextCard)

              let flexClass = 'flex-1'
              if (isHovered) flexClass = 'md:flex-[1.35] flex-1'
              else if (isSiblingHovered) flexClass = 'md:flex-[0.65] flex-1'

              return (
                <div
                  key={project.id}
                  className={`w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${flexClass}`}
                >
                  <ProjectCard
                    project={project}
                    isHovered={isHovered}
                    onMouseEnter={() => setActiveNextCard(project.id)}
                    onMouseLeave={() => setActiveNextCard(null)}
                  />
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* 12. Footer Section */}
      <Footer />
    </div>
  )
}
