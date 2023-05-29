import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const headers = {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Accept': 'Application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };
export const cliant = axios.create({
    baseURL: "https://project-sake.an.r.appspot.com/",
    withCredentials: false,
    headers: headers
})

export type SuccessResult<T> = {
    status: "success",
    response: AxiosResponse<T>
}

export type FailResult<T> = {
    status: "fail",
    response: AxiosError<T>
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
    .catch((e: AxiosError) => (        
        {
        status: "fail",
        response: e
    } as FailResult<T>));
    return response
}
