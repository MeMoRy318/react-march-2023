const baseURL: string = 'https://jsonplaceholder.typicode.com/';

interface IUrls {
    albums: { base: string }
    comments: { base: string }
    todos: { base: string }
    post: { base: string; getById: ( id: number )=> string }
}

const urls:IUrls  = {
    todos: {
        base: 'todos',
    },
    albums: {
        base: 'albums',
    },
    comments: {
        base: 'comments',
    },
    post: {
        base: 'posts',
        getById: ( id: number ):string => `posts/${ id }`,
    },
};

export { baseURL, urls };
