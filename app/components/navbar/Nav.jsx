import React from "react";
import { Sidebar, Socials } from "..";

const Nav = () => {
	return (
		<div className="h-[100px] px-5 z-[999]">
			<div className="max-w-[1366px] h-full m-auto flex items-center justify-end">
				<Sidebar />
				
				<Socials />
			</div>
		</div>
	);
};

export default Nav;
