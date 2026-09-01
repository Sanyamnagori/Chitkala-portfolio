import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/projects'

export function ProjectNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 z-[60] w-full bg-white shadow-sm border-b border-gray-100">
        <div className="mx-auto flex h-[60px] w-full items-center justify-between px-6 md:px-8">
          {/* Left: Logo */}
          <Link to="/" className="flex flex-col items-start justify-center" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/assets/logo-header.svg"
              alt="Chitkala"
              className="h-[28px] w-auto"
            />
          </Link>

          {/* Right: Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-[1.5px] border-black rounded-[4px] bg-white transition-colors hover:bg-gray-50"
          >
            <span className={`block h-[2px] w-[20px] bg-chitkala-red transition-transform duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-[20px] bg-chitkala-red transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-[20px] bg-chitkala-red transition-transform duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[50] bg-white transition-opacity duration-300 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center gap-10 font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red text-4xl md:text-5xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href.startsWith('#') ? `/${link.href}` : link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault()
                  setIsMenuOpen(false)
                  window.location.href = `/${link.href}`
                } else {
                  setIsMenuOpen(false)
                }
              }}
              className="transition-opacity duration-200 hover:opacity-60 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
