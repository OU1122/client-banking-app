export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
	{
		name: "Blog",
		hash: "#blog",
	},
	{
		name: "Careers",
		hash: "#careers",
	},
] as const;

export const features = [
	{
		image: "/icon-online.svg",
		headline: "Online Banking",
		description:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		image: "/icon-budgeting.svg",
		headline: "Simple Budgeting",
		description:
			"See exactly where your money goes each month. Receive notifications when you are close ot hitting your limits.",
	},
	{
		image: "/icon-onboarding.svg",
		headline: "Fast Onboarding",
		description:
			"We do not do branches. Open your account in minutes online and start taking control of your finances right away. ",
	},
	{
		image: "/icon-api.svg",
		headline: "Open API",
		description:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
] as const;

export const articles = [
	{
		img: "/image-currency.jpg",
		author: "By Claire Robinson",
		title: "Receive money in any currency with no fees",
		description:
			"The world is getting smaller, and we are becoming more mobile. So why only receive and use one currency...",
	},
	{
		img: "/image-restaurant.jpg",
		author: "By Wilson Hutton",
		title: "Treat yourself without worrying about money",
		description:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
	},
	{
		img: "/image-plane.jpg",
		author: "By Wilson Hutton",
		title: "Take your EasyBank card wherever you go",
		description:
			"We want you to enjoy your travels. This is why we do not charge any fees on purchases abroad. We will show you..",
	},
	{
		img: "/image-confetti.jpg",
		author: "By Claire Robinson",
		title: "Our invite-only Beta accounts are now live!",
		description:
			"After a lot of hard work by the whole team, we are excited to launch our closed beta. Just sign up via site...",
	},
] as const;
