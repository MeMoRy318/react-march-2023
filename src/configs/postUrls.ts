import { IPostUrls } from '../interfaces';

const postUrls:IPostUrls = {
    post: ( id: number | string ): string => `posts/${ id }`,
    postsByUsersId: ( id: number | string ): string => `users/${ id }/posts`,
    posts: 'posts',
};

export { postUrls };
