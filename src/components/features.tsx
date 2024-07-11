import { features } from "../library/data";
import { FeatureCard } from "./featureCard";

export const Features = () => {
	return (
		<div className="bg-LightGrayishBlue">
			<div className=" max-w-[1440px] py-16 sm:py-32 mx-auto px-8 md:px-16 lg:px-32">
				<div className=" pl-4 ">
					<h2 className="text-DarkBlue text-4xl text-center md:text-left">
						Why Choose Easybank?
					</h2>
					<p className="mt-4 text-center md:text-left text-GrayishBlue tracking-wide text-[18px] leading-relaxed">
						We leverage Open Banking to turn your bank account into your
						financial hub.
						<br /> Control your finances like never before.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 text-center md:text-start">
					{features.map((feature, i) => (
						<FeatureCard
							key={i}
							img={feature.image}
							title={feature.headline}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
