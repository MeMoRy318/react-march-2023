import { IComment } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface ICommentsService {
    getAll: (page?: number, limit?: number) =>IRes<IComment[]>
}

const commentsService:ICommentsService  = {
    getAll: (page: number = 1, limit: number = 10): IRes<IComment[]> =>
        axiosService.get(urls.comments.base, { params: { _page: page, _limit: limit } }),
};

export { commentsService };
