import { IoSettingsOutline } from "react-icons/io5";
import { PiNotificationFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

export const AppTopbar = ({ appHeading }: { appHeading?: string }) => {
	return (
		<div className="topbar pb-4">
			<div className=" flex flex-row justify-between items-center px-8">
				<h2 className="font-semibold text-2xl tracking-wide text-DarkBlue">
					{appHeading || "Overview"}
				</h2>
				<div className=" flex items-center gap-10 ">
					<div className="flex flex-row items-center gap-4 bg-LightGrayishBlue py-2 px-4 rounded-3xl ">
						<IoIosSearch
							size={20}
							color="#2d314d"
						/>
						<input
							className="bg-LightGrayishBlue"
							placeholder="Search for something.."></input>
					</div>
					<div className="bg-LightGrayishBlue  group hover:bg-gradient-to-r from-LimeGreen to-BrightCyan p-2 rounded-full ">
						<IoSettingsOutline
							size={20}
							className="topNav-icon group-hover:text-White"
						/>
					</div>
					<div className="bg-LightGrayishBlue  group hover:bg-gradient-to-r from-LimeGreen to-BrightCyan p-2 rounded-full">
						<PiNotificationFill
							className="topNav-icon group-hover:text-White"
							size={20}
						/>
					</div>
					<div className="w-14 h-14 rounded-full relative flex items-center justify-center bg-gradient-to-r from-LimeGreen to-BrightCyan">
						<img
							className="w-[93%] h-[93%] object-cover rounded-full "
							src="/profile-pic.jpg"></img>
					</div>
				</div>
			</div>
		</div>
	);
};
