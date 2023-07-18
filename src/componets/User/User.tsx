import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';

interface IProps {
    children?: ReactNode
    user: IUser
}

const User: FC<IProps> = ({ user }) => {

    const { name, username, email } = user;

    return (
        <ul>
            <li>NAME: {name}</li>
            <li>EMAIL: {email}</li>
            <li>USER NAME: {username}</li>
        </ul>
    );
};

export { User };
