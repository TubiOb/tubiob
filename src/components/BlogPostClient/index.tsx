"use client"

import React, { useRef, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"
import type { Post } from "@/lib/blog"

interface Props {
  post: Post
  contentHtml: string
}

export const BlogPostClient: React.FC<Props> = ({ post, contentHtml }) => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: gsap.Context | null = null

    import("gsap").then((mod) => {
      const gsap = mod.default
      ctx = gsap.context(() => {
        if (heroRef.current) {
          gsap.fromTo(
            heroRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            }
          )
        }
      })
    })

    return () => ctx?.revert()
  }, [])

  return (
    <>
      {/* Animated post header */}
      <div ref={heroRef} className="mb-12">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[var(--card-color)] text-muted-foreground px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold leading-tight mb-5">
          {post.title}
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-5 text-sm text-muted-foreground pb-8 border-b border-border">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readingTime}
          </span>
        </div>
      </div>

      {/* MDX content — serialized on the server, hydrated here */}
      <div className="prose-custom" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  )
}