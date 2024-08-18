"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
	return (
		<motion.div
			className="absolute bottom-[3rem] right-[-1rem] w-[450px] sm:w-[600px] md:w-[650px] lg:right-[2%] xl:w-[550px] xl:right-[25%] z-0 overflow-clip "
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
				src="/assets/profile.jpeg"
				width={550}
				height={700}
				alt="Profile illustration"
				className="rounded-sm opacity-50 blur-[1px]"
			/>
		</motion.div>
	);
};

export default HeroImage;
