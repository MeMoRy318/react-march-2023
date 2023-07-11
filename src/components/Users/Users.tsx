import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';
import { User } from '../index';

interface IProps {
    users:IUser[]
    children?:ReactNode
}
const Users:FC<IProps> = ({ users }) => {
    return (
        <div>
            {!! users?.length && users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
};

export { Users };
