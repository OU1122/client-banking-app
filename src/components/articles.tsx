import { articles } from "../library/data";
import { ArticleCard } from "./articlesCard";
export const Articles = () => {
	return (
		<div className="bg-VeryLightGray">
			<div className=" max-w-[1440px] py-16 md:py-32 mx-auto sm:px-8 md:px-32">
				<div className="mb-16">
					<h2 className="text-DarkBlue text-4xl text-center md:text-left">
						Latest Articles
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 ">
					{articles.map((article, i) => (
						<ArticleCard
							key={i}
							{...article}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
