import Link from "next/link"
import { portfolio } from "./portfolio"
import { IoLogoGithub } from "react-icons/io"

export default function Portfolio() 
{

return (
<main className="bg-black text-white min-h-screen px-12 py-12">
	<div className="max-w-3xl pt-4 mb-4">
  		<Link href="/" className="text-zinc-500 text-start flex hover:text-zinc-400 text-sm font-[Main]">
    		← Back 
  		</Link>
	</div>

	<div className="mb-20">
        	<h1 className="text-5xl font-[Title]">Portfolio</h1>
        	<p className="text-zinc-400 mt-4 font-[Main]">
          		My projects.
        	</p>
      	</div>

      	<div className="flex flex-col gap-16 max-w-5xl">
        	{portfolio.map((p) => (
          	<Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block">
  			<div className="border-b border-zinc-800 pb-6 group-hover:border-zinc-600 transition-colors">
    				<h2 className="text-2xl font-[Title] group-hover:text-zinc-400 transition-colors">{p.title}</h2>

    				<div className="flex font-[Main] justify-start items-center gap-4 mt-2">

      					<p className="text-zinc-500 text-sm">{p.desc}</p>
      					<p className="text-zinc-500 text-sm">{p.date}</p>

    				</div>
  			</div>
		</Link>
        	))}
	</div>
</main>
)}

