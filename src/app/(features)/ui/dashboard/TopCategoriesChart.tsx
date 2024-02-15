import React from "react";
import BarChart from "@/components/Charts/BarChart";

const TopCategoriesChart = ({ data }: { data: any }) => {
  const formatChartData = {
    labels: data?.map((cat: any) => cat.categoryName),
    datasets: [
      {
        label: "Amount",
        data: data?.map((cat: any) => cat.amount),
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return <BarChart chartData={formatChartData} />;
};

export default TopCategoriesChart;
