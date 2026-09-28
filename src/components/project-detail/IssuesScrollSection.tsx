import { useEffect, useRef, useState } from 'react'

const assets = '/assets/projects/traveling-self'

const issuesData = [
  { id: 1, title: 'The Self', issue: 'Issue I', src: `${assets}/issue-1.png` },
  { id: 2, title: 'Authentic Self', issue: 'Issue II', src: `${assets}/issue-2.png` },
  { id: 3, title: 'Lower Self', issue: 'Issue III', src: `${assets}/issue-3.png` },
  { id: 4, title: 'Higher Self', issue: 'Issue IV', src: `${assets}/issue-4.png` },
  { id: 5, title: 'Self-Improvement', issue: 'Issue V', src: `${assets}/issue-5.png` },
]

export function IssuesScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [containerWidth, setContainerWidth] = useState(1400)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    let targetProgress = 0
    let currentProgress = 0

    const updateProgress = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScrollable = rect.height - windowHeight

      if (totalScrollable > 0) {
        const scrolled = -rect.top
        targetProgress = Math.min(Math.max(scrolled / totalScrollable, 0), 1)
      }

      // Smooth lerp for ultra-fluid motion on fast scrolling / wheel flicking
      currentProgress += (targetProgress - currentProgress) * 0.15
      if (Math.abs(targetProgress - currentProgress) < 0.001) {
        currentProgress = targetProgress
      }

      setProgress(currentProgress)
      animationFrameId.current = requestAnimationFrame(updateProgress)
    }

    animationFrameId.current = requestAnimationFrame(updateProgress)

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  // Smooth cubic bezier easing
  const cubicEase = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const easeP = cubicEase(progress)

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#D9D9D9]"
      style={{
        marginTop: 'calc(74 / 1920 * 100cqw)',
        height: '180vh', // Provides a comfortable scroll distance for 1 complete scroll gesture
      }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-16">
        <div
          ref={containerRef}
          className="relative w-full max-w-[1856px] h-[450px] md:h-[520px] lg:h-[580px] flex items-center justify-between"
        >
          {issuesData.map((issue, index) => {
            // Calculate base spread layout (p = 1)
            // 5 items across container width: gap is ~16px
            const gap = 16
            const cardWidth = Math.max((containerWidth - 4 * gap) / 5, 140)
            const spreadLeft = index * (cardWidth + gap)

            // Stacked layout (p = 0)
            const stackedLeft = index * 36
            const stackedTop = index * 18
            const stackedZIndex = 10 - index

            // GPU translation delta from spread position to current interpolated position
            const deltaX = (stackedLeft - spreadLeft) * (1 - easeP)
            const deltaY = stackedTop * (1 - easeP)

            return (
              <div
                key={issue.id}
                className="absolute shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-sm overflow-hidden"
                style={{
                  width: `${cardWidth}px`,
                  height: 'auto',
                  aspectRatio: '330 / 467',
                  left: `${spreadLeft}px`,
                  top: '50%',
                  marginTop: `-${(cardWidth * (467 / 330)) / 2}px`,
                  zIndex: progress > 0.5 ? index + 1 : stackedZIndex,
                  transform: `translate3d(${deltaX}px, ${deltaY}px, 0)`,
                  willChange: 'transform',
                  boxShadow: '0 12px 32px -6px rgba(0, 0, 0, 0.28)',
                }}
              >
                <img
                  src={issue.src}
                  alt={issue.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
