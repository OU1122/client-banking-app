import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout, Layout } from "./routes/layout";
import HomePage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";
import Test from "./routes/test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppHomepage from "./routes/appHomepage";
function App() {
	const queryClient = new QueryClient();

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
		{
			path: "/app",
			element: <AppLayout />,
			children: [
				{
					element: <AppHomepage />,
					index: true,
				},
			],
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			{" "}
			<RouterProvider router={router} />{" "}
		</QueryClientProvider>
	);
}

export default App;
