import React, { FC, useContext, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';

import { CarForm } from '../../components';
import { ICarForm, IExtendsContext } from '../../interfaces';
import { CarContext } from '../../hok';
import { carService } from '../../services';
import { carSchema } from '../../validators';

const PageCarForm:FC = () => {

    const { setCars, car, setCar } = useContext<IExtendsContext>(CarContext);

    const {
        handleSubmit,
        reset,
        register,
        setValue,
        formState: { errors },
    } = useForm<ICarForm>({ mode: 'onChange', resolver: joiResolver(carSchema) });


    useEffect(() => {
        if (car) {
            setValue('brand', car.brand);
            setValue('price', car.price);
            setValue('year', car.year);
        }
    }, [car]);

    const submit = async (dataForm:ICarForm):Promise<void> => {
        const  { data } = await carService.createCar(dataForm);
        setCars(prevState => [...prevState, data]);
        reset();
    };

    const updateCar = async ( dataForm: ICarForm ): Promise<void> => {

        if (car) {
            const { data } = await carService.updateCar(car.id, dataForm);
            setCars(prevState => {
                const index = prevState.findIndex(value => value.id === car.id);
                const result = prevState;
                result.splice(index, 1, data);
                setCar(null);
                reset();
                return [...result];
            });
        }
        reset();
    };

    return (
        <div>
            <CarForm
                submit={!!car ? updateCar : submit }
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
            />
        </div>
    );
};

export { PageCarForm };
