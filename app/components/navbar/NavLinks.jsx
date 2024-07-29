"use client";
import React from "react";
import { navVariants, linkVariants } from "@/app/motionVariant";
import { motion } from "framer-motion";
import { Merriweather } from "next/font/google";

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] });

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
					className={`text-textmain text-md md:text-lg ${merri.className}`}
					variants={navVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					{link}
				</motion.a>
			))}
		</motion.div>
	);
};

export default NavLinks;
