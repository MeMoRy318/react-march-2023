import { jsonUrls } from '../configs';

import { IPost, IRes } from '../interfaces';

import { apiJson } from './apiJson';

class PostService {

    getAll():IRes<IPost[]> {
        return apiJson.get(jsonUrls.posts);
    }
}

export const postService = new PostService();
