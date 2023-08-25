import axios, { AxiosError, AxiosResponse } from 'axios';

import { routers } from '../routers';

import { authService } from './authService';

const { REACT_APP_BASEURL: baseURL } = process.env;

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use(value => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        value.headers.Authorization = `Bearer ${accessToken}`;
    }
    return value;
});

let isRefreshing = false;
axiosService.interceptors.response.use(value => value, async (error:AxiosError) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
        if (!isRefreshing) {
            isRefreshing = true;
            try {
                await authService.refresh();
                isRefreshing = false;
                return axiosService(originalRequest);
            }catch (e) {
                authService.removeToken();
                isRefreshing = false;
                await routers.navigate('/login');
                return Promise.reject(error);
            }
        }
    }
    return Promise.reject(error);

});

export type IRes<T> = Promise<AxiosResponse<T>>

export { axiosService };
