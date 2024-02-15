import React from "react";
import { Button } from "primereact/button";
import clsx from "clsx";
import { IconColorMapper } from "@/utils/common";
import { currency } from "@/constants/common";
import moment from "moment";

function TransactionCard({ item }: { item: any }) {
  return (
    <div
      className={clsx(
        IconColorMapper(item.type)?.color,
        "py-2 px-2 text-center items-center rounded-lg text-sm"
      )}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Button
            icon={IconColorMapper(item.category.label)?.icon}
            className={clsx(
              IconColorMapper(item.category.label)?.color,
              " !flex !items-center !rounded-full !px-2 !py-1 !text-sm overflow-hidden"
            )}>
            <span className="ml-1 w-20 truncate text-start">
              {item.category.label}
            </span>
          </Button>
          <Button
            icon={IconColorMapper(item.account.accountType)?.icon || ""}
            className={clsx(
              IconColorMapper(item.account.accountType)?.color,
              "!flex !items-center !rounded-full !px-2 !py-1 !text-sm"
            )}>
            <span className="ml-1">{item.account.accountType}</span>
          </Button>
        </div>
        <p className="text-enavy-700 font-bold">
          <span
            className={clsx(
              item.spentType === "out"
                ? "pi pi-minus text-error"
                : "pi pi-plus text-success",
              "mr-2"
            )}></span>
          {item?.amount &&
            `${Intl.NumberFormat().format(item.amount)} ${currency}`}{" "}
        </p>
      </div>
      <div className="w-full flex justify-between text-gray-500">
        <div> {item.title} </div>
        <div> {moment(item.createdAt).format("DD/MM/YYYY")} </div>
      </div>
    </div>
  );
}

export default TransactionCard;
