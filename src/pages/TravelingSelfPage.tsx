import { useEffect } from 'react'
import { Footer } from '../components/Footer'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'
import { IssuesScrollSection } from '../components/project-detail/IssuesScrollSection'

const assets = '/assets/projects/traveling-self'
const gold = '#D7A340'
const glyph = `Aa     Bb     Cc     Dd     Ee     Ff      Gg     Hh    IiJj     Kk
Ll       Mm   Nn   Oo     Pp     Qq    Rr      Ss     Tt       Uu
Vv      Ww  Xx     Yy      Zz

1234567890!@#$%^&*()`

export function TravelingSelfPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full bg-black">
      <ProjectNavbar />

      <div className="ts-page mx-auto w-full max-w-[1920px] bg-black">
        <section className="relative w-full">
          <img
            src={`${assets}/hero.png`}
            alt="The Traveling Self"
            className="block h-auto w-full"
          />

          <h1
            className="absolute font-[family-name:var(--font-cabinet)] font-bold text-black"
            style={{
              left: 'calc(80 / 1920 * 100%)',
              top: 'calc(622 / 720 * 100%)',
              fontSize: 'calc(64 / 1920 * 100cqw)',
              lineHeight: 1.22,
            }}
          >
            The Traveling Self
          </h1>
        </section>

        <section
          className="grid"
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(69 / 1920 * 100cqw)',
            gridTemplateColumns: '718fr 267fr 775fr',
          }}
        >
          <div>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
            >
              Magazine Design
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium"
              style={{
                marginTop: 'calc(60 / 1920 * 100cqw)',
                color: gold,
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              PROJECT ESSENCE
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.36,
                textAlign: 'justify',
              }}
            >
              It is about returning to yourself. In a world saturated with
              destination-driven narratives, The Traveling Self redefines what it
              means to travel. Instead of exploring landscapes, this magazine
              explores consciousness — framing travel as an inward journey.
              Designed by Studio Chitkala for Robert, this project is an
              exploration of identity, stillness, and self-awareness through
              editorial and digital design.
            </p>
          </div>
          <div />
          <div style={{ paddingTop: 'calc(108 / 1920 * 100cqw)' }}>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
            >
              INDUSTRY
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                maxWidth: 'calc(273 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              Personal Development & Leadership Coaching
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{
                marginTop: 'calc(82 / 1920 * 100cqw)',
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              SCOPE
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.23,
              }}
            >
              Design & Print Production
            </p>
          </div>
        </section>

        <section
          className="grid"
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(128 / 1920 * 100cqw)',
            gridTemplateColumns: '512fr 126fr 1122fr',
            columnGap: 0,
          }}
        >
          <img
            src={`${assets}/portrait.png`}
            alt="Robert Louis-Charles"
            className="block h-auto w-full"
          />
          <div />
          <div style={{ paddingTop: 'calc(89 / 1920 * 100cqw)' }}>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium"
              style={{
                color: gold,
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              Robert Louis-Charles
            </p>
            <div
              className="font-[family-name:var(--font-cabinet)] font-medium text-white"
              style={{
                marginTop: 'calc(31 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.36,
              }}
            >
              <p>
                <span className="font-bold" style={{ color: gold }}>
                  Robert Luise Charles
                </span>{' '}
                is a Business Psychologist, Executive Coach, and Founder of
                Big2Go.
              </p>
              <p className="mt-[0.9em]">
                With 20+ years in personal growth and leadership development, he
                works at the intersection of self-awareness and leadership.
              </p>
              <p className="mt-[0.9em]">
                He is the creator of{' '}
                <span className="font-bold" style={{ color: gold }}>
                  The Leadership Pause
                </span>{' '}
                and{' '}
                <span className="font-bold" style={{ color: gold }}>
                  The Traveling Self™
                </span>
                . His work challenges ambitious leaders to look inward before
                they lead outward. Because knowing yourself is where better
                choices, greater ownership, and stronger leadership begin.
              </p>
              <p className="mt-[0.9em]">
                We helped turn Robert’s vision for The Traveling Self™ into a
                magazine.
              </p>
            </div>
          </div>
        </section>

        <IssuesScrollSection />

        <section
          className="grid"
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(148 / 1920 * 100cqw)',
            gridTemplateColumns: '1fr 1fr',
            columnGap: 'calc(80 / 1920 * 100cqw)',
          }}
        >
          <div>
            <h2
              className="font-[family-name:var(--font-cabinet)] font-medium"
              style={{
                color: gold,
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              Typography
            </h2>
            <p
              className="font-[family-name:var(--font-lato)] font-light text-white"
              style={{
                marginTop: 'calc(49 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.19,
              }}
            >
              LATO(Light)
            </p>
            <pre
              className="font-[family-name:var(--font-lato)] font-light text-white whitespace-pre"
              style={{
                marginTop: 'calc(40 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.4,
              }}
            >
              {glyph}
            </pre>
            <p
              className="font-[family-name:var(--font-roboto)] text-white"
              style={{
                marginTop: 'calc(86 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.15,
              }}
            >
              Roboto(Regular, Normal)
            </p>
            <pre
              className="font-[family-name:var(--font-roboto)] text-white whitespace-pre"
              style={{
                marginTop: 'calc(41 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.4,
              }}
            >
              {glyph}
            </pre>
          </div>

          <div>
            <h2
              className="font-[family-name:var(--font-cabinet)] font-medium"
              style={{
                color: gold,
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              Colours
            </h2>
            {[
              { bg: '#FFFFFF', hex: '#ffffff', name: 'White', color: '#000000' },
              { bg: '#000000', hex: '#000000', name: 'Black', color: gold, border: true },
              { bg: gold, hex: '#d7a340', name: 'Golden', color: '#000000' },
            ].map((swatch, i) => (
              <div
                key={swatch.name}
                className="flex justify-between"
                style={{
                  marginTop: i === 0 ? 'calc(49 / 1920 * 100cqw)' : 'calc(43 / 1920 * 100cqw)',
                  height: 'calc(142 / 1920 * 100cqw)',
                  backgroundColor: swatch.bg,
                  border: swatch.border ? '1px solid #FFFFFF' : undefined,
                  paddingLeft: 'calc(30 / 1920 * 100cqw)',
                  paddingRight: 'calc(30 / 1920 * 100cqw)',
                  alignItems: 'center',
                }}
              >
                <span
                  className="font-[family-name:var(--font-roboto)]"
                  style={{
                    color: swatch.color,
                    fontSize: 'calc(24.45 / 1920 * 100cqw)',
                  }}
                >
                  {swatch.hex}
                </span>
                <span
                  className="font-[family-name:var(--font-roboto)] text-right"
                  style={{
                    color: swatch.color,
                    fontSize: 'calc(24.45 / 1920 * 100cqw)',
                  }}
                >
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(86 / 1920 * 100cqw)',
          }}
        >
          <h2
            className="font-[family-name:var(--font-cabinet)] font-medium"
            style={{
              color: gold,
              fontSize: 'calc(39.56 / 1920 * 100cqw)',
              lineHeight: 1.21,
            }}
          >
            The Challenge
          </h2>
          <div
            className="font-[family-name:var(--font-cabinet)] font-medium text-white whitespace-pre-line"
            style={{
              marginTop: 'calc(40 / 1920 * 100cqw)',
              maxWidth: 'calc(795 / 1920 * 100cqw)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.45,
            }}
          >
            {`How do you design for something that cannot be seen?

  -  How do you visualize introspection?
  -  How do you avoid the clichés of travel design?
  -  How do you create an experience that feels quiet, yet powerful?

The goal was to move away from visual noise and towards emotional clarity.`}
          </div>

          <h2
            className="font-[family-name:var(--font-cabinet)] font-medium"
            style={{
              marginTop: 'calc(299 / 1920 * 100cqw)',
              color: gold,
              fontSize: 'calc(39.56 / 1920 * 100cqw)',
              lineHeight: 1.21,
            }}
          >
            From Our Desk to Print
          </h2>
          <p
            className="font-[family-name:var(--font-cabinet)] font-medium text-white"
            style={{
              marginTop: 'calc(40 / 1920 * 100cqw)',
              maxWidth: 'calc(1499 / 1920 * 100cqw)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.45,
            }}
          >
            From a blank page to a magazine! A little behind-the-scenes look at
            all the ideas, layouts, edits, reworks, and those tiny details we
            probably spent way too much time on. We built this one from scratch,
            page by page, and seeing it finally come together was honestly a
            proud moment for us. A lot of work went into these pages and even
            more love.
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              marginTop: 'calc(49 / 1920 * 100cqw)',
              width: '100%',
              height: 'calc(855 / 1920 * 100cqw)',
              backgroundColor: gold,
            }}
          >
            <video
              src={`${assets}/Office Shoot Final_compressed.mp4`}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          <h2
            className="font-[family-name:var(--font-cabinet)] font-medium"
            style={{
              marginTop: 'calc(195 / 1920 * 100cqw)',
              color: gold,
              fontSize: 'calc(39.56 / 1920 * 100cqw)',
              lineHeight: 1.21,
            }}
          >
            Bringing Every Self to Life
          </h2>
          <p
            className="font-[family-name:var(--font-cabinet)] font-medium text-white"
            style={{
              marginTop: 'calc(40 / 1920 * 100cqw)',
              maxWidth: 'calc(1499 / 1920 * 100cqw)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.45,
            }}
          >
            We didn’t just design a magazine. We created a universe for it.
            Perspectives, and a unique visual world for every Self. Every shot
            was imagined and created from scratch, building towards one final
            frame where they all come together as The Whole Self. Big idea? We
            went all in.
          </p>
          <p
            className="font-[family-name:var(--font-cabinet)] font-light"
            style={{
              marginTop: 'calc(20 / 1920 * 100cqw)',
              color: gold,
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.45,
            }}
          >
            All visuals in this video were created with the help of AI.
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              marginTop: 'calc(49 / 1920 * 100cqw)',
              width: '100%',
              height: 'calc(855 / 1920 * 100cqw)',
              backgroundColor: gold,
            }}
          >
            <video
              src={`${assets}/The Traveling Self_RLC voice_Final_Compressed.mp4`}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10"
            style={{
              marginTop: 'calc(118 / 1920 * 100cqw)',
            }}
          >
            {/* Left: Video */}
            <div
              className="relative overflow-hidden rounded-2xl w-full md:w-[45%]"
              style={{
                height: 'calc(855 / 1920 * 100cqw)',
                minHeight: '350px',
                backgroundColor: gold,
              }}
            >
              <video
                src={`${assets}/RLC Testimonial_Compressed.mp4`}
                autoPlay
                muted
                loop
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right: Founder Profile Details & Testimonial Placeholder (Matching Travel AMore layout) */}
            <div className="w-full md:w-[52%] flex flex-col items-center text-center justify-center px-4">
              <h3
                className="font-[family-name:var(--font-cabinet)] font-bold text-center"
                style={{
                  color: gold,
                  fontSize: 'calc(43.56 / 1920 * 100cqw)',
                  lineHeight: 1.2,
                }}
              >
                Robert Louis-Charles
              </h3>

              <div
                className="mt-6 space-y-4 font-[family-name:var(--font-cabinet)] font-medium text-white leading-relaxed text-center w-full"
                style={{
                  fontSize: 'calc(24.45 / 1920 * 100cqw)',
                  lineHeight: 1.45,
                }}
              >
                <p>
                  "Working with Studio Chitkala to create The Traveling Self™ was an extraordinary experience. They took a complex, introspective concept and turned it into a visual masterpiece that deeply resonates with leaders worldwide."
                </p>
                <p>
                  "Their mastery over layout, print production, and visual storytelling brought our vision to life beyond expectations."
                </p>
              </div>

              {/* Social / Website Links */}
              <div
                className="mt-8 flex flex-wrap items-center justify-center gap-8 font-[family-name:var(--font-cabinet)] font-medium text-white"
                style={{ fontSize: 'calc(20 / 1920 * 100cqw)' }}
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  style={{ color: gold }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>robert.louischarles</span>
                </a>

                <a
                  href="https://thetravelingself.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                  style={{ color: gold }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                  </svg>
                  <span>www.thetravelingself.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer showDivider={false} />
    </div>
  )
}
