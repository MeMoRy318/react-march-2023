import React, { FC, PropsWithChildren } from 'react';

import { useNavigate } from 'react-router-dom';

import { LoginOrRegisterForm } from '../../componets';
import { ILoginOrRegisterUser } from '../../interfaces';
import { useAppDispatch, useAppLocation } from '../../Hooks';
import { authAction } from '../../redux/slices';
import { ERouterEndpoints } from '../../configs';

type IProps = PropsWithChildren

const LoginPage: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const { state } = useAppLocation<ILoginOrRegisterUser>();
    const navigate = useNavigate();

    const login = async (data:ILoginOrRegisterUser):Promise<void> => {
        const { meta: { requestStatus } } = await dispatch(authAction.login(data));
        if (requestStatus === 'fulfilled') {
            navigate(ERouterEndpoints.CARS);
        }
    };

    return (
        <div>
            <LoginOrRegisterForm callback={login} state={state}/>
        </div>
    );
};

export { LoginPage };
