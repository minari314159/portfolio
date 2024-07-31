import React from "react";
import { Sidebar, Socials } from "..";


const Nav = () => {
	return (
		<nav className="h-[6.25rem] w-screen max-w-[1336px] px-3 py-8 z-[60] relative flex justify-between  ">
			<Sidebar />
			<Socials />
		</nav>
	);
};

export default Nav;
