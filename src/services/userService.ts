import { IUser } from '../interfaces';


import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IUsersService {
    getAllUsers:() => IRes<IUser[]>
}

const usersService:IUsersService = {
    getAllUsers: ():IRes<IUser[]> => axiosService.get(urls.users.base),
};

export { usersService };
