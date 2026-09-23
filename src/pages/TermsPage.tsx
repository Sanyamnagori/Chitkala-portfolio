import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-svh bg-white text-black">
      <Navbar />

      <main className="mx-auto max-w-[1000px] px-6 py-16 md:py-24">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red hover:underline mb-8 text-sm uppercase tracking-wider"
        >
          <span>← Back to Home</span>
        </Link>

        <h1 className="font-[family-name:var(--font-cabinet)] text-4xl md:text-5xl font-bold text-chitkala-red mb-4">
          Terms of Service
        </h1>
        <p className="font-[family-name:var(--font-cabinet)] text-gray-500 text-sm mb-12">
          Effective Date: January 1, 2026 | Last Updated: March 2026
        </p>

        <div className="space-y-8 font-[family-name:var(--font-cabinet)] text-gray-700 leading-relaxed text-base md:text-lg">
          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Studio Chitkala website (&quot;Site&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services and browsing the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              All original visual identities, typography showcases, logos, mockups, imagery, video reels, animations, and editorial layouts displayed on this website are the intellectual property of Studio Chitkala and/or our respective commissioning clients. You may not reproduce, redistribute, or use any assets without explicit prior written authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              3. Creative Services & Proposals
            </h2>
            <p>
              Engagements for brand identity, packaging design, visual strategy, and digital production are governed by independent master services agreements and statements of work tailored to each client collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              4. Disclaimer & Limitation of Liability
            </h2>
            <p>
              The Site and its contents are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. Studio Chitkala shall not be held liable for indirect, incidental, or consequential damages resulting from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              5. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with applicable laws. For inquiries regarding our terms, please email{' '}
              <a href="mailto:hello@studiochitkala.com" className="text-chitkala-red underline font-medium">
                hello@studiochitkala.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
