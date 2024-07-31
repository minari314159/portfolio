"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavLinks } from "..";
import { motion } from "framer-motion";
import { sidebarVariants } from "@/app/motionVariant";

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	
	return (
		<motion.div animate={width > 1450 || open ? "open" : "closed"}>
			<motion.div
				className={`  bg-secondary  backdrop-filter backdrop-blur-md bg-opacity-40  shadow-xl
					 w-[150px] md:w-[20%] max-w-[300px] h-screen fixed top-[-0.5rem] left-0 z-50 `}
				variants={sidebarVariants}>
				<NavLinks />
				<button
					onClick={() => setOpen((prev) => !prev)}
					className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[35px] bg-transparent cursor-pointer z-[60] hover:scale-105">
					<Image src={"/logo_light.svg"} width={30} height={30} alt="logo" />
				</button>
			</motion.div>
		</motion.div>
	);
};

export default Sidebar;
