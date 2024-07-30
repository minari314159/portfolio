import {
	Nav,
	Hero,
	Transition,
	Services,
	Projects,
	Contact,
} from "./components";

export default function Home() {
	return (
		<main className="relative flex flex-col items-center">
			<section id="Home">
				<Nav />
				<Hero />
			</section>
			<section id="Services">
				<Transition title={"What we Do."} />
			</section>
			<Services />
			<section id="Projects">
				<Transition title={"What We Did."} />
			</section>
			<Projects />
			<Contact />
		</main>
	);
}
