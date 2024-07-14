import { Button } from "../components/button";
import { useForm } from "react-hook-form";

const Register: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className=" max-w-[1440px] mx-auto flex items-center h-[calc(100vh-80px)] mt-[] ">
			<div className="left w-1/2 px-4 sm:px-16 lg:px-32 flex-col flex gap-8  min-h-full justify-center overflow-auto pb-8">
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
						<label htmlFor="firstName">First Name</label>
						<input
							{...register("firstName")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="text"
							name="firstName"
							placeholder="John"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="lastName">Last Name</label>
						<input
							{...register("lastName")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							type="text"
							name="lastName"
							placeholder="Doe"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label htmlFor="streetNumber">Street Number</label>
						<input
							{...register("streetNumber")}
							className="border border-GrayishBlue rounded-lg p-2"
							required
							name="streetNumber"
							placeholder="10 Downing Street"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="city">City</label>
						<input
							{...register("city")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="text"
							name="city"
							placeholder="London"></input>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="postCode">Post Code</label>
						<input
							{...register("postCode")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="text"
							name="postCode"
							placeholder="WC1 8PP"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label htmlFor="email">E-mail</label>
						<input
							{...register("email")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							type="email"
							name="email"
							placeholder="Enter your email"></input>
					</div>
					<div className="flex flex-col col-span-2 gap-1">
						<label htmlFor="password"> Password</label>
						<input
							{...register("password")}
							required
							className="border border-GrayishBlue rounded-lg p-2"
							name="password"
							type="password"
							placeholder="Enter your password"></input>
					</div>
				</form>
				<div className="flex items-center justify-center">
					<Button type="button">Sign up</Button>
				</div>
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
