import { ReactNode } from "react";

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

export type AppRecentTransactionsProps = {
	type: "deposit" | "paypal" | "payment";
	description: string;
	date: string;
	amount: number;
	icon: ReactNode;
};

export type AppQuickTransferProps = {
	person: Person;
};

export type Person = {
	image: string;
	name: string;
	description: string;
};
