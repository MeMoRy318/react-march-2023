import { Dispatch } from 'react';

import { AxiosError } from 'axios';

import { ECarAction, ICar, ICarAction, ICarForm } from '../../interfaces';
import { carService } from '../../services';

// eslint-disable-next-line @typescript-eslint/naming-convention
const fetchingCar = (page:number, page_size:number) => {
    return async (dispatch:Dispatch<ICarAction>):Promise<void> => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            const { data } = await carService.getAll({ page, page_size });
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: data.items });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: error.message });
        }
    };
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const deleteCar = (id:number, page:number, page_size:number) => {
    return async (dispatch:Dispatch<ICarAction>) => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.deleteCar(id);
            const { data } = await carService.getAll({ page, page_size });
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: data.items });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: error.message });
        }
    };
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const updateCar = (id:number, data:ICarForm, page:number, page_size:number) => {
    return async (dispatch:Dispatch<ICarAction>):Promise<void> => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.updateCar(id, data);
            const { data: cars } = await carService.getAll({ page, page_size });
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: cars.items });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: error.message });
        }
    };
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const createCar = (data:ICarForm, page:number, page_size:number) => {
    return async (dispatch:Dispatch<ICarAction>):Promise<void> => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.createCar( data );
            const { data: cars } = await carService.getAll({ page, page_size });
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: cars.items });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: error.message });
        }
    };
};

const setCar = (data:ICar) => {
    return (dispatch:Dispatch<ICarAction>) => {
        dispatch({ type: ECarAction.SET_CAR, payload: data });
    };
};

export { createCar, updateCar, deleteCar, fetchingCar, setCar };
