import { IPost } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IParams, IRes } from './axiosService';

const postsService = {
    getAll: ( params: IParams ):IRes<IPost[]> => axiosService.get(urls.posts.base, { params: { ...params } }),
    getByUserId: ( userId: number ): IRes<IPost[]> => axiosService.get(urls.posts.getByUserId(userId)),
};

export { postsService };
