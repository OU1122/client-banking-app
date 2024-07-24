import { Person } from "../../library/types";
import { AppQuickTransferPerson } from "./appQuickTransferPerson";

const persons: Person[] = [
	{
		image: "/profile-pic.jpg",
		name: "Joe",
		description: "CEO",
	},
	{
		image: "/profile-pic.jpg",
		name: "Doe",
		description: "CEO",
	},
	{
		image: "/profile-pic.jpg",
		name: "Doe",
		description: "CEO",
	},
	{
		image: "/profile-pic.jpg",
		name: "Doe",
		description: "CEO",
	},
];

export const AppQuickTransfer: React.FC = () => {
	return (
		<div className="flex gap-6 items-center flex-col">
			<div className="flex flex-row gap-2">
				{" "}
				{persons.map((person, i) => (
					<AppQuickTransferPerson
						key={i}
						person={person}
					/>
				))}
			</div>
			<div className="flex flex-col gap-2">
				<p className="">Amount to send</p>
				<form>
					<input
						type="number"
						placeholder="20"
					/>
					<button type="button">Send</button>
				</form>
			</div>
		</div>
	);
};
