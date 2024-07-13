const Register: React.FC = () => {
	return (
		<div className=" max-w-[1440px] mx-auto flex items-center h-[calc(100vh-80px)] overflow-hidden">
			<div className="left w-1/2">Test</div>

			<div className="relative right w-1/2 h-full bg-LightGrayishBlue">
				<div className="absolute top-1/2 -translate-y-1/2 -right-0 translate-x-20  max-w-[1024px] max-h-[682px]">
					<img
						src="/splash-placeholder.png"
						className="w-full h-full object-fill border-DarkBlue border-2 rounded-2xl"></img>
				</div>
			</div>
		</div>
	);
};
export default Register;
