import { Hero, HeroImage } from "./components";


export default function Home() {
	return (
		<main className=" w-full max-w-[1336px] h-full flex flex-col items-center justify-center overflow-clip">
			<Hero />
			{/* <HeroImage/> */}
		</main>
	);
}
