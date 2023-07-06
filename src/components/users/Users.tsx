import React, { FC, ReactNode } from 'react';

import {  useUsers } from '../../myCustomHooks';
import { User } from '../index';
import { IPost } from '../../interfaces';

interface IProps {
    setPostId: (postId: string | number) => void
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
    children?:ReactNode
}
const Users:FC<IProps> = ({ setPostId, setPosts }) => {

    const [users] = useUsers();

    return (
        <div>
            {
                !!users?.length &&
                users.map(value =>
                    <User
                        user={value}
                        key={value.id}
                        setPostId={setPostId}
                        setPosts={setPosts}
                    />,
                )}
        </div>
    );
};

export { Users };
