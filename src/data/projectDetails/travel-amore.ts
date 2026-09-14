import type { ProjectDetailContent } from '../../types/projectDetail'

const assetBase = '/assets/projects/travel-amore'

export const travelAmoreDetail: ProjectDetailContent = {
  slug: 'travel-amore',
  hero: {
    coverImage: `${assetBase}/hero-cover.png`,
    title: 'Travel AMore',
  },
  meta: {
    category: 'Brand Identity Design',
    essenceLabel: 'PROJECT ESSENCE',
    essence:
      'Travel Amore is all about living life to the fullest and making memories that will stay with you forever. We believe that travelling is not just about ticking off landmarks or taking selfies, but the journey, the people you meet, and the experiences you have along the way. The kind that give you that heart-pumping, soul-tingling feeling and stay etched in your memory for all time! Join us on as we take you with us on some of the most immersive, authentic, and totally unforgettable experiences around the globe.',
    industryLabel: 'INDUSTRY',
    industry: 'Travel & Hospitality',
    scopeLabel: 'SCOPE',
    scope: 'Logo, Visual Identity, Social Media',
  },
  quote: {
    graphic: `${assetBase}/sanskrit-quote.svg`,
    text: 'Those who wish to seek virtues travel the entire world.',
    attribution: '~ Panchatantra',
  },
  concept: {
    image: `${assetBase}/golden-ratio.png`,
    annotations: [
      {
        id: 1,
        dotPosition: { x: 218, y: 1681 },
        text: 'Built on the Golden Ratio, the identity reflects balance, harmony, and natural proportion.',
        textAlign: 'left',
        textPosition: { x: 80, y: 1581 },
      },
      {
        id: 2,
        dotPosition: { x: 1413, y: 1601 },
        text: 'Inspired by the Pancha Bhutas. Earth, Water, Fire, Air, & Space. It represents the forces that shape our world. A sixth element, human experience, brings meaning to the journey.',
        textAlign: 'right',
        textPosition: { x: 1413, y: 1601 },
      },
      {
        id: 3,
        dotPosition: { x: 223, y: 1962 },
        text: 'The waterfall symbolizes stepping beyond comfort into freedom, movement, and discovery.',
        textAlign: 'left',
        textPosition: { x: 223, y: 1962 },
      },
      {
        id: 4,
        dotPosition: { x: 1502, y: 2004 },
        text: 'At its core, the identity is an invitation to explore, to stay present, and to experience more through travel.',
        textAlign: 'right',
        textPosition: { x: 1502, y: 2004 },
      },
    ],
  },
  logoShowcase: {
    image: `${assetBase}/logo-web.png`,
  },
  brandElements: [
    { name: 'Ocean', image: `${assetBase}/ocean.png` },
    { name: 'Greenery', image: `${assetBase}/greenery.png` },
    { name: 'Land', image: `${assetBase}/land.png` },
    { name: 'Sun', image: `${assetBase}/sun.png` },
  ],
  brandElementBases: [
    { name: 'Base', image: `${assetBase}/base.png` },
    { name: 'Space', image: `${assetBase}/space.png` },
  ],
  typography: [
    {
      name: 'Bebas Neue (Book)',
      subtitle: '(Regular, Light)',
      description:
        "Bebas Neue Book is a display family suitable for headlines, captions, & packaging, It's based on the original Bebas typeface. The family is suitable for pro users due to its extended character set & OpenType features.",
    },
    {
      name: 'Montserrat Alternates',
      subtitle: '(Regular, Normal)',
      description:
        'Montserrat is a geometric sans-serif typeface which was inspired by posters, signs and painted windows from the first half of the twentieth century, seen in the historic Montserrat city. Montserrat Alternates is a sister its sister family with special letters that make the text- body copy attractive',
    },
  ],
  logoDisplay: {
    image: `${assetBase}/logo-final.png`,
    title: 'Travel AMore',
  },
  applications: {
    banner: `${assetBase}/banner.png`,
    title: 'Travel AMore',
    gallery: [
      { src: `${assetBase}/application-3.png`, alt: 'Travel AMore jacket application', className: 'col-span-1 row-span-2' },
      { src: `${assetBase}/application-2.png`, alt: 'Travel AMore brand application', className: 'col-span-1' },
      { src: `${assetBase}/application-4.png`, alt: 'Travel AMore photo application', className: 'col-span-1' },
      { src: `${assetBase}/application-5.png`, alt: 'Travel AMore portrait application', className: 'col-span-1' },
      { src: `${assetBase}/application-8.png`, alt: 'Travel AMore merchandise', className: 'col-span-1' },
      { src: `${assetBase}/application-7.png`, alt: 'Travel AMore product', className: 'col-span-1' },
      { src: `${assetBase}/application-6.png`, alt: 'Travel AMore cap', className: 'col-span-1' },
      { src: `${assetBase}/application-9.png`, alt: 'Travel AMore metal plate', className: 'col-span-1' },
    ],
  },
  founder: {
    name: 'Aakanksha Monga',
    bio: 'Introducing Aakanksha Monga, the founder of Travel Amore — a brand built on passion, purpose, and the beauty of exploration. Her vision blends thoughtful design with soulful travel experiences, inspiring a community of modern explorers.\n\nWorking with her was truly a pleasure — her clarity, creativity, and trust made the entire journey as meaningful as the brand itself.',
    instagram: 'https://instagram.com/aakanksha.monga',
    website: 'https://www.travelamore.club',
    image: `${assetBase}/founder.png`,
  },
  nextProjects: [
    {
      slug: 'creator-takeoff',
      title: 'Creator Takeoff Academy',
      year: '2026',
      services: 'Logo Design',
    },
    {
      slug: 'creator-takeoff',
      title: 'Creator Takeoff Academy',
      year: '2026',
      services: 'Logo Design',
    },
    {
      slug: 'creator-takeoff',
      title: 'Creator Takeoff Academy',
      year: '2026',
      services: 'Logo Design',
    },
  ],
  footer: {
    copyright: '© 2026 Studio Chitkala All rights reserved',
    tagline: 'Where Thought Finds Form',
  },
}
