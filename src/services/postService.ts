import { IPost } from '../interfaces';
import { urls } from '../constans';

import { axiosService, IRes } from './axiosService';

const postService = {
    getAll: ():IRes<IPost[]> => axiosService.get(urls.jsonPLH.posts),
};

export { postService };
