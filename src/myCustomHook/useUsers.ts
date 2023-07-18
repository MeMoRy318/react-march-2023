import { useEffect, useState } from 'react';

import { IUser } from '../interfaces';
import { userService } from '../services/userService';

interface IUseUsers {
    users: IUser[]
    error: string
    isLoading: boolean
}
const useUsers = (deps?:unknown): IUseUsers => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        userService.getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch((e:Error) => setError(e.message))
            .finally(() => setIsLoading(false));
    }, [deps]);


    return { users, error, isLoading };

};

export { useUsers };
