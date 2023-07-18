import { carUrls } from '../configs';

import { ICar, ICarForm } from '../interfaces';

import { axiosService, IRes } from './axiosService';

interface ICarService {
    getAllCars: () => IRes<ICar[]>
    createCar: (data: ICarForm) => IRes<ICar>
    updateCar: (id: number, data: ICarForm) => IRes<ICar>
    deleteCar: (id: number) => IRes<void>
}

const carService:ICarService = {
    getAllCars: ():IRes<ICar[]> => axiosService.get(carUrls.cars),
    createCar: (data:ICarForm):IRes<ICar> => axiosService.post<ICar>(carUrls.cars, data),
    updateCar: ( id: number, data: ICarForm ): IRes<ICar> => axiosService.put<ICar>(carUrls.putPatchDeleteCar( id ), data),
    deleteCar: (id: number): IRes<void> => axiosService.delete<void>(carUrls.putPatchDeleteCar(id)),
};

export { carService };
