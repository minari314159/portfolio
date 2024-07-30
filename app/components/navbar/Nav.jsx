import React from "react";
import { Sidebar, Socials } from "..";

const Nav = () => {
	return (
		<div className="h-[6.25rem] px-5 z-[60]">
			<div className="relative max-w-[1500px] h-full m-auto flex items-center justify-end">
				<Sidebar />

				<Socials />
			</div>
		</div>
	);
};

export default Nav;
