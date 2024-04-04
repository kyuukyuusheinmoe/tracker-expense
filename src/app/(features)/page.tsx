import {
  fetchTopCategories,
  fetchTotalBalance,
  fetchTotalExpense,
} from "@/services/transactionServices";
import { months, currency } from "@/constants/common";
import { Button } from "primereact/button";
import { Suspense } from "react";
import { TransactionList, TopCategoriesChart } from "./ui/dashboard";
import { Skeleton } from "primereact/skeleton";

export default async function Home() {
  "use server";
  const categoriesData = await fetchTopCategories();
  const totalBalance = await fetchTotalBalance();
  const totalExpense = await fetchTotalExpense();

  const currentDate = new Date();
  const currentMonth = months[currentDate.getMonth()];

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
        Balance:
        <span className="font-normal">
          {totalBalance &&
            `${Intl.NumberFormat().format(totalBalance)} ${currency}`}
        </span>
      </p>
      <p className="font-medium text-xl text-error">
        Total Expense:
        {totalExpense &&
          `${Intl.NumberFormat().format(totalExpense)} ${currency}`}
      </p>
      <Suspense
        fallback={
          <>
            <Skeleton size="5rem" className="mr-2"></Skeleton>
            <Skeleton size="4rem" className="mr-2"></Skeleton>
            <Skeleton size="4rem" className="mr-2"></Skeleton>
          </>
        }>
        <TopCategoriesChart data={categoriesData} />
      </Suspense>

      <Suspense fallback={"Loading"}>
        <TransactionList />
      </Suspense>
    </div>
  );
}
