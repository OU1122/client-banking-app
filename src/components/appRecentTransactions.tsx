import { numberFormatter } from "../library/numberFormatter";
import { AppRecentTransactionsProps } from "../library/types";

export const AppRecentTransactions: React.FC<AppRecentTransactionsProps> = ({
	type,
	description,
	date,
	amount,
	icon,
}) => {
	return (
		<div className="flex gap-6 items-center">
			<div className="flex items-center justify-center w-10 h-10 rounded-full p-3 bg-gradient-to-r from-LimeGreen to-BrightCyan">
				<div className="text-White">{icon}</div>
			</div>
			<div className="flex items-center justify-between flex-1 gap-1">
				<div className="flex flex-col justify-center items-start">
					<p>{description}</p>
					<p className="text-GrayishBlue">{date}</p>
				</div>
				<div className="flex items-center justify-center self-stretch">
					<p
						className={`${
							amount < 0 ? `text-[#FF4B4A]` : `text-LimeGreen`
						}`}>
						{amount < 0 ? "" : "+"}
						{numberFormatter.format(amount)}
					</p>
				</div>
			</div>
		</div>
	);
};
