"use client";
import React from "react";
import { textVariant } from "@/app/motionVariant";
import { ScrollText } from "..";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className=" w-full sm:w-[80%] md:w-[90%] lg:w-[70%] h-full flex flex-col items-center px-10 overflow-hidden">
			<motion.div
				className=" w-full   flex flex-col items-center md:items-start justify-center md:gap-5 relative z-[10]"
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
						className=" text-6xl sm:text-7xl lg:text-8xl [text-shadow:_4px_3px_0_rgb(255_255_0_/_10%)]">
						Full Stack Developer
					</motion.h2>
				</motion.div>
				<motion.div className="flex w-full  justify-start gap-5 my-5 text-md sm:text-lg z-[10]">
					<Link
						href="/portfolio"
						className="bg-tertiary p-2 rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)]">
						Latest Projects
					</Link>
					<Link
						href="/contact"
						className="bg-tertiary p-2 rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)] ">
						Contact
					</Link>
				</motion.div>
			</motion.div>
			<ScrollText />
		</div>
	);
};

export default Hero;
