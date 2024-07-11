import { Button } from "./button";

export const Footer = () => {
	return (
		<div className="bg-DarkBlue text-white">
			<div className=" max-w-[1440px] py-12 mx-auto px-8 md:px-16 lg:px-32">
				<div className="flex gap-4 md:gap-0 flex-col md:flex-row h-full">
					<div className="flex flex-col md:justify-between items-center justify-center  flex-1 px-8 ">
						<div className="mb-4 md:mb-0 flex items-center justify-center min-w-[130px] ">
							<img
								src="/logo.svg"
								className="w-full h-full"></img>
						</div>

						<div className="flex items-start gap-4 flex-wrap *:hover:cursor-pointer">
							<img
								src="/icon-facebook.svg"
								alt="Facebook"
								className="hover:text-LimeGreen"
							/>
							<img
								src="/icon-youtube.svg"
								alt="Youtube"
								className="hover:text-LimeGreen"
							/>
							<img
								src="/icon-twitter.svg"
								alt="Twitter"
								className="hover:text-LimeGreen"
							/>
							<img
								src="/icon-pinterest.svg"
								alt="Pinterest"
								className="hover:text-LimeGreen"
							/>
							<img
								src="/icon-instagram.svg"
								alt="Instagram"
								className="hover:text-LimeGreen"
							/>
						</div>
					</div>
					<div className="flex flex-1 px-8  items-center justify-center md:ml-8 ">
						<ul className="flex flex-col items-center md:items-start text-White gap-4 font-semibold *:cursor-pointer">
							<li className="hover:text-LimeGreen">About Us</li>
							<li className="hover:text-LimeGreen">Contact</li>
							<li className="hover:text-LimeGreen">Blog</li>
						</ul>
					</div>
					<div className=" flex flex-1 px-8 items-center justify-center">
						<ul className=" *:cursor-pointer flex flex-col items-center md:items-start  text-White gap-4 font-semibold  ">
							<li className="hover:text-LimeGreen">Careers</li>
							<li className="hover:text-LimeGreen">Support</li>
							<li className="hover:text-LimeGreen">Privacy Policy</li>
						</ul>
					</div>
					<div className="flex flex-col md:items-end items-center justify-center flex-[2_0_0%] px-8 gap-8 ">
						<Button type="button">Request Invite</Button>
						<p className="text-GrayishBlue text-center md:text-left">
							EasyBank All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
