import { USER } from "@/constants/common";
import axios from "axios";
import { cookies } from "next/headers";

const isServer = typeof window === 'undefined'

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
    }
});

axiosClient.interceptors.request.use ((request) => { 
    if (isServer) {
      const userDatString = cookies().get(USER)?.value

      const userData = userDatString ? JSON.parse(userDatString) : {}

      if (userData?.token) {
          request.headers['Authorization'] = `Bearer ${userData.token.replace(/['"]+/g, '')}`
      }
  }
  else {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

    if (token) {
        request.headers['Authorization'] = `Bearer ${token.replaceAll("%22", '')}`
    }
  }
  return request
})

axiosClient.interceptors.response.use (response => {
  return response
})

export const fetcher = (url: string) => axiosClient.get(url).then(res=> res.data).catch(e => {data: null})