import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const assets = '/assets/projects/divya-jyot'

const mockups = [
  { src: `${assets}/mockup-1.png`, alt: 'Divya Jyot outdoor signage mockup' },
  { src: `${assets}/mockup-2.png`, alt: 'Divya Jyot visiting card mockup' },
  { src: `${assets}/mockup-3.png`, alt: 'Divya Jyot diary mockup' },
  { src: `${assets}/mockup-4.png`, alt: 'Divya Jyot stationery mockup' },
  { src: `${assets}/mockup-5.png`, alt: 'Divya Jyot packaging mockup' },
  { src: `${assets}/mockup-6.png`, alt: 'Divya Jyot app icon mockup' },
  { src: `${assets}/mockup-7.png`, alt: 'Divya Jyot environmental mockup' },
  { src: `${assets}/mockup-8.png`, alt: 'Divya Jyot brand application mockup' },
]

const socials = [
  { src: `${assets}/social-2.png`, alt: 'Divya Jyot social media post' },
  { src: `${assets}/social-3.png`, alt: 'Divya Jyot social media post' },
  { src: `${assets}/social-1.png`, alt: 'Divya Jyot social media post' },
]

export function DivyaJyotPage() {
  const [activeNextCard, setActiveNextCard] = useState<string | null>(null)

  // Retrieve next projects in cyclic order relative to divya-jyot
  const currentSlug = 'divya-jyot'
  const currentIndex = projects.findIndex((p) => p.id === currentSlug)
  const otherProjects = projects.filter((p) => p.id !== currentSlug)
  const nextProjectsList = [
    projects[(currentIndex + 1) % projects.length] ?? otherProjects[0],
    projects[(currentIndex + 2) % projects.length] ?? otherProjects[1],
  ].filter((p): p is (typeof projects)[0] => Boolean(p && p.id !== currentSlug))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full bg-white">
      <ProjectNavbar />

      <div className="dj-page mx-auto w-full max-w-[1920px]">
        <section className="relative w-full">
          <img
            src={`${assets}/hero.png`}
            alt="Divya Jyot"
            className="block h-auto w-full"
          />

          <h1
            className="absolute font-[family-name:var(--font-cabinet)] font-bold text-[#2D2D2D]"
            style={{
              left: 'calc(80 / 1920 * 100%)',
              top: 'calc(622 / 720 * 100%)',
              fontSize: 'calc(64 / 1920 * 100cqw)',
              lineHeight: 1.2,
            }}
          >
            Divya Jyot
          </h1>
        </section>

        <section
          className="grid"
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(69 / 1920 * 100cqw)',
            gridTemplateColumns: '540fr 445fr 775fr',
          }}
        >
          <div>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-dark-red"
              style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
            >
              Brand Identity Design
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red"
              style={{
                marginTop: 'calc(60 / 1920 * 100cqw)',
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              PROJECT ESSENCE
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.36,
                textAlign: 'justify',
              }}
            >
              Divya Jyot Projects LLP is a real estate development company that
              was established in 2016. Founded by three promoters, Rajesh Savla,
              Hasmukh P Shah, and Visanji Gala, They bring together a wealth of
              experience and expertise in the real estate industry.
            </p>
          </div>
          <div />
          <div style={{ paddingTop: 'calc(108 / 1920 * 100cqw)' }}>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red"
              style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
            >
              INDUSTRY
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.19,
              }}
            >
              Real Estate Development
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-chitkala-red"
              style={{
                marginTop: 'calc(106 / 1920 * 100cqw)',
                fontSize: 'calc(39.56 / 1920 * 100cqw)',
                lineHeight: 1.21,
              }}
            >
              SCOPE
            </p>
            <p
              className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
              style={{
                marginTop: 'calc(20 / 1920 * 100cqw)',
                fontSize: 'calc(24.45 / 1920 * 100cqw)',
                lineHeight: 1.19,
              }}
            >
              Logo Design, Brand Manual
            </p>
          </div>
        </section>

        <img
          src={`${assets}/logo-composition.png`}
          alt="Divya Jyot logo composition"
          className="mt-[calc(52/1920*100cqw)] block h-auto w-full"
        />
        <img
          src={`${assets}/logo-banner.png`}
          alt="Divya Jyot logo"
          className="block h-auto w-full"
        />

        <section
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(79 / 1920 * 100cqw)',
          }}
        >
          <h2
            className="font-[family-name:var(--font-cabinet)] font-medium text-[#BDAD63]"
            style={{ fontSize: 'calc(39.56 / 1920 * 100cqw)', lineHeight: 1.21 }}
          >
            Concept Behind The Logo
          </h2>
          <div
            className="font-[family-name:var(--font-cabinet)] font-medium text-[#2D2D2D]"
            style={{
              marginTop: 'calc(20 / 1920 * 100cqw)',
              maxWidth: 'calc(1406 / 1920 * 100cqw)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.36,
              textAlign: 'justify',
            }}
          >
            <p>
              <span className="font-extrabold">
                More than a logo-it’s the Divya Jyot story, built into every
                letter.
              </span>
            </p>
            <p className="mt-[0.55em]">
              The <span className="font-extrabold">“D”</span> and its reverse
              outline echo buildings and skylines, reflecting the company’s
              real-estate expertise. The dot on the{' '}
              <span className="font-extrabold">“i”</span> becomes the
              sun-symbolising warmth, optimism and growth.
            </p>
            <p className="mt-[0.55em]">
              The <span className="font-extrabold">“O”</span> in JYOT is where
              the story gets personal: shaped like a seed/zero, it represents
              humble beginnings and the journey from roots to riches. Its three
              branches mark three decades of experience.
            </p>
            <p className="mt-[0.55em]">
              And at its heart, a bird’s nest brings it all home-symbolising{' '}
              <span className="font-extrabold">
                safety, security, growth and belonging.
              </span>
            </p>
            <p className="mt-[0.55em]">
              <span className="font-extrabold">
                A logo that builds, grows, shines and always feels like home.
              </span>
            </p>
          </div>

          <h2
            className="font-[family-name:var(--font-cabinet)] font-medium text-[#BDAD63]"
            style={{
              marginTop: 'calc(79 / 1920 * 100cqw)',
              fontSize: 'calc(39.56 / 1920 * 100cqw)',
              lineHeight: 1.21,
            }}
          >
            Typography & Colours
          </h2>
        </section>

        <div
          className="relative w-full bg-black"
          style={{ height: 'calc(360 / 1920 * 100cqw)', marginTop: 'calc(20 / 1920 * 100cqw)' }}
        >
          <div
            className="absolute"
            style={{
              left: 'calc(200 / 1920 * 100%)',
              top: 'calc(109 / 360 * 100%)',
              width: 'calc(253.25 / 1920 * 100cqw)',
            }}
          >
            <img
              src={`${assets}/type-poppins.svg`}
              alt=""
              width={254}
              height={141}
              className="h-auto w-full"
            />
          </div>
          <p
            className="absolute font-[family-name:var(--font-poppins)] font-medium text-white"
            style={{
              left: 'calc(662 / 1920 * 100%)',
              top: 'calc(66 / 360 * 100%)',
              fontSize: 'calc(64 / 1920 * 100cqw)',
              lineHeight: 1.48,
            }}
          >
            Poppins
          </p>
          <p
            className="absolute font-[family-name:var(--font-poppins)] font-medium text-white"
            style={{
              left: 'calc(662 / 1920 * 100%)',
              top: 'calc(180 / 360 * 100%)',
              width: 'calc(1178 / 1920 * 100%)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.5,
            }}
          >
            A clean, modern sans-serif with a friendly edge. Its rounded forms
            keep the typography approachable, versatile and effortlessly
            readable—perfect for taglines, supporting text and everyday brand
            communication.
          </p>
        </div>

        <div
          className="relative w-full bg-[#BDAD63]"
          style={{ height: 'calc(360 / 1920 * 100cqw)' }}
        >
          <div
            className="absolute"
            style={{
              left: 'calc(200 / 1920 * 100%)',
              top: 'calc(86 / 360 * 100%)',
              width: 'calc(253.25 / 1920 * 100cqw)',
            }}
          >
            <img
              src={`${assets}/type-bebas.svg`}
              alt=""
              width={254}
              height={188}
              className="h-auto w-full"
            />
          </div>
          <p
            className="absolute font-[family-name:var(--font-bebas)] text-white"
            style={{
              left: 'calc(662 / 1920 * 100%)',
              top: 'calc(65 / 360 * 100%)',
              fontSize: 'calc(64 / 1920 * 100cqw)',
              lineHeight: 1.48,
            }}
          >
            Bebas Neue
          </p>
          <p
            className="absolute font-[family-name:var(--font-poppins)] font-medium text-white"
            style={{
              left: 'calc(662 / 1920 * 100%)',
              top: 'calc(179 / 360 * 100%)',
              width: 'calc(900 / 1920 * 100%)',
              fontSize: 'calc(24.45 / 1920 * 100cqw)',
              lineHeight: 1.5,
            }}
          >
            Bold, condensed and impossible to ignore. Bebas Neue brings
            confidence and impact to the brand, creating strong headlines that
            feel modern, memorable and unmistakably bold.
          </p>
        </div>

        <div
          style={{
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            paddingTop: 'calc(88 / 1920 * 100cqw)',
          }}
        >
          {[
            {
              bg: '#FFFFFF',
              name: 'White',
              hex: '#FFFFFF',
              color: '#BDAD63',
              bordered: true,
            },
            {
              bg: '#BDAD63',
              name: 'Sand',
              hex: '#BDAD63',
              color: '#FFFFFF',
              bordered: false,
            },
            {
              bg: '#000000',
              name: 'Black',
              hex: '#000000',
              color: '#FFFFFF',
              bordered: false,
            },
          ].map((swatch, i) => (
            <div
              key={swatch.name}
              className="relative flex justify-between"
              style={{
                height: 'calc(200 / 1920 * 100cqw)',
                marginTop: i === 0 ? 0 : 'calc(41 / 1920 * 100cqw)',
                backgroundColor: swatch.bg,
                border: swatch.bordered ? '1px solid #000000' : undefined,
                paddingLeft: 'calc(60 / 1920 * 100cqw)',
                paddingRight: 'calc(60 / 1920 * 100cqw)',
                paddingTop: 'calc(122 / 1920 * 100cqw)',
              }}
            >
              <span
                className="font-[family-name:var(--font-cabinet)] font-medium"
                style={{
                  color: swatch.color,
                  fontSize: 'calc(39.56 / 1920 * 100cqw)',
                  lineHeight: 1.21,
                }}
              >
                {swatch.name}
              </span>
              <span
                className="font-[family-name:var(--font-cabinet)] font-medium"
                style={{
                  color: swatch.color,
                  fontSize: 'calc(39.56 / 1920 * 100cqw)',
                  lineHeight: 1.21,
                }}
              >
                {swatch.hex}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'calc(74 / 1920 * 100cqw)' }}>
          {mockups.map((mockup, i) => (
            <img
              key={mockup.src}
              src={mockup.src}
              alt={mockup.alt}
              className="block h-auto w-full"
              style={i === mockups.length - 1 ? { marginTop: 'calc(111 / 1920 * 100cqw)' } : undefined}
            />
          ))}
        </div>

        <section
          className="grid"
          style={{
            marginTop: 'calc(165 / 1920 * 100cqw)',
            paddingLeft: 'calc(80 / 1920 * 100%)',
            paddingRight: 'calc(80 / 1920 * 100%)',
            gridTemplateColumns: '580fr 10fr 580fr 9fr 580fr',
          }}
        >
          {socials.map((item, i) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="h-auto w-full object-cover"
              style={{
                gridColumn: i === 0 ? 1 : i === 1 ? 3 : 5,
                aspectRatio: '580 / 726',
              }}
            />
          ))}
        </section>
      </div>

      {/* Next Projects Section */}
      {nextProjectsList.length > 0 && (
        <section className="mx-auto max-w-[1400px] mt-24 mb-16 px-8">
          <div className="w-full border-t-2 border-chitkala-red pt-6 mb-8 flex justify-between items-center">
            <h4
              className="font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider"
              style={{ fontSize: '29.04px' }}
            >
              NEXT PROJECT
            </h4>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-chitkala-red bg-white px-5 py-2 rounded-full font-[family-name:var(--font-cabinet)] font-bold text-chitkala-red uppercase tracking-wider hover:bg-chitkala-red hover:text-white transition-all duration-200 text-sm md:text-base shadow-xs"
            >
              <span>VIEW ALL</span>
              <span className="text-lg leading-none">+</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-5 w-full items-stretch">
            {nextProjectsList.map((project) => {
              const isHovered = activeNextCard === project.id
              const isSiblingHovered =
                activeNextCard !== null &&
                activeNextCard !== project.id &&
                nextProjectsList.some((p) => p.id === activeNextCard)

              let flexClass = 'flex-1'
              if (isHovered) flexClass = 'md:flex-[1.35] flex-1'
              else if (isSiblingHovered) flexClass = 'md:flex-[0.65] flex-1'

              return (
                <div
                  key={project.id}
                  className={`w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${flexClass}`}
                >
                  <ProjectCard
                    project={project}
                    isHovered={isHovered}
                    onMouseEnter={() => setActiveNextCard(project.id)}
                    onMouseLeave={() => setActiveNextCard(null)}
                  />
                </div>
              )
            })}
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
