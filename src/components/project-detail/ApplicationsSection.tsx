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

  // Helper linear interpolation
  const lerp = (a: number, b: number) => a + (b - a) * progress

  return (
    <div ref={trackRef} className="relative w-full h-[140vh] bg-white mt-12">
      {/* Sticky Viewport Container - Screen locks while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="relative mx-auto w-full max-w-[1340px] aspect-[14/10] lg:aspect-[16/9] max-h-[90vh] px-4">

          {/* 1. Jacket */}
          <div
            className="absolute overflow-hidden rounded-xl shadow-md"
            style={{
              left: `${lerp(12, 0)}%`,
              top: `${lerp(25, 0)}%`,
              width: `${lerp(22, 24.5)}%`,
              height: `${lerp(40, 46)}%`,
              zIndex: progress < 0.5 ? 10 : 1,
              transform: `rotate(${lerp(-4, 0)}deg)`,
            }}
          >
            <img
              src={`${assetBase}/application-3.png`}
              alt="Jacket"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. Mug */}
          <div
            className="absolute overflow-hidden rounded-xl shadow-md"
            style={{
              left: `${lerp(34, 25.5)}%`,
              top: `${lerp(8, 0)}%`,
              width: `${lerp(18, 24.5)}%`,
              height: `${lerp(24, 31)}%`,
              zIndex: progress < 0.5 ? 5 : 1,
              opacity: lerp(0.3, 1),
            }}
          >
            <img
              src={`${assetBase}/application-2.png`}
              alt="Mug"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3. Sweater */}
          <div
            className="absolute overflow-hidden rounded-xl shadow-md"
            style={{
              left: `${lerp(56, 51)}%`,
              top: `${lerp(16, 0)}%`,
              width: `${lerp(20, 24.5)}%`,
              height: `${lerp(29, 33)}%`,
              zIndex: progress < 0.5 ? 5 : 1,
              opacity: lerp(0.4, 1),
            }}
          >
            <img
              src={`${assetBase}/application-4.png`}
              alt="Sweater"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 4. Glass Bottle */}
          <div
            className="absolute overflow-hidden rounded-xl shadow-md"
            style={{
              left: `${lerp(22, 76.5)}%`,
              top: `${lerp(64, 0)}%`,
              width: `${lerp(22, 23.5)}%`,
              height: `${lerp(32, 46)}%`,
              zIndex: progress < 0.5 ? 5 : 1,
              transform: `rotate(${lerp(-12, 0)}deg)`,
            }}
          >
            <img
              src={`${assetBase}/application-5.png`}
              alt="Glass Bottle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 5. Central Featured Black Tumbler */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-2xl"
            style={{
              left: `${lerp(35, 67.5)}%`,
              top: `${lerp(15, 52)}%`,
              width: `${lerp(30, 32.5)}%`,
              height: `${lerp(64, 48)}%`,
              zIndex: progress < 0.5 ? 35 : 10,
            }}
          >
            <img
              src={`${assetBase}/application-9.png`}
              alt="Black Tumbler"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 6. Green Passport Cover (Floating Overlapping Upper-Left of Tumbler) */}
          <div
            className="absolute"
            style={{
              left: `${lerp(20, 13)}%`,
              top: `${lerp(10, 18)}%`,
              width: `${lerp(20, 16)}%`,
              transform: `rotate(${lerp(-15, -14)}deg)`,
              filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.35))',
              zIndex: 45,
            }}
          >
            <img
              src={`${assetBase}/application-8.png`}
              alt="Green Passport"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* 7. Blue Baseball Cap (Floating Overlapping Upper-Right of Tumbler) */}
          <div
            className="absolute"
            style={{
              left: `${lerp(54, 65)}%`,
              top: `${lerp(8, 15)}%`,
              width: `${lerp(21, 17)}%`,
              transform: `rotate(${lerp(18, 15)}deg)`,
              filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.35))',
              zIndex: 45,
            }}
          >
            <img
              src={`${assetBase}/application-6.png`}
              alt="Blue Cap"
              className="w-full h-auto"
            />
          </div>

          {/* 8. Gold Coin (Floating Overlapping Bottom-Right of Stack) */}
          <div
            className="absolute"
            style={{
              left: `${lerp(68, 48)}%`,
              top: `${lerp(50, 15)}%`,
              width: `${lerp(15, 11)}%`,
              transform: `rotate(${lerp(5, 0)}deg)`,
              filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.3))',
              zIndex: 45,
            }}
          >
            <img
              src={`${assetBase}/application-7.png`}
              alt="Gold Coin"
              className="w-full h-auto rounded-full"
            />
          </div>

          {/* 9. Red Title "Travel AMore" (Fixed Centered Position in background behind photos) */}
          <div className="absolute left-0 top-[40%] w-full flex items-center justify-center z-0">
            <h2
              className="font-[family-name:var(--font-cabinet)] font-bold text-[#a71714] tracking-tight text-center whitespace-nowrap"
              style={{ fontSize: 'clamp(29.04px, 5.082vw, 67.76px)' }}
            >
              {title}
            </h2>
          </div>

          {/* 10. Sunset Hands-Heart Photo (Tucked Bottom Left -> Wide Bottom Left) */}
          <div
            className="absolute overflow-hidden rounded-2xl shadow-lg"
            style={{
              left: `${lerp(16, 0)}%`,
              top: `${lerp(61, 52)}%`,
              width: `${lerp(26, 65)}%`,
              height: `${lerp(27, 48)}%`,
              transform: `rotate(${lerp(-8, 0)}deg)`,
              zIndex: progress < 0.5 ? 5 : 10,
            }}
          >
            <img
              src={banner}
              alt="Sunset Heart"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
