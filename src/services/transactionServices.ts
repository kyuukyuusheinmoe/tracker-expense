'use server'
import { fetcher } from "./axiosInstance"
import moment from "moment"

export const fetchTopCategories = async () => {

    try {
        const result = await fetcher('/analytic/top-categories?limit=5')

        return result.data?.data

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

    return result.data?.data
   } catch (error) {
    return []
   }
}