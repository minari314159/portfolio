import React from "react";
import { web_projects } from "@/app/data";

import SingleProject from "./SingleProject";
import HireSVG from "./HireSVG";

const Projects = () => {
	return (
		<section className=" w-full max-w-[1336px] flex flex-col items-center min-h-screen overflow-hidden gap-5">
			<h1 className="  text-center px-5 py-2 text-3xl md:text-5xl lg:text-6xl  text-textmain   [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
				Featured Works
			</h1>

			<div className="grid grid-cols-2 auto-rows-auto gap-4 justify-center items-center w-[90%]">
				{web_projects.map((project, index) => (
					<SingleProject project={project} key={index} i={index} />
				))}

				<HireSVG />
			</div>
		</section>
	);
};

export default Projects;
