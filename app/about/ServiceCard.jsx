"use client";
import { motion } from "framer-motion";
import React from "react";
import { serviceVariants } from "@/app/motionVariant";
import { useState } from "react";
import { services } from "@/app/data";

const ServiceCard = () => {
	const [hover, setHover] = useState(-1);

	return (
		<motion.div
			className="flex flex-wrap items-start justify-center gap-2 px-5 flex-1 w-full max-w-[1366px] "
			variants={serviceVariants}>
			{services.map((service, index) => (
				<motion.div
					key={index}
					variants={serviceVariants}
					initial={serviceVariants.initial}
					animate={serviceVariants.animate}
					className={` rounded-sm  backdrop-filter backdrop-blur-md bg-opacity-30 h-fit p-5  flex flex-col gap-5 max-w-[200px] border border-primary shadow-inner shadow-primary ${
						hover === index ? " bg-tertiary" : "bg-textmain "
					}`}
					onMouseEnter={() => setHover(index)}
					onMouseLeave={() => setHover(-1)}>
					<h2 className="text-lg md:text-xl font-bold [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">{service.title}</h2>
					<p className="text-xs md:text-sm">{service.description}</p>

					{hover === index && (
						<div className="backdrop-filter backdrop-blur-lg bg-opacity-30  p-5 shadow-sm shadow-tertiary bottom-0 left-0 absolute flex flex-wrap items-center justify-center gap-1 h-full">
							{service.skills.map((s, index) => (
								<p key={index} className="bg-primary p-2 rounded-md shadow-lg">
									{s}
								</p>
							))}
						</div>
					)}
				</motion.div>
			))}
		</motion.div>
	);
};

export default ServiceCard;
