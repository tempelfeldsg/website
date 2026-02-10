'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() 
{
  	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({target: containerRef, offset: ['start start', 'end start']});
  	const clipPath = useTransform(scrollYProgress, [0, 0.5], ['inset(100% 0 0 0)', 'inset(0 0 0 0)']);


return (
<main className="bg-black">
	<div ref={containerRef} className="relative h-[300vh]">
		<div className="sticky top-0 h-screen w-full overflow-hidden">
          		<img
            			src="/Chair_Render.png"
            			alt="Chair rendered"
            			className="absolute inset-0 h-full w-full object-cover object-center"
            			draggable={false}
          		/>

          		<motion.div className="absolute inset-0" style={{ clipPath }}>
            			<img
              				src="/Chair_Render_wireframe.png"
              				alt="Chair wireframe"
              				className="h-full w-full object-cover object-center"
              				draggable={false}
            			/>
          		</motion.div>
        	</div>
      </div>
</main>
);
}
