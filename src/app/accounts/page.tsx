import React from "react";
import { AccountCard } from "@/components/Cards";
import { fetchAccountList } from "@/services/accountServices";
import { AccountCardProps } from "@/components/Cards/AccountCard";

const Page = async () => {
  const { data: accounts } = await fetchAccountList("/accounts");
  return (
    <div className="grid gap-2 p-4">
      {accounts?.map((account: AccountCardProps) => (
        <AccountCard key={account.id} {...account} />
      ))}
    </div>
  );
};

export default Page;
