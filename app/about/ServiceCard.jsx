"use client";
import { motion } from "framer-motion";
import React from "react";
import { serviceVariants } from "@/app/motionVariant";
import { useState } from "react";
import { services } from "@/app/data";



const ServiceCard = () => {
	const [hover, setHover] = useState(-1);
	return (
		<div className="flex flex-wrap items-start justify-center gap-2 px-5 flex-1 w-full max-w-[1366px] ">
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
					<h2 className="text-lg md:text-xl font-bold">{service.title}</h2>
					<p className="text-xs md:text-sm">{service.description}</p>
					<button className="bg-primary p-2 rounded-lg cursor-pointer hover:bg-tertiary transition-colors duration-75 w-full shadow-md shadow-primary text-xs md:text-sm">
						More Details
					</button>
				</motion.div>
			))}
		</div>
	);
};

export default ServiceCard;
