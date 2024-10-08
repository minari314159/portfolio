"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Success from "./Success";

const Form = () => {
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
		setForm({ ...form, [name]: value });
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
		<motion.div
			initial={{ translateX: 500 }}
			animate={{ translateX: 0, transition: { delay: 0.5, duration: 0.5 } }}
			className="w-[70%]  flex flex-col items-center justify-center gap-1 ">
			<motion.h1 className=" text-5xl lg:text-6xl md:leading-[4rem] text-center z-[10] w-full">
				Shall We <br />
				Work Together?
			</motion.h1>

			<motion.form
				ref={formRef}
				onSubmit={handleSubmit}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="bg-primary border border-textmain rounded-sm   h-full p-5   flex flex-col items-center justify-center gap-2 w-full  min-w-[350px] max-w-[380px] text-sm md:text-md lg:text-lg ">
				<label className="w-full p-2 rounded-sm text-textmain  border border-textmain shadow-inner  shadow-primary text-opacity-60  placeholder:text-textmain placeholder:text-opacity-60">
					Name:
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						className="grow bg-transparent focus:outline-none ml-2"
					/>
				</label>
				<label className="w-full p-2 rounded-sm text-textmain  border border-textmain shadow-inner  shadow-primary text-opacity-60  placeholder:text-opacity-60 ">
					Email:
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						className="grow bg-transparent focus:outline-none ml-2"
					/>
				</label>
				<textarea
					type="text"
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Your message..."
					rows={8}
					className="w-full p-2 rounded-sm focus:text-textmain bg-primary border border-textmain placeholder:text-textmain placeholder:text-opacity-60 shadow-inner  shadow-primary"
				/>
				{error && (
					<p className="text-md text-red-800">An error has occurred!</p>
				)}
				<button
					type="submit"
					disabled={loading}
					className=" text-secondary p-2 px-4 rounded-sm cursor-pointer bg-textmain hover:bg-opacity-80 transition-colors duration-75 text-center w-[50%] mt-4 disabled:bg-tertiary disabled:text-primary shadow  ">
					{loading ? "Sending..." : "Send Message"}
				</button>
				{success ? <Success setSuccess={setSuccess} /> : null}
			</motion.form>
		</motion.div>
	);
};

export default Form;
