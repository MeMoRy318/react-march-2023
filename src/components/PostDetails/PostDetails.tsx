import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';

interface IProps {
    post: IPost
    children?: ReactNode
}

const PostDetails:FC<IProps> = ({ post }) => {

    const {  id, body, title  } = post;

    return (
        <div>
            <h2> ID: { id } </h2>
            <h3> TITLE: { title } </h3>
            <p> BODY: { body } </p>
        </div>
    );
};

export { PostDetails };
