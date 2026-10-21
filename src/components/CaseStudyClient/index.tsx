"use client"

import React, { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { Project, projects } from "@/lib/projects"
import type gsapType from "gsap"

let gsapPromise: Promise<typeof gsapType> | null = null

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

interface Props {
  project: Project
}

function CaseStudyImage({ src, alt, priority = false, }: { src: string; alt: string; priority?: boolean; }) {
  return (
    <div className="cs-section relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="(max-width: 800px) 100vw, 768px"
        className="object-cover object-top"
      />
    </div>
  )
}

export const CaseStudyClient: React.FC<Props> = ({ project }) => {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const projectsWithCaseStudy = projects.filter((p) => p.caseStudyUrl)
  const currentIndex = projectsWithCaseStudy.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? projectsWithCaseStudy[currentIndex - 1] : null
  const nextProject = currentIndex < projectsWithCaseStudy.length - 1 ? projectsWithCaseStudy[currentIndex + 1] : null

  useEffect(() => {
    let ctx: gsap.Context | null = null
    let cancelled = false

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    getGSAP().then((gsap) => {
      if (cancelled) return
      ctx = gsap.context(() => {
        // Hero fade up
        if (heroRef.current) {
          gsap.fromTo(
            heroRef.current.children,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
          )
        }
        // Scroll-triggered sections
        if (contentRef.current) {
          const sections = contentRef.current.querySelectorAll(".cs-section")
          sections.forEach((section) => {
            gsap.fromTo(
              section,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 82%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          })
        }
      }, contentRef)
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  const [hero, ...gallery] = project.images ?? []

  return (
    <article className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
  
        {/* Back link */}
        <Link href="/skills" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group" >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to projects
        </Link>
  
        {/* Hero */}
        <div ref={heroRef} className="mb-16">
          <p className="text-sm text-muted-foreground mb-3 uppercase tracking-widest">
            Case Study
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.tagline}
          </p>
  
          {/* Meta row */}
          <div className="flex flex-wrap gap-6 text-sm mb-10">
            <div>
              <span className="text-muted-foreground block mb-1 uppercase tracking-wide text-xs">Role</span>
              <span className="font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1 uppercase tracking-wide text-xs">Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full text-xs bg-[var(--card-color)] border border-[var(--border-color,#e5e7eb)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          {/* Links */}
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--text-color-green)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color,#e5e7eb)] text-sm font-medium hover:bg-[var(--card-color)] transition-colors"
              >
                <Github size={15} />
                View Code
              </a>
            )}
          </div>
        </div>
  
        {/* Project screenshot */}
        {project.images && (
          <div className="cs-section relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-16 shadow-lg border border-[var(--border-color,#e5e7eb)]">
            <Image
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}
  
        {/* Content */}
        <div ref={contentRef} className="space-y-16">
  
          {/* Problem */}
          <section className="cs-section">
            <SectionLabel>The Problem</SectionLabel>
            <p className="text-[var(--text-color)] leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>
  
          {/* Key decisions */}
          <section className="cs-section">
            <SectionLabel>Key Technical Decisions</SectionLabel>
            <div className="space-y-6">
              {project.keyDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="flex gap-4"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--card-color)] border border-[var(--border-color,#e5e7eb)] flex items-center justify-center text-xs font-semibold text-muted-foreground">
                    {i + 1}
                  </span>
                  <p className="text-[var(--text-color)] leading-relaxed pt-0.5">{decision}</p>
                </div>
              ))}
            </div>
          </section>
  
          {gallery[0] && (
            <CaseStudyImage
              src={gallery[0]}
              alt={`${project.title} — interface detail`}
            />
          )}
  
          {/* Challenges */}
          <section className="cs-section">
            <SectionLabel>Challenges & Solutions</SectionLabel>
            <div className="space-y-8">
              {project.challenges.map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="bg-[var(--card-color)] rounded-lg p-5 border-l-2 border-red-400">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed">{item.challenge}</p>
                  </div>
                  <div className="bg-[var(--card-color)] rounded-lg p-5 border-l-2 border-[var(--text-color-green)]">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {gallery[1] && (
            <CaseStudyImage
              src={gallery[1]}
              alt={`${project.title} — outcome`}
            />
          )}
  
          {/* Outcome */}
          <section className="cs-section">
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-[var(--text-color)] leading-relaxed text-lg">
              {project.outcome}
            </p>
          </section>
  
          {/* What I learned */}
          <section className="cs-section">
            <SectionLabel>What I Learned</SectionLabel>
            <blockquote className="border-l-4 border-[var(--text-color-green)] pl-6 py-2 italic text-lg text-muted-foreground leading-relaxed">
              {project.whatILearned}
            </blockquote>
          </section>
  
        </div>
  
        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-[var(--border-color,#e5e7eb)]">
          <div className="flex justify-between items-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              All projects
            </Link>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-color-green)] hover:opacity-80 transition-opacity"
              >
                View live <ExternalLink size={14} />
              </a>
            )}
          </div>
  
          {/* Prev / Next case study navigation */}
          {(prevProject || nextProject) && (
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                {prevProject && prevProject.caseStudyUrl && (
                  <Link
                    href={prevProject.caseStudyUrl}
                    className="group flex flex-col gap-1 p-4 rounded-lg border border-[var(--border-color,#e5e7eb)] hover:bg-[var(--card-color)] transition-colors"
                  >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                      <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
                      Previous
                    </span>
                    <span className="text-sm font-medium text-[var(--text-color)] leading-snug">
                      {prevProject.title}
                    </span>
                  </Link>
                )}
              </div>
              <div>
                {nextProject && nextProject.caseStudyUrl && (
                  <Link
                    href={nextProject.caseStudyUrl}
                    className="group flex flex-col gap-1 p-4 rounded-lg border border-[var(--border-color,#e5e7eb)] hover:bg-[var(--card-color)] transition-colors text-right"
                  >
                    <span className="text-xs uppercase tracking-widest text-muted-foreground flex items-center justify-end gap-1">
                      Next
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className="text-sm font-medium text-[var(--text-color)] leading-snug">
                      {nextProject.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
  
      </div>
    </article>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">
      {children}
    </h2>
  )
}