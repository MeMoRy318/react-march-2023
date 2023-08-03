import { IComment } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

interface ICommentsService {
    getAll: () =>IRes<IComment[]>
}

const commentsService:ICommentsService  = {
    getAll: (): IRes<IComment[]> => axiosService.get(urls.comments.base),
};

export { commentsService };
