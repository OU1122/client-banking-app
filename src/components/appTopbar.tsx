import { IoSettingsOutline } from "react-icons/io5";
import { PiNotificationFill } from "react-icons/pi";

export const AppTopbar = ({ appHeading }: { appHeading?: string }) => {
	return (
		<div className="topbar">
			<div className=" flex flex-row justify-between items-center">
				<h2>{appHeading || "test"}</h2>
				<div className=" flex items-center">
					<div>
						<input placeholder="Search for something"></input>
					</div>
					<div>
						<IoSettingsOutline color="" />
					</div>
					<div>
						<PiNotificationFill color="" />
					</div>
					<div className="w-12 h-12 rounded-full">
						<img
							className="w-full h-full object-cover"
							src="/avatar-placeholder.svg"></img>
					</div>
				</div>
			</div>
		</div>
	);
};
