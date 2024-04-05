"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { IconColorMapper } from "@/utils/common";
import clsx from "clsx";
import { Dialog } from "primereact/dialog";
import { deleteAccount } from "@/services/accountServices";
import Link from "next/link";

export type AccountCardProps = {
  id: number;
  accountType: string;
  name: string;
  balance: number;
  alias: string;
};

function AccountCard({
  id,
  accountType,
  name,
  balance,
  alias,
}: AccountCardProps) {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [apiData, setApiData] = useState<
    { success?: boolean; message: string } | undefined
  >(undefined);

  return (
    <div className="p-4 bg-blue-50 grid gap-2 rounded-lg">
      <div className="flex flex-row-reverse gap-4">
        <i
          className="pi pi-trash"
          style={{ fontSize: "1rem" }}
          onClick={async () => {
            await deleteAccount(id);
          }}></i>
        <Link href={`/accounts/update/${id}`}>
          <i className="pi pi-pencil" style={{ fontSize: "1rem" }} />
        </Link>
      </div>
      <div className="flex justify-between">
        <p className="text-center font-medium text-lg"> {alias} </p>
        <Button
          icon={IconColorMapper(accountType)?.icon}
          className={clsx(
            IconColorMapper(accountType)?.color,
            " !flex !items-center !rounded-full !px-2 !py-1 !text-sm overflow-hidden"
          )}>
          <span className="ml-1">{name}</span>
        </Button>
      </div>
      <p className="text-end font-bold text-xl mt-2">
        {" "}
        {balance ? Intl.NumberFormat().format(balance) : 0} MMK
      </p>
      <Dialog
        header={apiData?.success === false ? "Failed!" : "Success!"}
        visible={confirmVisible}
        onHide={() => setConfirmVisible(false)}>
        {apiData?.success ? (
          <Button
            label="Success"
            // onClick={() => router.push("/")}
            className="!text-black"
          />
        ) : (
          <div className="flex flex-col gap-4">
            <p>{apiData?.message}</p>
            <Button
              icon="pi pi-refresh"
              label="Try Again"
              type="button"
              onClick={() => setConfirmVisible(false)}
            />
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default AccountCard;
