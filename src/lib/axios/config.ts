import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig {
        baseURL?: string;
        responseType?: ResponseType;
        retry?: boolean;
    }
}

const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'https://pokeapi.co/api/v2/',
    responseType: 'json' // axios responseType이 json이기 때문에 삭제해도 무관합니다
};

const onFulfilled = (response: AxiosResponse) => {
    return response;
};

const onRejected = async (error: any) => {
    const {
        response: { status, data }
    } = error;

    return Promise.reject({ statusCode: status || 500, message: status ? data.error : '네트워크 에러', data });
};

const initialization = (initialConfig: AxiosRequestConfig) => {
    const instance = axios.create(initialConfig);

    instance.interceptors.response.use(onFulfilled, onRejected);

    return instance;
};

export const instance = initialization(axiosRequestConfiguration);
