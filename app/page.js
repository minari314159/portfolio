import { Hero } from "./components";
import Image from "next/image";

export default function Home() {
	return (
		<main className=" w-full max-w-[1336px] h-full flex flex-col items-center ">
			<Hero />
			<div className="absolute bottom-0 md:bottom-[0] md:right-[-2rem] w-[550px] sm:w-[600px] md:w-[650px] lg:right-[5%] xl:w-[700px] xl:right-[10%] z-0">
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
