"use client";
import React from "react";
import DateRangePicker from "@/components/Form/DateRange/DateRange";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SelectDateComponent = ({
  fromDate,
  toDate,
}: {
  fromDate: string;
  toDate: string;
}) => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathName = usePathname();

  const handleDateChange = (value: any) => {
    const [from, to] = value;
    const params = new URLSearchParams(searchParams);

    console.log("xxx handleDateChange ", from, to);

    params.set("from", from);
    params.set("to", to);

    // router.push(`${pathName}/${params.toString()}`);
  };

  return (
    <div>
      <DateRangePicker
        value={[new Date(fromDate), new Date(toDate)]}
        onChange={(value) => handleDateChange(value)}
      />
    </div>
  );
};

export default SelectDateComponent;
