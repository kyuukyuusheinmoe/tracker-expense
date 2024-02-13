import {
  fetchTopCategories,
  fetchTotalBalance,
  fetchTotalExpense,
} from "@/services/transactionServices";
import { months, currency } from "@/constants/common";
import { Button } from "primereact/button";
import BarChart from "@/components/Charts/BarChart";

export default async function Home() {
  const categoriesData = await fetchTopCategories();
  const totalBalance = await fetchTotalBalance();
  const totalExpense = await fetchTotalExpense();

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];

  const formatChartData = {
    labels: categoriesData?.map((cat: any) => cat.categoryName),
    datasets: [
      {
        label: "Amount",
        data: categoriesData?.map((cat: any) => cat.amount),
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
  return (
    <div className="p-4">
      <div className="flex flex-row-reverse">
        <Button
          label={currentMonth}
          icon="pi pi-calendar pr-1"
          className="!bg-main !text-white !p-2 !rounded-full"
        />
      </div>
      <p className="font-bold text-md">
        {" "}
        Balance:{" "}
        <span className="font-normal">
          {totalBalance &&
            `${Intl.NumberFormat().format(totalBalance)} ${currency}`}{" "}
        </span>
      </p>
      <p className="font-medium text-xl text-error">
        {" "}
        Total Expense:{" "}
        {totalExpense &&
          `${Intl.NumberFormat().format(totalExpense)} ${currency}`}
      </p>
      <BarChart chartData={formatChartData} />

      <TransactionList />
    </div>
  );
}
