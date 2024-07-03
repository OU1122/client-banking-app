import { links } from "../library/data";
import { Button } from "./button";

export const Nav = () => {
	return (
		<nav className="relative max-w-[1440px] mx-auto py-4 flex bg-White px-32 items-center justify-between z-50">
			<div>
				<img
					src="/logo.svg"
					alt=""
				/>
			</div>
			<div>
				<ul className="text-GrayishBlue flex gap-4">
					{links.map((link, i) => (
						<a
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
			<div>
				<Button type="button">Request Invite</Button>
			</div>
		</nav>
	);
};