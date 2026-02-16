'use client';

import Image from "next/image";
import Link from "next/link"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoLogoGithub, IoIosMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() 
{
  	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({target: containerRef, offset: ['start start', 'end start']});

  	const clipPath = useTransform(scrollYProgress, [0, 0.50], ['inset(100% 0 0 0)', 'inset(0 0 0 0)']);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1.25, 0.5]);
	const backcard_opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
	const chesspiece_opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const card_opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0], {clamp: true});
	const card_display = useTransform(scrollYProgress, (value) => (value > 0.1 ? "none" : "block"));

	const scrollToBottom = () => {
  		window.scrollTo({
    		top: document.documentElement.scrollHeight,
    		behavior: "smooth",
  		});
	};

return (
<main className="bg-black ">
	<div ref={containerRef} className="relative h-[200vh] ">
		<div className="sticky top-0 h-screen w-full overflow-hidden">
		<motion.div className="relative w-full h-full" style={{ scale }}>
          		<Image
            			src="/chessboard_side.png"
            			alt="Chess rendered"
            			className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
				fill
				priority
				unoptimized
          		/>
			<motion.div className="w-[40%] h-[30%] flex justify-start items-center flex-col top-4/10 left-1/5 absolute z-50" style={{ opacity: card_opacity, display: card_display }}>
			<div className="text-white font-[Title] text-4xl text-center">Gustavs Tempelfelds</div>
			<div className="text-zinc-300 font-[Main] text-xs text-center ">Technical Artist & Pipeline Developer</div>
			<div className="text-zinc-300 font-[Main] text-xs text-center px-20 pt-12 leading-relaxed ">Work in progress</div>
			<div className="flex justify-center font-[Main] text-sm gap-8 text-zinc-200 items-center pt-8">
				<Link href="/blog" className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70 ">Blog</Link>
				<Link href="/portfolio" className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70">Portfolio</Link>
				<div className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70" onClick={scrollToBottom}>Contact</div>
			</div>
			</motion.div>
          		<motion.div className="absolute flex items-center justify-center inset-0" style={{ clipPath }}>
            			<Image
              				src="/chessboard_side_wireframe.png"
              				alt="chess wireframe"
              				className="h-full w-full object-cover object-center pointer-events-none"
					style={{ opacity: chesspiece_opacity }}
					fill
					priority
					unoptimized
            			/>
				<motion.div className="absolute top-2/6 left-1/5 flex flex-col justify-start items-center text-8xl text-center w-[40%] h-[40%] " style={{ opacity: backcard_opacity }}>
				<div className="text-white font-[Title] text-7xl pt-16 pb-2 px-4 ">Contact Me</div>
				<div className="flex items-center justify-evenly gap-8 text-zinc-300 pt-12">
					<a href="https://x.com/tempelfelds"><FaSquareXTwitter className="size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
					<a href="https://github.com/tempelfeldsg"><IoLogoGithub className="size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
					<a href="mailto:gustavs@tempelfelds.com"><IoIosMail className="size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
				</div>
				
				</motion.div>
          		</motion.div>
		</motion.div>
        	</div>
      </div>
</main>
);
}
