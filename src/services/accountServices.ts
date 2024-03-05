'use server'

import { axiosClient } from "./axiosInstance"
import { revalidatePath } from "next/cache"

export const fetchAccountList = async (url: string) => {
    try {
        const result = await axiosClient.get (url)
        return {success: true, data: result.data.data}
    } catch (error: any) {
        return {sccess: false}
    }
}

export const createAccount= async (data: any) => {
    try {
        const result = await axiosClient.post ('/account/create', {...data})
        if (result.status === 201) {
            revalidatePath('/accounts')
            return {success: true, data: result.data.data}
        }
        return {success: false}
    } catch (error: any) {
        return {success: false}
    }
}