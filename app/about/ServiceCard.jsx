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
			className="flex flex-wrap items-start justify-center gap-2 px-5 flex-1 w-full max-w-[1366px] z-40 "
			variants={serviceVariants}>
			{services.map((service, i) => (
				<motion.div
					key={i}
					initial={{ translateX:  -500, opacity: 0 }}
					animate={{
						translateX: 0,
						opacity: 1,
						transition: { duration: 0.5, delay: i * 0.5 },
					}}
					className={` rounded-sm  backdrop-filter backdrop-blur-md bg-opacity-40 h-full min-h-[300px] p-5  flex flex-col gap-5 max-w-[200px] border border-tertiary shadow-inner shadow-primary ${
						hover === i ? " bg-shadowPrimary" : "bg-secondary"
					}`}
					onMouseEnter={() => setHover(i)}
					onMouseLeave={() => setHover(-1)}>
					<h2 className="text-lg md:text-xl font-semibold font-['Tahoma'] [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
						{service.title}
					</h2>
					<p className="text-xs md:text-sm">{service.description}</p>

					{hover === i && (
						<div className="backdrop-opacity-85 backdrop-blur-xl  p-5 shadow-sm shadow-shadowPrimary bottom-0 left-0 absolute flex flex-wrap items-center justify-center gap-1 h-full">
							{service.skills.map((s, i) => (
								<p key={i} className="bg-primary p-2 rounded-sm shadow-lg border border-textmain">
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
