import { IUser } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const userService = {
    getAll: ():IRes<IUser[]> => axiosService.get(urls.users.base),
};

export { userService };
