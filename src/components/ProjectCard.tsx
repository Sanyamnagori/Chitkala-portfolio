import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  isHovered?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function ProjectCard({
  project,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}: ProjectCardProps) {
  const radius = project.borderRadius
  const radiusPx = `${radius}px`

  return (
    <a
      href="https://www.bemotionlabs.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`portfolio-card relative w-full overflow-hidden block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHovered ? 'is-hovered' : ''}`}
      style={{ borderRadius: radiusPx }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background (solid color) - visible when image fades and header goes transparent */}
      <div
        className="project-background absolute inset-0 z-0"
        style={{
          backgroundColor: project.color,
          borderRadius: radiusPx,
        }}
      />

      {/* Header (White block in normal state, transparent on hover) */}
      <div
        className="portfolio-card-header absolute top-0 left-0 w-full z-20 flex justify-between items-start transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          height: isHovered ? '100%' : 'calc(180px * var(--card-scale, 1))',
          backgroundColor: isHovered ? 'transparent' : 'white',
          padding: isHovered ? '2.5rem' : '20px 24px',
          borderTopLeftRadius: radiusPx,
          borderTopRightRadius: radiusPx,
          borderBottomRightRadius: isHovered ? radiusPx : 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <div
          className="project-details transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: isHovered ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          <h3
            className="font-[family-name:var(--font-cabinet)] font-bold leading-[1.15] text-chitkala-dark-red project-title transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ fontSize: 'calc(39.55px * var(--card-scale, 1))' }}
          >
            {project.title}
          </h3>
          <p
            className="font-[family-name:var(--font-cabinet)] font-normal text-chitkala-dark-red project-services mt-1 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ fontSize: 'calc(24.45px * var(--card-scale, 1))' }}
          >
            {project.services}
          </p>
        </div>
        <span
          className="shrink-0 font-[family-name:var(--font-cabinet)] font-medium text-chitkala-dark-red project-year transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            fontSize: 'calc(24.45px * var(--card-scale, 1))',
            transform: isHovered ? 'translateY(10px)' : 'translateY(0)',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Image container (Bottom block in normal state, expands to 100% and top:0 on hover) */}
      <div
        className="portfolio-card-image absolute left-0 w-full z-10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          top: isHovered ? 0 : 'calc(180px * var(--card-scale, 1))',
          height: isHovered ? '100%' : 'calc(490px * var(--card-scale, 1))',
          borderBottomLeftRadius: radiusPx,
          borderBottomRightRadius: isHovered ? 0 : radiusPx,
          borderTopLeftRadius: isHovered ? radiusPx : 0,
          borderTopRightRadius: 0,
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-image absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
            style={{
              opacity: isHovered ? 0 : 1,
            }}
          />
        )}
      </div>

      {/* Arrow button (appears bottom left on hover) */}
      <div
        className="arrow-button absolute flex items-center justify-center bg-white rounded-full z-30 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
        style={{
          bottom: '2.5rem',
          left: '2.5rem',
          width: 'calc(64px * var(--card-scale, 1))',
          height: 'calc(64px * var(--card-scale, 1))',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(16px)',
        }}
      >
        <svg
          className="w-1/2 h-1/2 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ strokeWidth: 2.5 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  )
}
