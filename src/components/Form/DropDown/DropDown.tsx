import React from "react";
import { Dropdown } from "primereact/dropdown";
import { DropDownProps } from "@/types/form";

function DropDownComponent({
  label,
  name,
  items,
  value,
  onChange,
  placeholder,
  displayKey,
  defaultValue,
  displayValue,
}: DropDownProps) {
  console.log( name, "xxx options ", items);
  return (
    <div className="grid grid-cols-12 place-items-center">
      <label className="col-span-4 text-center text-md font-bold">
        {label}
      </label>
      <Dropdown
        name={name}
        value={value || defaultValue}
        onChange={(e) => onChange(e.value)}
        options={items}
        optionLabel={displayKey}
        optionValue={displayValue}
        placeholder={placeholder}
        className="col-span-8 w-full"
      />
    </div>
  );
}

export default DropDownComponent;
