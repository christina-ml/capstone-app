import React from "react";
import "../../../designUtils/_colors.scss";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ChartJsCoin = ({ coin }) => {
	let p1h = coin.percent_change_1h;
	let p24h = coin.percent_change_24h;
	let p7d = coin.percent_change_7d;
	let p30d = coin.percent_change_30d;
	let p60d = coin.percent_change_60d;
	let p90d = coin.percent_change_90d;

	let percentData = [p90d, p60d, p30d, p7d, p24h, p1h]; // p90d to p1h
	const labels = ["90d", "60d", "30d", "7d", "24h", "1h"]; // p90d to p1h

	// change line color based on starting and ending values
	let lineColor = "";

	if (p90d < 0 && p1h < 0) {
		// if both are negative numbers
		if (p90d < p1h) {
			lineColor = "rgb(210, 42, 73)";
		}
		lineColor = "rgb(42, 178, 10)";
	} else if (p90d >= 0 && p1h >= 0) {
		// if both are positive
		if (p90d < p1h) {
			lineColor = "rgb(42, 178, 10)";
		}
		lineColor = "rgb(210, 42, 73)";
	} else if (p90d < 0 && p1h >= 0) {
		// if p90d is neg & p1h is pos
		if (p90d < p1h) {
			lineColor = "rgb(210, 42, 73)";
		}
		lineColor = "rgb(42, 178, 10)";
	} else if (p1h < 0 && p90d >= 0) {
		// if p1h is neg & p90d is pos
		if (p90d < p1h) {
			lineColor = "rgb(42, 178, 10)";
		}
		lineColor = "rgb(210, 42, 73)";
	}

	// lineColor = "rgb(210, 42, 73)"  => red
	// lineColor = "rgb(42, 178, 10)"  => green
	// lineColor = "rgb(99, 132, 255)"  => blue

	const data = {
		labels: labels,
		datasets: [
			{
				label: "% change",
				backgroundColor: lineColor,
				borderColor: lineColor,
				data: percentData,
			},
			// {
			//     label: "My Second dataset",
			//     backgroundColor: "rgb(99, 132, 255)",
			//     borderColor: "rgb(99, 132, 255)",
			//     data: [20, 5, 35, 20, 40, 10, 5],
			//   },
		],
	};

	const options = {
		plugins: {
			legend: {
				labels: {
					color: "#5c7186", // medium-gray
				},
			},
		},
		scales: {
			x: {
				color: "#5c7186", // medium-gray
				grid: {
					color: "#5c7186", // medium-gray
					borderColor: "#5c7186", // medium-gray
					tickColor: "#5c7186", // medium-gray
				},
				ticks: {
					color: "#5c7186", // medium-gray
				},
			},
			y: {
				grid: {
					color: "#5c7186", // medium-gray
					borderColor: "#5c7186", // medium-gray
					tickColor: "#5c7186", // medium-gray
				},
				ticks: {
					color: "#5c7186", // medium-gray
				},
			},
		},
	};

	return (
		<div>
			<Line data={data} options={options} />
		</div>
	);
};

export default ChartJsCoin;
