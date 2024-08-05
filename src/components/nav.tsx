import { useState } from "react";
import { links } from "../library/data";
import { Button } from "./button";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="relative max-w-[1440px] h-[72px] mx-auto py-4 flex bg-White px-4 sm:px-16 lg:px-32 items-center justify-between z-50 gap-2">
			<div className="flex items-center min-w-[130px]">
				<Link to="/">
					{" "}
					<img
						className="w-full h-full"
						src="/logo.svg"
						alt="logo"
					/>
				</Link>
			</div>
			<div>
				<ul className="text-GrayishBlue hidden  md:flex items-center jsutify-center gap-4 md:gap-4">
					{links.map((link, i) => (
						<a
							key={i}
							href={link.hash}
							className="">
							<li
								className="hover:bg-gradient-to-r bg-none hover:text-DarkBlue py-2 from-LimeGreen to-BrightCyan bg-[length:100%_4px] bg-no-repeat bg-bottom"
								key={i}>
								{link.name}
							</li>
						</a>
					))}
				</ul>
			</div>
			<div className="hidden md:block">
				<Button
					type="button"
					link="/app">
					Try for Free
				</Button>
			</div>
			<div className="block md:hidden">
				<Hamburger
					size={20}
					toggled={isOpen}
					toggle={setIsOpen}
				/>
			</div>
			<div
				className={`absolute top-24 left-0 translate-x-6 bg-White w-[90%] rounded-lg ${
					isOpen ? `block` : `hidden`
				} `}>
				<ul className="text-DarkBlue flex items-center flex-col justify-center gap-2 pt-2 pb-2">
					{links.map((link, i) => (
						<a
							key={i}
							href={link.hash}
							className="">
							<li
								className="hover:bg-gradient-to-r bg-none text-center hover:text-DarkBlue py-2 from-LimeGreen to-BrightCyan bg-[length:100%_4px] bg-no-repeat bg-bottom"
								key={i}>
								{link.name}
							</li>
						</a>
					))}
				</ul>
			</div>
		</nav>
	);
};
