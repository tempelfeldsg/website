import { posts } from "../posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() { return posts.map((p) => ({slug: p.slug}))};

export default async function BlogPost({ params }) 
{

	const { slug } = await params
  	const pt = posts.find((p) => p.slug === slug)

  	if (!pt) 
	{
    		return notFound()
  	}

return (
<main className="py-8 px-4 md:p-12 bg-black text-white min-h-screen">
	<div className="max-w-3xl pt-4 mb-4">
  		<Link href="/blog" className="text-zinc-500 text-start flex hover:text-zinc-400 text-sm font-[Main]">
    		← Back 
  		</Link>
	</div>

	<article className="max-w-8xl mx-auto pt-6 md:py-8 flex flex-col items-center justify-start">
        	<h1 className="text-xl md:text-3xl text-center font-[Title] ">
          		{pt.title}
        	</h1>

		<div className="flex font-[Main] justify-start items-center gap-4 mt-3 md:mt-2">
      			<p className="text-zinc-500 text-sm">{pt.desc}</p>
      			<p className="text-zinc-500 text-sm">{pt.date}</p>
      			<p className="text-zinc-500 text-sm">{pt.readTime}</p>
    		</div>
        	<div className="prose prose-invert max-w-none mt-24 font-[Main]"
          		dangerouslySetInnerHTML={{ __html: pt.content }}
        />
      </article>
</main>
)}

