import { IPost } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const postService = {
    getAll: ():IRes<IPost[]> => axiosService.get(urls.posts.base),
};

export { postService };
