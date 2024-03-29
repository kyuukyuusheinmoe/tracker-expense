import React from "react";
import { TransactionCard } from "@/components/Cards";
import { fetchTransactionList } from "@/services/transactionServices";

const TransactionList = async () => {
  const transactions = await fetchTransactionList(
    `/transaction/list?page=${0}&pageSize=${5}`
  );

  return (
    <>
      {transactions?.map((item: any) => (
        <TransactionCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default TransactionList;
