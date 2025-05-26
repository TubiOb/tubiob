"use client"

import React from "react"

import { useRef, useEffect } from "react"
import { ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import type { Project } from "@/lib/projects"
import { ImageCarousel } from "@/components/ui/imageCarousel"

type ProjectCardProps = {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  // const imageRef = useRef<HTMLDivElement>(null)

  // Hover animation
  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current
    // const image = imageRef.current

    // Create hover animations
    const enterAnimation = () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.3,
        ease: "power2.out",
      })

      // if (image) {
      //   gsap.to(image, {
      //     scale: 1.05,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   })
      // }
    }

    const leaveAnimation = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out",
      })

      // if (image) {
      //   gsap.to(image, {
      //     scale: 1,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   })
      // }
    }

    // Add event listeners
    card.addEventListener("mouseenter", enterAnimation)
    card.addEventListener("mouseleave", leaveAnimation)

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", enterAnimation)
      card.removeEventListener("mouseleave", leaveAnimation)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-background rounded-lg shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full"
    >
      <ImageCarousel images={project.images} alt={project.title} />

      {/* <div ref={imageRef} className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4"> */}
          {/* <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div> */}
        {/* </div>
      </div> */}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-[var(--card-color)] backdrop-blur-sm text-foreground px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.demoUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </a>
            </Button>
          )}

          {project.codeUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
