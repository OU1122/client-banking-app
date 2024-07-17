import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
	firstName: string;
	lastName: string;
	address: string;
	city: string;
	postCode: string;
	email: string;
	password: string;
}
const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

	return (
		<div className=" max-w-[1440px] mx-auto flex items-center h-[calc(100vh-80px)] mt-[] ">
			<div className="left w-1/2 px-4 sm:px-16 lg:px-32 flex-col flex gap-4  min-h-full justify-center overflow-auto pb-8">
				<div>
					<h1 className="font-bold text-4xl text-DarkBlue">Login</h1>
					<p className="text-lg text-GrayishBlue mt-4">
						Welcome back! Please enter your details.
					</p>
				</div>
				<form
					className="grid grid-cols-2 gap-4"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="email"
							className="text-sm">
							E-mail
						</label>
						<input
							{...register("email")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="email"
							name="email"
							placeholder=""></input>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="password"
							className="text-sm">
							Password
						</label>
						<input
							{...register("password")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="password"
							name="password"
							placeholder=""></input>
					</div>

					<div className="flex items-center justify-center col-span-2 mt-2">
						<Button
							type="submit"
							width="w-full">
							Login
						</Button>
					</div>
				</form>
				<p className="text-center">
					Don't have an account?{" "}
					<Link to="/register">
						<span className="text-LimeGreen">Register</span>
					</Link>
				</p>
			</div>

			<div className="relative right w-1/2 h-full bg-LightGrayishBlue overflow-hidden">
				<div className="absolute top-1/2 -translate-y-1/2 -right-0 translate-x-28  max-w-[1024px] max-h-[682px]">
					<img
						src="/splash-placeholder.png"
						className="w-full h-full object-fill border-DarkBlue border-2 rounded-2xl"></img>
				</div>
			</div>
		</div>
	);
};
export default Login;
