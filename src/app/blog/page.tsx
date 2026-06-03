import type { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { BlogClient } from "@/components/BlogClient"

export const metadata: Metadata = {
  title: 'Blog - Obaloluwa Tubi',
  description: 'Notes on frontend development, product thinking, and building for African users.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return <BlogClient posts={posts} tags={tags} />
}