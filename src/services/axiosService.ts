import axios, { AxiosError, AxiosResponse } from 'axios';

import { routers } from '../routers';

import { urls } from '../configs';

import { authService } from './authService';

const { REACT_APP_BASEURL: baseURL } = process.env;

const axiosService = axios.create({ baseURL });

export type IRes<T> = Promise<AxiosResponse<T>>


axiosService.interceptors.request.use(value => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
        value.headers.Authorization = `Bearer ${accessToken}`;
    }
    return value;
});

let isRefreshing = false;
axiosService.interceptors.response.use(value => value, async ( error: AxiosError ) => {
    const request = error.config;

    if (error.response.status === 401) {
        if (!isRefreshing) {
            try {
                await authService.refreshToken();
                isRefreshing = false;
                return axiosService(request);
            }catch (e) {
                authService.removeTokens();
                isRefreshing = false;
                await routers.navigate('/login?sessionExpired=true');
                return Promise.reject(error);
            }
        }
        if (request.url === urls.auth.refresh) {
            return Promise.reject(error);
        }

    }
    return Promise.reject(error);
});

export { axiosService };
