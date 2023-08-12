import { Dispatch } from 'react';

import { ECarAction, ICar, ICarAction } from '../../interface';
import { carService } from '../../services';

const fetchCar = () => {
    return async (dispatch:Dispatch<ICarAction>) => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            const { data } = await carService.getAll();
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

const updateCar = ( data: ICar, id: number ) => {

    return async (dispatch:Dispatch<ICarAction>) => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.update(data, id);
            const { data: cars } = await carService.getAll();
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: cars });
        }catch (e) {
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

const createCar = ( data: ICar ) => {

    return async (dispatch:Dispatch<ICarAction>) => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.create(data);
            const { data: cars } = await carService.getAll();
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: cars });
        }catch (e) {
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

const deleteCar = ( id: number ) => {

    return async (dispatch:Dispatch<ICarAction>) => {
        try {
            dispatch({ type: ECarAction.FETCH_CAR });
            await carService.deleteByID( id );
            const { data } = await carService.getAll();
            dispatch({ type: ECarAction.FETCH_CAR_SUCCESS, payload: data });
        }catch (e) {
            dispatch({ type: ECarAction.FETCH_CAR_ERROR, payload: 'Щось пішло не так' });
        }
    };
};

const setCar = ( data: ICar ) => {
    return (dispatch:Dispatch<ICarAction>) => {
        dispatch({ type: ECarAction.SET_CAR, payload: data });
    };
};

export { deleteCar, updateCar, fetchCar, createCar, setCar };
