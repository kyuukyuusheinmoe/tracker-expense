import React from "react";
import { Button } from "primereact/button";
import { IconColorMapper } from "../../../../exp-tracker/src/utils/common";
import clsx from "clsx";

function AccountCard({
  accountType,
  name,
  balance,
}: {
  accountType: string;
  name: string;
  balance: number;
}) {
  return (
    <div>
      <div className="p-6 bg-blue-50 rounded-lg">
        <div className="flex justify-between">
          <p className="text-center font-medium text-lg"> {name} </p>
          <Button
            icon={IconColorMapper(accountType)?.icon}
            className={clsx(
              IconColorMapper(accountType)?.color,
              " !flex !items-center !rounded-full !px-2 !py-1 !text-sm overflow-hidden"
            )}>
            <span className="ml-1">{accountType}</span>
          </Button>
        </div>
        <p className="text-end font-bold text-xl mt-2">
          {" "}
          {balance ? Intl.NumberFormat().format(balance) : 0} MMK
        </p>
      </div>
    </div>
  );
}

export default AccountCard;
