import React, { FC, PropsWithChildren, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ICarForm } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../hook';
import { carAction } from '../../redux/slices';

type IProps = PropsWithChildren

const CarForm: FC<IProps> = () => {

    const { register, handleSubmit, setValue, reset } = useForm<ICarForm>();

    const { car } = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand);
            setValue('year', car.year);
            setValue('price', car.price);
        }
    }, [car, setValue]);

    const createCar:SubmitHandler<ICarForm> = async (data) => {
        if (car) {
            dispatch(carAction.updateCar({ data, id: car.id }));

        }else {
            dispatch(carAction.createCar({ car: data }));
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(createCar)}>
            <label>
                <input type="text" {...register('brand')} placeholder="brand"/>
            </label>
            <label>
                <input type="text" {...register('price')} placeholder="price"/>
            </label>
            <label>
                <input type="text" {...register('year')} placeholder="year"/>
            </label>
            <button>{car ? 'Update' : 'Create'}</button>
        </form>
    );
};

export { CarForm };
