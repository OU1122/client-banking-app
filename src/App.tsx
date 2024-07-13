import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout";
import HomePage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},

				{
					path: "register",
					element: <Register />,
				},
				{
					path: "login",
					element: <Login />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
