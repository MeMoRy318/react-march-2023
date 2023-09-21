import { IComment } from '../interfaces';
import { urls } from '../constans';

import { axiosService, IRes } from './axiosService';

const commentService = {
    getAll: ():IRes<IComment[]> => axiosService.get(urls.jsonPLH.comments),
};

export { commentService };
