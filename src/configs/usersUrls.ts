import { IUsersUrls } from '../interfaces';

const usersUrls:IUsersUrls = {
    user: ( id: number | string ): string => `users/${ id }`,
    users: 'users',
};

export { usersUrls };
