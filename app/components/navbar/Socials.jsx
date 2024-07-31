"use client";
import React from "react";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";

const Socials = () => {
	return (
		<div className="flex gap-6 md:gap-16 px-5 ">
			<motion.a
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				href="https://github.com/minari314159"
				rel="noopener noreferrer"
				target="_blank">
				<SlSocialGithub className="w-5 h-5" />
			</motion.a>
			<motion.a
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				href="https://www.linkedin.com/in/sj-olsen"
				rel="noopener noreferrer"
				target="_blank">
				<SlSocialLinkedin className="w-5 h-5" />
			</motion.a>
		</div>
	);
};

export default Socials;
