"use client";
import React, { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { componentMapper } from "@/utils/componentMapper";
import useAPIData from "@/hooks/useAPIData";
import { DynamicFormElementProps, FormFieldType } from "@/types/form";

function DynamicFormElement({
  control,
  componentType,
  label,
  dataSource,
  name,
  defaultValue,
  condition,
  ...rest
}: DynamicFormElementProps) {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
  });

  const { watch } = useFormContext();

  const [componentShow, setComponentShow] = useState(true);

  const watchValues = watch();

  useEffect(() => {
    if (condition) {
      const { name: dependencyFieldName, hasValue, show } = condition;
      const isVisible =
        watchValues[dependencyFieldName] === hasValue ? show : true;
      setComponentShow((prev) => {
        return isVisible;
      });
    }
  }, [condition, watchValues, setComponentShow, control, name]);

  const Component = componentMapper[componentType as FormFieldType]?.component;

  const itemList = useAPIData(dataSource, watchValues[condition?.name]);

  return (
    <>
      {Component && componentShow && (
        <>
          <Component
            label={label}
            items={itemList || []}
            {...field}
            defaultValue={defaultValue}
            {...rest}
          />
          {errors[name] && (
            <p className="text-sm text-red-500">
              {errors[name]?.message as string}
            </p>
          )}
        </>
      )}
    </>
  );
}

export default DynamicFormElement;
