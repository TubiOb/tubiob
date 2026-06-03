"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import type { PostMeta } from "@/lib/blog"
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Props {
  posts: PostMeta[]
  tags: string[]
}

export const BlogClient: React.FC<Props> = ({ posts, tags }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const headingRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  const featured = posts.find((p) => p.featured)
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts
  const gridPosts = filtered.filter((p) => !p.featured || activeTag !== null)

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const gsap = mod.default
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        if (headingRef.current) {
          gsap.fromTo(
            headingRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
            }
          )
        }
      })
    })

    return () => ctx?.revert();
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            {/* {featured ? "Featured Post" : "Blog"} */}
            Writing
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            Things I&apos;ve built, broken, and learned
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Notes on frontend development, product thinking, and building for African users..
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button onClick={() => setActiveTag(null)} className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${activeTag === null ? "bg-foreground text-background border-foreground" : "border-neutral-200 text-muted-foreground hover:border-neutral-400 hover:text-foreground"}`}>
            All
          </button>
          {tags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)} className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${activeTag === tag ? "bg-foreground text-background border-foreground" : "border-neutral-200 text-muted-foreground hover:border-neutral-400 hover:text-foreground"}`}>
              {tag}
            </button>
          ))}
        </div>

        {featured && activeTag === null && (
          <Link href={`/blog/${featured.slug}`} className="block group mb-12">
            <article className="grid md:grid-cols-2 gap-0 border border-neutral-200 rounded-xl overflow-hidden border-neutral-300/50 transition-colors duration-300">
              <div className="bg-[var(--card-color)] min-h-[12.5rem] flex items-center justify-center">
                <span className='text-4xl text-muted-foreground/30 font-light'>
                  {featured.title.charAt(0)}
                </span>
              </div>

              <div className='p-8 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2 mb-4'>
                    {featured.featured === true && (
                      <span className="text-xs bg-[#EAF3DE] text-[#3B6D11] rounded px-2 py-1 border border-[#C0DD97]">
                        Featured
                      </span>)}
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className='text-xs bg-[var(--card-color)] text-muted-foreground px-2 py-1 rounded'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className='text-xl font-medium mb-3 leading-snug group-hover:text-[var(--text-color-green)] transition-colors duration-200'>
                    {featured.title}
                  </h2>
                  <p className='text-sm text-muted-foreground leading-relaxed mb-6'>
                    {featured.excerpt}
                  </p>
                </div>
                <div className='flex items-center justify-between text-xs text-muted-foreground'>
                  <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-1'>
                      <Calendar size={12} /> {featured.date}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock size={12} /> {featured.readingTime}
                    </span>
                  </div>
                  <span className='flex items-center gap-1 text-[var(--text-color-green)] group-hover:gap-2 transition-all duration-200'>
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {gridPosts.length > 0 ? (
          <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-sm">Posts coming soon.</p>
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-sm">Posts coming soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}





function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group border border-neutral-200 rounded-lg overflow-hidden border-neutral-300/50 transition-colors duration-300">
      <article className="border border-neutral-200 rounded-xl overflow-hidden h-full flex flex-col border-neutral-300/50 transition-colors duration-300">
        <div className="bg-[var(--card-color)] h-28 flex items-center justify-center">
          <span className='text-3xl text-muted-foreground/30 font-light'>
            {post.title.charAt(0)}
          </span>
        </div>

        <div className='p-4 flex flex-col flex-grow'>
          <div className='flex flex-wrap gap-1.5 mb-3'>
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className='text-xs bg-[var(--card-color)] text-muted-foreground px-2 py-0.5 rounded'>
                {tag}
              </span>
            ))}
          </div>
          <h3 className='text-sm font-medium mb-2 leading-snug flex-grow group-hover:text-[var(--text-color-green)] transition-colors duration-200'>
            {post.title}
          </h3>

          <p className='text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2'>
            {post.excerpt}
          </p>

          <div className='flex items-center justify-between text-xs text-muted-foreground mt-auto'>
            <div className='flex items-center gap-3'>
              <span className='flex items-center gap-1'>
                <Calendar size={12} /> {post.date}
              </span>
              <span className='flex items-center gap-1'>
                <Clock size={12} /> {post.readingTime}
              </span>
            </div>
            <span className='flex items-center gap-1 text-[var(--text-color-green)] opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
              <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}