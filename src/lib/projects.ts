// // import { Playcv, Playcv1, Playcv2, Playcv3 } from "../../public/img"

// export type ChallengeItem = {
//   challenge: string
//   solution: string
// }

// export type Project = {
//   id: string
//   title: string
//   tagline: string
//   description: string
//   role: string
//   problem: string
//   keyDecisions: string[]
//   challenges: ChallengeItem[]
//   outcome: string
//   whatILearned: string
//   images: string[]
//   demoUrl?: string
//   codeUrl?: string
//   stack: string[]
//   featured: boolean
//   caseStudyUrl: string
// }

// export const projects: Project[] = [
//   {
//     id: "boiibonline",
//     title: "Boiib Online",
//     tagline: "Making Nigerian insurance transparent, comparable, and purchasable in one place.",
//     description:
//       "An all-in-one insurance marketplace that connects users with multiple providers, enabling policy comparison, instant purchases, and real-time tracking. Built for three actor types: users, agents, and insurance companies, each with distinct dashboards.",
//     role: "Frontend Developer",
//     problem: "Insurance in Nigeria is opaque; and pricing is inconsistent, comparison is nearly impossible, and most purchases still happen via phone calls or physical offices. Boiib needed a web platform that could surface multiple providers, let users compare policies meaningfully, and complete purchases without leaving the app.",
//     keyDecisions: [
//       "Used a multi-role routing architecture (users, agents, companies) with protected routes per role. This kept each actor's surface area clean without duplicating layout code.",
//       "Integrated Flutterwave as the payment layer because Flutterwave's webhook reliability was better documented for the insurance premium recurring-payment pattern we needed.",
//       "Chose Quill Text Editor for product descriptions inside the provider portal; lightweight, well-supported, and familiar enough for non-technical insurance staff to use without training."
//     ],
//     challenges: [
//       {
//         challenge: "Three completely different user flows (customer, agent, provider) had to share the same codebase without leaking UI or data between roles.",
//         solution: "Implemented role-based route guards using React Context + localStorage persistence, with a dedicated layout component per role that conditionally rendered nav and sidebar."
//       }
//     ],
//     outcome: "Delivered a working multi-provider marketplace with real payment processing and admin dashboards for all three actor types. First time I shipped a product with live payment integration.",
//     whatILearned: "Role-based access at the frontend level is not security, it's UX. Real security lives on the API. This project taught me to think about who sees what at every layer, not just the component level.",
//     images: ['/img/Boiibonline.png', '/img/Boiibonline1.png', '/img/Boiibonline2.png', '/img/Boiibonline3.png', '/img/Boiibonline4.png', '/img/Boiibonline5.png', '/img/Boiibonline6.png', '/img/Boiibonline7.png'],
//     demoUrl: 'https://staging.boiibonline.ng/',
//     codeUrl: "",
//     caseStudyUrl: "/case-study/boiibonline",
//     stack: ["Typescript", "Axios", "MUI", 'Tailwind CSS', 'Tanstack React Table', 'Flutterwave API', 'Quill Text Editor', 'Papaparse', 'Lucide React', 'NPM', 'Yup'],
//     featured: false,
//   },
//   {
//     id: "tudisallafrican",
//     title: "Tudis All African",
//     tagline: "An e-commerce platform bringing authentic African fashion to customers worldwide.",
//     description: "A full WooCommerce store for Tudis All African, a boutique offering authentic African ready-to-wear fashion for women, men, and children. Covers product catalogue, payment integration, SEO, and responsive UI.",
//     role: "Sole developer (freelance)",
//     problem: "Tudis All African was selling exclusively in-person in San Antonio with no online presence. The founder needed a complete e-commerce platform that could showcase premium African textiles, handle product management at scale, and reach customers outside Texas — without a large technical budget.",
//     keyDecisions: [
//       "Chose WordPress + WooCommerce over a custom build because the client needed to manage products, orders, and inventory herself after handoff — a no-code CMS was the right tool for that ownership model, not a React app she couldn't maintain.",
//       "Selected a free theme (not Astra) and customised it heavily through the WordPress Customiser and custom CSS, rather than paying for a premium theme — keeping the project within the client's budget while still achieving a polished result.",
//       "Used WooCommerce's built-in CSV bulk import tool for mass product upload rather than adding products one by one — a decision that saved days of manual data entry given the size of the catalogue.",
//     ],
//     challenges: [
//       {
//         challenge: "Customising the header navigation and footer to match the boutique's brand without access to premium page builder features or a paid theme's full option panel.",
//         solution: "Used the WordPress theme Customiser combined with targeted custom CSS injected via the Additional CSS panel to override default styles — slower than a drag-and-drop builder but free and effective.",
//       },
//       {
//         challenge: "Getting up to speed with the WordPress ecosystem from scratch — plugin selection, theme hierarchy, WooCommerce settings, and the difference between the block editor and classic editor — all on a live client project.",
//         solution: "Worked methodically through WordPress documentation and WooCommerce's official guides, staging changes locally before pushing to the live Namecheap-hosted site to avoid breaking anything for the client.",
//       },
//       {
//         challenge: "Mass-uploading a large product catalogue with images, variants, pricing, and categories in a format WooCommerce could accept.",
//         solution: "Prepared a properly structured CSV file matching WooCommerce's import template, tested with a small batch first, then imported the full catalogue in one operation — reducing what would have been days of work to a few hours.",
//       },
//       {
//         challenge: "Selecting the right plugins for SEO, performance, and payment without bloating the site or introducing conflicts — a common WordPress pitfall.",
//         solution: "Installed only what was essential: one SEO plugin (Yoast or similar), WooCommerce's native payment options, and a caching plugin. Avoided the temptation to add plugins for every small feature.",
//       },
//     ],
//     outcome: "Delivered a fully functional e-commerce store live at tudisallafrican.com, with a complete product catalogue, payment processing, SEO configuration, and a CMS the client could manage independently. First paid freelance project delivered end-to-end.",
//     whatILearned: "WordPress taught me that the right tool depends on who owns the product after you leave. A React app would have been more fun to build but would have left the client helpless. Choosing boring, appropriate technology over impressive technology is sometimes the more professional call.",
//     images: ["/img/Tudis.png", '/img/Tudis (1).png', '/img/Tudis (2).png', '/img/Tudis (3).png', '/img/Tudis (4).png'],
//     demoUrl: "https://tudisallafrican.com",
//     codeUrl: '',
//     caseStudyUrl: "/case-study/tudisallafrican",
//     stack: [ "WordPress", "WooCommerce", "Custom CSS", "Namecheap (hosting + domain)", "Yoast SEO", "E-commerce SEO", ],
//     featured: false,
//   },
//   {
//     id: "playcv",
//     title: "PlayCV",
//     tagline: "Helping Nigerian graduates get noticed by employers through video CVs.",
//     description:
//       "A dual-platform web app where professionals upload video CVs (paid), employers browse and pay to access full profiles, and admin manage content, approvals, pricing, vacancies, and job ads.",
//     role: "Sole Frontend Developer",
//     problem: "Nigeria's graduate job market is noisy — thousands of text CVs per role, most unread. PlayCV's hypothesis was that a short video CV would surface personality and communication skills that paper can't. The challenge was building a monetised, admin-controlled platform that worked for both job seekers and employers.",
//     keyDecisions: [
//       "Used NX monorepo to house the main platform and the admin dashboard; this let the two apps share component libraries and API types without publishing a private package.",
//       "Chose Tiptap Rich Editor for the profile bio field because it gave us a clean JSON output format that was easier to store and render than raw HTML from Quill.",
//       "Cloudflare integration was added for video delivery, storing video on Cloudflare R2 and streaming via Cloudflare Stream kept costs low compared to S3 + CloudFront for a startup budget."
//     ],
//     challenges: [
//       {
//         challenge: "The paywall needed to work at multiple levels: profile access (per-employer pay-per-view) and job ad posting (subscription tier). These were two different payment flows.",
//         solution: "Built a unified payment context that accepted a 'payment type' prop, routing to different Paystack configurations while sharing the same UI components and success/error handling.",
//       },
//       {
//         challenge: "Admin approval of video CVs had to happen before they were visible to employers, requiring a pending/approved/rejected state machine.",
//         solution: "Modelled this as a status field on the profile document and built an admin queue view using TanStack React Table with column filters by status.",
//       },
//       {
//         challenge: "There was no design to follow — no Figma file, no wireframes, no mockups. Every screen was designed from scratch as I built it, which meant making UX decisions in real time without a reference point.",
//         solution: "Developed a personal design-as-you-build workflow: sketching rough layouts on paper before touching code, using MUI's component library as a constraint to avoid decision fatigue on low-level UI, and iterating on live previews rather than static mocks. This forced me to think like a product designer, not just an implementer.",
//       },
//     ],
//     outcome: "Shipped a working dual-surface platform with real monetisation. The NX setup in particular was a new skill that opened up how I think about multi-app projects.",
//     whatILearned: "Designing payment flows is mostly UX work, not API work. Most of the complexity is in what happens after payment fails, not after it succeeds.",
//     images: ["/img/Playcv.png", "/img/Playcv1.png", "/img/Playcv2.png", "/img/Playcv3.png"],
//     demoUrl: "",
//     codeUrl: "",
//     caseStudyUrl: "/case-study/playcv",
//     stack: ["Typescript", 'Axios', "MUI", 'Paystack API', 'Tiptap Rich Editor', 'Cloudflare Integration', "API Integration", "NX", 'Yarn', 'Zod'],
//     featured: false,
//   },
//   {
//     id: "hivehub",
//     title: "Hivehub",
//     tagline: "An open publishing platform where thoughtful writing finds its audience.",
//     description:
//       "A Medium-inspired writing platform with a rich editing experience, user feeds, follow system, and content discovery; built with a focus on reading and writing comfort.",
//     role: "Frontend Developer",
//     problem: "Medium's paywalled model increasingly buries free content. Hivehub was built as an alternative — a platform where writers publish openly and readers discover through genuine curation, not algorithms optimised for engagement.",
//     keyDecisions: [
//       "Chose Tiptap over Quill for the editor because Tiptap's extension API let us build a custom slash-command menu for inserting code blocks, images, and dividers — the kind of writing tools technical writers actually need.",
//       "Used Firebase Realtime Database (not Firestore) for the feed and follow counts, these are high-read, low-write operations where real-time sync added genuine UX value (follow counts update live).",
//       "Used Framer Motion for page transitions and article reveal animations — the reading experience needed to feel deliberate, not snappy.",
//     ],
//     challenges: [
//       {
//         challenge: "Tiptap's default output is a JSON document tree, but displaying it required a custom renderer that respected the styling conventions of the platform.",
//         solution: "Built a recursive `TiptapRenderer` component that walked the JSON node tree and mapped each node type to a styled React component.",
//       },
//       {
//         challenge: "The feed needed to show posts from followed users only, which Firestore's query model doesn't support natively (no JOIN equivalent).",
//         solution: "Stored followed user IDs in an array and used Firestore's `in` operator with batched queries — limited to 10 per batch, merged and sorted client-side.",
//       },
//     ],
//     outcome: "Delivered a fully working publishing platform with rich editing, user feeds, and real-time interactions. The Tiptap renderer in particular became a reusable pattern I've used in later projects.",
//     whatILearned: "Firestore's query limitations force you to think carefully about your data model upfront. Denormalising early (storing author info on each post) saved me from painful migrations later.",
//     images: ['/img/Hivehub.png ', '/img/Hivehub1.png', '/img/Hivehub2.png', '/img/Hivehub3.png'],
//     demoUrl: "https://hive-hub.netlify.app/",
//     codeUrl: "https://github.com/Ade1fe/HiveHub",
//     caseStudyUrl: "/case-study/hivehub",
//     stack: ["Typescript", "Chakra UI", "Firebase", 'Tiptap Rich Editor', "Framer Motion", 'Vite'],
//     featured: false,
//   },
//   {
//     id: "memomaze",
//     title: "Memomaze",
//     tagline: "A minimalist note-taking app with real-time sync and a CI/CD pipeline.",
//     description:
//       "Google Keep-inspired note app with real-time syncing, label organisation, search, and a full GitHub Actions CI/CD pipeline — the project where I first implemented automated deployment.",
//     role: "Sole Developer",
//     problem: "Built as a deliberate learning project: I wanted to ship something with real-time sync, proper search, and an automated test-and-deploy pipeline skills I knew I needed but hadn't used in a production context.",
//     keyDecisions: [
//       "Used Firebase Realtime Database over Firestore for notes, sync latency was measurably lower and the simpler document model was appropriate for flat note objects.",
//       "Added GitHub Actions CI/CD from the start rather than retrofitting it; every push to main runs ESLint, builds the app, and deploys to Vercel. This forced me to write clean, lint-passing code throughout.",
//       "Chose Sonner for toast notifications over react-hot-toast because Sonner's API is promise-aware, `toast.promise(saveNote())` gives the user feedback during async operations without manual state management.",
//     ],
//     challenges: [
//       {
//         challenge: "Real-time sync created a race condition — if a user edited a note while offline and reconnected, their local version could be overwritten by the server version.",
//         solution: "Used Firebase's `serverTimestamp` and a last-write-wins strategy with a visual 'syncing...' indicator so users always knew the sync state.",
//       },
//     ],
//     outcome:
//       "Shipped with a working CI/CD pipeline that has caught real bugs before deployment. The project gets used as a personal note tool daily.",
//     whatILearned:
//       "CI/CD is not infrastructure work; it's a developer experience investment. The time spent setting up the pipeline pays back every time a linting error is caught before it hits production.",
//     images: ['/img/Memomaze.png', '/img/Memomaze1.png', '/img/Memomaze2.png', '/img/Memomaze3.png'],
//     demoUrl: 'https://memomaze.netlify.app/',
//     codeUrl: "https://github.com/TubiOb/memomaze",
//     caseStudyUrl: "/case-study/memomaze",
//     stack: ["React", "Yup", "Tailwind CSS", 'Sonner React Toast', 'Firebase', 'Github Actions', 'CI/CD'],
//     featured: false,
//   },
//   {
//     id: "learnest",
//     title: "LearnNest",
//     tagline: "A school management system with three separate portals and integrated fee payments.",
//     description:
//       "Comprehensive edtech platform with distinct portals for Admins (courses, lecturers, fees), Teachers (assignments, grading), and Students (submission, fee payment via Paystack, course registration).",
//     role: "Frontend Developer",
//     problem: "Manual academic processes, paper-based fee collection, grade sheets passed by hand, course registration via physical forms, create bottlenecks for schools trying to scale. LearnNest needed a platform that digitised every step while keeping each actor's surface area simple and separate.",
//     keyDecisions: [
//       "Used role-based routing with three completely separate layout trees — Admin, Teacher, Student each had their own layout component. This prevented accidental cross-role UI bleed and made the codebase easier to reason about.",
//       "TanStack React Table was chosen for grade sheets and enrollment lists — these tables needed sorting, filtering, and pagination against large datasets, which basic HTML tables couldn't handle.",
//       "Paystack was used for fee payments with a webhook-driven status update — we didn't trust client-side payment confirmation, so fee status only changed on successful webhook receipt.",
//     ],
//     challenges: [
//       {
//         challenge: "Students needed to see their payment status in real time after completing a Paystack transaction, but webhooks are asynchronous.",
//         solution: "Implemented a polling mechanism — after Paystack redirect, the client polled the fee status endpoint every 2 seconds for up to 30 seconds, showing a 'confirming payment' state in the UI.",
//       },
//     ],
//     outcome: "Delivered a working three-portal system with live fee processing. The role separation pattern from this project became a template I've reused in subsequent multi-actor products.",
//     whatILearned: "Multi-role products need to be designed role-first, not feature-first. Every time I added a feature without thinking 'which role sees this?', I created confusion I had to untangle later.",
//     images: ['/img/LearnNest.png', '/img/LearnNest1.png', '/img/LearnNest2.png', '/img/LearnNest3.png'],
//     // demoUrl: 'https://learn-nest.netlify.app/',
//     // codeUrl: "https://github.com/TubiOb/learnnest",
//     caseStudyUrl: "/case-study/learnest",
//     stack: ["React", "Firebase", "Tailwind CSS", 'Chakra UI', 'Paystack API', 'Tanstack React Table'],
//     featured: false,
//   },
//   {
//     id: "cloudequip",
//     title: "Cloud Equipment",
//     tagline: "A platform bridging investors and African healthcare facilities — enabling equipment financing that minimises upfront costs for clinics while generating sustainable returns for investors.",
//     description:
//       "A platform connecting investors with opportunities to fund cutting-edge medical equipment for African healthcare facilities. We enable high-ROI investments while improving patient care through flexible financing, maintenance, and operational support. Our model minimizes upfront costs for healthcare providers while ensuring sustainable returns for investors—bridging the gap between financial growth and impactful healthcare advancement.",
//     role: "Frontend Developer",
//     problem: "African healthcare facilities often can't afford critical medical equipment upfront, while impact investors lack a structured channel to deploy capital into healthcare infrastructure with transparent ROI. Cloud Equipment needed a platform that made both sides of this transaction legible and trustworthy.",
//     keyDecisions: [
//       "Kept the stack lean (React + Tailwind only) because the complexity was in the product concept and investor presentation, not the UI mechanics. Adding unnecessary libraries would have slowed delivery without adding user value.",
//       "The investor-facing hero section was designed with dark photography and high-contrast typography to communicate stability and credibility — the visual language of infrastructure investment, not consumer apps.",
//     ],
//     challenges: [
//       {
//         challenge: "The platform needed to communicate two very different value propositions on the same page — 'invest here for returns' and 'get equipment without upfront cost' — without confusing either audience.",
//         solution: "Built dual entry points from the hero — two CTAs with distinct copy, each routing to a separate onboarding flow. The hero imagery and headline spoke to investors (the higher-friction conversion), while the secondary CTA captured clinic interest.",
//       },
//     ],
//     outcome: "Delivered a polished investor-facing landing and platform UI. The dual-audience UX challenge shaped how I think about hero sections and CTA hierarchy.",
//     whatILearned: "When a product has two audiences, one of them is always primary. Trying to serve both equally on the same page usually serves neither. Committing to a primary audience for each section is a design decision, not a compromise.",
//     images: ['/img/Cloudequip1.png', '/img/Cloudequip2.png', '/img/Cloudequip3.png'],
//     demoUrl: '',
//     codeUrl: "",
//     caseStudyUrl: "/case-study/cloudequip",
//     stack: ["React", "Tailwind CSS"],
//     featured: false,
//   },
//   // {
//   //   id: "shopify",
//   //   title: "Shopify Merchant Onboarding Dashboard",
//   //   description: "Replica of the Shopify merchant onboarding dashboard.",
//   //   images: ['/img/Shopify1.png', '/img/Shopify2.png'],
//   //   demoUrl: 'https://shopify-by-tubiob.netlify.app/',
//   //   codeUrl: "https://github.com/TubiOb/Crushing-Tech-Hackhathon",
//   //   stack: ["HTML", "CSS", "Javascript"],
//   //   featured: false,
//   // },
// ]

// export const getFeaturedProjects = (): Project[] => {
//   return projects.filter((project) => project.featured)
// }

// export const getOtherProjects = (): Project[] => {
//   return projects.filter((project) => !project.featured)
// }
































// import { Playcv, Playcv1, Playcv2, Playcv3 } from "../../public/img"

export type ChallengeItem = {
  challenge: string
  solution: string
}

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  bullets: string[]
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
    bullets: [
      "Built role-based routing for 3 actor types (users, agents, companies) with isolated layouts and protected routes per role",
      "Integrated Flutterwave for live premium payments, including recurring-payment webhook handling",
      "Shipped a rich-text provider portal using Quill, enabling non-technical insurance staff to manage listings independently",
      "Used TanStack React Table for filterable, paginated policy comparison across multiple providers",
    ],
    role: "Frontend Developer",
    problem: "Insurance in Nigeria is opaque; pricing is inconsistent, comparison is nearly impossible, and most purchases still happen via phone calls or physical offices. Boiib needed a web platform that could surface multiple providers, let users compare policies meaningfully, and complete purchases without leaving the app.",
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
    id: "tudisallafrican",
    title: "Tudis All African",
    tagline: "An e-commerce platform bringing authentic African fashion to customers worldwide.",
    description: "A full WooCommerce store for Tudis All African, a boutique offering authentic African ready-to-wear fashion for women, men, and children. Covers product catalogue, payment integration, SEO, and responsive UI.",
    bullets: [
      "Delivered a full WooCommerce store from zero: product catalogue, payment, SEO, and a CMS the client runs independently",
      "Bulk-imported an entire product catalogue via structured CSV, cutting days of manual entry to hours",
      "Customised theme and navigation with targeted CSS without a premium page builder, staying within the client's budget",
      "Configured Yoast SEO and caching plugins to make the store discoverable and fast on slow connections",
    ],
    role: "Sole developer (freelance)",
    problem: "Tudis All African was selling exclusively in-person in San Antonio with no online presence. The founder needed a complete e-commerce platform that could showcase premium African textiles, handle product management at scale, and reach customers outside Texas without a large technical budget.",
    keyDecisions: [
      "Chose WordPress + WooCommerce over a custom build because the client needed to manage products, orders, and inventory herself after handoff. A no-code CMS was the right tool for that ownership model, not a React app she couldn't maintain.",
      "Selected a free theme and customised it heavily through the WordPress Customiser and custom CSS, rather than paying for a premium theme, keeping the project within the client's budget while still achieving a polished result.",
      "Used WooCommerce's built-in CSV bulk import tool for mass product upload rather than adding products one by one, saving days of manual data entry given the size of the catalogue.",
    ],
    challenges: [
      {
        challenge: "Customising the header navigation and footer to match the boutique's brand without access to premium page builder features or a paid theme's full option panel.",
        solution: "Used the WordPress theme Customiser combined with targeted custom CSS injected via the Additional CSS panel to override default styles. Slower than a drag-and-drop builder but free and effective.",
      },
      {
        challenge: "Getting up to speed with the WordPress ecosystem from scratch on a live client project: plugin selection, theme hierarchy, WooCommerce settings, and the difference between the block editor and classic editor.",
        solution: "Worked methodically through WordPress documentation and WooCommerce's official guides, staging changes locally before pushing to the live Namecheap-hosted site to avoid breaking anything for the client.",
      },
      {
        challenge: "Mass-uploading a large product catalogue with images, variants, pricing, and categories in a format WooCommerce could accept.",
        solution: "Prepared a properly structured CSV file matching WooCommerce's import template, tested with a small batch first, then imported the full catalogue in one operation, reducing what would have been days of work to a few hours.",
      },
      {
        challenge: "Selecting the right plugins for SEO, performance, and payment without bloating the site or introducing conflicts, a common WordPress pitfall.",
        solution: "Installed only what was essential: one SEO plugin, WooCommerce's native payment options, and a caching plugin. Avoided the temptation to add plugins for every small feature.",
      },
    ],
    outcome: "Delivered a fully functional e-commerce store live at tudisallafrican.com, with a complete product catalogue, payment processing, SEO configuration, and a CMS the client could manage independently. First paid freelance project delivered end-to-end.",
    whatILearned: "WordPress taught me that the right tool depends on who owns the product after you leave. A React app would have been more fun to build but would have left the client helpless. Choosing appropriate technology over impressive technology is sometimes the more professional call.",
    images: ["/img/Tudis.png", '/img/Tudis (1).png', '/img/Tudis (2).png', '/img/Tudis (3).png', '/img/Tudis (4).png'],
    demoUrl: "https://tudisallafrican.com",
    codeUrl: '',
    caseStudyUrl: "/case-study/tudisallafrican",
    stack: [ "WordPress", "WooCommerce", "Custom CSS", "Namecheap (hosting + domain)", "Yoast SEO", "E-commerce SEO", ],
    featured: false,
  },
  {
    id: "playcv",
    title: "PlayCV",
    tagline: "Helping Nigerian graduates get noticed by employers through video CVs.",
    description:
      "A tri-surface web app where professionals upload video CVs, employers browse and pay to access full profiles, and admins manage content, approvals, pricing, vacancies, and job ads. Each surface has its own dashboard.",
    bullets: [
      "Built three separate dashboards (job seeker, employer, admin) in an NX monorepo with shared component libraries across all three",
      "Implemented two Paystack payment flows (pay-per-view profile access + job ad subscription) behind a single unified payment context",
      "Designed the entire product UI from scratch with no Figma file: paper sketch to MUI constraint to live preview workflow",
      "Built an admin approval queue using TanStack React Table with status filters for pending, approved, and rejected video CVs",
    ],
    role: "Sole Frontend Developer",
    problem: "Nigeria's graduate job market is noisy: thousands of text CVs per role, most unread. PlayCV's hypothesis was that a short video CV would surface personality and communication skills that paper can't. The challenge was building a monetised, admin-controlled platform that worked for job seekers, employers, and administrators simultaneously.",
    keyDecisions: [
      "Used NX monorepo to house all three surfaces; this let them share component libraries and API types without publishing a private package.",
      "Chose Tiptap Rich Editor for the profile bio field because it gave a clean JSON output format that was easier to store and render than raw HTML from Quill.",
      "Added Cloudflare for video delivery: storing video on Cloudflare R2 and streaming via Cloudflare Stream kept costs low compared to S3 + CloudFront for a startup budget."
    ],
    challenges: [
      {
        challenge: "The paywall needed to work at multiple levels: profile access (per-employer pay-per-view) and job ad posting (subscription tier). These were two different payment flows.",
        solution: "Built a unified payment context that accepted a payment type prop, routing to different Paystack configurations while sharing the same UI components and success/error handling.",
      },
      {
        challenge: "Admin approval of video CVs had to happen before they were visible to employers, requiring a pending/approved/rejected state machine.",
        solution: "Modelled this as a status field on the profile document and built an admin queue view using TanStack React Table with column filters by status.",
      },
      {
        challenge: "There was no design to follow. No Figma file, no wireframes, no mockups. Every screen was designed from scratch as I built it, which meant making UX decisions in real time without a reference point.",
        solution: "Developed a design-as-you-build workflow: sketching rough layouts on paper before touching code, using MUI's component library as a constraint to avoid decision fatigue on low-level UI, and iterating on live previews rather than static mocks. This forced me to think like a product designer, not just an implementer.",
      },
    ],
    outcome: "Shipped a working tri-surface platform with real monetisation. The NX setup in particular was a new skill that opened up how I think about multi-app projects.",
    whatILearned: "Designing payment flows is mostly UX work, not API work. Most of the complexity is in what happens after payment fails, not after it succeeds.",
    images: ["/img/Playcv.png", "/img/Playcv1.png", "/img/Playcv2.png", "/img/Playcv3.png"],
    demoUrl: "",
    codeUrl: "",
    caseStudyUrl: "/case-study/playcv",
    stack: ["Typescript", 'Axios', "MUI", 'Paystack API', 'Tiptap Rich Editor', 'Cloudflare Integration', "API Integration", "NX", 'Yarn', 'Zod'],
    featured: false,
  },
  {
    id: "hivehub",
    title: "Hivehub",
    tagline: "An open publishing platform where thoughtful writing finds its audience.",
    description:
      "A Medium-inspired writing platform with a rich editing experience, user feeds, follow system, and content discovery; built with a focus on reading and writing comfort.",
    bullets: [
      "Built a Tiptap editor with a custom slash-command menu for inserting code blocks, images, and dividers",
      "Wrote a recursive TiptapRenderer component mapping Tiptap's JSON node tree to styled React components",
      "Implemented a personalised feed using Firestore batched 'in' queries across followed users, merged and sorted client-side",
      "Used Firebase Realtime Database for live follow counts with measurably lower latency than Firestore for high-read operations",
    ],
    role: "Frontend Developer",
    problem: "Medium's paywalled model increasingly buries free content. Hivehub was built as an alternative: a platform where writers publish openly and readers discover through genuine curation, not algorithms optimised for engagement.",
    keyDecisions: [
      "Chose Tiptap over Quill for the editor because Tiptap's extension API let us build a custom slash-command menu for inserting code blocks, images, and dividers, the kind of writing tools technical writers actually need.",
      "Used Firebase Realtime Database (not Firestore) for the feed and follow counts; these are high-read, low-write operations where real-time sync added genuine UX value.",
      "Used Framer Motion for page transitions and article reveal animations; the reading experience needed to feel deliberate, not snappy.",
    ],
    challenges: [
      {
        challenge: "Tiptap's default output is a JSON document tree, but displaying it required a custom renderer that respected the styling conventions of the platform.",
        solution: "Built a recursive TiptapRenderer component that walked the JSON node tree and mapped each node type to a styled React component.",
      },
      {
        challenge: "The feed needed to show posts from followed users only, which Firestore's query model doesn't support natively (no JOIN equivalent).",
        solution: "Stored followed user IDs in an array and used Firestore's 'in' operator with batched queries, limited to 10 per batch, merged and sorted client-side.",
      },
    ],
    outcome: "Delivered a fully working publishing platform with rich editing, user feeds, and real-time interactions. The Tiptap renderer in particular became a reusable pattern used in later projects.",
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
      "Google Keep-inspired note app with real-time syncing, label organisation, search, and a full GitHub Actions CI/CD pipeline, the project where I first implemented automated deployment.",
    bullets: [
      "Set up a GitHub Actions pipeline that lints, builds, and deploys to Vercel on every push to main",
      "Implemented Firebase Realtime Database sync with last-write-wins conflict resolution and a live syncing indicator",
      "Used Sonner's promise-aware toast API (toast.promise) to give real-time feedback on async save and delete operations",
      "Built label organisation and full-text search against live Firebase data without a search service",
    ],
    role: "Sole Developer",
    problem: "Built as a deliberate learning project: I wanted to ship something with real-time sync, proper search, and an automated test-and-deploy pipeline, skills I knew I needed but hadn't used in a production context.",
    keyDecisions: [
      "Used Firebase Realtime Database over Firestore for notes; sync latency was measurably lower and the simpler document model was appropriate for flat note objects.",
      "Added GitHub Actions CI/CD from the start rather than retrofitting it; every push to main runs ESLint, builds the app, and deploys to Vercel. This forced me to write clean, lint-passing code throughout.",
      "Chose Sonner for toast notifications over react-hot-toast because Sonner's API is promise-aware; toast.promise(saveNote()) gives the user feedback during async operations without manual state management.",
    ],
    challenges: [
      {
        challenge: "Real-time sync created a race condition: if a user edited a note while offline and reconnected, their local version could be overwritten by the server version.",
        solution: "Used Firebase's serverTimestamp and a last-write-wins strategy with a visual syncing indicator so users always knew the sync state.",
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
    bullets: [
      "Built 3 completely isolated role layouts (Admin, Teacher, Student) sharing a single codebase without cross-role UI bleed",
      "Integrated Paystack with webhook-driven fee confirmation: client-side payment completion triggers a polling loop, not a trust-the-redirect pattern",
      "Used TanStack React Table for grade sheets and enrollment lists with sorting, filtering, and pagination on large datasets",
      "Digitised course registration, assignment submission, and grading, replacing paper-based processes end-to-end",
    ],
    role: "Frontend Developer",
    problem: "Manual academic processes, paper-based fee collection, grade sheets passed by hand, and course registration via physical forms create bottlenecks for schools trying to scale. LearnNest needed a platform that digitised every step while keeping each actor's surface area simple and separate.",
    keyDecisions: [
      "Used role-based routing with three completely separate layout trees. Admin, Teacher, and Student each had their own layout component, which prevented accidental cross-role UI bleed and made the codebase easier to reason about.",
      "TanStack React Table was chosen for grade sheets and enrollment lists; these tables needed sorting, filtering, and pagination against large datasets, which basic HTML tables couldn't handle.",
      "Paystack was used for fee payments with a webhook-driven status update. We didn't trust client-side payment confirmation, so fee status only changed on successful webhook receipt.",
    ],
    challenges: [
      {
        challenge: "Students needed to see their payment status in real time after completing a Paystack transaction, but webhooks are asynchronous.",
        solution: "Implemented a polling mechanism: after Paystack redirect, the client polled the fee status endpoint every 2 seconds for up to 30 seconds, showing a confirming payment state in the UI.",
      },
    ],
    outcome: "Delivered a working three-portal system with live fee processing. The role separation pattern from this project became a template reused in subsequent multi-actor products.",
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
    tagline: "A platform bridging investors and African healthcare facilities, enabling equipment financing that minimises upfront costs for clinics while generating sustainable returns for investors.",
    description:
      "A platform connecting investors with opportunities to fund cutting-edge medical equipment for African healthcare facilities. Flexible financing, maintenance, and operational support; minimising upfront costs for healthcare providers while ensuring sustainable returns for investors.",
    bullets: [
      "Designed and built a dual-audience landing page serving two distinct CTAs (investor onboarding + clinic interest) from a single hero",
      "Used dark photography and high-contrast typography to communicate infrastructure investment credibility, not consumer-app aesthetics",
      "Kept the stack to React + Tailwind only; complexity was in the product concept, not the UI mechanics",
      "Solved the two-audience UX problem by committing each hero section to a primary audience rather than trying to serve both simultaneously",
    ],
    role: "Frontend Developer",
    problem: "African healthcare facilities often can't afford critical medical equipment upfront, while impact investors lack a structured channel to deploy capital into healthcare infrastructure with transparent ROI. Cloud Equipment needed a platform that made both sides of this transaction legible and trustworthy.",
    keyDecisions: [
      "Kept the stack lean (React + Tailwind only) because the complexity was in the product concept and investor presentation, not the UI mechanics. Adding unnecessary libraries would have slowed delivery without adding user value.",
      "The investor-facing hero section was designed with dark photography and high-contrast typography to communicate stability and credibility: the visual language of infrastructure investment, not consumer apps.",
    ],
    challenges: [
      {
        challenge: "The platform needed to communicate two very different value propositions on the same page: invest here for returns, and get equipment without upfront cost, without confusing either audience.",
        solution: "Built dual entry points from the hero, two CTAs with distinct copy, each routing to a separate onboarding flow. The hero imagery and headline spoke to investors (the higher-friction conversion), while the secondary CTA captured clinic interest.",
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
  {
    id: "allverter",
    title: "Allverter Finance",
    tagline: "A fintech platform built for African civil servants, combining loan access with BVN/NIN identity verification and IPPIS payroll integration.",
    description:
      "A marketing and product platform for Allverter Finance, a civil servant-focused lending product. Covers the loan application flow, eligibility criteria, Business API documentation, and an About page. Built as a static site with full responsiveness and a component-driven architecture.",
    bullets: [
      "Built the full product marketing site including the loan application flow, eligibility section, and Business API page",
      "Implemented identity verification UI covering BVN and NIN integration with an IPPIS payroll connection flow",
      "Used Embla Carousel for the product screenshot carousel with autoplay, matching the fintech product feel",
      "Built with Tailwind CSS, Shadcn/ui (Radix primitives), and React Router on a Vite + React stack",
    ],
    role: "Frontend Developer",
    problem: "African civil servants face significant barriers to credit access: traditional banks require extensive documentation, and most digital lenders don't integrate with government payroll systems. Allverter needed a platform that communicated its IPPIS-backed loan product clearly to a non-technical audience while also presenting a credible Business API offering to institutional partners.",
    keyDecisions: [
      "Used Tailwind CSS v4 with shadcn/ui Radix primitives rather than a heavier component library; this gave precise control over the fintech visual language (dark hero, purple accent, card-based feature grid) without fighting a pre-styled system.",
      "Chose Embla Carousel over a heavier library for the product screenshot section; lightweight, accessible, and the autoplay plugin gave the polished feel the product section needed without bundle overhead.",
      "React Router v7 was used for routing rather than a full Next.js setup; this is a static marketing site and the overhead of a server framework wasn't justified.",
    ],
    challenges: [
      {
        challenge: "The hero needed to communicate a government-grade product (secure, credible, official) while also feeling modern and accessible enough for civil servants who may not be digitally sophisticated.",
        solution: "Used a dark navy gradient hero with large, plain-language headline copy and a floating product screenshot to anchor the product visually. Avoided jargon in the hero text while keeping the colour palette and typography formal.",
      },
      {
        challenge: "The 'Why Choose Allverter' section had to serve two different reader types on the same page: individual civil servants (who care about loan terms and approval speed) and institutional partners (who care about API reliability and security).",
        solution: "Organised the feature cards in a 3+2 asymmetric grid with icons that visually separated infrastructure features (API, security, IPPIS) from user-facing benefits (approval speed, repayment terms). Each card led with the feature name, not a marketing claim.",
      },
    ],
    outcome: "Delivered a complete, responsive marketing site covering all product surfaces: landing, loan products, Business API, and About. The IPPIS integration section in particular required understanding the government payroll system well enough to explain it clearly to a non-technical audience.",
    whatILearned: "Static sites still require real product thinking. Deciding what goes in the hero, how to sequence the feature grid, and which audience each section serves is the same work as building an interactive product; it just happens in JSX and copy instead of in state and API calls.",
    images: ['/img/Allverter.png', '/img/Allverter1.png', '/img/Allverter2.png', '/img/Allverter3.png', '/img/Allverter4.png'],
    demoUrl: "",
    codeUrl: "",
    caseStudyUrl: "/case-study/allverter",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/ui', 'Lucide React'],
    featured: false,
  },
  // {
  //   id: "shopify",
  //   title: "Shopify Merchant Onboarding Dashboard",
  //   description: "Replica of the Shopify merchant onboarding dashboard.",
  //   bullets: [],
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