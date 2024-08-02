"use client";
import { motion } from "framer-motion";
import { serviceVariants } from "@/app/motionVariant";
import React from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<motion.section
			className=" w-full max-w-[1336px] min-h-[90vh] flex flex-col items-center justify-between"
			variants={serviceVariants}>
			<motion.div
				className="flex-1  self-end flex items-center justify-end w-full "
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<p className="text-textmain text-right text-sm md:text-md ">
					<i>
						Specialize in Full Stack 3D interactive sites <br /> with
						Three.js & SVG Motion
					</i>
				</p>
				<hr className=" w-[20%]  border-accent" />
			</motion.div>
			<motion.div
				className="flex-1 flex flex-col items-center justify-center gap-5 w-full"
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
					href="/portfolio"
					className="bg-accent p-2 rounded-lg cursor-pointer  transition-colors duration-75 w-fit  text-sm md:text-[1.05rem] lg:text-lg text-primary  shadow-md shadow-[#8a732f] hover:scale-105">
					Past Projects
				</Link>
			</motion.div>
			<ServiceCard />
		</motion.section>
	);
};

export default Services;
