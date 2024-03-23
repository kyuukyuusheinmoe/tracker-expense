"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { Button } from "primereact/button";
import { LoginForm as components } from "@/constants/Auth";
import { login } from "@/services/authServices";
import { FormFieldType } from "@/types/form";
import Link from "next/link";

const Login = () => {
  const methods = useForm();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, control } = methods;

  const action: () => void = handleSubmit(async (data) => {
    setLoading(true);
    const res = await login(data);
    if (res) {
      setLoading(false);
    }
  });

  return (
    <div className="h-[100vh] flex flex-col gap-4 justify-center items-center m-auto">
      <FormProvider {...methods}>
        <form
          action={(e) => {
            action();
          }}>
          <div className="grid gap-4">
            {components?.map((component, index) => (
              <DynamicFormElement
                key={index}
                componentType={component.formProps.type as FormFieldType}
                {...component}
                control={control}
              />
            ))}
          </div>
          <div className="flex justify-center ">
            <Button
              type="submit"
              label="Login"
              className="text-center my-4 bg-slate-600 p-2 text-white"
              iconPos="right"
              icon={loading ? "pi pi-spin pi-spinner" : ""}
            />
          </div>
        </form>
      </FormProvider>
      <div> {`Don't have an account?`} </div>
      <Link href="/auth/register" className="text-blue-500">
        Register here
      </Link>
    </div>
  );
};

export default Login;
