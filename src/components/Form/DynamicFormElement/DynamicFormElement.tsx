import React, { useEffect, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { componentMapper } from "@/utils/componentMapper";
import useAPIData from "../../../hooks/useAPIData";

type DynamicFormElementProps = {
  control: any;
  valueType: string;
  componentType: string;
  label: string;
  dataSource: any;
  name: string;
  defaultValue: any;
  condition: any;
};

function DynamicFormElement({
  control,
  valueType,
  componentType,
  label,
  dataSource,
  name,
  defaultValue,
  condition,
  ...rest
}: DynamicFormElementProps) {
  const { field } = useController({
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

  const Component = componentMapper[componentType]?.component;

  const itemList = useAPIData(dataSource, watchValues[condition?.name]);

  return (
    <>
      {Component && componentShow && (
        <Component
          type={valueType}
          label={label}
          items={itemList || []}
          {...field}
          defaultValue={defaultValue}
          {...rest}
        />
      )}
    </>
  );
}

export default DynamicFormElement;
