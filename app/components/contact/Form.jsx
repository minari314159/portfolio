"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { Card } from "..";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Form = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-100px" });
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const [loading, setLoading] = useState(false);
	//implementing the email and content info
	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({ ...form, [name]: value }); //allows to update/write in form
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_zn3vwg8",
				"template_heshpnx",
				{
					from_name: form.name,
					to_name: "SJ Olsen",
					from_email: form.email,
					to_email: "sjolsen95@gmail.com",
					message: form.message,
				},
				"sOKa4Pdm26w0f2I8p"
			)
			.then(
				() => {
					setLoading(false);
					setForm({
						//resets form
						name: "",
						email: "",
						message: "",
					});
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, "4000");
				},
				(error) => {
					setLoading(false);
					setSuccess(false);
					console.log(error);
					setError(true);
				}
			);
	};

	return (
		<div ref={ref} className="w-[50%] flex items-center justify-start relative">
			<motion.div
				initial={{ opacity: 1 }}
				whileInView={{ opacity: 0 }}
				transition={{ delay: 3, duration: 1 }}
				className="  absolute m-auto w-full bg-none">
				<svg
					viewBox="-102.4 -102.4 1228.80 1228.80"
					class="icon"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					fill="#000000"
					transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
					<g
						id="BG_Blob"
						stroke-width="0"
						className="drop-shadow-[2px_4px_5px_#210124]">
						<path
							transform="translate(-102.4, -102.4), scale(38.4)"
							d="M16,30.027692668139935C18.23628751683834,29.982133911331182,20.276005128630757,28.957996059722277,22.287962575259822,27.980711714588892C24.3482731503328,26.97994041373205,26.557258048175147,26.068351532861072,27.92842936652905,24.233600302285147C29.315327571128,22.377805075598015,29.583026280491776,19.980323329300415,29.973553092788187,17.696696529187896C30.37900751784178,15.325779700630095,31.22300625440617,12.79612203020653,30.26141153665587,10.591360025470227C29.302750695128662,8.393324865946223,26.934274030511062,7.20693780782981,24.867855767829468,5.990260062805536C23.048661981816732,4.919144580862469,21.071951160270622,4.156114891728787,18.971528033364162,3.9440368525970335C17.0216106706277,3.7471552598071236,15.070101961828772,4.106227054790867,13.243529903211115,4.816561199935148C11.544351908804815,5.477353169466322,10.351329006024839,6.907073304665077,8.817628632032484,7.89277865946803C6.993955537621437,9.064848748941714,4.063642117124873,9.154855678864982,3.323208071765567,11.192326972991715C2.5792351282575425,13.23953634363727,4.866923879122183,15.175614813903843,5.403832913621001,17.286607622182572C5.86283578314983,19.09129276304472,5.593662587008006,20.9852645780853,6.256532681094244,22.72542989501655C7.031512677658556,24.759905915835894,7.833994729954127,26.93404529359284,9.576118442347108,28.239683698773167C11.380962228314349,29.592327799502986,13.745006278219687,30.07363251701997,16,30.027692668139935"
							fill="#514A59"
							strokewidth="0"></path>
					</g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke="#CCCCCC"
						stroke-width="2.048"></g>
					<g id="SVGRepo_iconCarrier" className="drop-shadow-xl">
						<path
							d="M262.8 139.5l497.4-2.5v219.2s59.7 25.8 66.9 30.5c21.6 14.3 53.6 20 53.6 92.3v323.7c0 41.2-33.4 74.5-74.5 74.5H216.4c-41.2 0-74.5-33.4-74.5-74.5V497c0-5.4 0.6-15.2 0-27-1.3-25.8 3.7-51.1 29.7-70.2 15.1-11.1 34.5-18.5 51-25.9 22.4-10.1 40.2-17.9 40.2-17.9V139.5z"
							fill="none"></path>
						<path
							d="M262.8 399.8l-38.7 17.3-0.4 0.2c-16.2 6.4-26.4 12.4-32.6 18.5l71.8 38.8v-74.8zM797.8 416.7L760.2 400v74.4l70.6-38.2c-6.5-5.6-16.9-11.5-33-19.5z"
							fill="none"></path>
						<motion.path
							strokeWidth={3}
							stroke={"#210124"}
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ delay: 1, duration: 2 }}
							fill="none"
							d="M252.6 753.6V560.7c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0 19.5 15.9 35.4 35.4 35.4h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H267.9c-8.4-0.1-15.3-7-15.3-15.4z"></motion.path>
						<motion.path
							strokeWidth={3}
							stroke={"#E2BE4F"}
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 3 }}
							className="drop-shadow-xl"
							d="M302.8 368.6zM878 437.7c0 0.2 0.1 0.3 0.1 0.4 0-0.1-0.1-0.3-0.1-0.4zM607.2 475.5c15.4-8.5 27.6-20.2 35.1-33.4 2.4-2.2 3.8-5.1 4-8.3 0.3-0.8 0.7-1.7 1-2.5h-1c-0.2-6.8-5.9-12.2-12.8-12.2-6.6 0-12.1 5-12.7 11.6h-0.2c-9.9 12.4-23 21.1-39.2 27.3-16.2 6.2-35.6 10.2-58.2 10.2-23.4 0-42.8-4.6-61-12-17.9-7.2-33-19.9-43.2-36.2-10-16.1-15-33.3-15-53 0-20.2 5.1-39.6 14.1-58.3 8.7-18.3 22.8-33.4 40.4-43.4 17.8-10.3 38.2-15.6 63.7-15.6 30.1 0 53.6 7.9 70.4 23.3 16.8 15.4 21.8 34.6 21.8 57.5 0 12.8-1.6 25.1-7.5 37-5.9 11.9-11.7 18.4-21.3 25.5-7.1 5.4-23.1 11.7-27.7 11.7-1.5 0-2.8-0.6-3.9-1.8-1.1-1.1-1.6-2.9-1.6-5.2 0.3-4.3 1-8.6 2-12.9l21-80.3c1-1.8 1.8-3.7 1.8-5.9l-0.1-0.6 0.1-0.4h-0.1v-0.1c0-6.7-5.6-12.2-12.4-12.2-3.3 0-6.4 1.2-8.8 3.5-2.3 2.3-3.7 5.4-3.7 8.7l0.1 1.1c0 0.8 0.3 1.5 0.5 2.2l-1.3 4.7c-8-12.7-26.8-20.5-43.7-20.5-14.3 0-35.7 9.9-50.3 32.2-10.8 17.1-17 36.7-17.8 56.8-0.6 17.7 4.7 33.4 15 44 10.3 10.6 23 13.7 30.9 13.7 14.5 0 27.4-5.3 38.5-15.9 1.1 4.8 3.9 9 7.9 11.8 3.9 2.7 9.8 4.1 17.7 4.1 29.1 0 55.9-15.2 70.7-35.6 12.7-17.3 19.8-40.6 19.8-64.3 0-19.9-3.2-38.3-13-55.1-9.8-16.8-22.4-29.8-40.9-38.9-18.5-9.1-39.6-13.7-63.4-13.7-28 0-53 5.7-74.8 17-21.8 11.3-39 28.3-51.5 50.8-12.6 22.6-18.9 46.9-18.9 73.1-0.2 23.1 5.5 45.8 16.6 66.1 11.2 20.9 29 37.4 50.6 47.2 22.7 10.4 49.5 15.6 80.7 15.6 32 0 59.3-6.1 81.6-18.4zM530 368.6c-3.7 10.9-8 19.2-13 24.9-3.5 4-7.1 6.9-10.6 8.8-4.7 2.6-8.2 4.6-13.6 4.6-7.2 0-16.3-2.8-21.1-8.4-4.9-5.6-7.3-14.3-7.3-26.1 0-8.8 4.6-19 8.1-30.4 3.5-11.4 8.7-17.2 15.6-23.4 6.9-6.2 13.2-7.9 21.3-7.9 7.6 0 15.6 2.2 20.5 7.8 5 5.6 8.1 10 8.1 20.5 0.1 9.3-4.4 18.7-8 29.6z"
							fill="none"></motion.path>
						<motion.path
							strokeWidth={3}
							stroke={"#E2BE4F"}
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ duration: 3 }}
							className="drop-shadow-xl"
							d="M878.1 438.1c0-0.2-0.1-0.3-0.1-0.4-8.7-30.2-37.2-44.3-62.8-57l-0.4-0.2-54.6-24.4V137l-497.4 2.5V356l-54.2 24.2c-31.1 12.3-66.7 32.3-66.7 77.5v345.1c0 41 33.4 74.4 74.4 74.4h590c41 0 74.4-33.4 74.4-74.4V457.7c0-7.2-0.9-13.7-2.6-19.6zM760.2 400l37.6 16.8c16.2 8 26.5 13.9 33 19.4l-70.6 38.2V400z m-457.4-31.4V179.3l417.4-2.1V496l-199 107.7c-6.1 3.3-13.5 3.3-19.6 0L302.8 496.2V368.6z m-40 31.2v74.8L191 435.7c6.2-6.1 71.8-35.9 71.8-35.9z m577.9 403c0 19-15.4 34.4-34.4 34.4h-590c-19 0-34.4-15.4-34.4-34.4V476.3L482.4 639c9 4.9 18.9 7.3 28.9 7.3 9.9 0 19.8-2.4 28.9-7.3l300.5-162.7v326.5z"
							fill="none"></motion.path>
					</g>
				</svg>
			</motion.div>

			<motion.form
				ref={formRef}
				onSubmit={handleSubmit}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 4, duration: 1 }}
				className="bg-tertiary border border-secondary rounded-sm  backdrop-filter backdrop-blur-md bg-opacity-40 h-fit p-5 shadow-sm shadow-tertiary flex flex-col items-center justify-center gap-2 w-full  min-w-[300px]">
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Name"
					className="w-full p-2 rounded-sm focus:text-textmain bg-transparent border border-primary shadow-inner  shadow-primary placeholder:text-textmain placeholder:text-opacity-60"
				/>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="Email"
					className="w-full p-2 rounded-sm focus:text-textmain bg-transparent border border-primary placeholder:text-opacity-60 placeholder:text-textmain shadow-inner  shadow-primary"
				/>
				<textarea
					type="text"
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Your message..."
					rows={8}
					className="w-full p-2 rounded-sm focus:text-textmain bg-transparent border border-primary placeholder:text-textmain placeholder:text-opacity-60 shadow-inner  shadow-primary"
				/>
				{error && (
					<p className="text-md text-red-800">An error has occurred!</p>
				)}
				<button
					type="submit"
					disabled={loading}
					className="bg-secondary p-2 px-4 rounded-md cursor-pointer hover:bg-tertiary transition-colors duration-75 text-center w-[50%] mt-4 disabled:bg-tertiary disabled:text-gray-500 shadow  shadow-primary">
					{loading ? "Sending..." : "Send Message"}
				</button>
				{success ? (
					<Card
						style={
							"absolute z-[999] bottom-0 w-full h-full rounded-sm flex justify-center items-center"
						}>
						<button onClick={() => setSuccess(false)}>
							<IoClose
								size={20}
								className="text-gray-300 absolute top-2 right-2"
							/>
						</button>
						<FaCheck
							size={60}
							className="border rounded-full p-2 border-accent text-accent"
						/>
						<p className="text-primary text-lg text-center font-semibold">
							Thank you for your message! <br /> I will get back to you as soon
							as I can.
						</p>
					</Card>
				) : null}
			</motion.form>
		</div>
	);
};

export default Form;
