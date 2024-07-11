import { Button } from "./button";

export const Hero = () => {
	return (
		<section className="bg-VeryLightGray">
			<div className="relative max-w-[1440px] mx-auto mt-4 flex flex-col px-8 md:px-18 lg:px-32 overflow-x-clip overflow-y-visible pb-4">
				<div className=" relative md:hidden max-w-[400px] mx-auto">
					<img
						className="w-full h-full object-contain"
						src="/bg-intro-mobile.svg"></img>
					<img
						className=" absolute -top-28"
						src="/image-mockups.png"></img>
				</div>
				<div className="gap-8 flex flex-col md:items-start items-center justify-center md:py-[100px] md:pl-4 md:w-[60%] ">
					<h1 className="text-DarkBlue text-4xl md:w-3/4 text-center md:text-left">
						Next generation digital banking
					</h1>
					<p className="text-GrayishBlue font-normal md:w-3/4 text-[18px] leading-relaxed text-center md:text-left">
						Take your financial life online. Your Easybank account will be
						a one-stop-shop for spending, saving, budgeting, investing and
						much more.
					</p>
					<Button type="button">Request Invite</Button>
				</div>

				<div className="hidden md:flex">
					<img
						className="absolute -top-[103px] -right-[190px] lg:-top-[103px] lg:-right-[97px] w-[700px] object-fill z-10"
						src="/bg-intro-desktop.svg"></img>
					<img
						className="absolute -top-[103px] -right-[190px] lg:-top-[103px] lg:-right-[97px] w-[600px] object-fill z-10"
						src="/image-mockups.png"></img>
				</div>
			</div>
		</section>
	);
};
