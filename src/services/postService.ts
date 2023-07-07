import { IPost } from '../interfaces';
import { postUrls } from '../configs';

import { axiosService, IRes } from './axiosService';


interface IPostService {
    getAllPosts: () => IRes<IPost[]>
    getPostById: ( id: number ) => IRes<IPost>
}
const postService:IPostService = {
    getAllPosts: ():IRes<IPost[]> => axiosService.get( postUrls.getAllPost ),
    getPostById: ( id: number ):IRes<IPost> => axiosService.get( postUrls.getPostById(id) ),
};

export { postService };
