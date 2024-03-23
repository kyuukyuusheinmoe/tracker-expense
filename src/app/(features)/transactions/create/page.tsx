"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { useForm, FormProvider } from "react-hook-form";
import { Dialog } from "primereact/dialog";
import { CreateTransactionForm as components } from "@/constants/Transaction";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { createTransction } from "@/services/transactionServices";
import { FormFieldType } from "@/types/form";

const Page = () => {
  const methods = useForm({
    defaultValues: useMemo(() => {
      let arrToObject: Record<string, any> = {};
      components.forEach((obj) => {
        arrToObject[obj.name] = obj.defaultValue;
      });
      return arrToObject;
    }, []),
    shouldUnregister: true,
  });
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [apiData, setApiData] = useState<{ success?: boolean } | undefined>(
    undefined
  );
  const { control, handleSubmit, reset } = methods;
  const router = useRouter();

  const onSubmit: () => void = handleSubmit(async (data: any) => {
    const res = await createTransction({
      ...data,
      spentAt: new Date(data.spentAt),
    });
    setApiData(res);
    setConfirmVisible(true);
  });

  return (
    <>
      <FormProvider {...methods}>
        <form action={onSubmit}>
          <div className="p-4 grid gap-5">
            {components?.map((field, index) => {
              return (
                <DynamicFormElement
                  control={control}
                  componentType={field.formProps.type as FormFieldType}
                  key={index}
                  {...field}
                  defaultValue={field?.defaultValue}
                />
              );
            })}
            <div className="flex flex-row-reverse p-4">
              <Button
                type="submit"
                label="Save"
                className="!py-2 fixed bottom-2"
              />
            </div>
          </div>
        </form>
      </FormProvider>
      <Dialog
        header={apiData?.success === false ? "Failed!" : "Success!"}
        visible={confirmVisible}
        onHide={() => setConfirmVisible(false)}>
        {apiData?.success ? (
          <Button
            label="Go Home"
            onClick={() => router.push("/")}
            className="!text-black"
          />
        ) : (
          <div className="flex flex-col gap-4">
            <p> Something went wrong.</p>
            <Button
              icon="pi pi-refresh"
              label="Try Again"
              type="button"
              onClick={() => setConfirmVisible(false)}
            />
          </div>
        )}
      </Dialog>
    </>
  );
};

export default Page;
