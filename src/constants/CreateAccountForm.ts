import { BANK, CASH, PAY } from "./Account"

export const CreateAccountForm = [
    {
        label: "Account Type",
        name: 'accountType',
        formProps : {
            type: "DropDown",
            valueType: "string"
        },
        displayKey: "label",
        dataSource: {
            type: "LIST",
            items: [{label: "Cash", value: CASH}, {label: "Bank", value: BANK}, , {label: "Pay", value: PAY}],
        }
    },
    {
        label: "Wallet Name",
        name: 'name',
        formProps : {
            type: "DropDown",
            valueType: "string"
        },
        displayKey: "label",
        valueKey: "Object",
        dataSource: {
            type: "LIST",
            items: [{label: "AYA PAY", value: "ayapay", accountType: PAY}, 
                    {label: "KBZ PAY", value: "kpay", accountType: PAY}, 
                    {label: "KBZ Mobile Banking", value: "kbzBanking", accountType: BANK}, 
                    {label: "AYA Mobile Banking", value: "ayaBanking", accountType: BANK}
                ],
            filterCondition: {
                name: "accountType",
                filterValue: "accountType"
            }
        },
        condition: {
            show: false,
            name: "accountType",
            hasValue: "cash"
        },
    },
]