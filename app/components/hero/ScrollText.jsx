"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideVariants } from "@/app/motionVariant";
const ScrollText = () => {
	return (
		<motion.div
			className="absolute text-[40vh] bottom-[-120px] text-secondary whitespace-nowrap opacity-20 w-[50%] overflow-y-clip"
			variants={slideVariants}
			initial={slideVariants.initial}
			animate={slideVariants.animate}>
			Full Stack Developer
		</motion.div>
	);
};

export default ScrollText;
