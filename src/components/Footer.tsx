import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="w-full bg-white" style={{ marginTop: '80px' }}>
      <div
        className="responsive-footer mx-auto flex max-w-[1920px] flex-col items-center"
        style={{ minHeight: '200px', paddingLeft: '110px', paddingRight: '110px' }}
      >
        <div className="relative flex w-full max-w-[1700px] flex-col items-center">
          <div
            className="absolute left-0 top-0 w-full bg-chitkala-red"
            style={{ height: '3px' }}
            aria-hidden="true"
          />

          <Link to="/" className="inline-block transition-opacity hover:opacity-90">
            <img
              src="/assets/logo-footer.svg"
              alt="Chitkala"
              width={300}
              height={100}
              className="responsive-footer-logo"
            />
          </Link>

          <div className="w-full mt-8 pt-4 pb-12 flex flex-col md:flex-row items-center justify-between text-chitkala-red text-sm font-[family-name:var(--font-cabinet)] gap-4">
            <div className="flex items-center gap-6 font-medium">
              <Link to="/privacy" className="hover:underline transition-all">
                Privacy Policy
              </Link>
              <span className="opacity-40">•</span>
              <Link to="/terms" className="hover:underline transition-all">
                Terms of Service
              </Link>
            </div>

            <p className="font-normal font-[family-name:var(--font-inter)] text-sm">
              © 2026 Studio Chitkala All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
