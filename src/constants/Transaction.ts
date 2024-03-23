import { necessityTypes } from "./ComponentData" 

export const CreateTransactionForm =  [
        {
            label: "Title",
            name: 'title',
            formProps : {
                type: "Input",
                valueType: "string"
            }
        },
        {
            label: "Amount",
            name: 'amount',
            formProps : {
                type: "Number",
                valueType: "number"
            }
        },
        {
            label: "Date",
            name: 'spentAt',
            formProps : {
                type: "Calendar"
            }
        },
        {
            label: "Type",
            name: 'spentType',
            formProps : {
                type: "DropDown",
                valueType: "string"
            },
            defaultValue: "out",
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "LIST",
                items: [{label: "Out", value: "out"}, {label: "In", value: "in"}],
            }
        },
        {
            label: "Usage Category",
            name: 'categoryId',
            formProps : {
                type: "DropDown",
                valueType: "string"
            },
            displayKey: "label",
            displayValue: "id",
            dataSource: {
                type: "API",
                url: "/category/list",
            }
        },
        {
            label: "Payment",
            name: 'accountId',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "name",
            displayValue: "id",
            dataSource: {
                type: "API",
                url: "/account/list",
            }
        },
        {
            label: "Necessity",
            name: 'necessity',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "LIST",
                items: necessityTypes
            },
            condition: {
                show: false,
                name: "spentType",
                hasValue: "in"
            }
        }
    ]