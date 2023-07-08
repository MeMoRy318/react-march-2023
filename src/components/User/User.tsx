import React, { FC, ReactNode } from 'react';

import { IUser } from '../../interfaces';

interface IProps {
    user: IUser
    setPostId: ( postId: number ) => void
    children?: ReactNode
}
const User:FC<IProps> = ({ user, setPostId }) => {

    const { id, name, username, email } = user;

    return (
        <div>
            <h2> ID: { id } Name: { name } </h2>
            <p> { username } </p>
            <p> { email } </p>
            <button onClick={() => setPostId( id ) }>show post</button>
        </div>
    );
};

export { User };
