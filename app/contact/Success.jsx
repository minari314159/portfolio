import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Success = ({ setSuccess }) => {
	return (
		<div
			className="
				bg-textmain rounded-xs  backdrop-filter backdrop-blur-md bg-opacity-30  p-5 shadow-sm shadow-tertiary  gap-5 absolute z-[999] bottom-0 w-full h-full rounded-sm flex flex-col justify-center items-center
			">
			<button onClick={() => setSuccess(false)}>
				<IoClose size={20} className="text-gray-300 absolute top-2 right-2" />
			</button>
			<FaCheck className="w-10 h-10 md:w-14 md:h-14 border rounded-full p-2 border-accent text-accent" />
			<p className="text-primary text-md md:text-lg text-center font-semibold">
				Thank you for your message! <br /> I will get back to you as soon as I
				can.
			</p>
		</div>
	);
};

export default Success;
