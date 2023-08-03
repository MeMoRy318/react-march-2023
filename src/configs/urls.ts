const baseURL: string = 'https://jsonplaceholder.typicode.com/';

interface IUrls {
    comments: { base: string }
    post: { base: string }
    users: { base: string }
}

const urls:IUrls  = {
    comments: {
        base: 'comments',
    },
    post: {
        base: 'posts',
    },
    users: {
        base: 'users',
    },
};

export { baseURL, urls };
