import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout, Layout } from "./routes/layout";
import HomePage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";
import Test from "./routes/test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppHomepage from "./routes/appHomepage";
import AppTransactions from "./routes/appTransactions";
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
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/app",
					element: <AppHomepage />,
					index: true,
				},
				{
					path: "/transactions",
					element: <AppTransactions />,
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
