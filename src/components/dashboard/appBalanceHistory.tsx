import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const AppBalanceHistory: React.FC = () => {
	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Balance",
				data: [3000, 4500, 3800, 5200, 4800, 6000, 7500],
				borderColor: "rgba(75, 192, 192, 1)",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				tension: 0.4,
				fill: true,
			},
		],
	};

	const options = {
		responsive: true,

		plugins: {
			legend: {
				position: "top" as const,
				display: false,
			},
			title: {
				display: false,
				text: "Balance History Over 7 Months",
			},
		},
		scales: {
			y: {
				min: 2000,
				max: 8000,
				ticks: {
					stepSize: 1000,
				},
			},
		},
	};

	return (
		<div className="w-full max-h-[276px] bg-White rounded-3xl flex justify-center p-4">
			<Line
				data={data}
				options={options}
			/>
		</div>
	);
};
