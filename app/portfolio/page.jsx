"use client";
import React, { useRef } from "react";
import { web_projects } from "@/app/data";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import SingleProject from "./SingleProject";


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
		<section
			className=" px-5 flex flex-col items-center max-w-[1366px] min-h-screen bg-primary "
			ref={ref}>
			<div className="text-center w-full max-w-[1366px] sticky top-8  mb-5 z-40">
				<h1 className=" text-3xl md:text-4xl font-bold text-accent text-opacity-90">
					Featured Works
				</h1>
				<motion.div
					style={{ scaleX }}
					transition={{ delay: 0.5 }}
					className="h-1 bg-textmain backdrop-filter backdrop-blur-md bg-opacity-50  shadow-xl rounded-full"></motion.div>
			</div>
			<div className="h-full">
				{web_projects.map((project, index) => (
					<SingleProject project={project} key={index} />
				))}
			</div>
			<div className="w-screen h-screen flex flex-col items-center justify-center text-center">
				<h1 className="text-5xl">Do you have a project?</h1>
				<div className="relative">
					<motion.svg
						animate={{ rotate: 360 }}
						transition={{ duration: 8, ease: "linear", repeat: Infinity }}
						viewBox="0 0 300 300"
						className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
						<defs>
							<path
								id="circlePath"
								d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
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
						className="w-16 h-16 md:w-28 md:h-28 top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full absolute flex items-center justify-center z-50">
						Hire
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
