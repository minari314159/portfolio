"use client";
import React from "react";
import { motion } from "framer-motion";
import { SlRocket, SlSocialGithub } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project, i }) => {
	return (
		<motion.div
			className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 w-full h-full  border border-textmain rounded-sm   ${
				i === 0 && "col-span-2 "
			}`}
			initial={{ translateX: i % 2 === 0 ? 500 : -500, opacity: 0 }}
			animate={{
				translateX: 0,
				opacity: 1,
				transition: { duration: 0.5, delay: i * 0.1 },
			}}>
			<div className="relative flex items-center justify-start">
				<Image
					src={project.image}
					width={350}
					height={350}
					alt="project image"
					className="rounded-sm  object-cover aspect-square w-full h-full "
				/>
				<div
					className={`absolute  flex ${
						i === 0 ? "gap-5 bottom-4 right-6" : "gap-2 bottom-2 right-3"
					}`}>
					<Link
						href={project.gitlink}
						rel="noopener noreferrer"
						target="_blank"
						className="border border-textmain bg-primary rounded-md p-2  w-fit h-fit">
						<SlSocialGithub
							className={`${i === 0 ? "w-5 h-5" : "w-[0.85rem] h-[0.85rem]"}`}
						/>
					</Link>
					<Link
						href={project.demo}
						rel="noopener noreferrer"
						target="_blank"
						className="border border-textmain bg-primary rounded-md p-2  w-fit h-fit">
						<SlRocket
							className={`${i === 0 ? "w-5 h-5" : "w-[0.85rem] h-[0.85rem"}`}
						/>
					</Link>
				</div>
			</div>
			<div className=" w-full  p-2 col-span-1 max-w-[500px] flex flex-col justify-start gap-5 ">
				<h2
					className={`${
						i === 0 ? "text-5xl" : " text-xl md:text-2xl "
					} font-semibold font-['Tahoma']`}>
					{project.name}
				</h2>
				<div
					className={`w-full  ${i === 0 ? "text-md" : "text-[12px] "}`}>
					<p className="text-blue-800">{project.tags[0].name}</p>

					<p className="text-red-800">{project.tags[2].name}</p>
				</div>
				<p className={`${i === 0 ? "flex" : "hidden xl:flex text-[13px]"}`}>
					<i>{project.description}</i>
				</p>
			</div>
		</motion.div>
	);
};

export default SingleProject;
