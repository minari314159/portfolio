import { Hero, HeroImage } from "./components";

export default function Home() {
	return (
		<main className=" w-full max-w-[90%] min-h-[90vh] flex flex-col items-center justify-center overflow-none">
			<Hero />
			<HeroImage />
		</main>
	);
}
