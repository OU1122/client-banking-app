import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const AppWeeklyActivity: React.FC = () => {
	const data = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				label: "Income",
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: "rgba(75, 192, 192, 0.6)",
			},
			{
				label: "Expenses",
				data: [45, 50, 60, 70, 40, 50, 35],
				backgroundColor: "rgba(255, 99, 132, 0.6)",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				align: "end" as const,
			},
		},
		scales: {
			x: { stacked: false },
			y: { stacked: false },
		},
	};

	return (
		<div className="">
			<div className="max-w-[730px] max-h-[322px]">
				<Bar
					data={data}
					options={options}
				/>
			</div>
		</div>
	);
};
