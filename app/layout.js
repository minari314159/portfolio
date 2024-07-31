import { Lora } from "next/font/google";
import "./globals.css";
import { Nav } from "./components";
const lora = Lora({ subsets: ["latin"] });

export const metadata = {
	title: "SJO Portfolio",
	description:
		"Portfolio of SJ Olsen, full-stack web developer using Nextjs, Reactjs, Nodejs and Typescript.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={lora.className}>
				<section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-[#2f0433] text-textmain">
					<Nav/>
					{children}
				</section>
			</body>
		</html>
	);
}
