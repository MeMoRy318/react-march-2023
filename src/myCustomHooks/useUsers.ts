import React, { useEffect, useState } from 'react';

import { IUser } from '../interfaces';
import { usersService } from '../services';

const useUsers = ():[IUser[], React.Dispatch<React.SetStateAction<IUser[]>>] => {
    const [users, setUsers] =  useState<IUser[]>([] );
    useEffect(() => {
        usersService.getAllUsers().then(({ data }) => setUsers(data));
    }, []);

    return [[...users], setUsers];
};

export { useUsers };
