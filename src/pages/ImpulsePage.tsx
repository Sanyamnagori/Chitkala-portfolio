import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const a = '/assets/projects/impulse'
const u = (n: number) => `calc(${n} / 1920 * 100cqw)`
const red = '#E34234'
const darkRed = '#A71714'
const ink = '#2D2D2D'

const eventCopy = `Impulse New Delhi is a community-driven initiative focused on creating safe, inclusive spaces for the LGBTQIA+ community. The project centers around awareness, expression, and engagement — amplifying conversations around identity, health, and social acceptance.

Through thoughtful visual storytelling, the design system brings together digital and on-ground communication — from campaigns and event creatives to social media and print — ensuring a cohesive, impactful, and community-first brand presence.`

function Pos({
  l,
  t,
  w,
  h,
  className,
  style,
  children,
}: {
  l: number
  t: number
  w?: number
  h?: number
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  return (
    <div
      className={`absolute ${className ?? ''}`}
      style={{
        left: u(l),
        top: u(t),
        width: w != null ? u(w) : undefined,
        height: h != null ? u(h) : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

function T({
  l,
  t,
  w,
  h,
  size = 39.56,
  color,
  bold,
  justify,
  nowrap,
  children,
}: {
  l: number
  t: number
  w?: number
  h?: number
  size?: number
  color: string
  bold?: boolean
  justify?: boolean
  nowrap?: boolean
  children: ReactNode
}) {
  return (
    <p
      className={`absolute font-[family-name:var(--font-cabinet)] leading-normal ${bold ? 'font-bold' : 'font-medium'}`}
      style={{
        left: u(l),
        top: u(t),
        width: w != null ? u(w) : undefined,
        height: h != null ? u(h) : undefined,
        fontSize: u(size),
        color,
        textAlign: justify ? 'justify' : undefined,
        whiteSpace: nowrap ? 'nowrap' : undefined,
      }}
    >
      {children}
    </p>
  )
}

function EventCopy({ l, t }: { l: number; t: number }) {
  return (
    <p
      className="absolute font-[family-name:var(--font-cabinet)] font-medium leading-normal text-[#2D2D2D] text-justify whitespace-pre-wrap"
      style={{ left: u(l), top: u(t), width: u(750), height: u(299), fontSize: u(24.45) }}
    >
      {eventCopy}
    </p>
  )
}

export function ImpulsePage() {
  const [activeNextCard, setActiveNextCard] = useState<string | null>(null)
  const currentSlug = 'impulse-new-delhi'
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

      <div className="impulse-page mx-auto w-full max-w-[1920px] bg-white">
        <div className="relative w-full overflow-x-clip" style={{ height: u(6741) }}>
          <div className="absolute inset-x-0 top-0 w-full" style={{ height: u(720) }}>
            <img
              src={`${a}/hero.png`}
              alt="Impulse New Delhi"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <Link
            to="/"
            className="absolute z-10 font-[family-name:var(--font-cabinet)] font-medium text-white transition-opacity hover:opacity-70"
            style={{ left: u(80), top: u(87), width: u(378), fontSize: u(39.56), lineHeight: 'normal' }}
          >
            {'< Go Back'}
          </Link>

          <T l={80} t={622} w={512} h={78} size={64} color="#FFFFFF" bold nowrap>
            Impulse New Delhi
          </T>
          <T l={80} t={789} w={699} h={48} color={darkRed} nowrap>
            Complete Branding & Creative Services
          </T>
          <T l={80} t={897} w={367} h={48} color={red}>
            PROJECT ESSENCE
          </T>
          <p
            className="absolute font-[family-name:var(--font-cabinet)] font-medium leading-normal text-[#2D2D2D] text-justify whitespace-pre-wrap"
            style={{ left: u(80), top: u(965), width: u(699), height: u(299), fontSize: u(24.45) }}
          >
            {eventCopy}
          </p>
          <T l={1065} t={897} w={367} h={48} color={red}>
            INDUSTRY
          </T>
          <T l={1065} t={965} w={273} h={59} size={24.45} color={ink}>
            LGBTQIA+ Advocacy & Public Awareness
          </T>
          <T l={1065} t={1100} w={367} h={48} color={red}>
            SCOPE
          </T>
          <T l={1065} t={1168} w={306} h={89} size={24.45} color={ink}>
            End-to-End Branding, Digital Content, Campaign Design, Event & Print Collateral
          </T>

          <T l={80} t={1368} w={173} h={48} color={red}>
            All Events
          </T>

          <Pos l={80} t={1505} w={747} h={512} className="rounded-[27px] bg-white" />
          <Pos l={203} t={1560} w={501} h={402}>
            <img src={`${a}/vows-logo.png`} alt="Vows and Wows" className="absolute inset-0 size-full object-cover" />
          </Pos>
          <T l={895} t={1524} w={239} h={48} color={red}>
            Vows & Wows
          </T>
          <EventCopy l={895} t={1639} />
          <T l={895} t={1950} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>

          <T l={270} t={2096} w={272} h={48} color={red}>
            Snow Much Fun
          </T>
          <EventCopy l={270} t={2211} />
          <T l={270} t={2522} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>
          <Pos l={1261} t={2116} w={401} h={434}>
            <img
              src={`${a}/snow-much-fun.png`}
              alt="Snow Much Fun"
              className="absolute inset-0 size-full object-cover"
            />
          </Pos>

          <Pos l={80} t={2649} w={747} h={512} className="rounded-[27px] bg-white" />
          <Pos l={203} t={2840} w={501} h={131}>
            <img
              src={`${a}/condom-logo.png`}
              alt="Condom Connect"
              className="absolute inset-0 size-full object-cover"
            />
          </Pos>
          <T l={895} t={2668} w={302} h={48} color={red}>
            Condom Connect
          </T>
          <EventCopy l={895} t={2783} />
          <T l={895} t={3094} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>

          <T l={270} t={3240} w={239} h={48} color={red}>
            Espresso
          </T>
          <EventCopy l={270} t={3355} />
          <T l={270} t={3666} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>
          <Pos l={1088} t={3221} w={747} h={512} className="rounded-[27px] bg-white" />
          <Pos l={1261} t={3276} w={401} h={403}>
            <img src={`${a}/espresso.png`} alt="Espresso" className="absolute inset-0 size-full object-cover" />
          </Pos>

          <Pos l={80} t={3793} w={747} h={512} className="rounded-[27px] bg-white" />
          <Pos l={203} t={3967} w={501} h={164}>
            <img src={`${a}/baatein-logo.png`} alt="Baatein" className="absolute inset-0 size-full object-cover" />
          </Pos>
          <T l={895} t={3812} w={239} h={48} color={red}>
            Baatein
          </T>
          <EventCopy l={895} t={3927} />
          <T l={895} t={4238} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>

          <Pos l={80} t={4425} w={1760} h={860}>
            {[
              { l: 0, t: 0, w: 560, h: 580 },
              { l: 588, t: 0, w: 560, h: 330 },
              { l: 1176, t: 0, w: 584, h: 330 },
              { l: 0, t: 608, w: 560, h: 252 },
              { l: 588, t: 358, w: 372, h: 502 },
              { l: 988, t: 358, w: 372, h: 502 },
              { l: 1388, t: 358, w: 372, h: 502 },
            ].map((b) => (
              <div
                key={`${b.l}-${b.t}`}
                className="absolute bg-white"
                style={{
                  left: u(b.l),
                  top: u(b.t),
                  width: u(b.w),
                  height: u(b.h),
                  border: '2px solid #FF6BB5',
                  borderRadius: u(28),
                }}
              />
            ))}
          </Pos>
        </div>
      </div>

      {nextProjectsList.length > 0 && (
        <section className="mx-auto mt-24 mb-16 max-w-[1400px] px-8">
          <div className="mb-8 flex w-full items-center justify-between border-t-2 border-chitkala-red pt-6">
            <h4
              className="font-[family-name:var(--font-cabinet)] font-bold uppercase tracking-wider text-chitkala-red"
              style={{ fontSize: '29.04px' }}
            >
              NEXT PROJECT
            </h4>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-chitkala-red bg-white px-5 py-2 font-[family-name:var(--font-cabinet)] text-sm font-bold uppercase tracking-wider text-chitkala-red shadow-xs transition-all duration-200 hover:bg-chitkala-red hover:text-white md:text-base"
            >
              <span>VIEW ALL</span>
              <span className="text-lg leading-none">+</span>
            </Link>
          </div>
          <div className="flex w-full flex-col items-stretch gap-5 md:flex-row">
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
