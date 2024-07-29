import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
	title: "SJO Portfolio",
	description:
		"Portfolio of SJ Olsen, full-stack web developer using Nextjs, Reactjs, Nodejs and Typescript.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${lora.className} bg-primary text-textmain  `}>
				{children}
			</body>
		</html>
	);
}
