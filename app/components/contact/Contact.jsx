'use client'
import React from "react";
import { Form } from "..";
import { motion } from "framer-motion";

const variants = {
	initial: { y: 500, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren:0.1,
		},
	},
};
const Contact = () => {
	return (
		<motion.section
			id="Contact"
			className="flex items-center justify-center max-w-[1366px] w-[90%] gap-2"
			variants={variants} initial="initial" whileInView="animate">
			<motion.div
				className="flex flex-col justify-start items-start gap-5"
				variants={variants}>
				<motion.h1 className="text-5xl leading-[4rem]" variants={variants}>
					Shall We Work Together?
				</motion.h1>
				<motion.div variants={variants}>
					<h2 className="font-semibold">Name</h2>
					<h3 className="font-light">Sarah Olsen</h3>
				</motion.div>
				<motion.div variants={variants}>
					<h2 className="font-semibold">Email</h2>
					<h3 className="font-light">sjolsen95@gmail.com</h3>
				</motion.div>
			</motion.div>
			<Form />
		</motion.section>
	);
};

export default Contact;
