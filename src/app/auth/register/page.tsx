"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { Button } from "primereact/button";
import { RegisterForm as components } from "@/constants/Auth";
import { register } from "@/services/authServices";
import { FormFieldType } from "@/types/form";
import { ajvResolver } from "@/utils/ajvResolver";
import { JSONSchemaType } from "ajv";
import { AuthData } from "@/types/auth";
import { fullFormats } from "ajv-formats/dist/formats";

const registerFormSchema: JSONSchemaType<AuthData> = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 1,
      errorMessage: { minLength: "Name is required" },
    },
    email: {
      type: "string",
      format: "email",
      errorMessage: { format: "Must be a valid email address." },
    },
    password: {
      type: "string",
      minLength: 1,
      errorMessage: { minLength: "This field is required" },
    },
    confirmPassword: {
      type: "string",
      minLength: 1,
      const: {
        $data: "1/password",
      },
      errorMessage: { minLength: "This field is required" },
    },
  },
  required: ["email", "password", "confirmPassword"],
};

const Page = () => {
  const methods = useForm<AuthData>({
    resolver: ajvResolver(registerFormSchema, { formats: fullFormats }),
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
        <Button type="submit" label="Register" />
      </form>
    </FormProvider>
  );
};

export default Page;
