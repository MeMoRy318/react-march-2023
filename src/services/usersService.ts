import { IUser } from '../interfaces';
import { baseURLJPLH, usersUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

const usersService = {
    getAllUsers: ():IRes<IUser[]> => axiosService(baseURLJPLH).get(usersUrls.users),
    getUser: ( id:string | number ):IRes<IUser> => axiosService(baseURLJPLH).get(usersUrls.user(id)),
};

export { usersService };
