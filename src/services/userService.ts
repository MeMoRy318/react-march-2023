import { userUrls } from '../configs';

import { IUser, IUserForm } from '../interfaces';

import { axiosService, IRes } from './axiosService';

interface IUserService {
    getAllUsers: () => IRes<IUser[]>
    createUsers: (data: IUserForm) => IRes<IUser>
}

const userService: IUserService = {
    getAllUsers: (): IRes<IUser[]> => axiosService.get(userUrls.users),
    createUsers: ( data: IUserForm ): IRes<IUser> => axiosService.post(userUrls.users, data),
};

export { userService };
