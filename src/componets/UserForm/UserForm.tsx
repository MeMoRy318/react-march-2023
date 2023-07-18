import React, { FC, ReactNode } from 'react';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { IUserForm } from '../../interfaces';

interface IProps {
    children?: ReactNode
    handleSubmit: UseFormHandleSubmit<IUserForm>
    register: UseFormRegister<IUserForm>
    submit: SubmitHandler<IUserForm>
    errors: FieldErrors<IUserForm>
    isValid: boolean
}

const UserForm: FC<IProps> = ({
    register,
    handleSubmit,
    submit,
    isValid,
    errors,
}) => {
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="text" placeholder="name" {...register('name')}/>
                {errors?.name && <span>{errors.name.message}</span>}
            </label>
            <br/>
            <label>
                <input type="text" placeholder="user name" {...register('username')}/>
                {errors?.username && <span>{errors.username.message}</span>}
            </label>
            <br/>
            <label>
                <input type="text" placeholder="email" {...register('email')}/>
                {errors?.email && <span>{errors.email.message}</span>}
            </label>
            <br/>
            <button disabled={!isValid}> Create </button>
        </form>
    );
};

export { UserForm };
