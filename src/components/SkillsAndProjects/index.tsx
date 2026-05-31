"use client"

import React from "react"
import { useRef, useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveSkills } from "./../InteractiveSkills"
import { OtherProject } from "../OtherProject"

let gsapPromise: Promise<typeof gsap> | null = null;

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

export const SkillsAndProjects: React.FC = () => {
  // const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  // const leftColumnRef = useRef<HTMLDivElement>(null)
  // const rightColumnRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  // const buttonRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])


  useEffect(() => {
    let ctx: gsap.Context | null = null;
  
    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        if (headingRef.current) {
          gsap.set(headingRef.current.children, { opacity: 0, y: 30 })
        }

        if (tabsRef.current) {
          gsap.set(tabsRef.current, { opacity: 0, y: 20 })
        }
  
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
  
        // Heading animation
        if (headingRef.current) {
          tl.fromTo(
            headingRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
          )
        }
    
        // Text columns animation with a slight stagger and different directions
        // if (leftColumnRef.current && rightColumnRef.current) {
        //   tl.fromTo(
        //     leftColumnRef.current,
        //     { opacity: 0, x: -50 },
        //     { opacity: 1, x: 0, duration: 0.8 },
        //     "-=0.4"
        //   ).fromTo(
        //     rightColumnRef.current,
        //     { opacity: 0, x: 50 },
        //     { opacity: 1, x: 0, duration: 0.8 },
        //     "-=0.6"
        //   )
        // }
    
        // Stats cards animation with a bounce effect
        // if (tabsRef.current) {
        //   const cards = tabsRef.current.querySelectorAll(".stat-card")
        //   tl.fromTo(
        //     cards,
        //     { opacity: 0, y: 30, scale: 0.9 },
        //     {
        //       opacity: 1,
        //       y: 0,
        //       scale: 1,
        //       duration: 0.6,
        //       stagger: 0.2,
        //       ease: "back.out(1.7)", // Add a slight bounce
        //     },
        //     "-=0.4",
        //   )
        // }


        if (tabsRef.current) {
          tl.fromTo(
            tabsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.4"
          )
        }

    
        // Button animation with a slight pulse
        // if (buttonRef.current) {
        //   tl.fromTo(
        //     buttonRef.current,
        //     { opacity: 0, y: 20 },
        //     { opacity: 1, y: 0, duration: 0.5 },
        //     "-=0.2"
        //   ).to(
        //     buttonRef.current,
        //     {
        //       scale: 1.05,
        //       duration: 0.3,
        //       repeat: 1,
        //       yoyo: true,
        //       ease: "power1.inOut",
        //     },
        //   )
        // }
    
        // Text highlight animation for the "About Me" section
        // if (leftColumnRef.current) {
        //   const highlights = leftColumnRef.current.querySelectorAll(".text-secondary")
        //   gsap.fromTo(
        //     highlights,
        //     { color: "var(--text-color)", fontWeight: "normal" },
        //     {
        //       color: "var(--secondary)",
        //       fontWeight: "semibold",
        //       duration: 1,
        //       delay: 1.5,
        //       ease: "power2.inOut",
        //     },
        //   )
        // }
    
        // Parallax effect for the entire section
        if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            backgroundPositionY: "10%",
            ease: "none",
            scrollTrigger: {
              // endTrigger: sectionRef.current,
              trigger: sectionRef.current,
              start: "top 25%",
              end: "bottom 90%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          })
        }
      }, sectionRef)
    })

    return () => {
      ctx?.revert();
    }
  })


  // useEffect(() => {
  //   // Register ScrollTrigger plugin
  //   if (!isClient) return

  //   const initAnimation = async () => {
  //     const gsapModule = await import("gsap")
  //     const { ScrollTrigger } = await import("gsap/ScrollTrigger")
  //     const gsap = gsapModule.default

  //     gsap.registerPlugin(ScrollTrigger)
  
  //     gsap.set([headingRef.current?.children, leftColumnRef.current, rightColumnRef.current], {
  //       opacity: 0,
  //     })
  
  //     // Create a main timeline for initial animations
  //     const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
  
  //     // Heading animation
  //     if (headingRef.current) {
  //       tl.fromTo(headingRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 })
  //     }
  
  //     // Text columns animation with a slight stagger and different directions
  //     if (leftColumnRef.current && rightColumnRef.current) {
  //       tl.fromTo(leftColumnRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4").fromTo(
  //         rightColumnRef.current,
  //         { opacity: 0, x: 50 },
  //         { opacity: 1, x: 0, duration: 0.8 },
  //         "-=0.6",
  //       )
  //     }
  
  //     // Stats cards animation with a bounce effect
  //     if (tabsRef.current) {
  //       const cards = tabsRef.current.querySelectorAll(".stat-card")
  //       tl.fromTo(
  //         cards,
  //         { opacity: 0, y: 30, scale: 0.9 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           duration: 0.6,
  //           stagger: 0.2,
  //           ease: "back.out(1.7)", // Add a slight bounce
  //         },
  //         "-=0.4",
  //       )
  //     }
  
  //     // Button animation with a slight pulse
  //     if (buttonRef.current) {
  //       tl.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2").to(
  //         buttonRef.current,
  //         {
  //           scale: 1.05,
  //           duration: 0.3,
  //           repeat: 1,
  //           yoyo: true,
  //           ease: "power1.inOut",
  //         },
  //       )
  //     }
  
  //     // Text highlight animation for the "About Me" section
  //     if (leftColumnRef.current) {
  //       const highlights = leftColumnRef.current.querySelectorAll(".text-secondary")
  //       gsap.fromTo(
  //         highlights,
  //         { color: "var(--text-color)", fontWeight: "normal" },
  //         {
  //           color: "var(--secondary)",
  //           fontWeight: "semibold",
  //           duration: 1,
  //           delay: 1.5,
  //           ease: "power2.inOut",
  //         },
  //       )
  //     }
  
  //     // Parallax effect for the entire section
  //     if (sectionRef.current) {
  //       gsap.to(sectionRef.current, {
  //         backgroundPositionY: "10%",
  //         ease: "none",
  //         scrollTrigger: {
  //           // trigger: sectionRef.current,
  //           // start: "top bottom",
  //           // end: "bottom 40%",
  //           // scrub: true,
  //           trigger: sectionRef.current,
  //           start: "top 25%",
  //           endTrigger: leftColumnRef.current,
  //           end: "bottom 90%",
  //           scrub: true,
  //           toggleActions: "play reverse play reverse",
  //         },
  //       })
  //     }
  //   }

  //   initAnimation();

  //   // Cleanup function
  //   return () => {
  //     import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
  //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  //     })
  //   }
  // }, [isClient])


  return (
    <section ref={sectionRef} id="Skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <h2 className="text-2xl font-semibold mb-8">Skills and Projects</h2>
        </div>
        <div ref={tabsRef}>
          <Tabs defaultValue="projects">
            <TabsList className="mb-8 gap-4">
              <TabsTrigger className='text-lg' value="projects">Projects</TabsTrigger>
              <TabsTrigger className='text-lg' value="skills">Professional Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <OtherProject />
            </TabsContent>
            <TabsContent value="skills">
              <InteractiveSkills />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}