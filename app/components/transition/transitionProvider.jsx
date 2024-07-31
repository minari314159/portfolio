"use client";
import React from "react";
import { Nav } from "..";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const TransitionProvider = ({ children }) => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="sync">
			<div
				key={pathname}
				className="bg-gradient-to-b from-primary to-[#2f0433] text-textmain min-h-screen h-full max-w-[1366px]">
				{/* <motion.div
					className="h-screen w-screen fixed bg-secondary  backdrop-filter backdrop-blur-md bg-opacity-40  z-[100]"
					animate={{ height: "0vh" }}
					exit={{ height: "140vh" }}
					transition={{ duration: 1, ease: "easeOut" }}
				/> */}
				<motion.div
					className="fixed m-auto top-0 bottom-0 left-0 right-0 text-textmain text-6xl z-[101] w-fit h-fit"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, ease: easeInOut }}>
					{pathname === "/" ? "Home" : pathname.substring(1).toUpperCase()}
				</motion.div>
				<motion.div
					className="h-screen w-screen fixed bg-secondary  backdrop-filter backdrop-blur-md bg-opacity-40  z-[100] bottom-0"
					initial={{ height: "140vh" }}
					animate={{
						height: "0vh",
						transition: { delay: 1, duration: 1 },
					}}
				/>
				<Nav />
				<div className="h-[calc(100vh-6rem)]  ">{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
