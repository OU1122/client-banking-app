import { AiOutlineStock } from "react-icons/ai";
import { FaCreditCard, FaHandHoldingUsd } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
	MdAccountBalanceWallet,
	MdOutlineDesignServices,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export const AppSidebar = () => {
	return (
		<div className="sidebar h-screen px-4 pt-8  border-r-[1px] border-LightGrayishBlue flex flex-col items-center">
			{" "}
			<div className="w-[180px]">
				<Link to={"/"}>
					<img
						className="w-full h-full"
						src="/logo.svg"></img>
				</Link>
			</div>
			<div className="flex flex-col gap-2 mt-8 *:text-GrayishBlue *:text-[18px]">
				<NavLink to="/app">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 ">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-gradient-to-t from-LimeGreen to-BrightCyan ${
									isActive ? `block` : `hidden`
								}`}></div>
							<IoMdHome
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Home
							</p>
						</div>
					)}
				</NavLink>
				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<GrTransaction
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Transactions
							</p>
						</div>
					)}
				</NavLink>
				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<MdAccountBalanceWallet
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Accounts
							</p>
						</div>
					)}
				</NavLink>
				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3  hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<AiOutlineStock
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Investments
							</p>
						</div>
					)}
				</NavLink>
				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<FaCreditCard
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Credit Cards
							</p>
						</div>
					)}
				</NavLink>
				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<FaHandHoldingUsd
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Loans
							</p>
						</div>
					)}
				</NavLink>

				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<MdOutlineDesignServices
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Services
							</p>
						</div>
					)}
				</NavLink>

				<NavLink to="/">
					{({ isActive }) => (
						<div className=" relative flex items-center py-3 hover:cursor-not-allowed">
							{" "}
							<div
								className={`absolute top-0 left-0  h-full w-[10px] rounded-t-full rounded-b-full -translate-x-[38px] bg-LimeGreen ${
									isActive ? `block` : `hidden`
								}`}></div>
							<IoSettingsOutline
								color={isActive ? "#31d35c" : "#9698a6"}
								size={25}
							/>
							<p
								className={`pl-4  ${
									isActive ? `text-LimeGreen` : `text-GrayishBlue`
								}`}>
								Settings
							</p>
						</div>
					)}
				</NavLink>
			</div>
		</div>
	);
};
