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
			<body
				className={`${lora.className} bg-gradient-to-b from-primary to-[#2f0433] text-textmain min-h-screen `}>
				<Nav />
				<div className="h-[calc(100vh-6.25rem)]">{children}</div>
			</body>
		</html>
	);
}
