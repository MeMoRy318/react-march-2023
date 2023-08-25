import { ICarResponse, IPagination, IPaginationResult } from '../interfaces';

import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const carService = {
    getAll: ( params: IPagination ):IRes<IPaginationResult<ICarResponse>> => axiosService.get(urls.cars.base, { params: { ...params } }),
};

export { carService };
