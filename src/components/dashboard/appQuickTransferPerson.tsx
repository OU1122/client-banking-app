import { AppQuickTransferProps } from "../../library/types";

export const AppQuickTransferPerson: React.FC<AppQuickTransferProps> = ({
	person,
}) => {
	return (
		<div className="flex flex-col items-center justify-start p-2 flex-1 ">
			<img
				src={person.image}
				className="w-16 h-16 rounded-full"></img>
			<span className="text-center mt-3">{person.name}</span>
			<span className="text-center">{person.description}</span>
		</div>
	);
};
