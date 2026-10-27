import { useEffect, useRef } from 'react'

interface FounderTestimonialVideoProps {
  src: string
  poster?: string
  className?: string
}

export function FounderTestimonialVideo({
  src,
  poster,
  className = '',
}: FounderTestimonialVideoProps) {
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      loop
      playsInline
      preload="auto"
      onClick={togglePlay}
      className={`block object-cover cursor-pointer bg-black ${className}`}
      style={{
        width: '363px',
        height: '455px',
        maxWidth: '100%',
        borderRadius: 0,
        boxShadow: 'none',
      }}
    >
      Your browser does not support the video tag.
    </video>
  )
}
