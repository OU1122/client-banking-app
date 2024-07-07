export const Footer = () => {
	return (
		<div className="bg-DarkBlue text-white">
			<div className=" max-w-[1440px] py-32 mx-auto px-8 md:px-16 lg:px-32">
				<div className="flex flex-row h-full">
					<div className="flex flex-col justify-between pl-4 ">
						<div className="flex items-center min-w-[130px] ">
							<img
								src="/logo.svg"
								className="w-full h-full"></img>
						</div>

						<div className="flex items-center justify-evenly gap-4">
							<img
								src="/icon-facebook.svg"
								alt="Facebook"
							/>
							<img
								src="/icon-youtube.svg"
								alt="Youtube"
							/>
							<img
								src="/icon-twitter.svg"
								alt="Twitter"
							/>
							<img
								src="/icon-pinterest.svg"
								alt="Pinterest"
							/>
							<img
								src="/icon-instagram.svg"
								alt="Instagram"
							/>
						</div>
					</div>
					<div className="">
						<ul className="flex flex-col items-center justify-center">
							<li>About Us</li>
							<li>Contact</li>
							<li>Blog</li>
						</ul>
					</div>
					<div className="">
						<ul className="flex flex-col items-center justify-center">
							<li>Careers</li>
							<li>Support</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};
