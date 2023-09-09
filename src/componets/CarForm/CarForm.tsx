import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSearchParams } from 'react-router-dom';

import { ICarForm } from '../../interfaces';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import styles from './CarForm.module.scss';

const CarForm: FC = () => {

    const {
        handleSubmit,
        register,
        reset,
        setValue,
    } = useForm<ICarForm>();

    const { createCar, updateCar } = useAppDispatch();
    const { car } = useAppSelector(state => state.carsReducer);
    const [query] = useSearchParams({ page: '1', page_size: '10' });

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand);
            setValue('price', car.price);
            setValue('year', car.year);
        }
    }, [car]);

    const onSubmit = (data: ICarForm) => {
        if (!car) {
            createCar(data, +query.get('page'), +query.get('page_size'));
        }else {
            updateCar(car.id, data, +query.get('page'), +query.get('page_size'));
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
            <label>
                <input type="text" {...register('brand')} placeholder="Brand"/>
            </label>
            <label>
                <input type="text" {...register('price')} placeholder="Price"/>
            </label>
            <label>
                <input type="text" {...register('year')} placeholder="Year"/>
            </label>
            <button>{!!car ? 'Update' : 'Create'}</button>
        </form>
    );
};

export { CarForm };
