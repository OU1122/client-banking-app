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
ChartJS.defaults.plugins.datalabels = {
	display: false,
};

export const AppWeeklyActivity: React.FC = () => {
	const data = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Income",
				data: [100, 150, 80, 100, 300, 55, 280],
				backgroundColor: "hsl(136deg 60.9% 53.69%)",
				barThickness: 10,
				borderRadius: 15,
				borderSkipped: false,
				color: "#9698a6",
			},
			{
				label: "Expenses",
				data: [300, 150, 60, 120, 20, 200, 100],
				backgroundColor: "rgb(255 126 126)",
				barThickness: 10,
				borderRadius: 15,
				borderSkipped: false,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				align: "end" as const,
				labels: {
					color: "#9698a6",
					borderRadius: 6,
					useBorderRadius: true,
				},
			},
		},
		scales: {
			x: {
				stacked: false,
				grid: {
					display: false,
				},
				ticks: {
					color: "#9698a6",
				},
			},
			y: {
				stacked: false,
				beginAtZero: true,
				grid: {
					color: "#F3F3F5",
				},
				ticks: {
					color: "#9698a6",
				},
			},
		},
		layout: {
			padding: 20,
		},
	};

	return (
		<div className="max-w-[730px] max-h-[322px] bg-White rounded-3xl flex justify-center  shadow-md">
			<Bar
				data={data}
				options={options}
				id="1513895619847182347"
			/>
		</div>
	);
};
