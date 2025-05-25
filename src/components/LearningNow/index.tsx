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
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type LearningItem = {
  title: string
  color: string
}

const learningItems: LearningItem[] = [
  {
    title: "Next.js App Router & Server Components",
    color: "#000000", // Next.js black
  },
  {
    title: "GSAP Advanced Animations & ScrollTrigger",
    color: "#88CE02", // GSAP green
  },
  {
    title: "TypeScript Advanced Patterns & Design Systems",
    color: "#3178C6", // TypeScript blue
  },
  {
    title: "GitHub Actions & CI/CD Pipeline Automation",
    color: "#2088FF", // GitHub Actions blue
  },
]

export const LearningNow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    // Reset the itemsRef array to match the current number of items
    itemsRef.current = itemsRef.current.slice(0, learningItems.length)

    if (sectionRef.current && titleRef.current) {
      // Animate the section title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate each learning item
      itemsRef.current.forEach((item, index) => {
        if (!item) return

        // Animate the item container
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="mt-16">
      <h3 ref={titleRef} className="text-xl font-bold mb-8">
        Currently Learning
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {learningItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => { if (el) { itemsRef.current[index] = el } }}
            className="bg-[var(--bg-color)] p-4 rounded-lg shadow-md border-l-4"
            style={{ borderLeftColor: item.color }}
          >
            <h4 className="font-medium text-[var(--text-color)]">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}