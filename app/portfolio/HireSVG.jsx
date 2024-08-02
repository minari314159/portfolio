"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HireSVG = () => {
	return (
		<motion.div
			className=" flex flex-col items-center justify-center text-center col-span-2"
			initial={{  opacity: 0 }}
			animate={{
				
				opacity: 1,
				transition: { duration: 0.6,ease:"anticipate", delay: 0.5 },
			}}>
			<h1 className="text-3xl lg:text-4xl xl:text-5xl">
				Do you have a project?
			</h1>
			<div className="relative">
				<motion.svg
					animate={{ rotate: 360 }}
					transition={{ duration: 10, ease: "linear", repeat: Infinity }}
					viewBox="0 0 200 200"
					className="w-[250px] h-[250px] ">
					<defs>
						<path
							id="circlePath"
							d="M 100, 100 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
						/>
					</defs>
					<text fill="#ffffff">
						<textPath xlinkHref="#circlePath" className="text-2xl">
							Full Stack Developer UI Designer
						</textPath>
					</text>
				</motion.svg>
				<Link
					href="/contact"
					className="w-16 h-16 md:w-28 md:h-28 top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full absolute flex items-center justify-center z-50 shadow-xl">
					Hire
				</Link>
			</div>
		</motion.div>
	);
};

export default HireSVG;
