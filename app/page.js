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
            			alt="Chess Knight"
            			className="hidden md:inline absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
				fill
				priority
				unoptimized
          		/>
			<motion.div className="md:w-[40%] md:h-[30%] h-full w-full flex justify-start items-center flex-col top-3/10 md:top-4/10 md:left-1/5 absolute z-50" style={{ opacity: card_opacity, display: card_display }}>
			<div className="text-white font-[Title] text-md md:text-4xl text-center">Gustavs Tempelfelds</div>
			<div className="text-zinc-300 font-[Main] text-xs pt-1 md:pt-0 text-center ">Technical Artist & Pipeline Developer</div>
			<div className="text-zinc-300 font-[Main] md:text-xs text-sm text-center pt-14 md:px-20 md:pt-12 leading-relaxed ">Work in progress</div>
			<div className="flex justify-center font-[Main] text-xs md:text-sm gap-8 text-zinc-200 items-center pt-16 md:pt-8">
				<Link href="/blog" className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70 ">Blog</Link>
				<Link href="/portfolio" className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70">Portfolio</Link>
				<div className="h-8 w-12 flex items-center justify-center text-center hover:text-zinc-500 cursor-pointer duration-70" onClick={scrollToBottom}>Contact</div>
			</div>
			</motion.div>
          		<motion.div className="absolute flex items-center justify-center inset-0" style={{ clipPath }}>
            			<Image
              				src="/chessboard_side_wireframe.png"
              				alt="Chess Knight Wireframe"
              				className="md:inline hidden h-full w-full object-cover object-center pointer-events-none"
					style={{ opacity: chesspiece_opacity }}
					fill
					priority
					unoptimized
            			/>
				<motion.div className="absolute md:top-2/6 md:left-1/5 flex flex-col justify-start items-center text-center w-full h-full md:w-[40%] md:h-[40%] " style={{ opacity: backcard_opacity }}>
				<div className="text-white font-[Title] text-4xl md:text-7xl pt-60 md:pt-16 pb-2 w-screen md:px-4 ">Contact Me</div>
				<div className="flex items-center justify-evenly gap-18 md:gap-8 text-zinc-300 pt-20 md:pt-12">
					<a href="https://x.com/tempelfelds" target="_blank" rel="noopener noreferrer" ><FaSquareXTwitter className="size-16 md:size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
					<a href="https://github.com/tempelfeldsg" target="_blank" rel="noopener noreferrer" ><IoLogoGithub className="size-16 md:size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
					<a href="mailto:gustavs@tempelfelds.com"><IoIosMail className="size-16 md:size-14 hover:text-zinc-500 duration-70 cursor-pointer" /></a>
				</div>
				
				</motion.div>
          		</motion.div>
		</motion.div>
        	</div>
      </div>
</main>
);
}
