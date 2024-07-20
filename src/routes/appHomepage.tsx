import { AppTopbar } from "../components/appTopbar";

export default function AppHomepage() {
	return (
		<div className="pl-12 flex flex-col w-full pt-4">
			<AppTopbar />
			<main className="bg-VeryLightGray">Homepage</main>
		</div>
	);
}
