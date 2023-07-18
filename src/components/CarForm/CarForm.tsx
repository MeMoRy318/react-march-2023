import React, { FC, ReactNode } from 'react';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { ICarForm } from '../../interfaces';

interface IProps {
    children?: ReactNode
    handleSubmit: UseFormHandleSubmit<ICarForm>
    register: UseFormRegister<ICarForm>
    submit: SubmitHandler<ICarForm>
    errors: FieldErrors<ICarForm>
}

const CarForm: FC<IProps> = ({ submit, handleSubmit, register, errors }) => {
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="brand" placeholder="brand" {...register('brand')} />
                {!!errors?.brand && <span>{errors?.brand?.message}</span>}
            </label>
            <label>
                <input type="price" placeholder="price" {...register('price')} />
                {!!errors?.price && <span>{errors?.price?.message}</span>}

            </label>
            <label>
                <input type="year" placeholder="year" {...register('year')} />
                {!!errors?.year && <span>{errors?.year?.message}</span>}
            </label>
            <button type="submit">Create</button>
        </form>
    );
};

export { CarForm };
