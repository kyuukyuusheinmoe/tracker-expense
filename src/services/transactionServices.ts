'use server'
import { fetcher, axiosClient } from "./axiosInstance"
import moment from "moment"
import { revalidatePath } from "next/cache"
import { logout } from "./authServices"

export const fetchTopCategories = async (from: string, to:string) => {
    console.log ('xxx fetchTopCategories ', `/analytic/top-categories?limit=5&from=${from}&to=${to}`)
    try {
        const result = await axiosClient.get(`/analytic/top-categories?limit=5&from=${from}&to=${to}`)
        console.log ('xxx result ', result)

        return result?.data.data
    } catch (error: any) {
        console.log ('xxx error code ', error.response.status === 401)
        if (error.response.status === 401) {
            logout()
            return;
        }
        return null;
    }
}

export const fetchTotalBalance = async () => {
    try {
        const result = await fetcher('/analytic/total-balance')
        return result.data?.total
    } catch (error: any) {
        return null
    }
}

export const fetchTotalExpense = async () => {
    const currentDate = new Date()
    const startOfMonth = moment(currentDate).startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment(currentDate).endOf('month').format('YYYY-MM-DD');
    try {
        const result = await fetcher(`/analytic/total-expense?from=${moment([currentDate.getFullYear(), currentDate.getMonth()]).format('DD-MM-YYYY')}`)
        
        return result.data?.total
    } catch (error: any) {
        return null
    }
}

export const fetchTransactionList = async (url: string) => {
   try {
    const result = await fetcher(url)

    return result?.data
   } catch (error) {
    console.log ('xxx error ', error)
    return []
   }
}

export const createTransction = async (data: any) => {
    try {
        const result = await axiosClient.post('/transaction/create', {
            ...data
        })

        if (result.status === 200) {
            revalidatePath('/')
            return ({success: true, message: "Transaction has been created."})
        }
    } catch (error: any) {
        return ({success: false, message: error?.response?.data?.data.message || "Failed to create transaction"})
    }
  }