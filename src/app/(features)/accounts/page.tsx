import React from "react";
import { AccountCard } from "@/components/Cards";
import { fetchAccountList } from "@/services/accountServices";
import { AccountCardProps } from "@/components/Cards/AccountCard";

const Page = async () => {
  const list = await fetchAccountList("/account/list");
  console.log("xxx accounts ", list);
  return (
    <div className="grid gap-2 p-4">
      {list?.data?.map((account: AccountCardProps) => (
        <AccountCard key={account.id} {...account} />
      ))}
    </div>
  );
};

export default Page;
