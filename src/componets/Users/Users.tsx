import React, { FC, ReactNode } from 'react';

import { useUsers } from '../../myCustomHook';
import { User } from '../User/User';

interface IProps {
    children?: ReactNode
}

const Users: FC<IProps> = () => {

    const { users, isLoading, error } = useUsers();

    return (
        <div>
            {
                isLoading || error ?
                    <div>{isLoading ? '...Loading' : error}</div>
                    :
                    users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export { Users };
