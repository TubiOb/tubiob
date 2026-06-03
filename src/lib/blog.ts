import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark"
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured: boolean;
  readingTime: string
}

export type Post = PostMeta & {
  content: string;
}

// Read all post slugs from the content/blog directory
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

// Read a single post by slug
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "Untitled Post",
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    readingTime: rt.text,
    content,
  }
}

// Converts MDX/Markdown content to an HTML string called server-side only
export async function getPostContentHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm) // Support GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(remarkHtml, { sanitize: false }) // Convert to HTML
    .process(content);
  return result.toString();
}

// Return all posts sorted by date, newest first
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null;
      const { content: _, ...meta } = post;
      return meta;
    })
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[];
}

// Return posts filtered by tag
export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

// Return all unique tags from all posts
export function getAllTags(): string[] {
  const tags = getAllPosts().flatMap((p) => p.tags);
  return [...new Set(tags)];
}