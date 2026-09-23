export interface Project {
  id: string
  title: string
  year: string
  services: string
  image?: string
  imageOffsetY?: number
  borderRadius: 20 | 30
  color?: string
}

export const projects: Project[] = [
  {
    id: 'travel-amore',
    title: 'Travel AMore',
    year: '2026',
    services: 'Logo Design, Visual Identity, Social Media',
    image: '/assets/travel-amore.png',
    imageOffsetY: -209,
    borderRadius: 30,
    color: '#b58a3f',
  },
  {
    id: 'divya-jyot',
    title: 'Divya Jyot',
    year: '2026',
    services: 'Logo Design, Brand Manual',
    image: '/assets/projects/divya-jyot/hero.png',
    borderRadius: 30,
    color: '#BDAD63',
  },
  {
    id: 'creator-takeoff',
    title: 'Creator Takeoff Academy',
    year: '2026',
    services: 'Logo Design',
    image: '/assets/travel-amore.png',
    borderRadius: 30,
    color: '#4a6b5d',
  },
  {
    id: 'traveling-self',
    title: 'The Traveling Self',
    year: '2025',
    services: 'Design & Print Production',
    image: '/assets/travel-amore.png',
    borderRadius: 30,
    color: '#8e4a42',
  },
  {
    id: 'maisondoc',
    title: 'MaisonDoc Healthcare',
    year: '2026',
    services: 'Logo Design, Packaging',
    image: '/assets/travel-amore.png',
    borderRadius: 30,
    color: '#296a73',
  },
  {
    id: 'aether',
    title: 'Aether Transmission Systems',
    year: '2025',
    services: 'Branding, Web development',
    image: '/assets/travel-amore.png',
    borderRadius: 20,
    color: '#3e4475',
  },
  {
    id: 'crimsyn',
    title: 'Crimsyn',
    year: '2025',
    services: 'Logo Design',
    image: '/assets/travel-amore.png',
    borderRadius: 20,
    color: '#a6242c',
  },
]

export const filterTags = {
  row1: ['ALL', 'ECOMMERCE', 'FOOD & BEVERAGE', 'ENTERTAINMENT'],
  row2: ['TECH', 'INDUSTRIAL', 'TRAVEL', 'SEE MORE'],
} as const

export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact Us', href: '#contact' },
] as const
