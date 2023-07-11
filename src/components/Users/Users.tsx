import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';
import { User } from '../index';

interface IProps {
    setUserId: React.Dispatch<React.SetStateAction<number>>
    users:IUser[]
    children?:ReactNode
}
const Users:FC<IProps> = ({ users, setUserId }) => {
    return (
        <div>
            {!! users?.length && users.map(value => <User user={value} setUserId={setUserId} key={value.id}/>)}
        </div>
    );
};

export { Users };
