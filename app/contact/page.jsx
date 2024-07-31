"use client";
import React from "react";
import { contactVariants } from "@/app/motionVariant";
import Form from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.section
			className="w-full max-w-[1336px] flex flex-col  items-center justify-center min-h-screen "
			variants={contactVariants}
			initial={contactVariants.initial}
			whileInView={contactVariants.animate}>
			<div className="flex flex-col md:flex-row items-center gap-8 p-2">
				<motion.div
					className="flex flex-col justify-start items-center md:items-start gap-5 p-5 max-w-[550px] "
					variants={contactVariants}>
					<motion.h1
						className=" text-5xl md:text-6xl lg:text-7xl md:leading-[4rem] text-center md:text-left"
						variants={contactVariants}>
						Shall We Work Together?
					</motion.h1>
					<div className="flex md:flex-col gap-5 items-center justify-center">
						<motion.div variants={contactVariants} className="w-full">
							<h2 className="font-semibold">Name</h2>
							<h3 className="font-light">Sarah Olsen</h3>
						</motion.div>
						<motion.div variants={contactVariants} className="w-full">
							<h2 className="font-semibold">Email</h2>
							<h3 className="font-light">sjolsen95@gmail.com</h3>
						</motion.div>
					</div>
				</motion.div>
				<Form />
			</div>
		</motion.section>
	);
};

export default Contact;
