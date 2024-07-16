import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout";
import HomePage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";
import Test from "./routes/test";

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
				{
					path: "test",
					element: <Test />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
