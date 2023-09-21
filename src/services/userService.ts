import { IUser } from '../interfaces';
import { urls } from '../constans';

import { axiosService, IRes } from './axiosService';

const userService = {
    getAll: ():IRes<IUser[]> => axiosService.get(urls.jsonPLH.users),
};

export { userService };
