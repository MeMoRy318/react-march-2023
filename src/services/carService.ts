import { carsUrls } from '../configs';

import { ICar,  IRes } from '../interfaces';

import { apiCar } from './apiCar';

class CarService {
    getAll():IRes<ICar[]> {
        return apiCar.get(carsUrls.cars);
    }
}

export const carService = new CarService();
