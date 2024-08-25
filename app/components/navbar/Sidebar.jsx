"use client";
import React, { useEffect, useState } from "react";
import { NavLinks } from "..";
import { motion } from "framer-motion";
import { sidebarVariants } from "@/app/motionVariant";

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.div animate={open ? "open" : "closed"} className="relative">
			<motion.div
				className={` bg-transparent ${
					open && "bg-secondary border-r border-textmain"
				}  backdrop-filter backdrop-blur-md bg-opacity-40  
					 w-[150px] md:w-[20%] max-w-[300px] min-h-screen fixed top-0  z-50 `}
				variants={sidebarVariants}>
				<NavLinks setOpen={setOpen} />
				<button
					onClick={() => setOpen((prev) => !prev)}
					className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[35px] bg-transparent cursor-pointer z-[60] hover:scale-105">
					<svg widht="23" height="23" viewBox="0 0 23 23">
						<motion.path
							strokeWidth="1.5"
							stroke="#252427"
							variants={{
								closed: { d: "M 2 2.5 L 20 2.5" },
								open: { d: "M 3 16.5 L 17 2.5" },
							}}
						/>
						<motion.path
							strokeWidth="1.5"
							stroke="#252427"
							d="M 2 9.423 L 15 9.423"
							variants={{
								close: { opacity: 1 },
								open: { opacity: 0 },
							}}
						/>
						<motion.path
							strokeWidth="1.5"
							stroke="#252427"
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
