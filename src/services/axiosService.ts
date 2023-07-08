import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { baseURL } from '../configs';

export type IRes<T> = Promise<AxiosResponse<T>>

const axiosService:AxiosInstance = axios.create({ baseURL });

export { axiosService };
