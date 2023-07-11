import { IUser } from '../interfaces';

import { usersUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IUsersService {
    getAllUsers:() => IRes<IUser[]>
}

const usersService:IUsersService = {
    getAllUsers: ():IRes<IUser[]> => axiosService.get(usersUrls.getAllUsers),
};

export { usersService };
