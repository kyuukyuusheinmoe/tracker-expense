import { redirect } from "next/navigation"
import { axiosClient } from "./axiosInstance"
import { revalidatePath } from "next/cache"

export const fetchAccountList = async (url: string) => {
    try {
        const result = await axiosClient.get (url)
        return {success: true, data: result.data.data}
    } catch (error) {
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
    } catch (error) {
        return {sccess: false}
    }
}