"use client";
import { motion } from "framer-motion";
import { serviceVariants } from "@/app/motionVariant";
import React from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<motion.section
			className="w-full  bg-primary h-full  flex flex-col items-center justify-center gap-3 my-10 md:my-2"
			variants={serviceVariants}
			initial={serviceVariants.initial}
			whileInView={serviceVariants.animate}>
			<motion.div
				className="mb-5 self-end flex items-center justify-end w-full"
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<p className="text-textmain text-right text-sm md:text-md ">
					<i>
						Specialize in building Full Stack <br /> 3D interactive sites with
						Three.js & Motion
					</i>
				</p>
				<hr className=" w-[20%] border-accent" />
			</motion.div>
			<motion.div
				className="flex-1 flex flex-col items-center gap-5 w-full"
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<h1 className="text-4xl md:text-5xl text-right  w-[50%]">
					Unique <i>Ideas</i>
				</h1>
				<h1 className="text-4xl md:text-5xl w-[50%]">
					{" "}
					Data Driven <br />
					<i>Design</i>
				</h1>
				<Link
					href="#Projects"
					className="bg-tertiary p-2 rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-75 w-fit shadow-sm shadow-tertiary text-sm md:text-md">
					Past Projects
				</Link>
			</motion.div>
			<ServiceCard />
		</motion.section>
	);
};

export default Services;
