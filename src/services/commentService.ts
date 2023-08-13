import { IComment } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IParams, IRes } from './axiosService';

const commentService = {
    getAll: ( params: IParams ):IRes<IComment[]> => axiosService.get(urls.comments.base, { params: { ...params } }),
    getByPostId: ( postId: number ):IRes<IComment[]> => axiosService.get(urls.comments.getByPostId(postId)),
};

export { commentService };
