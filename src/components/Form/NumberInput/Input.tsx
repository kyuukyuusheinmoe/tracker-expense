import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputNumberComponentProps } from "@/types/form";

function InputNumberComponent({
  label,
  name,
  value,
  onChange,
}: InputNumberComponentProps) {
  return (
    <div className="grid grid-cols-12 items-center rounded-full px-4">
      <label className="col-span-4 text-center text-md font-bold">
        {label}
      </label>
      <InputNumber
        name={name}
        inputId="integeronly"
        value={value}
        onValueChange={(e) => onChange(e.value)}
        className=" col-span-8 !border-b-[1px] !border-black"
      />
    </div>
  );
}

export default InputNumberComponent;
