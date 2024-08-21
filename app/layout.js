import { Lora } from "next/font/google";

import "./globals.css";
import { Nav } from "./components";

const lora = Lora({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
	title: "SJO Portfolio",
	description:
		"Portfolio of SJ Olsen, a web developer and designer specializing in sustainable material design and web development.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${lora.className} `}>
				<section className="min-h-screen  w-full  flex flex-col items-center bg-primary text-textmain">
					<Nav />
					{children}
				</section>
			</body>
		</html>
	);
}
