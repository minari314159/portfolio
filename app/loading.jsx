import React from "react";

const loading = () => {
	return (
		<section className="min-h-screen w-screen  flex flex-col items-center bg-primary text-textmain">
			<div className=" w-full max-w-[1336px] h-full flex flex-col items-center overflow-clip">
				<h1 className="text-5xl animate-bounce duration-200 font-bold">
					Loading...
				</h1>
			</div>
		</section>
	);
};

export default loading;
