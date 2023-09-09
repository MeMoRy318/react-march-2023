import React, { FC, PropsWithChildren, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoginOrRegisterForm } from '../../componets';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IUser } from '../../interfaces';

type IProps = PropsWithChildren

const LoginPage: FC<IProps> = () => {

    const navigate = useNavigate();
    const { login } = useAppDispatch();
    const { user } = useAppSelector(state => state.authReducer);

    useEffect(() => {
        if (user) {
            navigate('/cars');
        }
    }, [user]);

    const userLogin = (data:IUser) => {
        login(data);
    };

    return (
        <div>
            <LoginOrRegisterForm nameSubmitButton={'Login'} callback={userLogin}/>
        </div>
    );
};

export { LoginPage };
