import React from "react";
import { Dropdown } from "primereact/dropdown";

type ItemProps = {
  label: string;
  value: string;
};

type DropDownProps = {
  label: string;
  items: ItemProps[];
  value: ItemProps;
  onChange: (item: ItemProps) => void;
  placeholder?: string;
  displayKey: string;
  defaultValue: ItemProps;
  displayValue: string;
};

function DropDownComponent({
  label,
  items,
  value,
  onChange,
  placeholder,
  displayKey,
  defaultValue,
  displayValue,
}: DropDownProps) {
  console.log("xxx dd options ", items);
  return (
    <div className="grid grid-cols-12 place-items-center">
      <label className="col-span-4 text-center text-md font-bold">
        {label}
      </label>
      <Dropdown
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
