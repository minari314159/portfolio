"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NavLinks } from "..";
import { motion } from "framer-motion";
import { sidebarVariants } from "@/app/motionVariant";

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div animate={open ? "open" : "closed"}>
			<motion.div
				className={`  bg-secondary  backdrop-filter backdrop-blur-md bg-opacity-40  shadow-xl
					 text-secondary w-[150px] md:w-[250px] h-screen fixed top-0 left-[1px] z-50`}
				variants={sidebarVariants}>
				<NavLinks />
			</motion.div>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[35px] bg-transparent cursor-pointer z-[55]">
				<Image src={"/logo_light.svg"} width={30} height={30} alt="logo" />
			</button>
		</motion.div>
	);
};

export default Sidebar;
