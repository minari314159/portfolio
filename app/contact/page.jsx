"use client";
import React from "react";
import { contactVariants } from "@/app/motionVariant";
import Form from "./Form";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
	return (
		<section className="w-full max-w-[1336px] flex flex-col  items-center justify-center min-h-screen ">
			<div className="flex flex-col-reverse md:flex-row items-center gap-8 p-2">
				<motion.div
					className="flex flex-col justify-start items-center md:items-start gap-5 w-[400px]  md:w-[450px] relative"
					variants={contactVariants}
					initial={contactVariants.initial}
					animate={contactVariants.animate}>
					<Image
						src="/assets/profile.jpeg"
						width={350}
						height={700}
						alt="Profile illustration"
						className="rounded-sm rounded-t-full opacity-60 blur-[1px] border border-tertiary w-full hidden md:block"
					/>
					<div className="flex  gap-5 items-center justify-between w-full  absolute bottom-[-2rem] p-2 text-textmain ">
						<motion.div variants={contactVariants} className="w-full">
							<h3 className="font-light ">
								<i>Sarah Olsen</i>
							</h3>
						</motion.div>
						<motion.div variants={contactVariants} className="w-full">
							<h3 className="font-light text-right">
								<i>sjolsen95@gmail.com</i>
							</h3>
						</motion.div>
					</div>
				</motion.div>
				<Form />
			</div>
		</section>
	);
};

export default Contact;
