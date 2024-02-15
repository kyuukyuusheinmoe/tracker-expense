import React from "react";
import { Password } from "primereact/password";
import { PasswordComponentProps } from "@/types/form";

function PasswordComponent({
  label,
  name,
  value,
  onChange,
}: PasswordComponentProps) {
  return (
    <div className="grid grid-cols-12 items-center rounded-full px-4">
      {label && (
        <label className="col-span-4 text-center text-md font-bold">
          {label}
        </label>
      )}
      <Password
        className="col-span-8 !bg-transparent !border-b-[1px] !text-black !border-b-black !rounded-none"
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        feedback={false}
      />
    </div>
  );
}

export default PasswordComponent;
