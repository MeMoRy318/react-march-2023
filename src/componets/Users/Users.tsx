import React, { FC, ReactNode, useEffect } from 'react';

import { useAction, useMySelector } from '../../myCustomHooks';
import { User } from '../User/User';

interface IProps {
    children?: ReactNode
}

const Users: FC<IProps> = () => {

    const { fetchUser } = useAction();
    const { users } = useMySelector(state => state.userReducer);

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            {!!users.length && users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export { Users };
