import React, { FC, PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoginOrRegisterForm } from '../../componets';
import { useAppDispatch } from '../../hooks';
import { IUser } from '../../interfaces';

type IProps = PropsWithChildren

const RegisterPage: FC<IProps> = () => {

    const { register } = useAppDispatch();
    const navigate = useNavigate();
    const userRegister = async (data:IUser):Promise<void> => {
        register(data);
        navigate('/login', { state: data });
    };

    return (
        <div>
            <LoginOrRegisterForm nameSubmitButton={'Register'} callback={userRegister}/>
        </div>
    );
};

export { RegisterPage };
