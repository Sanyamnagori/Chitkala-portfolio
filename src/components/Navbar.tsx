import { navLinks } from '../data/projects'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className="responsive-nav mx-auto flex max-w-[1920px] items-center justify-between"
        style={{ height: '90px', paddingLeft: '80px', paddingRight: '80px' }}
      >
        <a href="#" className="flex shrink-0 flex-col items-start">
          <img
            src="/assets/logo-header.svg"
            alt="Chitkala"
            width={150}
            height={50}
            style={{ width: '150px', height: '50px' }}
          />
          <span
            className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red"
            style={{
              fontSize: '12px',
              marginTop: '2px',
              width: '150px',
              textAlign: 'center',
            }}
          >
            Where Thought Finds Form
          </span>
        </a>

        <nav
          className="hidden items-center font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red lg:flex"
          style={{ fontSize: '15px', gap: '35px' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-0.5 w-6 bg-chitkala-red" />
          <span className="block h-0.5 w-6 bg-chitkala-red" />
          <span className="block h-0.5 w-6 bg-chitkala-red" />
        </button>
      </div>
    </header>
  )
}
