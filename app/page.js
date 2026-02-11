'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export default function Home() 
{
  	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({target: containerRef, offset: ['start start', 'end start']});

  	const clipPath = useTransform(scrollYProgress, [0, 0.50], ['inset(100% 0 0 0)', 'inset(0 0 0 0)']);
	const scale = useTransform(scrollYProgress, [0.2, 0.5], [1.25, 0.5]);
	const backcard_opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
	const chesspiece_opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const card_opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0], {clamp: true});
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
          		<img
            			src="/chessboard_side.png"
            			alt="Chess rendered"
            			className="absolute inset-0 h-full w-full object-cover object-center"
            			draggable={false}
          		/>
			<motion.div className="w-[40%] h-[30%] flex justify-start items-center flex-col top-4/10 left-1/5 absolute z-50" style={{ opacity: card_opacity, display: card_display }}>
			<div className="text-white font-[Title] text-3xl text-center">Gustavs Tempelfelds</div>
			<div className="text-white font-[Main] text-sm text-center">Technical Artist & Pipeline Developer</div>
			<div className="text-white font-[Main] text-xs text-center px-24 pt-4 ">I build performant tools and systems around Blender, focusing on rendering workflows, automation, and reproducible pipelines. My work bridges art and engineering — designing infrastructure that helps artists create faster and more reliably.</div>
			<div className="flex justify-center font-[Main] text-sm gap-8 text-white items-center pt-6">
				<div className="h-8 w-12 flex items-center justify-center text-center">Blog</div>
				<div className="h-8 w-12 flex items-center justify-center text-center">Portfolio</div>
				<div className="h-8 w-12 flex items-center justify-center text-center" onClick={scrollToBottom}>Contact</div>
			</div>
			</motion.div>
          		<motion.div className="absolute flex items-center justify-center inset-0" style={{ clipPath }}>
            			<img
              				src="/chessboard_side_wireframe.png"
              				alt="chess wireframe"
              				className="h-full w-full object-cover object-center"
              				draggable={false}
					style={{ opacity: chesspiece_opacity }}
            			/>
				<motion.div className="absolute top-2/6 left-1/5 flex flex-col justify-start items-center text-8xl text-center w-[40%] h-[40%] " style={{ opacity: backcard_opacity }}>
				<div className="text-white font-[Title] text-7xl pt-16 pb-2 px-4 border-b border-zinc-600">Contact Me</div>
				<div className="flex items-center justify-evenly gap-8 text-zinc-300 pt-12">
					<IoLogoGithub className="size-14" />
					<IoLogoTwitter className="size-14" />
				</div>
				<div className="font-[Main] text-3xl pt-12 text-zinc-300">tempelfelds.gustavs@gmail.com</div>
				
				</motion.div>
          		</motion.div>
		</motion.div>
        	</div>
      </div>
</main>
);
}
