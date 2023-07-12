import React, { FC, ReactNode, useContext } from 'react';

import { IUser } from '../../interfaces';
import { User } from '../index';
import { PostsContext } from '../../hok';
import { IUsePostByUserId } from '../../myCustomHooks';

interface IProps {
    users:IUser[]
    children?:ReactNode
}
const Users:FC<IProps> = ({ users }) => {

    const { setUserId } = useContext<IUsePostByUserId>(PostsContext);

    return (
        <div>
            {!! users?.length && users.map(value => <User user={value} setUserId={setUserId} key={value.id}/>)}
        </div>
    );
};

export { Users };
