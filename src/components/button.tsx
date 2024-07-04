type ButtonProps = {
	type: "button";
	children: React.ReactNode;
	href?: string;
};

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
	return (
		<div className="min-w-fit">
			<button
				className="text-White rounded-3xl bg-gradient-to-r from-LimeGreen to-BrightCyan px-4 py-2 hover:opacity-85"
				type={type}>
				{children}
			</button>
		</div>
	);
};
