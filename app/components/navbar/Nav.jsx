import React from "react";
import { Socials } from "..";
import dynamic from "next/dynamic";

const DynamicSidebar = dynamic(() => import("./Sidebar"), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

const Nav = () => {
	return (
		<nav className="h-[6.25rem] w-screen max-w-[1336px] px-3 py-8 z-[60] relative flex justify-between  ">
			<DynamicSidebar />
			<Socials />
		</nav>
	);
};

export default Nav;
