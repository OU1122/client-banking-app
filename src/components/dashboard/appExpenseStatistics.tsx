import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AppExpenseStatistics: React.FC = () => {
	const data = {
		labels: ["Entertainment", "Bills", "Investment", "Others"],
		datasets: [
			{
				data: [15, 30, 30, 25],
				backgroundColor: ["#3185D3", "#48D331", "#343C6A", "#31D3B6"],

				borderSkipped: false,
				color: "#9698a6",
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					color: "#9698a6",
				},
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						const label = context.label || "";
						const value = context.raw;
						const total = context.dataset.data.reduce(
							(acc, data) => acc + data,
							0
						);
						const percentage = ((value / total) * 100).toFixed(1);
						return `${label}: ${percentage}%`;
					},
				},
			},
		},
		scales: {},
		layout: {
			padding: 20,
		},
	};

	return (
		<div className="max-w-[350px] max-h-[322px] bg-White rounded-3xl flex justify-center  shadow-md">
			<Pie
				data={data}
				options={options}
				id="123192541875823"
			/>
		</div>
	);
};
