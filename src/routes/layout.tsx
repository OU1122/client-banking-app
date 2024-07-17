import { Outlet } from "react-router-dom";
import { Nav } from "../components/nav";

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
			<Outlet />
		</>
	);
};

export { Layout, AppLayout };
