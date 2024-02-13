import React from "react";
import { Chart } from "primereact/chart";

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = ({ chartData }: { chartData: any }) => {
  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
