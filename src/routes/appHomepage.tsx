import { AppExpenseStatistics } from "../components/dashboard/appExpenseStatistics";
import { AppRecentTransactions } from "../components/dashboard/appRecentTransactions";
import { AppTopbar } from "../components/appTopbar";
import { AppWeeklyActivity } from "../components/dashboard/appWeeklyActivity";
import { BankCard } from "../components/dashboard/bankCard";
import { creditCards as cards } from "../library/data";
import { recentTransactions } from "../library/data";
import { AppQuickTransfer } from "../components/dashboard/appQuickTransfer";
import { AppBalanceHistory } from "../components/dashboard/appBalanceHistory";

export default function AppHomepage() {
	return (
		<div className="flex flex-col w-full pt-4">
			<AppTopbar />
			<main className="bg-AppBackground h-full pt-6 pb-6">
				<div className="top-section flex flex-row items-center justify-evenly">
					<div className="flex flex-col flex-[2_1_0] gap-3 px-10  max-h-[282px]">
						<div className="flex flex-row items-center justify-between">
							<h2 className="text-DarkBlue text-[22px] font-semibold">
								My Cards
							</h2>
							<h2 className="text-DarkBlue text-[18px] font-semibold">
								See All
							</h2>
						</div>
						<div className="flex flex-row gap-6 justify-between h-full ">
							{cards.slice(0, 2).map((card, i) => (
								<BankCard
									key={i}
									isFirstCard={i === 1}
									{...card}
								/>
							))}
						</div>
					</div>
					<div className=" px-10 flex flex-col gap-3  flex-1">
						<div>
							<h2 className="text-DarkBlue text-[22px] font-semibold">
								Recent Transactions
							</h2>
						</div>
						<div className="bg-White p-6 rounded-2xl flex flex-col gap-3 shadow-md">
							{recentTransactions.map((transaction, i) => (
								<AppRecentTransactions
									key={i}
									{...transaction}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="mid-section mt-3 flex items-center justify-evenly">
					<div className="px-10 flex flex-col gap-3 flex-[2_1_0]">
						<h2 className="text-DarkBlue text-[22px] font-semibold ">
							Weekly Activity
						</h2>
						<AppWeeklyActivity />
					</div>
					<div className="px-10 flex flex-col gap-3 flex-1">
						<h2 className="text-DarkBlue text-[22px] font-semibold ">
							Expense Statistics
						</h2>
						<AppExpenseStatistics />
					</div>
				</div>
				<div className="bottom-section flex flex-row">
					<div className="px-10 flex flex-col gap-3 flex-1 mt-3 ">
						<h2 className="text-DarkBlue text-[22px] font-semibold ">
							Quick Transfer
						</h2>
						<AppQuickTransfer />
					</div>
					<div className="px-10 flex flex-col gap-3 flex-[3_1_0] mt-3">
						<h2 className="text-DarkBlue text-[22px] font-semibold ">
							Balance History
						</h2>
						<AppBalanceHistory />
					</div>
				</div>
			</main>
		</div>
	);
}
