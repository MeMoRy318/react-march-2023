import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { baseURL } from '../configs';

const axiosService:AxiosInstance = axios.create({ baseURL });

export type IRes<T> = Promise<AxiosResponse<T>>

export { axiosService };
