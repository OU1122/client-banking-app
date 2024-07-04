import { features } from "../library/data";
import { FeatureCard } from "./featureCard";

export const Features = () => {
	return (
		<div className="bg-LightGrayishBlue">
			<div className=" max-w-[1440px] py-32 mx-auto px-32">
				<div className=" pl-4 ">
					<h2 className="text-DarkBlue text-4xl">Why Choose Easybank?</h2>
					<p className="mt-4 text-GrayishBlue tracking-wide text-[18px] leading-relaxed">
						We leverage Open Banking to turn your bank account into your
						financial hub.
						<br /> Control your finances like never before.
					</p>
				</div>
				<div className="grid grid-cols-4 mt-8">
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
