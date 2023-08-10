import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    children?: ReactNode
    post: IPost
}

const Post: FC<IProps> = ({ post }) => {
    const { body, title, id } = post;
    return (
        <ul>
            <li><strong>ID:</strong> {id}</li>
            <li><strong>TITLE:</strong> {title}</li>
            <li><strong>BODY:</strong> {body}</li>
        </ul>
    );
};

export { Post };
