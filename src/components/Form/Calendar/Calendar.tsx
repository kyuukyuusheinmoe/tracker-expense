import React from "react";
import { Calendar } from "primereact/calendar";
import styles from "./Calendar.module.scss";
import "./Calendar.module.scss";
import clsx from "clsx";
import { CalendarComponentProps } from "@/types/form";

function CalendarComponent({ label, ...rest }: CalendarComponentProps) {
  return (
    <div
      className={clsx(
        styles["calendar-component"],
        "grid grid-cols-12 rounded-xl px-4"
      )}>
      <label className="col-span-4 text-center text-md font-bold">
        {label}
      </label>
      <Calendar {...rest} className="!col-span-8" />
    </div>
  );
}

export default CalendarComponent;
