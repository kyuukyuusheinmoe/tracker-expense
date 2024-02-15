import React from "react";
import { InputText } from "primereact/inputtext";
import { useFormContext } from "react-hook-form";
import { InputComponentProps } from "@/types/form";

function InputComponent({ label, name, ...rest }: InputComponentProps) {
  const { register } = useFormContext();

  return (
    <div className="grid grid-cols-12 items-center rounded-full px-4">
      {label && (
        <label className="col-span-4 text-center text-md font-bold">
          {label}
        </label>
      )}
      <InputText
        {...rest}
        className="col-span-8 !bg-transparent !border-b-[1px] !text-black !border-b-black !rounded-none"
        {...register(name)}
      />
    </div>
  );
}

export default InputComponent;
