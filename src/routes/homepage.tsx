import { Hero } from "../components/hero";
import { Features } from "../components/features";
import { Articles } from "../components/articles";
import { Footer } from "../components/footer";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<Articles />
			<Footer />
		</>
	);
}
