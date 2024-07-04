type FeaturesProps = {
	img: string;
	title: string;
	description: string;
};

export const FeatureCard: React.FC<FeaturesProps> = ({
	img,
	title,
	description,
}) => {
	return (
		<div className=" p-4 gap-4 flex flex-col items-start justify-between">
			<img src={img}></img>
			<h2 className="text-DarkBlue text-2xl">{title}</h2>
			<p className="text-GrayishBlue text-[18px]">{description}</p>
		</div>
	);
};
