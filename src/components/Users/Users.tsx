import React, { FC, ReactNode } from 'react';

import { useUsers } from '../../myCustomHooks';
import { User } from '../index';

interface IProps {
    setPostId: ( postId: number ) => void
    children?: ReactNode
}
const Users: FC<IProps> = ({ setPostId }) => {

    const [users] = useUsers();

    return (
        <div>
            {!!users?.length && users.map(value => <User user={value} setPostId={setPostId} key={value.id}/>)}
        </div>
    );
};

export { Users };
