import { USER } from "@/constants/common";
import axios from "axios";

const isServer = typeof window === 'undefined'

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
    }
});

axiosClient.interceptors.request.use (async (request) => { 
    if (isServer) {
      const { cookies } = (await import('next/headers'))

      const userDatString = cookies().get(USER)?.value

      const userData = userDatString ? JSON.parse(userDatString) : {}

      if (userData?.token) {
          request.headers['Authorization'] = `Bearer ${userData.token.replace(/['"]+/g, '')}`
      }
  }
  else {
    const userDatString = document.cookie.replace(/(?:(?:^|.*;\s*)USER\s*=\s*([^;]*).*$)|^.*$/, '$1')

    const decodedString = decodeURIComponent(decodeURIComponent(userDatString));

    try {
      const userData = userDatString ? JSON.parse(decodedString) : {}

      if (userData?.token) {
          request.headers['Authorization'] = `Bearer ${userData.token.replaceAll("%22", '')}`
      }
    } catch (error) {
      console.log ('xxx parse err ', error)
    }
    
  }
  return request
})

axiosClient.interceptors.response.use (response => {
  return response
})

export const fetcher = (url: string) => axiosClient.get(url).then(res=> res.data).catch(e => {data: null})