"use client";
import React from "react";
import Link from "next/link";
import { navVariants, linkVariants } from "@/app/motionVariant";
import { motion } from "framer-motion";
import { Merriweather } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from "next/image";

const merri = Merriweather({ weight: ["700"], subsets: ["latin"] });

const NavLinks = ({ setOpen}) => {
	const pathname = usePathname();
	const links = [
		{ link: "/", title: "Home" },
		{ link: "/about", title: "About" },
		{ link: "/portfolio", title: "Portfolio" },
		{ link: "/contact", title: "Contact" },
	];
	return (
		<motion.div
			className="absolute flex flex-col items-center justify-center gap-10 w-full h-full"
			variants={linkVariants}>
			<Image src={"/logo_dark.svg"} width={40} height={40} alt="logo" />
			{links.map((link, index) => (
				<motion.div
					key={index}
					className={`text-textmain text-md md:text-lg ${merri.className} `}
					variants={navVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					<Link
						href={link.link}
						onClick={() => setOpen(false)}
						className={`${
							pathname === link.link &&
							"underline underline-offset-8 [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)]"
						}`}>
						{link.title}
					</Link>
				</motion.div>
			))}
		</motion.div>
	);
};

export default NavLinks;
