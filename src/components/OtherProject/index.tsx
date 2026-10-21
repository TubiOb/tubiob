"use client"

import React, { useRef, useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { ExternalLink, Github, Code } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Hue } from "../../../public/img"
import { Project, projects } from "@/lib/projects"
import { ProjectCard } from "../ui/projectCard"

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

const INITIAL_COUNT = 4

export const OtherProject: React.FC = () => {
  // const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [showAll, setShowAll] = useState(false);
  
  const otherProjects: Project[] = projects.filter((p) => !p.featured)
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, INITIAL_COUNT)
  const hiddenCount = otherProjects.length - INITIAL_COUNT


  useEffect(() => {
    if (otherProjects.length === 0) return

    let ctx: gsap.Context | null = null;

    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        if (headingRef.current) {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
                // once: false,
                // invalidateOnRefresh: true,
            },
          })
        }


        if (projectsRef.current) {
          const cards = projectsRef.current.querySelectorAll(".project-card")
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: projectsRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                  // once: false,
                  // invalidateOnRefresh: true,
                }
              }
            )
          }
        }
      }, sectionRef)
    })

    return () => {
      ctx?.revert();
    }
  }, [otherProjects.length])


  useEffect(() => {
    if (!showAll || !projectsRef.current) return
 
    getGSAP().then((gsap) => {
      const allCards = projectsRef.current!.querySelectorAll(".project-card")
      const newCards = Array.from(allCards).slice(INITIAL_COUNT)
      if (newCards.length === 0) return
 
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      )
    })
  }, [showAll])

  if (otherProjects.length === 0) return null // Don't render anything if there are no other projects

  return (
    <section ref={sectionRef} className="py-16">
      <div ref={headingRef} className="text-center mb-12">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        {/* <p className="text-muted-foreground max-w-2xl mx-auto">Additional projects and experiments I have worked on</p> */}
        <p className="text-muted-foreground max-w-2xl mx-auto">Most of my work is built for Nigerian and African users — here&apos;s what that looks like in practice.</p>
      </div>

      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {visibleProjects.map((project, index) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {!showAll && hiddenCount > 0 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[var(--border-color,#e5e7eb)] text-sm font-medium text-[var(--text-color)] hover:bg-[var(--card-color)] transition-colors"
          >
            Show {hiddenCount} more {hiddenCount === 1 ? "project" : "projects"}
          </button>
        </div>
      )}
 
      {showAll && otherProjects.length > INITIAL_COUNT && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[var(--border-color,#e5e7eb)] text-sm font-medium text-muted-foreground hover:bg-[var(--card-color)] transition-colors"
          >
            Show less
          </button>
        </div>
      )}
    </section>
  )
}