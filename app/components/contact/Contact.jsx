"use client";
import React from "react";
import { contactVariants } from "@/app/motionVariant";
import { Form } from "..";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.section
			id="Contact"
			className="flex flex-col md:flex-row items-center justify-center max-w-[1366px] w-[90%] gap-2"
			variants={contactVariants}
			initial={contactVariants.initial}
			whileInView={contactVariants.animate}>
			<motion.div
				className="flex flex-col justify-start items-center md:items-start  my-5 gap-5 w-[90%] max-w-[500px]"
				variants={contactVariants}>
				<motion.h1
					className=" text-4xl md:text-5xl md:leading-[4rem] text-center md:text-left"
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
		</motion.section>
	);
};

export default Contact;
