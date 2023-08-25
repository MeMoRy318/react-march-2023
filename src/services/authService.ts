import { ILoginOrRegisterUser, IResponseUser, ITokens } from '../interfaces';

import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';
const authService = {
    register: (data:ILoginOrRegisterUser):IRes<IResponseUser> => axiosService.post(urls.users.base, data),
    login: async (data:ILoginOrRegisterUser):Promise<IResponseUser> => {
        const { data: tokens } = await axiosService.post<ITokens>(urls.auth.base, data);
        authService.setTokens(tokens);

        const { data: me } = await authService.me();
        return me;
    },
    refresh: async ():Promise<void> => {
        const refresh = authService.getRefreshToken();
        const { data } = await axiosService.post<ITokens>(urls.auth.refresh, { refresh });
        authService.setTokens(data);
    },

    me: ():IRes<IResponseUser> => axiosService.get(urls.auth.me),

    setTokens: ({ refresh, access }:ITokens):void => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

    getAccessToken: (): string | null => localStorage.getItem(accessTokenKey),
    getRefreshToken: (): string | null => localStorage.getItem(refreshTokenKey),

    removeToken: ():void => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
};

export { authService };
