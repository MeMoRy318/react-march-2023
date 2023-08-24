import React, { FC, PropsWithChildren } from 'react';

import { LoginOrRegisterForm } from '../../componets';
import { ILoginOrRegisterUser } from '../../interfaces';
import { authService } from '../../services';

type IProps = PropsWithChildren

const RegisterPage: FC<IProps> = () => {
    const login = async (data:ILoginOrRegisterUser):Promise<void> => {
        await authService.register(data);
    };

    return (
        <div>
            <LoginOrRegisterForm callback={login}/>
        </div>
    );
};

export { RegisterPage };
