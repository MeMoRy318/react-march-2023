import axios, { AxiosResponse } from 'axios';

const { REACT_APP_BASEURL: baseURL } = process.env;

const axiosService = axios.create({ baseURL });

export type IRes<T> = Promise<AxiosResponse<T>>

export interface IParams {
    _limit: number
    _page: number
}


export { axiosService };
