import React, { FC, ReactNode } from 'react';

import { IPost, IUser } from '../../interfaces';

interface IProps {
    user:IUser
    setPostId: (postId: string | number) => void
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
    children?:ReactNode
}
const User:FC<IProps> = ({ user, setPostId, setPosts }) => {

    const { name, username, id } = user;

    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{username}</p>
            <button onClick={() => setPostId(id)}>Show post</button>
            <button onClick={() => setPosts([])}>Clean post</button>
        </div>
    );
};

export { User };
