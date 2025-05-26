"use client"

import React from "react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveSkills } from "./../InteractiveSkills"
import { OtherProject } from "../OtherProject"

export const SkillsAndProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)


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
    if (tabsRef.current) {
      const cards = tabsRef.current.querySelectorAll(".stat-card")
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
        backgroundPositionY: "10%",
        ease: "none",
        scrollTrigger: {
          // trigger: sectionRef.current,
          // start: "top bottom",
          // end: "bottom 40%",
          // scrub: true,
          trigger: sectionRef.current,
          start: "top 25%",
          endTrigger: leftColumnRef.current,
          end: "bottom 90%",
          scrub: true,
          toggleActions: "play reverse play reverse",
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
    <section ref={sectionRef} id="Skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <h2 className="text-2xl font-semibold mb-8">Skills and Projects</h2>
        </div>
        <Tabs defaultValue="projects">
          <TabsList ref={tabsRef} className="mb-8 gap-4">
            <TabsTrigger className='text-lg' value="projects">Projects</TabsTrigger>
            <TabsTrigger className='text-lg' value="skills">Professional Skills</TabsTrigger>
          </TabsList>
          <TabsContent ref={leftColumnRef} value="projects">
            <OtherProject />
          </TabsContent>
          <TabsContent ref={rightColumnRef} value="skills">
            <InteractiveSkills />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}