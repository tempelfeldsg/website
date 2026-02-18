import Link from "next/link"
import { posts } from "./posts"

export default function Blog() 
{

return (
<main className="bg-black text-white min-h-screen py-8 px-4 md:px-12 md:py-12">
	<div className="w-fit pt-4 mb-4">
  		<Link href="/" className="text-zinc-500 text-start flex hover:text-zinc-400 text-sm font-[Main]">
    		← Back 
  		</Link>
	</div>

	<div className="mb-20">
        	<h1 className="md:text-5xl text-3xl font-[Title]">Blog</h1>
        	<p className="text-zinc-400 text-sm md:text-base mt-4 font-[Main]">
          		Written works about my projects, pipelines, and creative tech.
        	</p>
      	</div>

      	<div className="flex flex-col gap-16 max-w-5xl">
        	{posts.map((p) => (
          	<Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
  			<div className="border-b border-zinc-800 pb-6 group-hover:border-zinc-600 transition-colors">
    				<h2 className="text-xl md:text-2xl font-[Title] group-hover:text-zinc-400 transition-colors">{p.title}</h2>

    				<div className="flex font-[Main] justify-start items-center gap-4 mt-2">
      					<p className="text-zinc-500 text-xs md:text-sm">{p.desc}</p>
      					<p className="text-zinc-500 text-xs md:text-sm">{p.date}</p>
      					<p className="text-zinc-500 text-xs md:text-sm">{p.readTime}</p>
    				</div>
  			</div>
		</Link>
        	))}
	</div>
</main>
)}

