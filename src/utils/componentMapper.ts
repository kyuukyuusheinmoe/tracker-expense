import { InputComponentProps, InputNumberComponentProps, DropDownProps, PasswordComponentProps, CalendarComponentProps, RadioListProps } from "@/types/form"
import dynamic from "next/dynamic"
import { ComponentType } from "react"
import { FormFieldType } from "@/types/form"

export const componentMapper: Record<FormFieldType, {component: ComponentType<InputComponentProps> | ComponentType<InputNumberComponentProps> | ComponentType<DropDownProps> | ComponentType<PasswordComponentProps> | ComponentType<CalendarComponentProps> | ComponentType<RadioListProps>}> = {
    Input:{component: dynamic(()=> import ("@/components/Form/Input"))},
    Password:{component: dynamic(()=> import ("@/components/Form/Password"))},
    Number:{component: dynamic(()=> import ("@/components/Form/NumberInput"))},
    Calendar: {component: dynamic(()=> import ("@/components/Form/Calendar"))},
    DropDown: {component: dynamic(()=> import ("@/components/Form/DropDown"))},
    RadioSelect: {component: dynamic(()=> import ("@/components/Form/RadioList"))},
}