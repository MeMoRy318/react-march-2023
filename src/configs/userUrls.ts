interface IUserUrls {
    getAllUsers: string
    getUserById: ( id: number ) => string
}

const userUrls: IUserUrls = {
    getAllUsers: 'users',
    getUserById: ( id: number ):string => `users/${ id }`,
};

export { userUrls };
