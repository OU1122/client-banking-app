import { AppQuickTransferProps } from "../../library/types";

export const AppQuickTransferPerson: React.FC<AppQuickTransferProps> = ({
	person,
}) => {
	return (
		<div className="flex flex-col">
			<img
				src={person.image}
				className="w-10 h-10 rounded-full"></img>
			<span>{person.name}</span>
			<span>{person.description}</span>
		</div>
	);
};
