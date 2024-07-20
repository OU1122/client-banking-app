import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";
import { AppSidebar } from "../components/appSidebar";

const Layout: React.FC = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};
const AppLayout: React.FC = () => {
	return (
		<>
			<div className=" max-w-[1440px] flex mx-auto">
				<AppSidebar />

				<Outlet />
			</div>
		</>
	);
};

export { Layout, AppLayout };
