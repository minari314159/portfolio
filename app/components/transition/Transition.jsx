'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react";

const Transition = ({title}) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset:["start start", "end start"] })
    const yText = useTransform(scrollYProgress, [0,1], ["0%","500%"])
    const yPlanets = useTransform(scrollYProgress, [0,1], ["0%","100%"])
    const xStars = useTransform(scrollYProgress, [0,1], ["0%","10%"])
	return (
		<div
			ref={ref}
			className="w-full bg-gradient-to-b h-screen  from-[#2f0433] to-primary overflow-hidden relative flex items-center justify-center">
            <motion.h1 className="text-5xl absolute " style={{ y: yText }}>
				{title}
			</motion.h1>
			<motion.div className="bg-mountains bg-contain bg-bottom bg-no-repeat  w-full h-full absolute border-none z-[5]" />
			<motion.div
				className="bg-stars bg-cover bg-bottom bg-no-repeat  w-full h-full absolute border-none z-[1]"
				style={{ x: xStars }}
			/>

			<motion.div
				className="bg-sun bg-contain bg-center bg-no-repeat  w-full h-full absolute border-none z-[2]"
				style={{ y: yPlanets }}
			/>
		</div>
	);
};

export default Transition;
