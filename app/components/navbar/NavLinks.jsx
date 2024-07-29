"use client";
import React from "react";
import { motion } from "framer-motion";
import { Merriweather } from "next/font/google";

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] });
const linkVariants = {
	open: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};
const textVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};
const NavLinks = () => {
	const links = ["Home", "Services", "Projects", "Contact"];
	return (
		<motion.div
			className="absolute flex flex-col items-center justify-center gap-10 w-full h-full"
			variants={linkVariants}>
			{links.map((link, index) => (
				<motion.a
					key={index}
					href={`#${link}`}
					className={`text-textmain text-lg ${merri.className}`}
					variants={textVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					{link}
				</motion.a>
			))}
		</motion.div>
	);
};

export default NavLinks;
