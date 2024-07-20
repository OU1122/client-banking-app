import { AppTopbar } from "../components/appTopbar";

export default function AppHomepage() {
	return (
		<div className="flex flex-col w-full pt-4">
			<AppTopbar />
			<main className="bg-VeryLightGray h-full">Homepage</main>
		</div>
	);
}
