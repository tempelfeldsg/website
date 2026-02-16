import { portfolio } from "../portfolio"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() { return portfolio.map((p) => ({slug: p.slug}))};

export default async function PortfolioPost({ params }) 
{

	const { slug } = await params
  	const pf = portfolio.find((p) => p.slug === slug)

  	if (!pf) 
	{
    		return notFound()
  	}

return (
<main className="p-12 bg-black text-white min-h-screen">
	<div className="max-w-3xl pt-4 mb-4">
  		<Link href="/portfolio" className="text-zinc-500 text-start flex hover:text-zinc-400 text-sm font-[Main]">
    		← Back 
  		</Link>
	</div>

	<article className="max-w-8xl mx-auto py-8 flex flex-col items-center justify-start">
        	<h1 className="text-3xl text-center font-[Title] ">
          		{pf.title}
        	</h1>

		<div className="flex font-[Main] justify-start items-center gap-4 mt-2">
      			<p className="text-zinc-500 text-sm">{pf.date}</p>
      			<p className="text-zinc-500 text-sm">{pf.readTime}</p>
    		</div>
        	<div className="prose prose-invert max-w-none mt-24 font-[Main]"
          		dangerouslySetInnerHTML={{ __html: pf.content }}
        />
      </article>
</main>
)}

