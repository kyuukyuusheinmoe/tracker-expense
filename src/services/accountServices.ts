'use server'

import { axiosClient } from "./axiosInstance"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const fetchAccountList = async (url: string) => {
    try {
        const result = await axiosClient.get (url)
        return {success: true, data: result.data.data}
    } catch (error: any) {
        if (error.response.statusCode === 401) {
            redirect('/auth/login')
        }
        return {sccess: false}
    }
}

export const createAccount= async (data: any) => {
    try {
        const result = await axiosClient.post ('/account/create', {...data})
        if (result.status === 200) {
            revalidatePath('/accounts')
            return {success: true, data: result.data.data}
        }
        return {success: false}
    } catch (error: any) {
        return {success: false}
    }
}

export const fetchAccountDetails= async (id: number) => {
    try {
        const result = await axiosClient.get (`/account/${id}`)
        return {success: true, data: result.data.data}
    } catch (error: any) {
        return {success: false}
    }
}

export const updateAccount= async (id: number, data: any) => {
    try {
        const result = await axiosClient.patch(`/account/${id}`, {...data})
        if (result.status === 200) {
            revalidatePath('/accounts')
            return {success: true, data: result.data.data}
        }
        return {success: false}
    } catch (error: any) {
        return {success: false}
    }
}

export const deleteAccount= async (id: number) => {
    try {
        const result = await axiosClient.delete (`/account/${id}`)
        if (result.status === 200) {
            revalidatePath('/accounts')
            return {success: true, message: 'Account deleted successfully.'}
        }
        return {success: false}
    } catch (error: any) {
        return {success: false}
    }
}