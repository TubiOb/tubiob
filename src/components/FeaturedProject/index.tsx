"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hue } from "../../../public/img"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getFeaturedProjects, Project, projects } from "@/lib/projects"
import { ProjectCard } from "../ui/projectCard"

export const FeaturedProject: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const featuredProjects = projects.filter((project) => project.featured)
        setFeaturedProjects(featuredProjects);
      }
      catch (err) {
        console.error('Error loading projects:', err);
      }
      finally {
        setIsLoading(false);
      }
    }, 0)
    
    return () => clearTimeout(timer);
  }, [])

  // Initialize GSAP
  // useEffect(() => {
  //   if (typeof window === "undefined") return

  //   gsap.registerPlugin(ScrollTrigger)

  //   // Animate heading
  //   if (headingRef.current) {
  //     gsap.fromTo(
  //       headingRef.current,
  //       { opacity: 0, y: 30 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: headingRef.current,
  //           start: "top 80%",
  //           toggleActions: "play none none none",
  //         },
  //       },
  //     )
  //   }

  //   // Animate projects with stagger
  //   if (projectsRef.current) {
  //     const projectCards = projectsRef.current.querySelectorAll(".project-card")

  //     gsap.fromTo(
  //       projectCards,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         stagger: 0.2,
  //         ease: "power.easeOut",
  //         scrollTrigger: {
  //           trigger: projectsRef.current,
  //           start: "top 90%",
  //           toggleActions: "play pause none pause",
  //         },
  //       },
  //     )
  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  //   }
  // }, [])


  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Set initial states to prevent flicker
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 })
      }

      if (projectsRef.current) {
        const projectCards = projectsRef.current.querySelectorAll(".project-card")
        gsap.set(projectCards, { opacity: 0, y: 50 })
      }

      // Animate heading
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            once: false,
            invalidateOnRefresh: true,
          },
        })
      }

      // Animate projects with stagger
      if (projectsRef.current) {
        const projectCards = projectsRef.current.querySelectorAll(".project-card")

        if (projectCards.length > 0) {
          gsap.to(projectCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              once: false,
              invalidateOnRefresh: true,
            },
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [isLoading, featuredProjects])


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

  if (featuredProjects.length === 0) {
    return null // Don't render anything if there are no other projects
  }


  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    //   className="bg-background rounded-lg shadow-lg overflow-hidden my-40 flex"
    // >
    //   <div className="md:flex flex-col">
    //     <div className="md:flex-shrink-0 relative h-48 md:h-auto md:w-48">
    //       <Image src={Hue} alt="Featured Projects" className="object-cover" />
    //     </div>
    //     <div className="p-8">
          
    //       <a
    //         href="#"
    //         className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
    //       >
    //         VitalGoods E-commerce Platform
    //       </a>
    //       <p className="mt-2 text-gray-500 dark:text-gray-400">
    //         A full-featured e-commerce platform for fitness equipment, built with React, Next.js, and integrated with
    //         Stripe for payments.
    //       </p>
    //       <div className="mt-4 flex space-x-3">
    //         <Button asChild variant="outline">
    //           <a href="https://vitalgoods.netlify.app/" target="_blank" rel="noopener noreferrer">
    //             <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
    //           </a>
    //         </Button>
    //         <Button asChild variant="outline">
    //           <a href="https://github.com/yourusername/vitalgoods" target="_blank" rel="noopener noreferrer">
    //             <Github className="mr-2 h-4 w-4" /> View Code
    //           </a>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:flex flex-col">
    //     <div className="md:flex-shrink-0 relative h-48 md:h-auto md:w-48">
    //       <Image src={Hue} alt="Featured Projects" className="object-cover" />
    //     </div>
    //     <div className="p-8">
          
    //       <a
    //         href="#"
    //         className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
    //       >
    //         VitalGoods E-commerce Platform
    //       </a>
    //       <p className="mt-2 text-gray-500 dark:text-gray-400">
    //         A full-featured e-commerce platform for fitness equipment, built with React, Next.js, and integrated with
    //         Stripe for payments.
    //       </p>
    //       <div className="mt-4 flex space-x-3">
    //         <Button asChild variant="outline">
    //           <a href="https://vitalgoods.netlify.app/" target="_blank" rel="noopener noreferrer">
    //             <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
    //           </a>
    //         </Button>
    //         <Button asChild variant="outline">
    //           <a href="https://github.com/yourusername/vitalgoods" target="_blank" rel="noopener noreferrer">
    //             <Github className="mr-2 h-4 w-4" /> View Code
    //           </a>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:flex flex-col">
    //     <div className="md:flex-shrink-0 relative h-48 md:h-auto md:w-48">
    //       <Image src={Hue} alt="Featured Projects" className="object-cover" />
    //     </div>
    //     <div className="p-8">
          
    //       <a
    //         href="#"
    //         className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
    //       >
    //         VitalGoods E-commerce Platform
    //       </a>
    //       <p className="mt-2 text-gray-500 dark:text-gray-400">
    //         A full-featured e-commerce platform for fitness equipment, built with React, Next.js, and integrated with
    //         Stripe for payments.
    //       </p>
    //       <div className="mt-4 flex space-x-3">
    //         <Button asChild variant="outline">
    //           <a href="https://vitalgoods.netlify.app/" target="_blank" rel="noopener noreferrer">
    //             <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
    //           </a>
    //         </Button>
    //         <Button asChild variant="outline">
    //           <a href="https://github.com/yourusername/vitalgoods" target="_blank" rel="noopener noreferrer">
    //             <Github className="mr-2 h-4 w-4" /> View Code
    //           </a>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>      
    // </motion.div>
    <section ref={sectionRef} className="py-16">
      <div ref={headingRef} className="text-center mb-12">
        <h2 className="text-xl font-semibold mb-2">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Projects I've collaborated on and contributed to significantly
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