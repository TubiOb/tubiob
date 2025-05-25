import { Hivehub1, Hivehub2, Hivehub3, Shopify1, Shopify2, PlayCV, PlayCV1, PlayCV2, PlayCV3 } from "../../public/img"

export type Project = {
  id: string
  title: string
  description: string
  images: string[]
  demoUrl?: string
  codeUrl?: string
  technologies: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "hive-hub",
    title: "Hivehub",
    description:
      "Hivehub is an open publishing platform inspired by Medium - a place where meaningful ideas find their audience. We connect thoughtful writers with curious readers through beautiful storytelling tools and smart discovery.",
    images: ['/img/Hivehub1.png', '/img/Hivehub2.png', '/img/Hivehub3.png'],
    demoUrl: "https://hive-hub.netlify.app/",
    codeUrl: "https://github.com/Ade1fe/HiveHub",
    technologies: ["Typescript", "Chakra UI", "Firebase", 'Tiptap Rich Editor', "Framer Motion", 'Vite'],
    featured: true,
  },
  {
    id: "boiibonline",
    title: "Boiib Online",
    description:
      "An all-in-one insurance marketplace that connects users with multiple providers, enabling easy comparison and purchase of policies like Shop Owners and Goods in Transit Insurance. Integrated with Flutterwave for seamless, instant payments. Insurance companies manage premiums, commissions, and product offerings through a robust admin dashboard. Users and agents can track policy details in real-time, while providers tailor services via a centralized portal. Built for transparency, flexibility, and hassle-free insurance transactions.",
    images: ['/img/Boiibonline.png', '/img/Boiibonline1.png', '/img/Boiibonline2.png', '/img/Boiibonline3.png', '/img/Boiibonline4.png', '/img/Boiibonline5.png'],
    demoUrl: 'https://staging.boiibonline.ng/',
    codeUrl: "",
    technologies: ["Typescript", "Axios", "MUI", 'Tailwind CSS', 'Tanstack React Table', 'Papaparse', 'Lucide React', 'NPM', 'Yup', 'Flutterwave API', 'Quill Text Editor'],
    featured: true,
  },
  {
    id: "playcv",
    title: "PlayCV",
    description:
      "A dual-platform web app connecting Nigerian skilled professionals/graduates with employers. Professionals upload video CVs (paid), while employers browse and pay to access full profiles. Employers can also post paid job ads. Includes an admin dashboard for managing content, approvals, pricing, vacancies, and ads. Built to streamline hiring through video-based profiles and monetized access.",
    images: ["/img/PlayCV.png", '/img/PlayCV1.png', '/img/PlayCV2.png', '/img/PlayCV3.png'],
    demoUrl: "https://dev.playcv.ng/",
    codeUrl: "",
    technologies: ["Typescript", 'Axios', "MUI", 'Paystack API', 'Tiptap Rich Editor', 'Cloudflare Integration', "API Integration", "NX", 'Yarn', 'Zod'],
    featured: true,
  },
  {
    id: "learnest",
    title: "LearnNest",
    description:
      "A comprehensive school management system featuring three distinct portals: Admin (manages courses, lecturers, and fees), Teachers (create/grade assignments and track students), and Students (submit work, pay fees via Paystack, and register for courses). Designed to digitize and optimize all academic processes with secure role-based access and seamless payment integration.",
    images: ['/img/LearnNest.png', '/img/LearnNest1.png', '/img/LearnNest2.png', '/img/LearnNest3.png'],
    demoUrl: 'https://learn-nest.netlify.app/',
    codeUrl: "https://github.com/TubiOb/learnnest",
    technologies: ["React", "Firebase", "Tailwind CSS", 'Chakra UI', 'Paystack API', 'Tanstack React Table'],
    featured: false,
  },
  {
    id: "cloudequip",
    title: "Cloud Equipment",
    description:
      "A platform connecting investors with opportunities to fund cutting-edge medical equipment for African healthcare facilities. We enable high-ROI investments while improving patient care through flexible financing, maintenance, and operational support. Our model minimizes upfront costs for healthcare providers while ensuring sustainable returns for investors—bridging the gap between financial growth and impactful healthcare advancement.",
    images: ['/img/Cloudequip1.png', '/img/Cloudequip2.png', '/img/Cloudequip3.png'],
    demoUrl: 'https://oba-cloudequip.netlify.app/',
    codeUrl: "https://github.com/TubiOb/cloudequipment",
    technologies: ["React", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "memomaze",
    title: "Memomaze",
    description:
      "A minimalist note-taking web app inspired by Google Keep. Create and organize notes with real-time syncing. Features intuitive search, labels, and a responsive design for seamless access across devices.",
    images: ['/img/Memomaze.png', '/img/Memomaze1.png', '/img/Memomaze2.png', '/img/Memomaze3.png'],
    demoUrl: 'https://memomaze.netlify.app//',
    codeUrl: "https://github.com/TubiOb/memomaze",
    technologies: ["React", "Yup", "Tailwind CSS", 'Sonner React Toast', 'Firebase', 'Github Actions', 'CI/CD'],
    featured: false,
  },
  {
    id: "shopify",
    title: "Shopify Merchant Onboarding Dashboard",
    description: "Replica of the Shopify merchant onboarding dashboard.",
    images: ['/img/Shopify1.png', '/img/Shopify2.png'],
    demoUrl: 'https://shopify-by-tubiob.netlify.app/',
    codeUrl: "https://github.com/TubiOb/Crushing-Tech-Hackhathon",
    technologies: ["HTML", "CSS", "Javascript"],
    featured: false,
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getOtherProjects = (): Project[] => {
  return projects.filter((project) => !project.featured)
}