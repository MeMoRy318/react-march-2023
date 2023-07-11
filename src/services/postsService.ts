import { IPost } from '../interfaces';

import { postsUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IPostsService {
    getPostsByUserId: (id: number) => IRes<IPost[]>
}

const postService: IPostsService = {
    getPostsByUserId: ( id: number ):IRes<IPost[]> => axiosService.get( postsUrls.getPostsByUserId( id ) ),
};

export { postService };
