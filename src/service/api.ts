import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const cliant = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    withCredentials: true,
})

type SuccessResult<T> = {
    status: "success",
    response: AxiosResponse<T>
}

export const requestResults = async <
    T, // レスポンス内容
>(
    // axiosのリスエスト先
    callback: Promise<AxiosResponse<T>>
) => {
    const response = callback
    .then(
        (res) =>
        ({
            status: "success",
            response: res
        } as SuccessResult<T>)
    )
    .catch()
    return response
}
