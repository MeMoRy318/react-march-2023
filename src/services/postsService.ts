import { IPost } from '../interfaces';
import { postsUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface IPostsService {
    getAllPosts: () => IRes<IPost[]>
    getPostById: ( id: number ) => IRes<IPost>
    getPostsByUserId: ( id: number ) => IRes<IPost[]>
}
const postsService: IPostsService = {
    getAllPosts: (): IRes<IPost[]> => axiosService.get( postsUrls.getAllPosts ),
    getPostById: ( id: number ): IRes<IPost> => axiosService.get( postsUrls.getPostById( id ) ),
    getPostsByUserId: ( id: number ): IRes<IPost[]> => axiosService.get( postsUrls.getPostsByUserId( id ) ),
};

export { postsService };
