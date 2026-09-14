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

          <img
            src="/assets/logo-footer.svg"
            alt="Chitkala"
            width={300}
            height={100}
            className="responsive-footer-logo"
          />

          <p
            className="self-end font-[family-name:var(--font-inter)] font-normal text-chitkala-red"
            style={{ fontSize: '15px', marginTop: '20px' }}
          >
            © 2026 Studio Chitkala All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
