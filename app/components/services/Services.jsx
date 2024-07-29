"use client";
import { motion } from "framer-motion";
import React from "react";
import { Card } from "..";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/app/data";


const variants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};
const Services = () => {
	const [hover, setHover] = useState(-1);

	return (
		<motion.div
			className="w-full bg-primary h-screen  flex flex-col items-between justify-center gap-3 "
			variants={variants}
			initial="initial"
			whileInView={"animate"}>
			<motion.div
				className="flex-1 self-end flex items-center"
				variants={variants}
				initial="initial"
				animate="animate">
				<p className="text-textmain text-right">
					I specialize in building Full Stack <br /> 3D interactive sites with
					Three.js & Motion
				</p>
				<hr className="w-[200px] border-accent" />
			</motion.div>
			<motion.div
				className="flex-1 flex flex-col items-center gap-3 "
				variants={variants}
				initial="initial"
				animate="animate">
				<h1 className="text-5xl text-right  w-[50%]">
					Unique <i>Ideas</i>
				</h1>
				<h1 className="text-5xl w-[50%]">
					{" "}
					Data Driven <br />
					<i>Design</i>
				</h1>
				<Link
					href="#Projects"
					className="bg-tertiary p-2 rounded-lg cursor-pointer hover:bg-secondary transition-colors duration-75 w-fit">
					Past Projects
				</Link>
			</motion.div>
			<div className="flex gap-2 px-5 flex-1 max-w-[1366px] m-auto">
				{services.map((service, index) => (
					<motion.div
						key={index}
						variants={variants}
						initial="initial"
						animate="animate"
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(-1)}>
						<Card
							key={index}
							style={`  ${hover === index ? " bg-tertiary" : ""}`}>
							<h2 className="text-xl font-bold">{service.title}</h2>
							<p className="text-sm">{service.description}</p>
							<button className="bg-primary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75 w-full">
								Go
							</button>
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Services;
