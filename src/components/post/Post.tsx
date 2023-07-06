import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    post:IPost
    children?:ReactNode
}
const Post:FC<IProps> = ({ post }) => {

    const { id, title } = post;

    return (
        <div>
            <h2>{id}</h2>
            <p>{title}</p>
        </div>
    );
};

export { Post };
