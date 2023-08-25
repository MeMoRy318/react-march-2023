import React, { FC, PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoginOrRegisterForm } from '../../componets';
import { ILoginOrRegisterUser } from '../../interfaces';
import { useAppDispatch } from '../../Hooks';
import { authAction } from '../../redux/slices';

type IProps = PropsWithChildren

const RegisterPage: FC<IProps> = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const register = async (data:ILoginOrRegisterUser):Promise<void> => {
        const { meta: { requestStatus } } = await dispatch(authAction.register(data));

        if (requestStatus === 'fulfilled') {
            navigate('/login', { state: data });
        }
    };

    return (
        <div>
            <LoginOrRegisterForm callback={register}/>
        </div>
    );
};

export { RegisterPage };
