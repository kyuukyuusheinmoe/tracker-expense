'use server'
import { fetcher, axiosClient } from "./axiosInstance"
import moment from "moment"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { isRedirectError } from "next/dist/client/components/redirect"

export const fetchTopCategories = async () => {
    try {
        const result = await fetcher('/analytic/top-categories?limit=5')

        return result?.data

    } catch (error: any) {
        console.log ('xxx error ', error)
        return null
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
    try {
        const result = await fetcher(`/analytic/total-expense?from=${moment([currentDate.getFullYear(), currentDate.getMonth()]).format('YYYY-MM-DD')}`)
        
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

        console.log ('xxx trxn result ', result)

        if (result.status === 200) {
            revalidatePath('/')
            return ({success: true, message: "Transaction has been created."})
        }
    } catch (error) {
        return ({success: false, message: "Failed to create transaction"})
    }
  }