import dynamic from "next/dynamic"
import { ComponentType } from "react"

export const componentMapper: {[key: string]: {component: ComponentType<{ [x: string]: any; label: any; name: any; value?: any; onChange?: any; }>}} = {
    Input:{component: dynamic(()=> import ("@/components/Form/Input"))},
    Password:{component: dynamic(()=> import ("@/components/Form/Password"))},
    Number:{component: dynamic(()=> import ("@/components/Form/NumberInput"))},
    Calendar: {component: dynamic(()=> import ("@/components/Form/Calendar"))},
    DropDown: {component: dynamic(()=> import ("@/components/Form/DropDown"))},
    RadioSelect: {component: dynamic(()=> import ("@/components/Form/RadioList"))},

}