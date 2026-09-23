import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="font-[family-name:var(--font-cabinet)] text-gray-500 text-sm mb-12">
          Effective Date: January 1, 2026 | Last Updated: March 2026
        </p>

        <div className="space-y-8 font-[family-name:var(--font-cabinet)] text-gray-700 leading-relaxed text-base md:text-lg">
          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to Studio Chitkala (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting any personal information you provide when visiting our website, exploring our creative portfolio, or inquiring about our design services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We collect information that you voluntarily choose to share with us, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li><strong>Contact Information:</strong> Your name, email address, company name, and phone number when submitting contact or consultation forms.</li>
              <li><strong>Project Inquiries:</strong> Details, briefs, and requirements regarding creative design projects.</li>
              <li><strong>Technical Data:</strong> Anonymized usage analytics, browser type, and operating system to improve site performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">Your information is used strictly to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Respond directly to your inquiries and creative project requests.</li>
              <li>Communicate project milestones, proposals, and design deliverables.</li>
              <li>Maintain and enhance the performance and aesthetic presentation of our digital portfolio.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              4. Data Protection & Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We adopt industry-standard security measures to safeguard your data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-chitkala-red mb-3">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact Studio Chitkala at{' '}
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
