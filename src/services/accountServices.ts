'use server'

import { axiosClient } from "./axiosInstance"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export const fetchAccountList = async (url: string) => {
    try {
        const result = await axiosClient.get (url)
        return {success: true, data: result.data.data}
    } catch (error: any) {
        return {sccess: false}
    }
}

export const createAccount = async (data: any) => {
    try {
        const result = await axiosClient.post ('/account/create', {...data})
        if (result.status === 201) {
            revalidatePath('/accounts')
            redirect('/accounts')
        }
    } catch (error: any) {
        return {sccess: false}
    }
}