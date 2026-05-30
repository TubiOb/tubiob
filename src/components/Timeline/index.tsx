"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const timelineEvents = [
  {
    date: "2021",
    title: "Started Learning Web Development",
    description: "Started with HTML, CSS and JavaScript, building static pages and slowly understanding how the web actually works.",
  },
  {
    date: "2023",
    title: "First Freelance Project",
    description: "Completed my first paid project: a website for a local business. First time shipping something real to a real client.",
  },
  {
    date: "2023",
    title: "Moved to React",
    description: "Picked up React after realizing vanilla JS couldn't handle the state-heavy, multi-role apps I wanted to build. Things started clicking.",
  },
  {
    date: "2024",
    title: "Typescript & Professional Readiness",
    description: "Adopted Typescript across all projects after hitting too many runtime bugs. Started building with production habits: typed APIs, structured state, CI/CD",
  },
  {
    date: "2025",
    title: "Building Bartr",
    description: "Co-building Bartr, a marketplace for African users; handling the full Next.js web side: auth, trade lifecycle, search, image upload, and more.",
  }
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


export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          const fromX = index % 2 === 0 ? -40 : 40;

          gsap.fromTo(
            card,
            { opacity: 0, x: fromX, y: 20 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                // end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      }, containerRef)
    })

    return () => {
      ctx?.revert();
    }
  }, [])


  return (
    // <div className="relative wrap overflow-hidden p-10 h-full mt-16">
    //   <div
    //     className="border-2-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border"
    //     style={{ left: "50%" }}
    //   ></div>
    //   {timelineEvents.map((event, index) => (
    //     <motion.div
    //       className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
    //       key={index}
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5, delay: index * 0.1 }}
    //     >
    //       <div className="order-1 w-5/12"></div>
    //       <div className="z-20 flex items-center order-1 bg-[var(--bg-color)] shadow-sm shadow-[var(--card-color)] w-14 h-14 rounded-full">
    //         <h1 className="mx-auto font-semibold text-lg text-[var(--muted-foreground)]">{event.date}</h1>
    //       </div>
    //       <div className="order-1 bg-[var(--card-color)] shadow-xl w-5/12 px-6 py-4 rounded-md">
    //         <h3 className="mb-3 font-bold text-[var(--text-color)] text-xl">{event.title}</h3>
    //         <p className="text-sm leading-snug tracking-wide text-[var(--title-color)]">
    //           {event.description}
    //         </p>
    //       </div>
    //     </motion.div>
    //   ))}
    // </div>




    <div ref={containerRef} className="mt-16">
      <h3 className="text-xl font-semibold mb-8 text-center md:text-left">My Journey</h3>

      {/* Mobile Timeline (sm and below) */}
      <div className="block md:hidden">
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative flex items-start mb-8 pl-16"
              ref={(el) => { cardRefs.current[index] = el }}
              // initial={{ opacity: 0, x: -20 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Date circle for mobile */}
              <div className="absolute left-3 w-6 h-6 bg-[var(--bg-color)] border-2 border-[var(--card-color)] rounded-full flex items-center justify-center -translate-x-1/2">
                <div className="w-2 h-2 bg-[var(--card-color)] rounded-full"></div>
              </div>

              {/* Content card for mobile */}
              <div className="bg-[var(--card-color)] shadow-lg rounded-lg p-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-bold text-[var(--text-color)] text-lg mb-1 sm:mb-0">{event.title}</h3>
                  <span className="text-sm font-semibold text-[var(--muted-foreground)] bg-[var(--bg-color)] px-2 py-1 rounded-full self-start sm:self-auto">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--title-color)]">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Timeline (md and above) */}
      <div className="hidden md:block relative overflow-hidden p-10 h-full">
        {/* Center line for desktop */}
        <div className="absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full border" style={{ left: "50%" }} ></div>

        {timelineEvents.map((event, index) => (
          <div
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            key={index}
            ref={(el) => { cardRefs.current[index] = el }}
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="order-1 w-5/12"></div>

            {/* Date circle for desktop */}
            <div className="z-20 flex items-center order-1 bg-[var(--bg-color)] shadow-sm shadow-[var(--card-color)] w-14 h-14 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-[var(--muted-foreground)]">{event.date}</h1>
            </div>

            {/* Content card for desktop */}
            <div className="order-1 bg-[var(--card-color)] shadow-xl w-5/12 px-6 py-4 rounded-md">
              <h3 className="mb-3 font-bold text-[var(--text-color)] text-xl">{event.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-[var(--title-color)]">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}