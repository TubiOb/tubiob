"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechCorp",
    content:
      "Obaloluwa is an exceptional developer. His attention to detail and problem-solving skills are impressive.",
  },
  {
    name: "Jane Smith",
    role: "CEO of WebSolutions",
    content: "Working with Obaloluwa was a pleasure. He delivered our project on time and exceeded our expectations.",
  },
]

export const Testimonials: React.FC = () => {
  return (
    <div className="py-12 mt-20 mb-10">
      <h2 className="text-2xl font-bold text-center mb-8">What People Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.content}</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}