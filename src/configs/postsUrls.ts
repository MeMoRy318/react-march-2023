interface IPostsUrls {
    getAllPosts: string
    getPostById: ( id: number ) => string
    getPostsByUserId: ( id: number ) => string
}
const postsUrls: IPostsUrls = {
    getAllPosts: 'posts',
    getPostById: ( id: number ):string => `posts/${ id }`,
    getPostsByUserId: ( id: number ): string => `users/${id}/posts`,
};

export { postsUrls };
