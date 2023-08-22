import { urls } from '../configs';
import { ICar, ICarForm } from '../interfaces';

import { axiosService } from './axiosService';

const { REACT_APP_CAR: baseURL } = process.env;

const axiosInstance = axiosService(baseURL!);

const carService = {
    getAll: () => axiosInstance.get<ICar[]>(urls.cars.base),
    create: ( data: ICarForm ) => axiosInstance.post<ICar>(urls.cars.base, data),
    update: ( id: number, data: ICarForm ) => axiosInstance.put<ICar>(urls.cars.bYId(id), data),
    delete: ( id: number ) => axiosInstance.delete<void>(urls.cars.bYId(id)),
};

export { carService };
