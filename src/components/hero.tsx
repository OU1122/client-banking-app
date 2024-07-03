import { Button } from "./button";

export const Hero = () => {
	return (
		<section className="relative max-w-[1440px] mx-auto my-4 flex px-32 bg-VeryLightGray overflow-hidden">
			<div className="gap-8 flex flex-col items-start justify-center py-[100px] pl-4 w-1/2">
				<h1 className="text-DarkBlue text-5xl w-3/4">
					Next generation digital banking
				</h1>
				<p className="text-GrayishBlue font-normal w-3/4 text-[18px]">
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing and much
					more.
				</p>
				<Button type="button">Request Invite</Button>
			</div>

			<img
				className="absolute -top-[103px] -right-[190px] lg:-top-[103px] lg:-right-[97px] w-[700px] object-fill z-10"
				src="/bg-intro-desktop.svg"></img>
		</section>
	);
};
