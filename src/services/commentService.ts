import { IComment } from '../interfaces';
import { urls } from '../configs';

import { axiosService, IRes } from './axiosService';

const commentService = {
    getAll: (): IRes<IComment[]> => axiosService.get(urls.comments.base),
};

export { commentService };
