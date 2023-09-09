import { ICar, ICarForm, ICarResponse } from '../interfaces';

import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IQueryParams {
    page:number
    page_size:number
}

const carService = {
    getAll: (params:IQueryParams):IRes<ICarResponse> => axiosService.get(urls.cars.base, { params: { ...params } }),
    updateCar: (id:number, data:ICarForm):IRes<ICar> => axiosService.put(urls.cars.byId(id), data),
    createCar: (data:ICarForm):IRes<ICar> => axiosService.post(urls.cars.base, data),
    deleteCar: (id:number):IRes<void> => axiosService.delete(urls.cars.byId(id)),
};

export { carService };
