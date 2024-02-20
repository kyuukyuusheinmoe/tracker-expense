"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { Button } from "primereact/button";
import { RegisterForm as components } from "@/constants/Auth";
import { register } from "@/services/authServices";
import { FormFieldType } from "@/types/form";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { JSONSchemaType } from "ajv";
import { AuthData } from "@/types/auth";

const registerFormSchema: JSONSchemaType<AuthData> = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
    },
    confirmPassword: {
      type: "string",
    },
  },
  required: ["email", "password", "confirmPassword"],
};

const Page = () => {
  const methods = useForm<AuthData>({
    resolver: ajvResolver(registerFormSchema),
  });

  const { handleSubmit, control } = methods;

  const action: () => void = handleSubmit(async (data) => {
    await register(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        action={action}
        className="h-[100vh] flex flex-col gap-4 justify-center items-center m-auto">
        {components?.map((component, index) => (
          <DynamicFormElement
            key={index}
            componentType={component.formProps.type as FormFieldType}
            {...component}
            control={control}
          />
        ))}
        <Button type="submit" label="Login" />
      </form>
    </FormProvider>
  );
};

export default Page;
