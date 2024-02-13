"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { Button } from "primereact/button";
import { LoginForm as components } from "@/constants/Auth";
import { login } from "@/services/authServices";

const Login = () => {
  const methods = useForm();

  const { handleSubmit, control } = methods;

  const action: () => void = handleSubmit(async (data) => {
    console.log ('xxx logging in')
    await login(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        action={action}
        className="h-[100vh] flex flex-col gap-4 justify-center items-center m-auto">
        {components?.map((component, index) => (
          <DynamicFormElement
            key={index}
            componentType={component.formprops.type}
            {...component}
            control={control}
          />
        ))}
        <Button type="submit" label="Login" />
      </form>
    </FormProvider>
  );
};

export default Login;
