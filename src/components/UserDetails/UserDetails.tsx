import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';

interface IProps {
    user:IUser
    children?:ReactNode
}
const UserDetails:FC<IProps> = ({ user }) => {
    const { id, name, username, email, website } = user;
    return (
        <ul>
            <li><strong>ID:</strong> {id}</li>
            <li><strong>NAME:</strong> {name}</li>
            <li><strong>USER NAME:</strong> {username}</li>
            <li><strong>EMAIL:</strong> {email}</li>
            <li><strong>WEB SITE:</strong> {website}</li>
        </ul>
    );
};

export { UserDetails };
