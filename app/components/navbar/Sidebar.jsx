"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NavLinks } from "..";
import { motion } from "framer-motion";

const variants = {
	open: {
		clipPath: "circle(1200px at 50px 50px",
		transition: { type: "spring", stiffness: 20 },
	},
	closed: {
		clipPath: "circle(20px at 50px 50px",
		transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
	},
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	return (
		<motion.div animate={open ? "open" : "closed"}>
			<motion.div
				className={`${
					open
						? " bg-secondary  backdrop-filter backdrop-blur-md bg-opacity-40  shadow-xl"
						: "bg-secondary shadow-xl"
				}  text-secondary w-[250px] h-screen fixed top-0 left-[1px] z-50`}
				variants={variants}>
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
