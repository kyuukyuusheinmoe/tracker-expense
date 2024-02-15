import React from "react";
import { Button } from "primereact/button";
import { IconColorMapper } from "../../../utils/common";
import clsx from "clsx";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { RadioListProps } from "@/types/form";

function RadioList({
  label,
  value,
  name,
  onChange,
  items,
  displayKey,
  displayValue,
}: RadioListProps) {
  const handleOnClick = (item: any) => {
    displayValue && onChange(item[displayValue]);
  };
  return (
    <div>
      <p className="text-md  text-gray-400 mb-2"> {label} </p>
      <div className="flex gap-4">
        {items.map((item: any, index: number) => (
          <div key={index} className="relative">
            {displayValue && value === item[displayValue] && (
              <CheckCircleIcon className="w-4 h-4 absolute right-0 z-30 text-success" />
            )}
            <Button
              type="button"
              icon={IconColorMapper(item?.value)?.icon || ""}
              className={clsx(
                IconColorMapper(item?.value)?.color,
                "!rounded-full !px-2 !py-1"
              )}
              onClick={() => {
                handleOnClick(item);
              }}>
              <span className="ml-1 mt-1">
                {displayKey && item?.[displayKey]}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioList;
