import { IPost } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IPostService {
    getById: (id: number) => IRes<IPost>
}

const postService:IPostService  = {
    getById: ( id: number ):IRes<IPost> => axiosService.get(urls.post.getById(id)),
};

export { postService };
