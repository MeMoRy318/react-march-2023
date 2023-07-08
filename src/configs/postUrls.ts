interface IPostUrls {
    getAllPost: string
    getPostById: ( id: number ) => string
}

const postUrls:IPostUrls = {
    getAllPost: 'posts',
    getPostById: ( id: number ): string => `posts/${id}`,
};

export { postUrls };
