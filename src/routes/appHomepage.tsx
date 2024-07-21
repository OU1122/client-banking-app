import { AppTopbar } from "../components/appTopbar";
import { BankCard } from "../components/bankCard";
import { creditCards as cards } from "../library/data";

export default function AppHomepage() {
	return (
		<div className="flex flex-col w-full pt-4">
			<AppTopbar />
			<main className="bg-VeryLightGray h-full pl-6 pt-6">
				<div className="top-section">
					<div className="flex flex-col gap-6 ">
						<div className="flex flex-row items-center justify-between">
							<h2 className="text-DarkBlue text-[22px] font-semibold">
								My Cards
							</h2>
							<h2 className="text-DarkBlue text-[18px] font-semibold">
								See All
							</h2>
						</div>
						<div className="flex flex-row gap-6 ">
							{cards.slice(0, 2).map((card, i) => (
								<BankCard
									key={i}
									isFirstCard={i === 1}
									{...card}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="mid-section"></div>
				<div className="bottom-section"></div>
			</main>
		</div>
	);
}
