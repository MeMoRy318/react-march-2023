const urls = {
    users: {
        base: '/users',
        byId: (id:number): string => `/users/${id}`,
    },
    posts: {
        base: '/posts',
        getByUserId: ( id: number ):string => `/users/${id}/posts`,
    },
    comments: {
        base: '/comments',
        getByPostId: (id:number): string => `/posts/${id}/comments`,
    },
    photos: {
        base: '/photos',
    },
};

export { urls };
