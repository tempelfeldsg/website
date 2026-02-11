'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() 
{
  	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({target: containerRef, offset: ['start start', 'end start']});
  	const clipPath = useTransform(scrollYProgress, [0, 0.20], ['inset(100% 0 0 0)', 'inset(0 0 0 0)']);
	const scale = useTransform(scrollYProgress, [0.2, 0.5], [1.25, 0.5]);
	const backcard_opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
	const chesspiece_opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const card_opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0], {clamp: true});
	const card_display = useTransform(scrollYProgress, (value) => (value > 0.1 ? "none" : "block"));


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
			<div className="flex justify-center font-[Main] text-sm gap-8 text-white items-center pt-6">
				<div className="h-8 w-12 flex items-center justify-center text-center ">Blog</div>
				<div className="h-8 w-12 flex items-center justify-center text-center ">Portfolio</div>
				<div className="h-8 w-12 flex items-center justify-center text-center ">Contact</div>
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
				<motion.div className="absolute top-1/2 flex text-white items-center text-8xl text-center w-128 h-22" style={{ opacity: backcard_opacity }}>
					Placeholder
				</motion.div>
          		</motion.div>
		</motion.div>
        	</div>
      </div>
</main>
);
}
