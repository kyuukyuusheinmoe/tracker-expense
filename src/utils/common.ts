import {TRXN_DEBIT,TRXN_CREDIT,PAYMENT_CASH, PAYMENT_BANK, PAYMENT_PAY,CATEGORY_BILLS, NECESSITY_LOW,NECESSITY_MODERATE,NECESSITY_HIGH } from '../constants/common'

export const IconColorMapper = (payment: string)=> {
    switch(payment) {
        case TRXN_DEBIT: return {color: '!bg-egray-100'}
        case TRXN_CREDIT: return {color: '!bg-eblue-50'}
        case PAYMENT_CASH: return {icon: 'pi pi-money-bill', color: '!bg-egold-50 !border-egold-50 !text-black'}
        case PAYMENT_BANK: return {icon: 'pi pi-credit-card', color: '!bg-egray-100 !border-egray-100 !text-black'}
        case PAYMENT_PAY: return {icon: "pi pi-mobile", color: "!bg-epink-50 !border-epink-50 !text-black"}
        case CATEGORY_BILLS: return {icon: 'pi pi-money-bill', color: '!bg-blue-500 !border-blue-500 !text-black'}
        case NECESSITY_LOW: return { color: '!bg-error !border-error !text-black'}
        case NECESSITY_MODERATE: return { color: '!bg-warning !border-warning !text-black'}
        case NECESSITY_HIGH: return {color: "!bg-[#81A884] !border-success !text-black"}
        default: return {icon: 'pi pi-money-bill', color: '!bg-egold-50 !border-egold-50 !text-black'}

    }
}

export const convertUrlToTitle = (url: string) => {

    const [_,feature, action] = url.split('/')

    return `${feature.slice(0,1).toUpperCase() + feature.slice(1)} ${action.slice(0,1).toUpperCase() + action.slice(1)}`
}