// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import { BookOpen } from "lucide-react"

// const learningItems = [
//   "Advanced TypeScript Patterns",
//   "GSAP",
//   "Serverless Architecture with AWS Lambda",
//   "Web Accessibility (WCAG) Guidelines",
// ]

// export const LearningNow: React.FC = () => {
//   return (
//     <div className="py-12 mt-8">
//       <h2 className="text-2xl font-bold text-center mb-8">What I'm Learning Now</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {learningItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
//           >
//             <BookOpen className="text-secondary h-6 w-6 flex-shrink-0" />
//             <span>{item}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }















"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

type LearningItem = {
  title: string
  why: string
  color: string
}

const learningItems: LearningItem[] = [
  {
    title: "Next.js App Router & Server Components",
    why: "Bartr meeds server-side rendering for SEO and faster load times on low-bandwidth connections.",
    color: "#000000", // Next.js black
  },
  {
    title: "GSAP Advanced Animations & ScrollTrigger",
    why: "Adding meaningful motion to UI without sacrificing performance; especially on mobile devices.",
    color: "#88CE02", // GSAP green
  },
  {
    title: "TypeScript Advanced Patterns & Design Systems",
    why: "Designing type=safe APIs across complex multi-role systems like Bartr's trade lifecycle",
    color: "#3178C6", // TypeScript blue
  },
  {
    title: "GitHub Actions & CI/CD Pipeline Automation",
    why: "Already using this in Memomaze; pushing further to automate and deploy pipelines.",
    color: "#2088FF", // GitHub Actions blue
  },
]


let gsapPromise: Promise<typeof gsap> | null = null
 
const getGSAP = () => {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      mod.default.registerPlugin(ScrollTrigger)
      return mod.default
    })
  }
  return gsapPromise
}


export const LearningNow: React.FC = () => {
  // const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  // useEffect(() => {
  //   setIsClient(true);
  // }, [])

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }

        itemsRef.current.forEach((item, index) => {
          if (!item) return

          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              dela: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none reverse",
              }
            }
          )
        })
      }, sectionRef)
    })

    return () => {
      ctx?.revert();
    }
  }, [])

  // useEffect(() => {
  //   if (!isClient) return

  //   const initAnimation = async () => {
  //     const gsapModule = await import("gsap")
  //     const { ScrollTrigger } = await import("gsap/ScrollTrigger")
  //     const gsap = gsapModule.default
      
  //     gsap.registerPlugin(ScrollTrigger)
  
  //     // Reset the itemsRef array to match the current number of items
  //     itemsRef.current = itemsRef.current.slice(0, learningItems.length)
  
  //     if (sectionRef.current && titleRef.current) {
  //       // Animate the section title
  //       gsap.fromTo(
  //         titleRef.current,
  //         { opacity: 0, y: 30 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           scrollTrigger: {
  //             trigger: sectionRef.current,
  //             start: "top 80%",
  //             toggleActions: "play none none reverse",
  //           },
  //         },
  //       )
  
  //       // Animate each learning item
  //       itemsRef.current.forEach((item, index) => {
  //         if (!item) return
  
  //         // Animate the item container
  //         gsap.fromTo(
  //           item,
  //           { opacity: 0, y: 30 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 0.6,
  //             delay: 0.2 + index * 0.15,
  //             ease: "power2.out",
  //             scrollTrigger: {
  //               trigger: sectionRef.current,
  //               start: "top 80%",
  //               toggleActions: "play none none reverse",
  //             },
  //           },
  //         )
  //       })
  //     }
  //   }

  //   initAnimation();

  //   return () => {
  //     import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  //     })
  //   }
  // }, [isClient])

  
  return (
    <div ref={sectionRef} className="mt-16" suppressHydrationWarning>
      <h3 ref={titleRef} className="text-xl font-bold mb-8">
        Currently Learning
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {learningItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemsRef.current[index] = el }}
            className="bg-[var(--bg-color)] p-4 rounded-lg shadow-md border-l-4"
            style={{ borderLeftColor: item.color }}
          >
            <h4 className="font-medium text-[var(--text-color)] mb-1">{item.title}</h4>
            <p className="text-sm text-[var(--title-color)] leading-relaxed">
              {item.why}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}