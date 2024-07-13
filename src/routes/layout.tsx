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
export { Layout };
