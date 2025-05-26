// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Timeline } from "./../Timeline"
// import { LearningNow } from "./../LearningNow"

// export const About: React.FC = () => {
//   return (
//     <section id="About" className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <h2 className="text-3xl font-bold mb-2">About Me</h2>
//           <span className="text-secondary">Introducing Me</span>
//         </motion.div>
//         <div className="mt-8 grid gap-8 md:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <p className="mb-4">
//               My name is <span className="text-secondary font-semibold">Obaloluwa Tubi</span>. I am a passionate
//               front-end developer with 3+ years of experience, I am confident in my ability to contribute to teams and
//               projects.
//             </p>
//             <p className="mb-4">
//               I'm a team player with excellent communication skills, I work collaboratively with designers, developers,
//               and clients to ensure that projects are delivered on time. I am eager to learn new skills that'll make me
//               a valuable asset to any team.
//             </p>
//             <p>
//               I am confident that I can use these skills to create engaging and interactive web applications that meet
//               the needs of clients and users.
//             </p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md">
//                 <p className="text-sm text-[var(--title-color)]">YEARS OF EXPERIENCE</p>
//                 <h3 className="text-2xl font-bold">03+</h3>
//               </div>
//               <div className="bg-[var(--card-color)] p-4 rounded-lg shadow-md">
//                 <p className="text-sm text-[var(--title-color)]">COMPLETED PROJECTS</p>
//                 <h3 className="text-2xl font-bold">10+</h3>
//               </div>
//             </div>
//             <Button asChild className="w-full text-lg">
//               <a href="/cv/Obaloluwa Tubi Resume.pdf" download target="_blank" rel="noreferrer">
//                 Download CV
//               </a>
//             </Button>
//           </motion.div>
//         </div>
//         <Timeline />
//         <LearningNow />
//       </div>
//     </section>
//   )
// }























"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Timeline } from "./../Timeline"
import { LearningNow } from "./../LearningNow"

export const About: React.FC = () => {
  // Create refs for elements we want to animate
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const learningRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    gsap.set([headingRef.current?.children, leftColumnRef.current, rightColumnRef.current], {
      opacity: 0,
    })

    // Create a main timeline for initial animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Heading animation
    if (headingRef.current) {
      tl.fromTo(headingRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 })
    }

    // Text columns animation with a slight stagger and different directions
    if (leftColumnRef.current && rightColumnRef.current) {
      tl.fromTo(leftColumnRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4").fromTo(
        rightColumnRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.6",
      )
    }

    // Stats cards animation with a bounce effect
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll(".stat-card")
      tl.fromTo(
        cards,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)", // Add a slight bounce
        },
        "-=0.4",
      )
    }

    // Button animation with a slight pulse
    if (buttonRef.current) {
      tl.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2").to(
        buttonRef.current,
        {
          scale: 1.05,
          duration: 0.3,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        },
      )
    }

    // Create scroll animations for Timeline and LearningNow components
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play reverse play reset",
          },
        },
      )
    }

    if (learningRef.current) {
      gsap.fromTo(
        learningRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: learningRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play pause",
          },
        },
      )
    }

    // Text highlight animation for the "About Me" section
    if (leftColumnRef.current) {
      const highlights = leftColumnRef.current.querySelectorAll(".text-secondary")
      gsap.fromTo(
        highlights,
        { color: "var(--text-color)", fontWeight: "normal" },
        {
          color: "var(--secondary)",
          fontWeight: "semibold",
          duration: 1,
          delay: 1.5,
          ease: "power2.inOut",
        },
      )
    }

    // Parallax effect for the entire section
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        backgroundPositionY: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    // Cleanup function
    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="About" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <span className="text-secondary">Introducing Me</span>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div ref={leftColumnRef}>
            <p className="mb-4">
              My name is <span >Obaloluwa Tubi</span>. I am a passionate
              front-end developer with 3+ years of experience, I am confident in my ability to contribute to teams and
              projects.
            </p>
            <p className="mb-4">
              I am a team player with excellent communication skills, I work collaboratively with designers, developers,
              and clients to ensure that projects are delivered on time. I am eager to learn new skills that will make me
              a valuable asset to any team.
            </p>
            <p>
              I am confident that I can use these skills to create engaging and interactive web applications that meet
              the needs of clients and users.
            </p>
          </div>
          <div ref={rightColumnRef}>
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mb-6">
              <div className="stat-card bg-[var(--card-color)] p-4 rounded-lg shadow-md">
                <p className="text-sm text-[var(--title-color)]">YEARS OF EXPERIENCE</p>
                <h3 className="text-2xl font-bold">03+</h3>
              </div>
              <div className="stat-card bg-[var(--card-color)] p-4 rounded-lg shadow-md">
                <p className="text-sm text-[var(--title-color)]">COMPLETED PROJECTS</p>
                <h3 className="text-2xl font-bold">10+</h3>
              </div>
            </div>
            <div ref={buttonRef}>
              <Button asChild className="w-full text-lg">
                <a href="/cv/Obaloluwa Tubi Resume.pdf" download target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div ref={timelineRef}>
          <Timeline />
        </div>
        <div ref={learningRef}>
          <LearningNow />
        </div>
      </div>
    </section>
  )
}