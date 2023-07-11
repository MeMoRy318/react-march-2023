import React, { useEffect, useState } from 'react';

import { IUser } from '../interfaces';
import { usersService } from '../services';

type ISetUsers = React.Dispatch<React.SetStateAction<IUser[]>>;
const useUsers = (): [ IUser[], ISetUsers ] => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        usersService.getAllUsers().then(({ data }) => setUsers(data));
    }, []);

    return [[...users], setUsers];
};

export { useUsers };
