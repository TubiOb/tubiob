// app/case-study/[id]/page.tsx
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { CaseStudyClient } from "@/components/CaseStudyClient"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}
  return {
    title: `${project.title} — Case Study | Obaloluwa Tubi`,
    description: project.tagline,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  return <CaseStudyClient project={project!} />
}