import { Junge } from "next/font/google";
import "./globals.css";
import { Nav } from "./components";
const lora = Junge({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
	title: "SJO Portfolio",
	description:
		"Portfolio of SJ Olsen, full-stack web developer using Nextjs, Reactjs, Nodejs and Typescript.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${lora.className} min-h-screen w-screen bg-gradient-to-b from-primary to-[#2f0433]`}>
				<section className="min-h-screen h-full w-full  flex flex-col items-center bg-gradient-to-b from-primary to-[#2f0433] text-textmain">
					<Nav />
					{children}
				</section>
			</body>
		</html>
	);
}
