 
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"

type ErrorProps = {
  code?: number
  msg?: string
  success: boolean
}

const instance: AxiosInstance = axios.create({
  // baseURL: import.meta.env.DEV ? "/" : window.location.origin,
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 20000,
  headers: {
    "x-lang": "en",
    "x-session-platform-code": "plat1",
  },
})

 

instance.interceptors.response.use(
  (response) => {
    const { data } = response

    console.log("🚀response-data->", response.data)

    // if (!result.success && !result.msg) {
    //   return response?.data
    // }

    // if (!result.success) {
    //   console.log("🚀result-2->", result)
    //   return Promise.reject(new Error(result.msg, { cause: result.code }))
    // }

    return data
  },
  (error: AxiosError<ErrorProps>) => {
    return Promise.reject(error)
  },
)

/**
 * 单个对象返回的请求函数
 */
export async function request<T>(config: AxiosRequestConfig) {
  try {
    const data = await instance.request<
      T | undefined,
      Response 
    >(config)
 
      return data
   
  } catch (error ) {
    return error
 
   
  }
}

 