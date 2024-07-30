"use client";
import React from "react";
import { textVariant } from "@/app/motionVariant";
import { ScrollText } from "..";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="h-[calc(100vh-100px)] w-full bg-gradient-to-b from-primary to-[#2f0433] ">
			<div className="relative w-full h-full ">
				<motion.div
					className="max-w-[1366px] md:w-[80%]  px-[20%] flex flex-col items-center md:items-start justify-center gap-5"
					variants={textVariant}
					initial={textVariant.initial}
					animate={textVariant.animate}>
					<motion.div className="h-full flex flex-col justify-center gap-10">
						<motion.h1
							variants={textVariant}
							className="text-2xl font-bold tracking-wider text-tertiary">
							SARAH OLSEN
						</motion.h1>
						<motion.h2 variants={textVariant} className=" text-4xl md:text-5xl">
							Full Stack Developer & 3D Artist
						</motion.h2>
					</motion.div>
					<motion.div className="flex gap-5 text-sm sm:text-md">
						<Link
							href="/portfolio"
							className="bg-secondary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75 ">
							Latest Projects
						</Link>
						<Link
							href="/contact"
							className="bg-secondary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75">
							Contact
						</Link>
					</motion.div>
				</motion.div>
				<ScrollText />
				<Image
					src="./assets/heroprofile.svg"
					width={600}
					height={600}
					alt="Profile illustration"
					className="absolute bottom-10 sm:right-10 lg:top-10 md:right-0 z-0"
				/>
			</div>
		</div>
	);
};

export default Hero;
