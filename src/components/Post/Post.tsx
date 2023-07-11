import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    post: IPost
    children?: ReactNode
}
const Post:FC<IProps> = ({ post }) => {

    const { id, title, body, userId } = post;

    return (
        <ul>
            <h2>USER POST ID: {userId} </h2>
            <li><strong>POST ID:</strong> {id}</li>
            <li><strong>TITLE:</strong> {title}</li>
            <li><strong>BODY:</strong> {body}</li>
        </ul>
    );
};

export { Post };
