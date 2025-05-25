"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  HashIcon as Html,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  BackpackIcon as Bootstrap,
  Figma,
  GitGraphIcon as Git,
} from "lucide-react"
import { InteractiveSkills } from "./../InteractiveSkills"
import { OtherProject } from "../OtherProject"

export const SkillsAndProjects: React.FC = () => {
  return (
    <section id="Skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold mb-8">Skills and Projects</h2>
        </motion.div>
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
    </section>
  )
}