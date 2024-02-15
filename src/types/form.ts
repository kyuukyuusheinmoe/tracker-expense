

import { FormEvent } from "primereact/ts-helpers";
import { SyntheticEvent } from "react";

export type BaseFormProps = {
    label: string;
    name: string;
    value: any;
    placeholder?: string;
    defaultValue?: string
}

export type InputComponentProps = BaseFormProps & {
    onChange: (value: string | undefined) => void;
};

export type InputNumberComponentProps = BaseFormProps & {
    onChange: (value: number | null | undefined) => void;
};

export type ItemProps = {
    label: string;
    value: string;
  };
  
export type DropDownProps = BaseFormProps & {
    items: ItemProps[];
    onChange: (item: ItemProps) => void;
    displayKey?: string;
    displayValue?: string;
};

export type PasswordComponentProps = BaseFormProps & { value: string, onChange: (value: string)=> void }

export type CalendarComponentProps = BaseFormProps & { value: null | Date | undefined, onChange: (e:FormEvent<Date, SyntheticEvent<Element, Event>>)=> void }

export type RadioListProps = BaseFormProps & {
    value: ItemProps
    onChange: (value: ItemProps) => void;
    items: ItemProps[];
    displayKey?: string;
    displayValue?: string;
};

export type FormFieldType = "DropDown" | "Number" | "Password" | "RadioSelect" | "Calendar" | 'Input'

export type DynamicFormElementProps = {
    control: any;
    componentType: FormFieldType;
    label: string;
    dataSource?: any;
    name: string;
    defaultValue?: any;
    displayKey?: string;
    displayValue?: string;
    condition?: any;
  };