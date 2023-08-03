import { IPost } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IPostService {
    getAll: () => IRes<IPost[]>
}

const postService:IPostService  = {
    getAll: ():IRes<IPost[]> => axiosService.get(urls.post.base),
};

export { postService };
