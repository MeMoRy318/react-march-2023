import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosService = (baseURL:string):AxiosInstance => axios.create({ baseURL });

export type IRes<T> = Promise<AxiosResponse<T>>

export { axiosService };
