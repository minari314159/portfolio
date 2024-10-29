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
				className="object-cover opacity-10"
			/>
			<div className="w-[80%] p-2 flex flex-col items-center gap-5">
				<h1 className="text-4xl md:text-5xl  ">The Approach</h1>
				<p className="text-center">
					As a professional with a background in physics and chemistry, I bring
					a unique perspective to machine learning engineering and data
					analysis. My experience in these scientific disciplines has honed my
					analytical skills and cultivated a rigorous, quantitative approach to
					problem-solving, which I now apply to data-driven projects. Leveraging
					the mathematical foundations from physics, I approach machine learning
					with a focus on precision, model optimization, and a deep
					understanding of underlying principles. This scientific mindset,
					combined with technical expertise in data analysis, allows me to craft
					robust models that not only capture complex patterns but also deliver
					actionable insights for diverse fields, including environmental
					science, healthcare, and sustainability. My work aims to bridge the
					gap between theory and application, transforming raw data into
					impactful solutions.
				</p>
			</div>

			<ServiceCard />
		</motion.section>
	);
};

export default Services;
