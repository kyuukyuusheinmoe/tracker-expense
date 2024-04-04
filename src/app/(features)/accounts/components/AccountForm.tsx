"use client";
import React, { useState } from "react";
import { CreateAccountForm as components } from "@/constants/Account";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useForm, FormProvider } from "react-hook-form";
import DynamicFormElement from "@/components/Form/DynamicFormElement";
import { createAccount } from "@/services/accountServices";
import { Response } from "@/types/response";
import { FormFieldType } from "@/types/form";
import { useRouter } from "next/navigation";

const AccountForm = ({ details }: { details?: any }) => {
  console.log("xxx details ", details);
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: details,
  });
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [apiData, setApiData] = useState<Response<any> | null>(null);
  const { control, handleSubmit, reset } = methods;
  const router = useRouter();

  const onSubmit: () => void = handleSubmit(async (data: any) => {
    const requestData = { ...data };
    const res: Response<any> = await createAccount(requestData);
    if (res.success) {
      router.push("/accounts");
    }
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
        {apiData?.success === false && (
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

export default AccountForm;
