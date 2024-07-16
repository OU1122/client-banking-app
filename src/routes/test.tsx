import { useState } from "react";
import apiRequest from "../library/apiRequest";
import { useQuery } from "@tanstack/react-query";

const Test: React.FC = () => {
	const [shownTodos, setShownTodos] = useState(20);

	const getTodos = async () => {
		try {
			const res = await apiRequest("/todos");

			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const {
		data: todos = [],
		isLoading,
		isError,
		error,
	} = useQuery({ queryKey: ["todos"], queryFn: getTodos });

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		console.log(error);
		return <div>Error loading todos</div>;
	}

	return (
		<div className="max-w-[700px] mx-auto flex flex-col">
			<table className=" w-[700px] mx-auto flex items-start justify-center flex-col">
				<thead className="w-full">
					<tr className="flex items-center justify-between">
						<td>ID</td>
						<td>Title</td>
						<td>Completed</td>
					</tr>
				</thead>
				<tbody className="">
					{todos &&
						todos.slice(0, shownTodos).map((todo, i) => (
							<tr
								key={i}
								className="flex justify-between w-[700px]">
								<td>{todo.id}</td>
								<td>{todo.title}</td>
								<td>{todo.completed ? "yes" : "no"}</td>
							</tr>
						))}
				</tbody>
			</table>
			{todos.length > 0 && (
				<button
					className={`border w-fit mt-8 mb-8 px-4 py-2 mx-auto ${
						shownTodos >= todos.length ? `hidden` : ""
					}`}
					type="button"
					onClick={() => setShownTodos((prev) => prev + 20)}>
					Load More
				</button>
			)}
		</div>
	);
};
export default Test;
