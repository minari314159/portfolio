"use client";
import React from "react";
import { textVariant } from "@/app/motionVariant";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className=" w-full sm:w-[80%] md:w-[90%] lg:w-[70%] h-full flex flex-col items-center justify-center px-10 overflow-hidden">
			<motion.div
				className=" w-full  h-full flex flex-col items-center  justify-center md:gap-5 relative z-[10] "
				variants={textVariant}
				initial={textVariant.initial}
				animate={textVariant.animate}>
				<motion.div className="h-full w-full flex flex-col justify-center md:items-start items-center gap-5 md:gap-10 ">
					<motion.h2
						variants={textVariant}
						className="font-['Tahoma'] text-5xl md:text-6xl lg:text-7xl font-bold ">
						Bio-Designer & <br />
						Data Scientist
					</motion.h2>
					<motion.h1
						variants={textVariant}
						className=" text-md  md:text-lg lg:text-xl font-light tracking-wider text-textmain w-[75%]">
						<i>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
							earum porro, quia ratione deleniti maiores itaque.
						</i>
					</motion.h1>
				</motion.div>
				<motion.div className="flex w-full  md:justify-start justify-center gap-5 my-5 text-md text-textmain sm:text-lg z-[10]">
					<Link
						href="/portfolio"
						className="hover:scale-[103%] p-2 rounded-sm cursor-pointer border border-textmain  transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)]">
						[ Portfolio ]
					</Link>
					<Link
						href="/contact"
						className=" hover:scale-[103%] p-2 rounded-sm cursor-pointer border border-textmain   transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)] ">
						[ Contact ]
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Hero;
