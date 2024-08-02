"use client";
import React, { useEffect, useState } from "react";
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
				<NavLinks setOpen={setOpen} w={width} />
				<button
					onClick={() => setOpen((prev) => !prev)}
					className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[35px] bg-transparent cursor-pointer z-[60] hover:scale-105">
					<svg widht="23" height="23" viewBox="0 0 23 23">
						<motion.path
							strokeWidth="3"
							stroke="white"
							
							variants={{
								closed: { d: "M 2 2.5 L 20 2.5" },
								open: { d: "M 3 16.5 L 17 2.5" },
							}}
						/>
						<motion.path
							strokeWidth="3"
							stroke="white"
							
							d="M 2 9.423 L 15 9.423"
							variants={{
								close: { opacity: 1 },
								open: { opacity: 0 },
							}}
						/>
						<motion.path
							strokeWidth="3"
							stroke="white"
							
							variants={{
								closed: { d: "M 2 16.346 L 20 16.346" },
								open: { d: "M 3 2.5 L 17 16.346" },
							}}
						/>
					</svg>
				</button>
			</motion.div>
		</motion.div>
	);
};

export default Sidebar;
