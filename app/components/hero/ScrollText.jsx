"use client";
import React from "react";
import { mirrorEasing, motion } from "framer-motion";

const slideVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-500%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			mirrorEasing: "linear",
			duration: 20,
		},
	},
};
const ScrollText = () => {
	return (
		<motion.div
			className="absolute text-[40vh] bottom-[-120px] text-secondary whitespace-nowrap opacity-20 w-[50%]"
			variants={slideVariants}
			initial="intial"
			animate="animate">
			Full Stack Developer
		</motion.div>
	);
};

export default ScrollText;
