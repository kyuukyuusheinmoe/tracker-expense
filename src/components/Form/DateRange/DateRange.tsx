import React from "react";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

type DateRangePickerProps = {
  value: Nullable<(Date | null)[]>;
  onChange: (value: Nullable<(Date | null)[]>) => void;
};

const DateRangePicker = ({ value, onChange }: DateRangePickerProps) => {
  return (
    <Calendar
      value={value}
      onChange={(e) => onChange(e.value)}
      selectionMode="range"
      readOnlyInput
    />
  );
};

export default DateRangePicker;
