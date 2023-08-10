import { urls } from '../configs';

import { IUser } from '../interfaces';

import { axiosService, IRes } from './axiosService';

const userService = {
    getAll: ():IRes<IUser[]> => axiosService.get(urls.user.base),
};

export { userService };
