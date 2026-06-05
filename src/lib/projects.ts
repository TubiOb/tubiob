// import { Hivehub1, Hivehub2, Hivehub3, Shopify1, Shopify2, PlayCV, PlayCV1, PlayCV2, PlayCV3 } from "../../public/img"

export type ChallengeItem = {
  challenge: string
  solution: string
}

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  role: string
  problem: string
  keyDecisions: string[]
  challenges: ChallengeItem[]
  outcome: string
  whatILearned: string
  images: string[]
  demoUrl?: string
  codeUrl?: string
  stack: string[]
  featured: boolean
  caseStudyUrl: string
}

export const projects: Project[] = [
  {
    id: "boiibonline",
    title: "Boiib Online",
    tagline: "Making Nigerian insurance transparent, comparable, and purchasable in one place.",
    description:
      "An all-in-one insurance marketplace that connects users with multiple providers, enabling policy comparison, instant purchases, and real-time tracking. Built for three actor types: users, agents, and insurance companies, each with distinct dashboards.",
    role: "Frontend Developer",
    problem: "Insurance in Nigeria is opaque; and pricing is inconsistent, comparison is nearly impossible, and most purchases still happen via phone calls or physical offices. Boiib needed a web platform that could surface multiple providers, let users compare policies meaningfully, and complete purchases without leaving the app.",
    keyDecisions: [
      "Used a multi-role routing architecture (users, agents, companies) with protected routes per role. This kept each actor's surface area clean without duplicating layout code.",
      "Integrated Flutterwave as the payment layer because Flutterwave's webhook reliability was better documented for the insurance premium recurring-payment pattern we needed.",
      "Chose Quill Text Editor for product descriptions inside the provider portal; lightweight, well-supported, and familiar enough for non-technical insurance staff to use without training."
    ],
    challenges: [
      {
        challenge: "Three completely different user flows (customer, agent, provider) had to share the same codebase without leaking UI or data between roles.",
        solution: "Implemented role-based route guards using React Context + localStorage persistence, with a dedicated layout component per role that conditionally rendered nav and sidebar."
      }
    ],
    outcome: "Delivered a working multi-provider marketplace with real payment processing and admin dashboards for all three actor types. First time I shipped a product with live payment integration.",
    whatILearned: "Role-based access at the frontend level is not security, it's UX. Real security lives on the API. This project taught me to think about who sees what at every layer, not just the component level.",
    images: ['/img/Boiibonline.png', '/img/Boiibonline1.png', '/img/Boiibonline2.png', '/img/Boiibonline3.png', '/img/Boiibonline4.png', '/img/Boiibonline5.png', '/img/Boiibonline6.png', '/img/Boiibonline7.png'],
    demoUrl: 'https://staging.boiibonline.ng/',
    codeUrl: "",
    caseStudyUrl: "/case-study/boiibonline",
    stack: ["Typescript", "Axios", "MUI", 'Tailwind CSS', 'Tanstack React Table', 'Flutterwave API', 'Quill Text Editor', 'Papaparse', 'Lucide React', 'NPM', 'Yup'],
    featured: false,
  },
  {
    id: "playcv",
    title: "PlayCV",
    tagline: "Helping Nigerian graduates get noticed by employers through video CVs.",
    description:
      "A dual-platform web app where professionals upload video CVs (paid), employers browse and pay to access full profiles, and admin manage content, approvals, pricing, vacancies, and job ads.",
    role: "Sole Frontend Developer",
    problem: "Nigeria's graduate job market is noisy — thousands of text CVs per role, most unread. PlayCV's hypothesis was that a short video CV would surface personality and communication skills that paper can't. The challenge was building a monetised, admin-controlled platform that worked for both job seekers and employers.",
    keyDecisions: [
      "Used NX monorepo to house the main platform and the admin dashboard; this let the two apps share component libraries and API types without publishing a private package.",
      "Chose Tiptap Rich Editor for the profile bio field because it gave us a clean JSON output format that was easier to store and render than raw HTML from Quill.",
      "Cloudflare integration was added for video delivery, storing video on Cloudflare R2 and streaming via Cloudflare Stream kept costs low compared to S3 + CloudFront for a startup budget."
    ],
    challenges: [
      {
        challenge: "The paywall needed to work at multiple levels: profile access (per-employer pay-per-view) and job ad posting (subscription tier). These were two different payment flows.",
        solution: "Built a unified payment context that accepted a 'payment type' prop, routing to different Paystack configurations while sharing the same UI components and success/error handling.",
      },
      {
        challenge: "Admin approval of video CVs had to happen before they were visible to employers, requiring a pending/approved/rejected state machine.",
        solution: "Modelled this as a status field on the profile document and built an admin queue view using TanStack React Table with column filters by status.",
      },
      {
        challenge: "There was no design to follow — no Figma file, no wireframes, no mockups. Every screen was designed from scratch as I built it, which meant making UX decisions in real time without a reference point.",
        solution: "Developed a personal design-as-you-build workflow: sketching rough layouts on paper before touching code, using MUI's component library as a constraint to avoid decision fatigue on low-level UI, and iterating on live previews rather than static mocks. This forced me to think like a product designer, not just an implementer.",
      },
    ],
    outcome: "Shipped a working dual-surface platform with real monetisation. The NX setup in particular was a new skill that opened up how I think about multi-app projects.",
    whatILearned: "Designing payment flows is mostly UX work, not API work. Most of the complexity is in what happens after payment fails, not after it succeeds.",
    images: ["/img/Playcv.png", '/img/Playcv1.png', '/img/Playcv2.png', '/img/Playcv3.png'],
    demoUrl: "https://dev.playcv.ng/",
    codeUrl: "",
    caseStudyUrl: "/case-study/playcv",
    stack: ["Typescript", 'Axios', "MUI", 'Paystack API', 'Tiptap Rich Editor', 'Cloudflare Integration', "API Integration", "NX", 'Yarn', 'Zod'],
    featured: false,
  },
  {
    id: "hive-hub",
    title: "Hivehub",
    tagline: "An open publishing platform where thoughtful writing finds its audience.",
    description:
      "A Medium-inspired writing platform with a rich editing experience, user feeds, follow system, and content discovery; built with a focus on reading and writing comfort.",
    role: "Frontend Developer",
    problem: "Medium's paywalled model increasingly buries free content. Hivehub was built as an alternative — a platform where writers publish openly and readers discover through genuine curation, not algorithms optimised for engagement.",
    keyDecisions: [
      "Chose Tiptap over Quill for the editor because Tiptap's extension API let us build a custom slash-command menu for inserting code blocks, images, and dividers — the kind of writing tools technical writers actually need.",
      "Used Firebase Realtime Database (not Firestore) for the feed and follow counts, these are high-read, low-write operations where real-time sync added genuine UX value (follow counts update live).",
      "Used Framer Motion for page transitions and article reveal animations — the reading experience needed to feel deliberate, not snappy.",
    ],
    challenges: [
      {
        challenge: "Tiptap's default output is a JSON document tree, but displaying it required a custom renderer that respected the styling conventions of the platform.",
        solution: "Built a recursive `TiptapRenderer` component that walked the JSON node tree and mapped each node type to a styled React component.",
      },
      {
        challenge: "The feed needed to show posts from followed users only, which Firestore's query model doesn't support natively (no JOIN equivalent).",
        solution: "Stored followed user IDs in an array and used Firestore's `in` operator with batched queries — limited to 10 per batch, merged and sorted client-side.",
      },
    ],
    outcome: "Delivered a fully working publishing platform with rich editing, user feeds, and real-time interactions. The Tiptap renderer in particular became a reusable pattern I've used in later projects.",
    whatILearned: "Firestore's query limitations force you to think carefully about your data model upfront. Denormalising early (storing author info on each post) saved me from painful migrations later.",
    images: ['/img/Hivehub.png ', '/img/Hivehub1.png', '/img/Hivehub2.png', '/img/Hivehub3.png'],
    demoUrl: "https://hive-hub.netlify.app/",
    codeUrl: "https://github.com/Ade1fe/HiveHub",
    caseStudyUrl: "/case-study/hivehub",
    stack: ["Typescript", "Chakra UI", "Firebase", 'Tiptap Rich Editor', "Framer Motion", 'Vite'],
    featured: false,
  },
  {
    id: "memomaze",
    title: "Memomaze",
    tagline: "A minimalist note-taking app with real-time sync and a CI/CD pipeline.",
    description:
      "Google Keep-inspired note app with real-time syncing, label organisation, search, and a full GitHub Actions CI/CD pipeline — the project where I first implemented automated deployment.",
    role: "Sole Developer",
    problem: "Built as a deliberate learning project: I wanted to ship something with real-time sync, proper search, and an automated test-and-deploy pipeline skills I knew I needed but hadn't used in a production context.",
    keyDecisions: [
      "Used Firebase Realtime Database over Firestore for notes, sync latency was measurably lower and the simpler document model was appropriate for flat note objects.",
      "Added GitHub Actions CI/CD from the start rather than retrofitting it; every push to main runs ESLint, builds the app, and deploys to Vercel. This forced me to write clean, lint-passing code throughout.",
      "Chose Sonner for toast notifications over react-hot-toast because Sonner's API is promise-aware, `toast.promise(saveNote())` gives the user feedback during async operations without manual state management.",
    ],
    challenges: [
      {
        challenge: "Real-time sync created a race condition — if a user edited a note while offline and reconnected, their local version could be overwritten by the server version.",
        solution: "Used Firebase's `serverTimestamp` and a last-write-wins strategy with a visual 'syncing...' indicator so users always knew the sync state.",
      },
    ],
    outcome:
      "Shipped with a working CI/CD pipeline that has caught real bugs before deployment. The project gets used as a personal note tool daily.",
    whatILearned:
      "CI/CD is not infrastructure work; it's a developer experience investment. The time spent setting up the pipeline pays back every time a linting error is caught before it hits production.",
    images: ['/img/Memomaze.png', '/img/Memomaze1.png', '/img/Memomaze2.png', '/img/Memomaze3.png'],
    demoUrl: 'https://memomaze.netlify.app/',
    codeUrl: "https://github.com/TubiOb/memomaze",
    caseStudyUrl: "/case-study/memomaze",
    stack: ["React", "Yup", "Tailwind CSS", 'Sonner React Toast', 'Firebase', 'Github Actions', 'CI/CD'],
    featured: false,
  },
  {
    id: "learnest",
    title: "LearnNest",
    tagline: "A school management system with three separate portals and integrated fee payments.",
    description:
      "Comprehensive edtech platform with distinct portals for Admins (courses, lecturers, fees), Teachers (assignments, grading), and Students (submission, fee payment via Paystack, course registration).",
    role: "Frontend Developer",
    problem: "Manual academic processes, paper-based fee collection, grade sheets passed by hand, course registration via physical forms, create bottlenecks for schools trying to scale. LearnNest needed a platform that digitised every step while keeping each actor's surface area simple and separate.",
    keyDecisions: [
      "Used role-based routing with three completely separate layout trees — Admin, Teacher, Student each had their own layout component. This prevented accidental cross-role UI bleed and made the codebase easier to reason about.",
      "TanStack React Table was chosen for grade sheets and enrollment lists — these tables needed sorting, filtering, and pagination against large datasets, which basic HTML tables couldn't handle.",
      "Paystack was used for fee payments with a webhook-driven status update — we didn't trust client-side payment confirmation, so fee status only changed on successful webhook receipt.",
    ],
    challenges: [
      {
        challenge: "Students needed to see their payment status in real time after completing a Paystack transaction, but webhooks are asynchronous.",
        solution: "Implemented a polling mechanism — after Paystack redirect, the client polled the fee status endpoint every 2 seconds for up to 30 seconds, showing a 'confirming payment' state in the UI.",
      },
    ],
    outcome: "Delivered a working three-portal system with live fee processing. The role separation pattern from this project became a template I've reused in subsequent multi-actor products.",
    whatILearned: "Multi-role products need to be designed role-first, not feature-first. Every time I added a feature without thinking 'which role sees this?', I created confusion I had to untangle later.",
    images: ['/img/LearnNest.png', '/img/LearnNest1.png', '/img/LearnNest2.png', '/img/LearnNest3.png'],
    // demoUrl: 'https://learn-nest.netlify.app/',
    // codeUrl: "https://github.com/TubiOb/learnnest",
    caseStudyUrl: "/case-study/learnest",
    stack: ["React", "Firebase", "Tailwind CSS", 'Chakra UI', 'Paystack API', 'Tanstack React Table'],
    featured: false,
  },
  {
    id: "cloudequip",
    title: "Cloud Equipment",
    tagline: "A platform bridging investors and African healthcare facilities — enabling equipment financing that minimises upfront costs for clinics while generating sustainable returns for investors.",
    description:
      "A platform connecting investors with opportunities to fund cutting-edge medical equipment for African healthcare facilities. We enable high-ROI investments while improving patient care through flexible financing, maintenance, and operational support. Our model minimizes upfront costs for healthcare providers while ensuring sustainable returns for investors—bridging the gap between financial growth and impactful healthcare advancement.",
    role: "Frontend Developer",
    problem: "African healthcare facilities often can't afford critical medical equipment upfront, while impact investors lack a structured channel to deploy capital into healthcare infrastructure with transparent ROI. Cloud Equipment needed a platform that made both sides of this transaction legible and trustworthy.",
    keyDecisions: [
      "Kept the stack lean (React + Tailwind only) because the complexity was in the product concept and investor presentation, not the UI mechanics. Adding unnecessary libraries would have slowed delivery without adding user value.",
      "The investor-facing hero section was designed with dark photography and high-contrast typography to communicate stability and credibility — the visual language of infrastructure investment, not consumer apps.",
    ],
    challenges: [
      {
        challenge: "The platform needed to communicate two very different value propositions on the same page — 'invest here for returns' and 'get equipment without upfront cost' — without confusing either audience.",
        solution: "Built dual entry points from the hero — two CTAs with distinct copy, each routing to a separate onboarding flow. The hero imagery and headline spoke to investors (the higher-friction conversion), while the secondary CTA captured clinic interest.",
      },
    ],
    outcome: "Delivered a polished investor-facing landing and platform UI. The dual-audience UX challenge shaped how I think about hero sections and CTA hierarchy.",
    whatILearned: "When a product has two audiences, one of them is always primary. Trying to serve both equally on the same page usually serves neither. Committing to a primary audience for each section is a design decision, not a compromise.",
    images: ['/img/Cloudequip1.png', '/img/Cloudequip2.png', '/img/Cloudequip3.png'],
    demoUrl: '',
    codeUrl: "",
    caseStudyUrl: "/case-study/cloudequip",
    stack: ["React", "Tailwind CSS"],
    featured: false,
  },
  // {
  //   id: "shopify",
  //   title: "Shopify Merchant Onboarding Dashboard",
  //   description: "Replica of the Shopify merchant onboarding dashboard.",
  //   images: ['/img/Shopify1.png', '/img/Shopify2.png'],
  //   demoUrl: 'https://shopify-by-tubiob.netlify.app/',
  //   codeUrl: "https://github.com/TubiOb/Crushing-Tech-Hackhathon",
  //   stack: ["HTML", "CSS", "Javascript"],
  //   featured: false,
  // },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getOtherProjects = (): Project[] => {
  return projects.filter((project) => !project.featured)
}