import React, { FC, ReactNode } from 'react';

import { IPost } from '../../interfaces';
import { Post } from '../index';

interface IProps {
    posts:IPost[]
    children?:ReactNode
}
const Posts:FC<IProps> = ({ posts }) => {

    return (
        <div>
            {!! posts?.length &&
                posts.map(value =>
                    <Post
                        post={value}
                        key={value.id}
                    />)}
        </div>
    );
};

export { Posts };
