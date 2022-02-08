import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const Barchart = ({chartData}) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};
