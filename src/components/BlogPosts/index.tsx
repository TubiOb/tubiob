"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React Hooks and how they can simplify your code.",
    date: "2023-05-15",
    link: "#",
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive layouts quickly with Tailwind CSS.",
    date: "2023-06-22",
    link: "#",
  },
]

export const BlogPosts: React.FC = () => {
  return (
    <div className="py-12 mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">Latest from the Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <a href={post.link} className="text-secondary hover:underline flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}