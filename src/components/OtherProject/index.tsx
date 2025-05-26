"use client"

import React, { useRef, useEffect, useState} from "react"
// import { motion } from "framer-motion"
// import { ExternalLink, Github, Code } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Hue } from "../../../public/img"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Project, projects } from "@/lib/projects"
import { ProjectCard } from "../ui/projectCard"

export const OtherProject: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [otherProjects, setOtherProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Get non-featured projects
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const nonFeaturedProjects = projects.filter((project) => !project.featured)
        setOtherProjects(nonFeaturedProjects)
      } catch (error) {
        console.error("Error loading projects:", error)
      } finally {
        setIsLoading(false)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  // Initialize GSAP
  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    // Animate projects with stagger
    if (projectsRef.current) {
      const projectCards = projectsRef.current.querySelectorAll(".project-card")

      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [isLoading, otherProjects])



    if (isLoading) {
        return (
            <section ref={sectionRef} className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-semibold mb-2">Other Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Loading additional projects...</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2].map((i) => (
                        <div key={i} className="bg-background rounded-lg shadow-lg h-80 animate-pulse">
                            <div className="h-52 bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
                            <div className="p-4">
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

      if (otherProjects.length === 0) {
        return null // Don't render anything if there are no other projects
      }

      return (
        <section ref={sectionRef} className="py-16">
          <div ref={headingRef} className="text-center mb-12">
            <h2 className="text-xl font-semibold mb-2">Other Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Additional projects and experiments I have worked on</p>
          </div>

          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </section>
      )
}