import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { ProjectNavbar } from '../components/project-detail/ProjectNavbar'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const a = '/assets/projects/vatsalya'
const u = (n: number) => `calc(${n} / 1920 * 100cqw)`
const shadow = '4px 4px 10px 0px rgba(167, 23, 20, 0.5)'
const red = '#E34234'
const darkRed = '#A71714'
const ink = '#2D2D2D'

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

function Rot({
  l,
  t,
  w,
  h,
  deg,
  flipY,
  children,
}: {
  l: number
  t: number
  w: number
  h: number
  deg: number
  flipY?: boolean
  children: ReactNode
}) {
  return (
    <Pos l={l} t={t} w={w} h={h} className="flex items-center justify-center">
      <div
        className="flex-none"
        style={{
          transform: flipY ? `rotate(${deg}deg) scaleY(-1)` : `rotate(${deg}deg)`,
        }}
      >
        {children}
      </div>
    </Pos>
  )
}

function FillImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
  )
}

function Mock({
  l,
  t,
  w,
  h,
  iw,
  ih,
  deg,
  src,
  alt,
  flipY,
  opacity,
}: {
  l: number
  t: number
  w: number
  h: number
  iw: number
  ih: number
  deg: number
  src: string
  alt: string
  flipY?: boolean
  opacity?: number
}) {
  return (
    <Rot l={l} t={t} w={w} h={h} deg={deg} flipY={flipY}>
      <div
        className="relative"
        style={{
          width: u(iw),
          height: u(ih),
          opacity,
          boxShadow: opacity ? undefined : shadow,
        }}
      >
        <FillImg src={src} alt={alt} />
      </div>
    </Rot>
  )
}

function Label({
  l,
  t,
  w,
  h,
  deg,
  tw,
  children,
}: {
  l: number
  t: number
  w: number
  h: number
  deg: number
  tw: number
  children: ReactNode
}) {
  return (
    <Rot l={l} t={t} w={w} h={h} deg={deg}>
      <p
        className="font-[family-name:var(--font-cabinet)] font-medium leading-normal text-chitkala-red"
        style={{ width: u(tw), fontSize: u(39.56) }}
      >
        {children}
      </p>
    </Rot>
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
        overflow: 'visible',
      }}
    >
      {children}
    </p>
  )
}

export function VatsalyaPage() {
  const [activeNextCard, setActiveNextCard] = useState<string | null>(null)
  const currentSlug = 'vatsalya'
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

      <div className="vi-page mx-auto w-full max-w-[1920px] bg-white">
        <div className="relative w-full overflow-x-clip" style={{ height: u(9567) }}>
          <Pos l={109} t={2189} w={1708} h={1721}>
            <img src={`${a}/grid.svg`} alt="" width={1708} height={1721} className="block w-full" />
          </Pos>
          <Pos l={109} t={3910} w={1708} h={1721}>
            <img src={`${a}/grid.svg`} alt="" width={1708} height={1721} className="block w-full" />
          </Pos>

          <div className="absolute inset-x-0 top-0 w-full" style={{ height: u(720) }}>
            <FillImg src={`${a}/hero.png`} alt="Vatsalya International Pre school" />
          </div>

          

          <T l={80} t={622} size={64} color="#FFFFFF" bold nowrap>
            Vatsalya International Pre school
          </T>
          <T l={80} t={789} w={699} h={48} color={darkRed} nowrap>
            Complete Branding & Creative Services
          </T>
          <T l={80} t={897} w={367} h={48} color={red}>
            PROJECT ESSENCE
          </T>
          <T l={80} t={965} w={540} h={332} size={24.45} color={ink} justify>
            Vatsalya International Pre-School is a joyful learning space where
            children explore, learn and grow through meaningful experiences. The
            creative communication was developed to reflect the school’s playful,
            nurturing and child-friendly approach, while maintaining a consistent
            and engaging visual identity across platforms.
          </T>
          <T l={1065} t={897} w={367} h={48} color={red}>
            INDUSTRY
          </T>
          <T l={1065} t={965} w={273} h={59} size={24.45} color={ink}>
            Early Childhood Education & Preschool
          </T>
          <T l={1065} t={1100} w={367} h={48} color={red}>
            SCOPE
          </T>
          <T l={1065} t={1168} w={451} h={129} size={24.45} color={ink}>
            Social Media & Digital Content, Event Creatives, Print & Promotional
            Collateral, Campaign Design, School Communication Materials & Creative
            Support
          </T>

          <T l={80} t={1368} w={173} h={48} color={red}>
            All Events
          </T>
          <Pos l={80} t={1505} w={747} h={512} className="overflow-hidden rounded-[27px] bg-white" />
          <Pos l={203} t={1560} w={501} h={402}>
            <FillImg src={`${a}/vows-logo.png`} alt="Vows and Wows" />
          </Pos>
          <T l={895} t={1524} w={239} h={48} color={red}>
            Vows & Wows
          </T>
          <p
            className="absolute font-[family-name:var(--font-cabinet)] font-medium leading-normal text-[#2D2D2D] text-justify whitespace-pre-wrap"
            style={{ left: u(895), top: u(1639), width: u(750), height: u(299), fontSize: u(24.45) }}
          >
            {`Impulse New Delhi is a community-driven initiative focused on creating safe, inclusive spaces for the LGBTQIA+ community. The project centers around awareness, expression, and engagement — amplifying conversations around identity, health, and social acceptance.

Through thoughtful visual storytelling, the design system brings together digital and on-ground communication — from campaigns and event creatives to social media and print — ensuring a cohesive, impactful, and community-first brand presence.`}
          </p>
          <T l={895} t={1950} w={343} h={48} color={darkRed}>
            Tap here for more...
          </T>

          <Label l={1255.858} t={3227} w={242.085} h={67.054} deg={4.61} tw={239}>
            Visiting Card
          </Label>
          <Mock
            l={1071.837}
            t={2770}
            w={735.559}
            h={476.221}
            iw={704}
            ih={421}
            deg={4.61}
            src={`${a}/visiting-card.png`}
            alt="Visiting Card"
          />
          <Label l={628} t={2779.208} w={242.085} h={67.054} deg={-4.61} tw={239}>
            Envelope
          </Label>
          <Mock
            l={184}
            t={4283.499}
            w={822.354}
            h={627.14}
            iw={779.358}
            ih={566.333}
            deg={-4.61}
            src={`${a}/space-certificate.png`}
            alt="Space Theme Certificate"
          />
          <Label l={422} t={4890.963} w={437.451} h={82.807} deg={-4.61} tw={435}>
            Space Theme Certificate
          </Label>
          <Mock
            l={365.536}
            t={3267.67}
            w={670.464}
            h={551.946}
            iw={613.018}
            ih={475.038}
            deg={-7.6}
            src={`${a}/open-trifold.png`}
            alt="Open trifold brochure"
          />
          <Mock
            l={178}
            t={2310.73}
            w={1024.798}
            h={526.281}
            iw={992}
            ih={448}
            deg={-4.61}
            src={`${a}/envelope.png`}
            alt="Envelope"
          />
          <Mock
            l={397.15}
            t={3099}
            w={422.334}
            h={613.428}
            iw={243.023}
            ih={564.262}
            deg={20.13}
            src={`${a}/trifold.png`}
            alt="Trifold brochure"
          />
          <Label l={595} t={3774.545} w={299.7} h={69.418} deg={-4.16} tw={297}>
            Trifold brochure
          </Label>
          <Mock
            l={1002.945}
            t={3635}
            w={826.874}
            h={647.458}
            iw={786}
            ih={592}
            deg={4.16}
            src={`${a}/birthday-card.png`}
            alt="Birthday Card"
          />
          <Label l={1259.919} t={4296.729} w={299.7} h={69.418} deg={4.16} tw={297}>
            Birthday Card
          </Label>
          <Mock
            l={871.22}
            t={4851}
            w={855.072}
            h={639.588}
            iw={815}
            ih={582}
            deg={4.16}
            src={`${a}/house-certificate.png`}
            alt="House Theme Certificate"
          />

          <Pos l={178} t={5064} w={358} h={607} className="opacity-30">
            <FillImg src={`${a}/tree.png`} alt="" />
          </Pos>
          <Pos l={1338} t={1974} w={450} h={384} className="opacity-30">
            <FillImg src={`${a}/sun-cloud.png`} alt="" />
          </Pos>
          <Mock
            l={1240.609}
            t={4437}
            w={484.008}
            h={302.788}
            iw={459.881}
            ih={256.457}
            deg={5.96}
            src={`${a}/star.png`}
            alt=""
            opacity={0.3}
          />
          <Pos l={783} t={2950} w={223} h={149} className="opacity-30">
            <FillImg src={`${a}/butterfly.png`} alt="" />
          </Pos>
          <Mock
            l={1774.352}
            t={3246}
            w={588.648}
            h={528.611}
            iw={484.566}
            ih={380.153}
            deg={158.99}
            src={`${a}/dragon.png`}
            alt=""
            flipY
            opacity={0.3}
          />
          <Pos l={575} t={5404} w={237} h={173} className="opacity-30">
            <FillImg src={`${a}/car.png`} alt="" />
          </Pos>
          <Pos l={1086} t={4740} w={234} h={140} className="opacity-30">
            <FillImg src={`${a}/cloud.png`} alt="" />
          </Pos>
          <Mock
            l={144.049}
            t={3907}
            w={204.404}
            h={244.779}
            iw={134.599}
            ih={209.196}
            deg={22.5}
            src={`${a}/strawberry.png`}
            alt=""
            opacity={0.3}
          />
          <Mock
            l={1777.903}
            t={2685.62}
            w={283.903}
            h={212.958}
            iw={262}
            ih={179}
            deg={-172.19}
            src={`${a}/rabbit.png`}
            alt=""
            flipY
            opacity={0.3}
          />
          <Mock
            l={538.843}
            t={2881.919}
            w={270.843}
            h={235.425}
            iw={228}
            ih={150}
            deg={-153.73}
            src={`${a}/flower.png`}
            alt=""
            flipY
            opacity={0.3}
          />
          <Mock
            l={484.27}
            t={4146.133}
            w={278.487}
            h={210.941}
            iw={253.97}
            ih={172.079}
            deg={-9.32}
            src={`${a}/crab.png`}
            alt=""
            opacity={0.3}
          />
          <Mock
            l={1827}
            t={5512}
            w={219}
            h={157}
            iw={219}
            ih={157}
            deg={180}
            src={`${a}/dog.png`}
            alt=""
            flipY
            opacity={0.3}
          />

          <Label l={998.519} t={5469.794} w={437.336} h={79.429} deg={4.16} tw={435}>
            House Theme Certificate
          </Label>

          <T l={80} t={5796} w={322} h={48} color={red}>
            Vatsalya Banners
          </T>
          <T l={80} t={6855} w={322} h={48} color={red}>
            Social Media Posts
          </T>
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
