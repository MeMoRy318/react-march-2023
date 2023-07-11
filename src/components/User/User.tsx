import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';
import { Company, UserAddress, UserDetails } from '../index';

interface IProps {
    user: IUser
    children?: ReactNode
}
const User:FC<IProps> = ({ user }) => {

    return (
        <ul>
            <h2>USER ID: {user.id}</h2>
            <UserDetails user={user}/>
            <UserAddress address={user.address}/>
            <Company company={user.company}/>
        </ul>
    );
};

export { User };
