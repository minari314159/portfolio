"use client";
import { motion } from "framer-motion";
import { serviceVariants } from "@/app/motionVariant";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<motion.section
			className=" w-full max-w-[1336px] min-h-[100vh] flex flex-col items-center justify-between gap-5 px-5 overflow-hidden"
			variants={serviceVariants}>
			<motion.div
				className="flex-1  self-end flex items-center justify-end w-full "
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<p className="text-textmain text-right text-sm md:text-md ">
					<i>
						An engineer and designer specializing in <br /> sustainable material
						design and <br /> computational design.
					</i>
				</p>
				<hr className=" w-[20%]  border-t-textmain ml-2" />
			</motion.div>
			<motion.div
				className="flex-1 flex flex-col items-center justify-center gap-5 w-full"
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<h1 className="text-4xl md:text-5xl text-right  w-[70%]">
					Holistic <i>Perspective</i>
				</h1>
				<h1 className="text-4xl md:text-5xl w-[70%] font-['Tahoma'] font-bold">
					{" "}
					Data Driven <br />
					<i>Design</i>
				</h1>
				<Link
					href="/portfolio"
					className=" hover:scale-[103%] p-2 rounded-sm cursor-pointer border border-textmain transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)] z-40">
					[ Portfolio ]
				</Link>
			</motion.div>
			<Image
				src="/assets/divider.png"
				width={320}
				height={20}
				alt="Divider"
				className="object-cover opacity-5"
			/>
			<div className="w-[80%] p-2 flex flex-col items-center gap-5">
				<h1 className="text-4xl md:text-5xl  ">The Approach</h1>
				<p className="text-center">
					The edge between scientist and designer may appear to be opposing
					however it is finding that bridge between the two which creates a
					philosphy of relishing in the ambiguous edges of the natural and
					synthetic world.The approach entails three pillars, which can then be
					re-evaluated until the desired function is achieved. It is applying
					the scientific method to the design process, which creates ambiguous
					edges between the two worlds pushing for nature centric design.
				</p>
			</div>

			<ServiceCard />
		</motion.section>
	);
};

export default Services;
