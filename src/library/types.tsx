export type BankCardProps = {
	balance: number;
	name: string;
	validThruMonth: number;
	validThruYear: number;
	cardNumber: number;
	brand: string;
	isFirstCard: boolean;
};

export type FeaturesProps = {
	img: string;
	title: string;
	description: string;
	author: string;
};
