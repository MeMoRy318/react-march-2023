import { urls } from '../configs';

import { IToken, IUser, IUserResponse, IUserWithRegister } from '../interfaces';

import { axiosService } from './axiosService';

const accessToken = 'access';
const refreshToken = 'refresh';

const authService = {
    async login(data:IUser):Promise<IUserResponse> {
        const { data: tokens } = await axiosService.post<IToken>(urls.auth.base, data);
        this.setTokens(tokens);
        const { data: user } =  await axiosService.get<IUserResponse>(urls.auth.me);
        return user;
    },

    async register(data:IUser):Promise<IUserWithRegister> {
        const { data: user } = await axiosService.post<IUserWithRegister>(urls.users.base, data);
        return user;
    },

    async refreshToken():Promise<void> {
        const refresh = localStorage.getItem(refreshToken);
        const { data } = await axiosService.post<IToken>(urls.auth.refresh, { refresh });
        this.setTokens(data);
    },

    setTokens({ refresh, access }:IToken):void {
        localStorage.setItem(accessToken, access);
        localStorage.setItem(refreshToken, refresh);
    },

    getAccessToken():string {
        return localStorage.getItem(accessToken);
    },
    getRefreshToken():string {
        return localStorage.getItem(refreshToken);
    },

    removeTokens():void {
        localStorage.removeItem(accessToken);
        localStorage.removeItem(refreshToken);
    },
};

export { authService };
