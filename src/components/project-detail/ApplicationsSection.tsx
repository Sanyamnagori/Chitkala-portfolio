import { useEffect, useRef, useState } from 'react'
import type { ApplicationImage } from '../../types/projectDetail'

interface Props {
  banner: string
  title: string
  gallery: ApplicationImage[]
}

export function ApplicationsSection({ banner, title }: Props) {
  const assetBase = '/assets/projects/travel-amore'
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return
      const rect = trackRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalScrollableDistance = rect.height - windowHeight

      if (rect.top <= 0) {
        const scrolled = Math.abs(rect.top)
        const prg = Math.max(0, Math.min(1, scrolled / totalScrollableDistance))
        setProgress(prg)
      } else {
        setProgress(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // p goes from 1 (start: stacked cluster) to 0 (end: full final grid collage)
  const p = 1 - progress

  return (
    <div ref={trackRef} className="relative w-full h-[220vh] bg-white">
      {/* Sticky Viewport Container - Screen locks while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-8">
          {/* Dynamic Overlapping Collage Layout */}
          <div className="relative w-full">
            {/* TOP ROW: 4 Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
              {/* 1. Jacket */}
              <div
                className="overflow-hidden rounded-xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * 140}px, ${p * 80}px) scale(${1 - p * 0.25}) rotate(${p * -6}deg)`,
                  opacity: 1 - p * 0.2,
                }}
              >
                <img
                  src={`${assetBase}/application-3.png`}
                  alt="Travel AMore Jacket"
                  className="w-full h-[260px] md:h-[380px] object-cover"
                />
              </div>

              {/* 2. Mug */}
              <div
                className="overflow-hidden rounded-xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * 80}px, ${p * 60}px) scale(${1 - p * 0.3})`,
                  opacity: 1 - p * 0.2,
                }}
              >
                <img
                  src={`${assetBase}/application-2.png`}
                  alt="Travel AMore Mug"
                  className="w-full h-[200px] md:h-[290px] object-cover"
                />
              </div>

              {/* 3. Sweater */}
              <div
                className="overflow-hidden rounded-xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * -100}px, ${p * 60}px) scale(${1 - p * 0.3})`,
                  opacity: 1 - p * 0.2,
                }}
              >
                <img
                  src={`${assetBase}/application-4.png`}
                  alt="Travel AMore Sweater"
                  className="w-full h-[240px] md:h-[330px] object-cover"
                />
              </div>

              {/* 4. Glass Bottle */}
              <div
                className="overflow-hidden rounded-xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * -260}px, ${p * 100}px) scale(${1 - p * 0.25})`,
                  opacity: 1 - p * 0.2,
                }}
              >
                <img
                  src={`${assetBase}/application-5.png`}
                  alt="Travel AMore Glass Bottle"
                  className="w-full h-[260px] md:h-[380px] object-cover"
                />
              </div>
            </div>

            {/* MIDDLE OVERLAPPING SECTION */}
            <div className="relative mt-4 mb-2 min-h-[140px] md:min-h-[180px] flex items-center justify-center">
              {/* Overlapping Left: Green Passport Cover */}
              <div
                className="absolute left-[12%] md:left-[14%] -top-24 md:-top-40 z-30 w-[140px] md:w-[220px] transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * -60}px, ${p * -40}px) rotate(${-14 + p * -6}deg) scale(${1 - p * 0.15})`,
                  filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.25))',
                }}
              >
                <img
                  src={`${assetBase}/application-8.png`}
                  alt="Green Passport Cover"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Overlapping Center-Right: Gold Coin */}
              <div
                className="absolute left-[52%] md:left-[51%] -top-16 md:-top-28 z-30 w-[100px] md:w-[155px] transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * 240}px, ${p * 120}px) scale(${1 - p * 0.1})`,
                  filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.22))',
                }}
              >
                <img
                  src={`${assetBase}/application-7.png`}
                  alt="Travel AMore Gold Coin"
                  className="w-full h-auto rounded-full"
                />
              </div>

              {/* Center Dark Red Title */}
              <div
                className="z-20 text-center transition-transform duration-100 ease-out"
                style={{
                  transform: p > 0.4 ? `translate(${p * 320}px, ${p * -60}px) rotate(${p * 90}deg)` : 'none',
                }}
              >
                <h2
                  className="font-[family-name:var(--font-cabinet)] font-bold text-[#a71714] tracking-tight mt-6"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
                >
                  {title}
                </h2>
              </div>

              {/* Overlapping Right: Blue Baseball Cap */}
              <div
                className="absolute right-[6%] md:right-[12%] -top-16 md:-top-28 z-30 w-[150px] md:w-[230px] transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * 60}px, ${p * -60}px) rotate(${15 + p * 8}deg) scale(${1 - p * 0.15})`,
                  filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.28))',
                }}
              >
                <img
                  src={`${assetBase}/application-6.png`}
                  alt="Travel AMore Cap"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* BOTTOM ROW: Sunset Banner (Left) + Black Tumbler (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch mt-0">
              {/* Wide Sunset Heart Photo */}
              <div
                className="md:col-span-8 overflow-hidden rounded-2xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * 220}px, ${p * -60}px) scale(${1 - p * 0.35})`,
                  zIndex: p > 0.4 ? 5 : 1,
                }}
              >
                <img
                  src={banner}
                  alt="Travel AMore Sunset Heart"
                  className="w-full h-full min-h-[300px] md:min-h-[440px] object-cover"
                />
              </div>

              {/* Tall Black Tumbler Mug */}
              <div
                className="md:col-span-4 overflow-hidden rounded-2xl shadow-sm transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${p * -400}px, ${p * -200}px) scale(${1 + p * 0.15})`,
                  zIndex: p > 0.4 ? 40 : 1,
                }}
              >
                <img
                  src={`${assetBase}/application-9.png`}
                  alt="Travel AMore Tumbler"
                  className="w-full h-full min-h-[300px] md:min-h-[440px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
