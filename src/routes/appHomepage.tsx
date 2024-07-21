import { AppRecentTransactions } from "../components/appRecentTransactions";
import { AppTopbar } from "../components/appTopbar";
import { BankCard } from "../components/bankCard";
import { creditCards as cards } from "../library/data";
import { recentTransactions } from "../library/data";

export default function AppHomepage() {
	return (
		<div className="flex flex-col w-full pt-4">
			<AppTopbar />
			<main className="bg-VeryLightGray h-full pt-6">
				<div className="top-section flex flex-row">
					<div className="flex flex-col gap-6 flex-1 px-5">
						<div className="flex flex-row items-center justify-between">
							<h2 className="text-DarkBlue text-[22px] font-semibold">
								My Cards
							</h2>
							<h2 className="text-DarkBlue text-[18px] font-semibold">
								See All
							</h2>
						</div>
						<div className="flex flex-row gap-6 justify-between ">
							{cards.slice(0, 2).map((card, i) => (
								<BankCard
									key={i}
									isFirstCard={i === 1}
									{...card}
								/>
							))}
						</div>
					</div>
					<div className="ml-5 px-5 flex flex-col gap-6">
						<div>
							<h2 className="text-DarkBlue text-[22px] font-semibold">
								Recent Transactions
							</h2>
						</div>
						<div className="bg-White p-4 rounded-2xl">
							{recentTransactions.map((transaction, i) => (
								<AppRecentTransactions
									key={i}
									{...transaction}
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
