'use server'
import { axiosClient } from "./axiosInstance"
import { cookies } from "next/headers"
import {USER} from '@/constants/common'
import { redirect } from "next/navigation"
import { isRedirectError } from "next/dist/client/components/redirect"

export const login = async (data: any) => {
    try {
        const result = await axiosClient.post("/auth/login", {
            ...data,
          })

        if (result.status === 200) {
            cookies().set(USER, JSON.stringify(result.data.data))
            redirect('/')
        }
        return {success: false, message: "Something went wrong"}

    } catch (error: any) {
        if (isRedirectError(error)) {
            redirect('/')
        }
        return {success: false, message:error?.response?.data?.message ||  "Something went wrong"}
    }
}