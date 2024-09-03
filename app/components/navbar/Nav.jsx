import React from "react";
import { Socials } from "..";
import dynamic from "next/dynamic";

const DynamicSidebar = dynamic(() => import("./Sidebar"), {
	ssr: false,
});

const Nav = () => {
	return (
		<nav className="h-[6.25rem] w-screen max-w-[1336px] px-3 py-8 z-[60] relative flex justify-between items-center gap-2">
			<DynamicSidebar />
			<hr className="w-full border-t-primary sm:border-t-textmain flex-2 " />
			<span className="text-nowrap text-lg flex-1">
				<i>OLSEN </i>
			</span>
			<hr className="w-full border-t-textmain flex-2  sm:block" />
			<Socials />
		</nav>
	);
};

export default Nav;
