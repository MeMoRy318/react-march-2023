import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    children?: ReactNode
    post: IPost
}

const Post: FC<IProps> = ({ post }) => {

    const { body, title } = post;

    return (
        <ul>
            <li><strong>TITLE:</strong>{title}</li>
            <li><strong>BODY:</strong>{body}</li>
        </ul>
    );
};

export { Post };
