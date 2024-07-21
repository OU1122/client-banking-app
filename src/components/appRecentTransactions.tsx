import { recentTransactions } from "../library/data";

export const AppRecentTransactions: React.FC<AppRecentTransactionsProps> = ({
	type,
	description,
	date,
	amount,
}) => {
	<div>
		{recentTransactions.slice(0, 2).map((transaction, i) => (
			<div key={i}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		))}
	</div>;
};
