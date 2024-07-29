"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		// offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
	return (
		<section className="grid grid-cols-2 justify-center items-center gap-5 w-[95%] max-w-[1366px] overflow-hidden">
			<Image
				src={project.image}
				ref={ref}
				width={350}
				height={350}
				alt="project image"
				className="rounded-sm object-cover aspect-square shadow-xl w-full col-span-1 border border-textmain"
			/>
			<motion.div
				className="p-2 col-span-1 max-w-[500px] flex flex-col gap-5 "
				style={{ y }}>
				<h2 className="text-3xl font-bold">{project.name}</h2>
				<p>{project.description}</p>
				<Link
					href={project.demo}
					rel="noopener noreferrer"
					target="_blank"
					className="bg-secondary p-2 px-4 rounded-md cursor-pointer hover:bg-tertiary transition-colors duration-75 text-center w-fit">
					Demo
				</Link>
				<div className="w-full text-right">
					<p className="text-blue-300">{project.tags[0].name}</p>
					<p className="text-green-300">{project.tags[1].name}</p>
					<p className="text-red-300">{project.tags[2].name}</p>
				</div>
			</motion.div>
		</section>
	);
};

export default SingleProject;
