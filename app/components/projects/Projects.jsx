"use client";
import React, { useRef } from "react";
import { web_projects } from "@/app/data";
import { motion, useScroll, useSpring, } from "framer-motion";
import { SingleProject } from "..";


const Projects = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});
	return (
		<div
			className="p-5 relative flex flex-col items-center max-w-[1366px]"
			ref={ref}>
			<div className="text-center w-full max-w-[1366px] sticky top-8  mb-5 z-40">
				<h1 className=" text-3xl md:text-4xl font-bold text-accent text-opacity-90">
					Featured Works
				</h1>
				<motion.div
					style={{ scaleX }}
					className="h-1 bg-textmain backdrop-filter backdrop-blur-md bg-opacity-50  shadow-xl rounded-full"></motion.div>
			</div>
			{web_projects.map((project, index) => (
				<SingleProject project={project} key={index} />
			))}
		</div>
	);
};

export default Projects;
