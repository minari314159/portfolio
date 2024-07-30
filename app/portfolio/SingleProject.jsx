"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlRocket, SlSocialGithub } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});
	const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 w-[95%] max-w-[1366px] min-h-screen">
			<div className="relative">
				<Image
					src={project.image}
					ref={ref}
					width={350}
					height={350}
					alt="project image"
					className="rounded-md object-center object-cover aspect-square w-full col-span-1 shadow-xl"
				/>
				<div className="absolute bottom-4 right-6 flex gap-5">
					<Link
						href={project.gitlink}
						rel="noopener noreferrer"
						target="_blank"
						className="rounded-full bg-primary p-2 shadow-xl">
						<SlSocialGithub className="w-5 h-5" />
					</Link>
					<Link
						href={project.demo}
						rel="noopener noreferrer"
						target="_blank"
						className="rounded-full bg-primary p-2 shadow-xl">
						<SlRocket className="w-5 h-5" />
					</Link>
				</div>
			</div>
			<motion.div
				className=" w-[95%] p-2 col-span-1 max-w-[500px] flex flex-col gap-5 "
				style={{ y }}>
				<h2 className="text-3xl font-bold">{project.name}</h2>
				<p>{project.description}</p>

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
