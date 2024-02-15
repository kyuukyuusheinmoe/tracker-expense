

import { FormEvent } from "primereact/ts-helpers";
import { SyntheticEvent } from "react";

export type BaseFormProps = {
    label: string;
    name: string;
    placeholder?: string;
    defaultValue?: string
}

export type InputComponentProps = BaseFormProps & {
    value: string | undefined;
    onChange: (value: string | undefined) => void;
};

export type InputNumberComponentProps = BaseFormProps & {
    value: number;
    onChange: (value: number | null | undefined) => void;
};

export type ItemProps = {
    label: string;
    value: string;
  };
  
export type DropDownProps = BaseFormProps & {
    items: ItemProps[];
    value: ItemProps;
    onChange: (item: ItemProps) => void;
    displayKey: string;
    defaultValue: ItemProps;
    displayValue: string;
};

export type PasswordComponentProps = BaseFormProps & { value: string, onChange: (value: string)=> void }

export type CalendarComponentProps = BaseFormProps & { value: null | Date | undefined, onChange: (e:FormEvent<Date, SyntheticEvent<Element, Event>>)=> void }

export type RadioListProps = BaseFormProps & {
    value: ItemProps
    onChange: (value: ItemProps) => void;
    items: ItemProps[];
    displayKey: string;
    displayValue: string;
  };