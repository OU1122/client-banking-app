import { AiOutlineStock } from "react-icons/ai";
import { FaCreditCard, FaHandHoldingUsd } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
	MdAccountBalanceWallet,
	MdOutlineDesignServices,
} from "react-icons/md";

export const AppSidebar = () => {
	return (
		<div className="sidebar h-screen px-8 pt-8 ">
			<div className="w-[200px]">
				<img
					className="w-full h-full"
					src="/logo.svg"></img>
			</div>
			<div className="flex flex-col gap-2 mt-8 *:text-GrayishBlue *:text-[18px]">
				<div className="relative flex items-center py-3">
					<div className="absolute top-0 left-0 bg-LimeGreen h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[35px]"></div>
					<IoMdHome
						color="LimeGreen"
						size={30}
					/>
					<p className="pl-4 text-LimeGreen">Home</p>
				</div>
				<div className="flex items-center py-3">
					<GrTransaction
						color=""
						size={30}
					/>
					<p className="pl-4">Transactions</p>
				</div>
				<div className="flex items-center py-3">
					<MdAccountBalanceWallet
						color=""
						size={30}
					/>
					<p className="pl-4">Accounts</p>
				</div>
				<div className="flex items-center py-3">
					<AiOutlineStock
						color=""
						size={30}
					/>
					<p className="pl-4">Investments</p>
				</div>
				<div className="flex items-center py-3">
					<FaCreditCard
						color=""
						size={30}
					/>
					<p className="pl-4">Credit Cards</p>
				</div>
				<div className="flex items-center py-3">
					<FaHandHoldingUsd
						color=""
						size={30}
					/>
					<p className="pl-4">Loans</p>
				</div>
				<div className="flex items-center py-3">
					<MdOutlineDesignServices
						color=""
						size={30}
					/>
					<p className="pl-4">Services</p>
				</div>
				<div className="flex items-center py-3">
					<IoSettingsOutline
						color=""
						size={30}
					/>
					<p className="pl-4">Settings</p>
				</div>
			</div>
		</div>
	);
};
