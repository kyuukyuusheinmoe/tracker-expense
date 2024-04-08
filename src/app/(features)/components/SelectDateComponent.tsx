"use client";
import React, { useState, useEffect } from "react";
import DateRangePicker from "@/components/Form/DateRange/DateRange";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Nullable } from "primereact/ts-helpers";
import moment from "moment";

const SelectDateComponent = ({
  fromDate,
  toDate,
}: {
  fromDate: string;
  toDate: string;
}) => {
  const searchParams = useSearchParams();
  const [dates, setDates] = useState<Nullable<(Date | null)[]>>(() => [
    new Date(fromDate),
    new Date(toDate),
  ]);

  useEffect(() => {
    setDates([new Date(fromDate), new Date(toDate)]);
  }, [fromDate, toDate]);

  const router = useRouter();
  const pathName = usePathname();

  const handleDateChange = (value: any) => {
    const [from, to] = value;
    const params = new URLSearchParams(searchParams);

    params.set("from", moment(from).format("YYYY-MM-DD"));

    if (moment(to).isValid()) {
      params.set("to", moment(to).format("YYYY-MM-DD"));
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div>
      <DateRangePicker
        value={dates}
        onChange={(value) => {
          const dateValues = value?.filter((val) => !!val);
          setDates(value);
          handleDateChange(value);
        }}
      />
    </div>
  );
};

export default SelectDateComponent;
