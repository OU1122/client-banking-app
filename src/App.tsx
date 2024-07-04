import { Articles } from "./components/articles";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";

function App() {
	return (
		<>
			<div className="">
				<Nav />
				<Hero />
				<Features />
				<Articles />
			</div>
		</>
	);
}

export default App;
