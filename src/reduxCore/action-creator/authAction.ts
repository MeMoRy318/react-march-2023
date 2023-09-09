import { Dispatch } from 'react';

import { AxiosError } from 'axios';

import { EAuthAction, IAuthAction, IUser } from '../../interfaces';
import { authService } from '../../services';

const login = (user:IUser) => {
    return async (dispatch:Dispatch<IAuthAction>):Promise<void> => {
        try {
            dispatch({ type: EAuthAction.LOGIN });
            const data = await authService.login(user);
            dispatch({ type: EAuthAction.LOGIN_SUCCESS, payload: data });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: EAuthAction.LOGIN_ERROR, payload: error.message });
        }
    };
};

const register = (user:IUser) => {
    return async (dispatch:Dispatch<IAuthAction>):Promise<void> => {
        try {
            dispatch({ type: EAuthAction.REGISTER });
            const data = await authService.register(user);
            dispatch({ type: EAuthAction.REGISTER_SUCCESS, payload: data });
        }catch (e) {
            const error = e as AxiosError;
            dispatch({ type: EAuthAction.REGISTER_ERROR, payload: error.message });
        }
    };
};

const out = () => {
    return (dispatch:Dispatch<IAuthAction>) => {
        dispatch({ type: EAuthAction.OUT });
    };
};

export { out, login, register };
