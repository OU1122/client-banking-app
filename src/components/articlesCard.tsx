type FeaturesProps = {
	img: string;
	title: string;
	description: string;
	author: string;
};

export const ArticleCard: React.FC<FeaturesProps> = ({
	img,
	title,
	description,
	author,
}) => {
	return (
		<div className="gap-4 flex flex-col bg-White rounded-md max-w-[350px]">
			<div className="w-full h-[200px] rounded-t-lg">
				<img
					className="w-full h-full object-cover rounded-t-lg"
					src={img}
				/>
			</div>
			<div className="flex flex-col overflow-ellipsis p-4 gap-4 items-start justify-center">
				<p className="text-xs text-GrayishBlue font-semibold">{author}</p>
				<h2 className="text-DarkBlue text-xl hover:text-LimeGreen hover:cursor-pointer">
					{title}
				</h2>
				<p className="overflow-ellipsis text-GrayishBlue text-[16px]">
					{description}
				</p>
			</div>
		</div>
	);
};
