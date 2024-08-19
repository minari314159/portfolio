"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
	return (
		<motion.div
			className="fixed bottom-[8rem] w-[400px]  sm:w-[450px] md:w-[500px] xl:w-[550px] md:bottom-[10rem] md:right-[5%] lg:right-[10%] xl:right-[20%] z-0 overflow-clip "
			initial={{ translateX: 1000 }}
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
				src="/assets/heroprofile.jpg"
				width={550}
				height={700}
				alt="Profile illustration"
				className="rounded-sm  opacity-80 blur-[1px] border border-textmain object-cover object-right"
			/>
		</motion.div>
	);
};

export default HeroImage;
