import { IComment, ICommentForm } from '../interfaces';
import { commentUrls } from '../configs/commentUrls';

import { axiosService, IRes } from './axiosService';

interface ICommentService {
    getAllComment: (page?:number) => IRes<IComment[]>
    createComment: (data: ICommentForm) => IRes<IComment>
}

const commentService: ICommentService = {
    getAllComment: (page: number = 1): IRes<IComment[]> => axiosService.get(`${commentUrls.comment}?_limit=10&_page=${page}`),
    createComment: (data: ICommentForm):IRes<IComment> => axiosService.post(commentUrls.comment, data),

};

export { commentService };
