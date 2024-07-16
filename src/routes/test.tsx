import { useState } from "react";
import apiRequest from "../library/apiRequest";

const Test: React.FC = () => {
	const [todos, setTodos] = useState([]);
	const [shownTodos, setShownTodos] = useState(20);

	const handleClick = async () => {
		try {
			const res = await apiRequest("/todos");

			setTodos(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto flex flex-col">
			<button
				className="self-center w-fit mb-8 px-4 py-2 border rounded-lg"
				onClick={handleClick}>
				Fetch
			</button>

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
