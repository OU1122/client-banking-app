import { AppRecentTransactionsProps } from "../library/types";

export const AppRecentTransactions: React.FC<AppRecentTransactionsProps> = ({
	type,
	description,
	date,
	amount,
	icon,
}) => {
	return (
		<div className="flex gap-4">
			<div className="flex items-center justify-center px-4 py-4 border rounded-full">
				{icon}
			</div>
			<div className="flex flex-col justify-center items-start">
				<p>{description}</p>
				<p>{date}</p>
			</div>
			<div className="flex items-center justify-center">
				<p>{amount}</p>
			</div>
		</div>
	);
};
