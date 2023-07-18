import { IUseFetchingCar } from '../myCustomHook';

import { ICar } from './car.interface';

export interface IExtendsContext extends IUseFetchingCar {
    car: ICar | null
    setCar: ( car: ICar | null ) => void
}
