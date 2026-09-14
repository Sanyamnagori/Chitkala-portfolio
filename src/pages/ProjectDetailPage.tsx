import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectDetail } from '../services/contentApi'
import type { ProjectDetailContent } from '../types/projectDetail'

// Import components
import { ProjectDetailHero } from '../components/project-detail/ProjectDetailHero'
import { ProjectDetailMeta } from '../components/project-detail/ProjectDetailMeta'
import { ProjectDetailQuote } from '../components/project-detail/ProjectDetailQuote'
import { ConceptSection } from '../components/project-detail/ConceptSection'
import { LogoShowcase } from '../components/project-detail/LogoShowcase'
import { BrandElementsSection } from '../components/project-detail/BrandElementsSection'
import { TypographySection } from '../components/project-detail/TypographySection'

import { ApplicationsSection } from '../components/project-detail/ApplicationsSection'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [content, setContent] = useState<ProjectDetailContent | null>(null)
  const [loading, setLoading] = useState(true)

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Left: Founder Portrait */}
            {content.founder.image && (
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img
                  src={content.founder.image}
                  alt={content.founder.name}
                  className="w-full max-w-[420px] rounded-2xl object-cover shadow-md"
                  style={{ maxHeight: '540px' }}
                />
              </div>
            )}

            {/* Right: Founder Profile Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3
                className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red text-center md:text-left"
                style={{ fontSize: '43.56px' }}
              >
                {content.founder.name}
              </h3>

              <div className="mt-6 space-y-4 font-[family-name:var(--font-cabinet)] font-medium text-gray-700 leading-relaxed text-lg text-center md:text-left">
                {content.founder.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Social / Website Links */}
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-end gap-6 font-[family-name:var(--font-cabinet)] font-medium text-base text-gray-800">
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
      {content.nextProjects && content.nextProjects.length > 0 && (
        <section
          className="mx-auto max-w-[1400px] mt-24 px-8"
        >
          <div className="w-full border-t-2 border-chitkala-red pt-6 mb-8 flex justify-between items-center">
            <h4
              className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
              style={{ fontSize: '29.04px' }}
            >
              NEXT PROJECT
            </h4>
            <span
              className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red"
              style={{ fontSize: '29.04px' }}
            >
              &gt;&gt;&gt;&gt;&gt;&gt;
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.nextProjects.map((project, idx) => (
              <Link
                key={idx}
                to={`/project/${project.slug}`}
                className="portfolio-card relative w-full overflow-hidden block rounded-2xl bg-[#E0E0E0] shadow-sm hover:shadow-md transition-all duration-300"
                style={{ height: '360px' }}
              >
                {/* Red Header Banner */}
                <div className="bg-chitkala-red p-5 text-white flex justify-between items-start">
                  <div>
                    <h5
                      className="font-[family-name:var(--font-cabinet)] font-bold leading-tight"
                      style={{ fontSize: '24.2px' }}
                    >
                      {project.title}
                    </h5>
                    <p
                      className="font-[family-name:var(--font-cabinet)] opacity-90 mt-1"
                      style={{ fontSize: '16.94px' }}
                    >
                      {project.services}
                    </p>
                  </div>
                  <span
                    className="font-[family-name:var(--font-cabinet)] font-bold shrink-0 ml-2"
                    style={{ fontSize: '21.78px' }}
                  >
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 12. Footer Section */}
      <footer className="w-full bg-white mt-24 py-12 px-8">
        <div className="mx-auto max-w-[1400px] border-t-2 border-chitkala-red pt-8 flex flex-col items-center relative">
          <div className="flex flex-col items-center">
            <img
              src="/assets/logo-header.svg"
              alt="Chitkala"
              width={160}
              height={55}
              style={{ width: '160px', height: 'auto' }}
            />
            <span
              className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red mt-1"
              style={{ fontSize: '15.73px' }}
            >
              Where Thought Finds Form
            </span>
          </div>

          <p
            className="md:absolute md:right-0 md:bottom-0 mt-6 md:mt-0 font-[family-name:var(--font-cabinet)] font-normal text-chitkala-red text-sm"
          >
            © 2026 Studio Chitkala All rights reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
