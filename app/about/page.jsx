"use client";
import { motion } from "framer-motion";
import { serviceVariants } from "@/app/motionVariant";
import React from "react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import ScrollText from "./ScrollText";

const Services = () => {
	return (
		<motion.section
			className=" w-full max-w-[1336px] min-h-[90vh] flex flex-col items-center justify-between gap-5 px-5 overflow-hidden"
			variants={serviceVariants}>
			<motion.div
				className="flex-1  self-end flex items-center justify-end w-full "
				variants={serviceVariants}
				initial={serviceVariants.initial}
				animate={serviceVariants.animate}>
				<p className="text-textmain text-right text-sm md:text-md ">
					<i>
						Our collaborative process is very hands on <br /> as we work closely
						with you to create <br /> a website you're 100% happy
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
					Holistic <i>Approach</i>
				</h1>
				<h1 className="text-4xl md:text-5xl w-[70%] font-['Tahoma'] font-bold">
					{" "}
					Quality Over <br />
					<i>Quantity</i>
				</h1>
				<Link
					href="/portfolio"
					className=" hover:scale-[103%] p-2 rounded-sm cursor-pointer border border-textmain transition-colors duration-75 drop-shadow-[4px_5px_1px_rgba(255_255_255_/_10%)] z-40">
					[ Portfolio ]
				</Link>
			</motion.div>
			<ServiceCard />
			<ScrollText />
		</motion.section>
	);
};

export default Services;
