import axios from "axios";

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
    }
});

axiosClient.interceptors.request.use ((request) => request)

axiosClient.interceptors.response.use (response => {
  return response
})

export const fetcher = (url: string) => axiosClient.get(url).then(res=> res.data).catch(e => {data: null})