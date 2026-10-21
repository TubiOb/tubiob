"use client"

import React, { useRef, useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { ExternalLink, Github, Code } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Hue } from "../../../public/img"
import { /* getFeaturedProjects, */ Project, projects } from "@/lib/projects"
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

export const FeaturedProject: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const featuredProjects: Project[] = projects.filter((p) => p.featured)

  useEffect(() => {
    if (featuredProjects.length === 0) return
 
    let ctx: gsap.Context | null = null
 
    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        if (headingRef.current) {
          gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
 
        if (projectsRef.current) {
          const projectCards = projectsRef.current.querySelectorAll(".project-card")
          if (projectCards.length > 0) {
            gsap.fromTo(
              projectCards,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: projectsRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        }
      }, sectionRef)
    })
 
    return () => {
      ctx?.revert()
    }
  }, [featuredProjects.length])
 
  if (featuredProjects.length === 0) return null


  return (
    <section ref={sectionRef} className="py-16">
      <div ref={headingRef} className="text-center mb-12">
        <h2 className="text-xl font-semibold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Projects I have collaborated on and contributed to significantly
        </p>
      </div>

      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}