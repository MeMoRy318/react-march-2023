import { axiosService, IRes } from '../index';
import { ICar } from '../../interface';
import { urls } from '../../configs';

const carService = {
    getAll: ():IRes<ICar[]> => axiosService.get( urls.cars.base ),
    getById: ( id: number ):IRes<ICar> => axiosService.get( urls.cars.carsGetId( id ) ),
    deleteByID: ( id: number ):Promise<void> => axiosService.delete( urls.cars.carsGetId( id ) ),
    create: ( data: ICar ):IRes<ICar> => axiosService.post( urls.cars.base, data ),
    update: ( data: ICar, id: number ):IRes<ICar> => axiosService.put( urls.cars.carsGetId( id ), data ),
};

export { carService };
