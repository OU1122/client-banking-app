import { formatCardNumber } from "../../library/fromatCardNumber";
import { numberFormatter } from "../../library/numberFormatter";
import { BankCardProps } from "../../library/types";

export const BankCard: React.FC<BankCardProps> = ({
	balance,
	name,
	validThruMonth,
	validThruYear,
	cardNumber,

	isFirstCard,
}) => {
	return (
		<div
			className={`max-w-[350px] flex shadow-md rounded-3xl p-6 flex-grow   ${
				!isFirstCard
					? `bg-gradient-to-r from-LimeGreen to-BrightCyan `
					: `bg-White`
			}`}>
			<div
				className={`flex flex-col gap-4 flex-1 justify-evenly ${
					!isFirstCard ? `text-White` : `text-DarkBlue`
				}`}>
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<p className="text-sm">Balance</p>
						<p className="font-semibold">
							{numberFormatter.format(balance)}
						</p>
					</div>
					<div className="w-8 h-8">
						<img
							className="w-full h-full object-cover"
							src={`${
								!isFirstCard
									? `/chip-card-white.png`
									: `/chip-card-blk.svg`
							}`}></img>
					</div>
				</div>
				<div className="flex items-center justify-between w-[80%]">
					<div>
						<p className="text-xs">CARD HOLDER</p>
						<p className="font-semibold">{name}</p>
					</div>
					<div>
						<p className="text-xs"> VALID THRU</p>
						<p className="font-semibold">
							{validThruMonth}/{validThruYear}
						</p>
					</div>
				</div>
				<div className="">
					<div className="flex items-center justify-between">
						<p className="text-xl">{formatCardNumber(cardNumber)}</p>

						<img
							className=""
							src={`${
								!isFirstCard
									? `/mastercard-white.svg`
									: `/mastercard-dark.svg`
							}`}></img>
					</div>
				</div>
			</div>
		</div>
	);
};
