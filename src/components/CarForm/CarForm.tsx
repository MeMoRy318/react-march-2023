import React, { FC, ReactNode, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import { ICar } from '../../interface';
import { useMySelector } from '../../myCustomHook';
import { useAction } from '../../myCustomHook/useAction';
import { schema } from '../../validators/car.validator';

interface IProps {
    children?: ReactNode
}

const CarForm: FC<IProps> = () => {
    const { car } = useMySelector(state => state.carReducer);
    const { updateCar, createCar } = useAction();

    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { isValid },
    } = useForm<ICar>({ resolver: joiResolver(schema) });

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand, { shouldValidate: true });
            setValue('year', car.year, { shouldValidate: true });
            setValue('price', car.price, { shouldValidate: true });
        }
    }, [car]);

    const submit = async ( data: ICar ):Promise<void> => {
        if (car && car?.id) {
            updateCar(data, car.id);
        }else {
            createCar(data);
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('brand')} placeholder="Brand"/>
            <input type="text" {...register('year')} placeholder="Yaer"/>
            <input type="text" {...register('price')} placeholder="Price"/>
            <button disabled={!isValid}>{!!car ? 'Update' : 'Create'}</button>
        </form>
    );
};

export { CarForm };
