import React from "react";
import { AccountCard } from "@/components/Cards";
import { fetchAccountList } from "@/services/accountServices";
import { AccountCardProps } from "@/components/Cards/AccountCard";

const Page = async () => {
  const list = await fetchAccountList("/account/list");
  return (
    <div className="grid gap-2 p-4">
      <h1 className="text-xl"> Account List </h1>
      {list?.data?.map((account: AccountCardProps) => (
        <AccountCard key={account.id} {...account} />
      ))}
    </div>
  );
};

export default Page;
