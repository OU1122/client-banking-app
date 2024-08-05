import { useState } from "react";
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
		description: "Marketing Manager",
	},
	{
		image: "/profile-pic.jpg",
		name: "Moe",
		description: "Director",
	},
	{
		image: "/profile-pic.jpg",
		name: "Roe",
		description: "CFO",
	},
];

export const AppQuickTransfer: React.FC = () => {
	const [startIndex, setStartIndex] = useState(0);
	const visibleCards = 3;

	const handleClick = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % persons.length);
	};

	const displayedPersons = persons.slice(
		startIndex,
		startIndex + visibleCards
	);

	if (displayedPersons.length < visibleCards) {
		displayedPersons.push(
			...persons.slice(0, visibleCards - displayedPersons.length)
		);
	}
	console.log(displayedPersons);
	return (
		<div className="flex gap-6 items-center flex-col">
			<div className="flex flex-row gap-2">
				{" "}
				{displayedPersons.map((person, i) => (
					<AppQuickTransferPerson
						key={i}
						person={person}
					/>
				))}
				<div className="flex items-center justify-center">
					<span onClick={handleClick}>X</span>
				</div>
			</div>
			<div className="flex flex-row gap-2">
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
