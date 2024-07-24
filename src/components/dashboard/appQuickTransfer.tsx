import { useState } from "react";
import { Person } from "../../library/types";
import { AppQuickTransferPerson } from "./appQuickTransferPerson";
import { GrSend } from "react-icons/gr";

const persons: Person[] = [
	{
		image: "/profile-pic.jpg",
		name: "Joe",
		description: "CEO",
	},
	{
		image: "/profile-pic.jpg",
		name: "Doe",
		description: "Manager",
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

	return (
		<div className="flex gap-3  flex-col bg-White rounded-3xl shadow-md p-4">
			<div className="flex flex-row gap-2 items-start">
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
			<div className="flex flex-row gap-2 pr-2 items-center">
				<p className="min-w-fit px-2">Amount</p>
				<form className="flex flex-row  ">
					<input
						className="bg-LightGrayishBlue rounded-full py-2 pl-4"
						type="number"
						placeholder="20"
					/>
					<button
						type="button"
						className="bg-LimeGreen pl-8 pr-10 rounded-full text-White -translate-x-16 relative">
						Send
						<span className="absolute top-[13px] right-3">
							<GrSend />
						</span>
					</button>
				</form>
			</div>
		</div>
	);
};
