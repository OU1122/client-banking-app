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
const Register: React.FC = () => {
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
					<h1 className="font-bold text-4xl text-DarkBlue">Sign up</h1>
					<p className="text-lg text-GrayishBlue mt-4">
						Please enter your details.
					</p>
				</div>
				<form
					className="grid grid-cols-2 gap-4"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="firstName"
							className="text-sm">
							First Name
						</label>
						<input
							{...register("firstName")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="text"
							name="firstName"
							placeholder="John"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="lastName"
							className="text-sm">
							Last Name
						</label>
						<input
							{...register("lastName")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="text"
							name="lastName"
							placeholder="Doe"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label
							htmlFor="address"
							className="text-sm">
							Address
						</label>
						<input
							{...register("address")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							name="address"
							placeholder="10 Downing Street"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="city"
							className="text-sm">
							City
						</label>
						<input
							{...register("city")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="text"
							name="city"
							placeholder="London"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="postCode"
							className="text-sm">
							Post Code
						</label>
						<input
							{...register("postCode")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="text"
							name="postCode"
							placeholder="WC1 8PP"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label
							htmlFor="email"
							className="text-sm">
							E-mail
						</label>
						<input
							{...register("email")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="email"
							name="email"
							placeholder="Enter your email"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label
							htmlFor="password"
							className="text-sm">
							{" "}
							Password
						</label>
						<input
							{...register("password", {
								minLength: {
									value: 6,
									message:
										"Password needs to be at least 6 characters long",
								},
								required: "Password is required",
							})}
							aria-invalid={errors.password ? "true" : "false"}
							className="border border-GrayishBlue rounded-lg p-2"
							name="password"
							type="password"
							placeholder="Enter your password"></input>
						{errors.password && (
							<p
								className="text-[#f47777]"
								role="alert">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="flex items-center justify-center col-span-2 mt-2">
						<Button
							type="submit"
							width="w-full">
							Sign up
						</Button>
					</div>
				</form>
				<p className="text-center">
					Already have an account?{" "}
					<Link to="/login">
						<span className="text-LimeGreen">Login</span>
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
export default Register;
