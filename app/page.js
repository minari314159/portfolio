import { Hero } from "./components";
import Image from "next/image";

export default function Home() {
	return (
		<main className=" w-full h-full  relative">
			<Hero />
			<div className="absolute bottom-5 md:bottom-[-2rem] md:right-[-2rem] w-[450px] md:w-[600px]  z-0">
				<Image
					src="./assets/heroprofile.svg"
					width={700}
					height={700}
					alt="Profile illustration"
					className="aspect-square"
				/>
			</div>
		</main>
	);
}
