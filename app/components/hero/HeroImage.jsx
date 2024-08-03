"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
	return (
		<motion.div
			className="absolute bottom-[-1rem] md:right-[-2rem] w-[550px] sm:w-[600px] md:w-[650px] lg:right-[5%] xl:w-[700px] xl:right-[10%] z-0 overflow-clip"
			initial={{ translateX: 700 }}
			animate={{
				translateX: 0,
				transition: {
					duration: 1,
					delay: 0.5,
					type: "spring",
					stiffness: 400,
					damping: 40,
				},
			}}>
			<Image
				src="./assets/heroprofile.svg"
				width={700}
				height={700}
				alt="Profile illustration"
				className="aspect-square"
			/>
		</motion.div>
	);
};

export default HeroImage;
