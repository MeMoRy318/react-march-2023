import { IUser } from '../interfaces';
import { userUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IUserService {
    getAllUsers: () => IRes<IUser[]>
    getUserById: ( id: number ) => IRes<IUser>
}

const usersService:IUserService = {
    getAllUsers: (): IRes<IUser[]> => axiosService.get( userUrls.getAllUsers ),
    getUserById: ( id: number ): IRes<IUser> => axiosService.get( userUrls.getUserById( id ) ),
};

export { usersService };
