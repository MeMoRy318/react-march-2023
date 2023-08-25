import React, { FC, PropsWithChildren, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ILoginOrRegisterUser } from '../../interfaces';
import { useAppSelector } from '../../Hooks';

interface IProps extends PropsWithChildren {
    callback: ( data: ILoginOrRegisterUser ) => void
    state?: ILoginOrRegisterUser
}


const LoginOrRegisterForm: FC<IProps> = ({ callback, state }) => {

    const { error } = useAppSelector(state => state.authReducer);

    const {
        register,
        reset,
        setValue,
        handleSubmit,
    } = useForm<ILoginOrRegisterUser>();


    useEffect(() => {
        if (state) {
            setValue('username', state.username);
            setValue('password', state.password);
        }
    }, [state]);

    const submit:SubmitHandler<ILoginOrRegisterUser> = (data) => {
        callback(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {!!error && <span>{error}</span>}
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
