import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';

interface IProps {
    children?: ReactNode
    user: IUser
}

const User: FC<IProps> = ({ user }) => {
    const { name, email, username } = user;

    return (
        <ul>
            <li><strong>NAME:</strong>{name}</li>
            <li><strong>USER NAME:</strong>{username}</li>
            <li><strong>EMAIL:</strong>{email}</li>
        </ul>
    );
};

export { User };
