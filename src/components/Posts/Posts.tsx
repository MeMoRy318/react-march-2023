import React, { FC, ReactNode, useContext } from 'react';

import { Post } from '../index';
import { IUsePostByUserId } from '../../myCustomHooks';
import { PostsContext } from '../../hok';

interface IProps {
    children?: ReactNode
}

const Posts:FC<IProps> = () => {

    const { posts } = useContext<IUsePostByUserId>(PostsContext);


    return (
        <div>
            {!!posts?.length && posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
};

export { Posts };
