import { jsonUrls } from '../configs';

import { IComment, IRes } from '../interfaces';

import { apiJson } from './apiJson';

class CommentService {

    getAll():IRes<IComment[]> {
        return apiJson.get(jsonUrls.comments);
    }
}

export const commentService = new CommentService();
