import { Link } from "react-router-dom";

type ButtonProps = {
	type: "button";
	children: React.ReactNode;
	link?: string;
};

export const Button: React.FC<ButtonProps> = ({ type, link, children }) => {
	if (link) {
		return (
			<div className="min-w-fit">
				<Link to={link}>
					<button
						className="text-White rounded-3xl bg-gradient-to-r from-LimeGreen to-BrightCyan px-6 py-2 hover:opacity-85"
						type={type}>
						{children}
					</button>
				</Link>
			</div>
		);
	}

	return (
		<div className="min-w-fit">
			<button
				className="text-White rounded-3xl bg-gradient-to-r from-LimeGreen to-BrightCyan px-6 py-2 hover:opacity-85"
				type={type}>
				{children}
			</button>
		</div>
	);
};
