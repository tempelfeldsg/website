import { posts } from "../posts"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <main className="bg-black text-white min-h-screen">
      <article className="max-w-3xl mx-auto px-8 py-24">
        <h1 className="text-4xl font-[Title] mb-4">
          {post.title}
        </h1>

        <div className="text-zinc-500 text-sm mb-12">
          {post.date}
        </div>

        <div
          className="prose prose-invert max-w-none font-[Main]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  )
}

