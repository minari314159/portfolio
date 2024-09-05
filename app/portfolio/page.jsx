import React from "react";
import { web_projects } from "@/app/data";

import SingleProject from "./SingleProject";
import HireSVG from "./HireSVG";

const Projects = () => {
	return (
		<section className=" w-full max-w-[1336px] flex flex-col items-center justify-center min-h-screen overflow-hidden gap-5">
			<h1 className="  text-center px-5 py-2 text-3xl md:text-5xl lg:text-6xl  text-textmain   [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]">
				Featured Works
			</h1>
			<p className="text-center w-[75%] max-w-[700px] my-5">
				In developing the following projects, two themes arose, the desire to
				create sustainable materials using {""}
				<i className="font-bold">
					data, programing and extensive research into novel bio-based materials
				</i>{" "}
				and integrating said materials into{" "}
				<i className="font-bold">
					nature centric design agendas across multiple scales.
				</i>
			</p>

			<div className="grid grid-cols-2 auto-rows-auto gap-2 justify-center items-center w-[80%] ">
				{web_projects.map((project, index) => (
					<SingleProject project={project} key={index} i={index} />
				))}

				<HireSVG />
			</div>
		</section>
	);
};

export default Projects;
