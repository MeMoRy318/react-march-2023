import { IPost } from '../interfaces';
import { baseURLJPLH, postUrls } from '../configs';

import { axiosService, IRes } from './axiosService';

const postsService = {
    getAllPosts: ():IRes<IPost[]> => axiosService(baseURLJPLH).get(postUrls.posts),
    getPostsByUsersId: ( id: string | number ): IRes<IPost[]> => axiosService(baseURLJPLH).get(postUrls.postsByUsersId(id)),
    getPost: ( id: string | number ):IRes<IPost> => axiosService(baseURLJPLH).get(postUrls.post(id)),
};

export { postsService };
