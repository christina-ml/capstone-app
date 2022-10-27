import React from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ChartJsCoin = ({ coin }) => {
  let p1h = coin.percent_change_1h;
  let p7d = coin.percent_change_7d;
  let p24h = coin.percent_change_24h;
  let p30d = coin.percent_change_30d;
  let p60d = coin.percent_change_60d;
  let p90d = coin.percent_change_90d;

  let percentData = [p1h, p7d, p24h, p30d, p60d, p90d];

  const labels = ["1h", "7d", "24h", "30d", "60d", "90d"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "% change",
        backgroundColor: "rgb(99, 132, 255)",
        borderColor: "rgb(99, 132, 255)",
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

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ChartJsCoin;
