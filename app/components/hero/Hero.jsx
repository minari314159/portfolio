"use client";
import React from "react";
import { textVariant } from "@/app/motionVariant";
import { ScrollText } from "..";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className=" w-full sm:w-[80%] md:w-[90%] lg:w-[70%] h-full flex flex-col items-center px-10">
			<motion.div
				className=" w-full   flex flex-col items-center md:items-start justify-center md:gap-5 relative"
				variants={textVariant}
				initial={textVariant.initial}
				animate={textVariant.animate}>
				<motion.div className="h-full flex flex-col justify-center gap-5 md:gap-10">
					<motion.h1
						variants={textVariant}
						className=" text-xl  md:text-3xl lg:text-4xl font-bold tracking-wider text-tertiary">
						SARAH OLSEN
					</motion.h1>
					<motion.h2
						variants={textVariant}
						className=" text-5xl sm:text-6xl lg:text-7xl">
						Full Stack Developer & Illustrator
					</motion.h2>
				</motion.div>
				<motion.div className="absolute bottom-[-4rem] flex gap-5 text-sm sm:text-md z-[50]">
					<Link
						href="/portfolio"
						className="bg-secondary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75 drop-shadow-[2px_2px_1px_rgba(114,114,114,0.25)]">
						Latest Projects
					</Link>
					<Link
						href="/contact"
						className="bg-secondary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75 drop-shadow-[2px_2px_1px_rgba(114,114,114,0.25)] ">
						Contact
					</Link>
				</motion.div>
			</motion.div>
			<ScrollText />
		</div>
	);
};

export default Hero;
