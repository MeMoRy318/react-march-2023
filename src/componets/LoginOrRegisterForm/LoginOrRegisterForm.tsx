import React, { FC, PropsWithChildren, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IUser } from '../../interfaces';

import { useAppLocation } from '../../hooks';

import styles from './LoginOrRegisterForm.module.scss';

interface IProps extends PropsWithChildren{
    nameSubmitButton:string
    callback:(data:IUser) => void
}

const LoginOrRegisterForm: FC<IProps> = ({ nameSubmitButton, callback }) => {

    const { register, setValue, reset, handleSubmit } = useForm<IUser>();
    const { state } = useAppLocation<IUser>();

    useEffect(() => {
        if (state) {
            setValue('username', state.username);
            setValue('password', state.password);
        }
    }, [state]);


    const submit:SubmitHandler<IUser> = async (data) => {
        // eslint-disable-next-line @typescript-eslint/await-thenable
        await callback(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
            <label>
                <input type="text" {...register('username')} placeholder="Login" className={styles.inputField} />
            </label>
            <label>
                <input type="text" {...register('password')} placeholder="Password" className={styles.inputField} />
            </label>
            <button>{nameSubmitButton}</button>
        </form>
    );
};

export { LoginOrRegisterForm };
