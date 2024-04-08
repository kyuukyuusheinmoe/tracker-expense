import {
  fetchTopCategories,
  fetchTotalBalance,
  fetchTotalExpense,
} from "@/services/transactionServices";
import { currency } from "@/constants/common";
import { Suspense } from "react";
import { TransactionList, TopCategoriesChart } from "./ui/dashboard";
import { Skeleton } from "primereact/skeleton";
import SelectDateComponent from "./components/SelectDateComponent";
import moment from "moment";

export default async function Home({
  params,
  searchParams,
}: {
  params: any;
  searchParams: { from: string; to: string };
}) {

  const currentDate = new Date();
  const fromDate =
    searchParams?.from ||
    moment(currentDate).startOf("month").format("YYYY-MM-DD");
  const toDate =
    searchParams?.to || moment(currentDate).endOf("month").format("YYYY-MM-DD");

  const categoriesData = await fetchTopCategories(
    fromDate as string,
    toDate as string
  );
  const totalBalance = await fetchTotalBalance();
  const totalExpense = await fetchTotalExpense();

  return (
    <div className="p-4">
      <div className="flex flex-row-reverse">
        <SelectDateComponent
          fromDate={fromDate as string}
          toDate={toDate as string}
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
