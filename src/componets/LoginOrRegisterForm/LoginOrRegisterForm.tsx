import React, { FC, PropsWithChildren } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ILoginOrRegisterUser } from '../../interfaces';

interface IProps extends PropsWithChildren {
    callback: ( data: ILoginOrRegisterUser ) => void
}


const LoginOrRegisterForm: FC<IProps> = ({ callback }) => {

    const {
        register,
        reset,
        setValue,
        handleSubmit,
    } = useForm<ILoginOrRegisterUser>();

    const submit:SubmitHandler<ILoginOrRegisterUser> = (data) => {
        callback(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="text" {...register('username')}/>
            </label>
            <br/>
            <label>
                <input type="text" {...register('password')}/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
    );
};

export { LoginOrRegisterForm };
