"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextReveal } from "@/components/ui/textreveal"
import { Code, FileCode, FileJson, Layers, Palette, LayoutGrid, SquareStack, Box, /* Component, */ Figma, Github, GitBranch, Smartphone, Gauge, Accessibility, Globe, Server, Database, Cloud, Play, ImageIcon, CreditCard, /* Lock, TestTube, LineChart, */ Rocket, Workflow, } from "lucide-react"

type Skill = {
  name: string
  icon: React.ReactNode
  color: string
}

type SkillCategory = {
  name: string
  skills: Skill[]
}

const skills: SkillCategory[] = [
  {
    name: "Core Technologies",
    skills: [
      { name: "HTML5", icon: <LayoutGrid className="h-8 w-8" />, color: "#E34F26" }, // HTML orange
      { name: "CSS/SCSS", icon: <Palette className="h-8 w-8" />, color: "#1572B6" }, // CSS blue
      { name: "JavaScript", icon: <FileJson className="h-8 w-8" />, color: "#F7DF1E" }, // JS yellow
      { name: "React", icon: <Code className="h-8 w-8" />, color: "#61DAFB" }, // React blue
      { name: "TypeScript", icon: <FileCode className="h-8 w-8" />, color: "#3178C6" }, // TS blue
      { name: "Next.js", icon: <Server className="h-8 w-8" />, color: "#000000" }, // Next.js black
    ],
  },
  {
    name: "UI Libraries & Frameworks",
    skills: [
      { name: "Tailwind CSS", icon: <Layers className="h-8 w-8" />, color: "#06B6D4" }, // Tailwind teal
      { name: "Material UI", icon: <SquareStack className="h-8 w-8" />, color: "#0081CB" }, // MUI blue
      { name: "Chakra UI", icon: <Box className="h-8 w-8" />, color: "#319795" }, // Chakra teal
      { name: "Styled Components", icon: <Palette className="h-8 w-8" />, color: "#DB7093" }, // Styled pink
      { name: "Framer Motion", icon: <Play className="h-8 w-8" />, color: "#0055FF" }, // Framer blue
    ],
  },
  {
    name: "Backend & Services",
    skills: [
      { name: "Firebase", icon: <Database className="h-8 w-8" />, color: "#FFCA28" }, // Firebase yellow
      { name: "REST APIs", icon: <Globe className="h-8 w-8" />, color: "#4CAF50" }, // Green
      { name: "Cloudinary", icon: <ImageIcon className="h-8 w-8" />, color: "#3448C5" }, // Cloudinary blue
      { name: "Cloudflare", icon: <Cloud className="h-8 w-8" />, color: "#F38020" }, // Cloudflare orange
    ],
  },
  {
    name: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <GitBranch className="h-8 w-8" />, color: "#F05032" }, // Git orange
      { name: "GitHub", icon: <Github className="h-8 w-8" />, color: "#080707FF" }, // GitHub black
      { name: "Figma", icon: <Figma className="h-8 w-8" />, color: "#F24E1E" }, // Figma orange
      { name: "Vite", icon: <Rocket className="h-8 w-8" />, color: "#646CFF" }, // Vite purple
      { name: "npm/yarn", icon: <Box className="h-8 w-8" />, color: "#CB3837" }, // npm red
    ],
  },
  {
    name: "Integrations & APIs",
    skills: [
      { name: "Paystack", icon: <CreditCard className="h-8 w-8" />, color: "#00C3F7" }, // Paystack blue
    ],
  },
  {
    name: "Best Practices",
    skills: [
      { name: "Responsive Design", icon: <Smartphone className="h-8 w-8" />, color: "#2196F3" }, // Blue
      { name: "Performance", icon: <Gauge className="h-8 w-8" />, color: "#FF5722" }, // Orange
      { name: "Accessibility", icon: <Accessibility className="h-8 w-8" />, color: "#4CAF50" }, // Green
      { name: "CI/CD", icon: <Workflow className="h-8 w-8" />, color: "#9C27B0" }, // Purple
    ],
  },
]

export const InteractiveSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    if (skillsRef.current) {
      const skillItems = skillsRef.current.querySelectorAll(".skill-item")

      gsap.fromTo(
        skillItems,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])


  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //   {skills.map((skill, index) => (
    //     <div key={index} className="relative pt-1">
    //       <div className="flex mb-2 items-center justify-between">
    //         <div>
    //           <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
    //             {skill.name}
    //           </span>
    //         </div>
    //         <div className="text-right">
    //           <span className="text-xs font-semibold inline-block text-primary-600">{skill.level}%</span>
    //         </div>
    //       </div>
    //       <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[var(--card-color)]">
    //         <motion.div
    //           style={{ width: 0 }}
    //           animate={{ width: `${skill.level}%` }}
    //           transition={{ duration: 1, delay: index * 0.1 }}
    //           className="shadow-none flex flex-col text-center whitespace-nowrap text-[var(--card-color)] justify-center bg-[var(--text-color-green)]"
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <section ref={sectionRef} className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal className="text-xl font-semibold text-center mb-12">Technical Skills</TextReveal>

        <div ref={skillsRef} className="space-y-12">
          {skills.map((category) => (
            <div key={category.name} className="space-y-6">
              <h3 className="text-lg font-medium mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item flex flex-col items-center justify-center p-4 bg-background rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 15px ${skill.color}40`,
                    }}
                  >
                    <div className="text-secondary mb-3" style={{ color: skill.color }}>{skill.icon}</div>
                    <span className="text-sm font-normal text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}