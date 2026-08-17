import { useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  // Pair up projects for row-based reflow
  const pairs = []
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2))
  }

  return (
    <section id="work" className="w-full xl:px-[80px]" style={{ paddingTop: '60px' }}>
      <div
        className="mx-auto flex max-w-[1760px] flex-col gap-5"
        style={{ paddingLeft: '44px', paddingRight: '44px' }}
      >
        {pairs.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row gap-5 w-full items-stretch"
          >
            {pair.map((project) => {
              const isHovered = activeCard === project.id
              const isSiblingHovered =
                activeCard !== null &&
                activeCard !== project.id &&
                pair.some((p) => p.id === activeCard)

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
                    onMouseEnter={() => setActiveCard(project.id)}
                    onMouseLeave={() => setActiveCard(null)}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
