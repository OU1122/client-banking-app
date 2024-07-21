import { BankCardProps } from "../library/types";

export const BankCard: React.FC<BankCardProps> = ({
	balance,
	name,
	validThruMonth,
	validThruYear,
	cardNumber,
	brand,
	isFirstCard,
}) => {
	return (
		<div
			className={`max-w-[350px] max-h-[235px] rounded-3xl p-6 flex-grow border border-LimeGreen ${
				!isFirstCard
					? `bg-gradient-to-r from-LimeGreen to-BrightCyan `
					: `bg-LightGrayishBlue`
			}`}>
			<div
				className={`flex flex-col gap-4 ${
					!isFirstCard ? `text-White` : `text-DarkBlue`
				}`}>
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<p className="">Balance</p>
						<p>{balance}</p>
					</div>
					<div className="w-8 h-8">
						<img
							className="w-full h-full object-cover"
							src="/chip-card.png"></img>
					</div>
				</div>
				<div className="flex items-center justify-between w-[80%]">
					<div>
						<p>CARD HOLDER</p>
						<p>{name}</p>
					</div>
					<div>
						<p> VALID THRU</p>
						<p>
							{validThruMonth}/{validThruYear}
						</p>
					</div>
				</div>
				<div className="">
					<div className="flex items-center justify-between">
						<p>{cardNumber}</p>

						<img
							className=""
							src={`${
								brand === "mastercard" ? "/mastercard.png" : ""
							}`}></img>
					</div>
				</div>
			</div>
		</div>
	);
};
