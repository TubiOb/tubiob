// app/blog/[slug]/page.tsx
// No "use client" — this is a server component
import { notFound } from "next/navigation"
import { getPostBySlug, getPostContentHtml, getPostSlugs } from "@/lib/blog"
import { BlogPostClient } from "@/components/BlogPostClient"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — TubiOb`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Serialize MDX on the server — passes a plain object to the client component
  const contentHtml = await getPostContentHtml(post!.content)

  return (
    <article className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          All posts
        </Link>

        <BlogPostClient post={post!} contentHtml={contentHtml} />

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All posts
          </Link>
          <Link href="/contact" className='text-sm text-[var(--text-color-green)] hover:opacity-80 transition-opacity'>
            Got thoughts? Reach out →
          </Link>
        </div>
      </div>
    </article>
  )
}