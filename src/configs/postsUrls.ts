interface IPostsUrls {
    getPostsByUserId: (id: number) => string
}

const postsUrls: IPostsUrls = {
    getPostsByUserId: ( id: number ) => `/users/${id}/posts`,
};

export { postsUrls };
