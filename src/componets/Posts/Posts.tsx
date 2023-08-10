import React, { FC, ReactNode, useEffect } from 'react';

import { useAction, useMySelector } from '../../myCustomHooks';
import { Post } from '../Post/Post';

interface IProps {
    children?: ReactNode
}

const Posts: FC<IProps> = () => {
    const { posts } = useMySelector(state => state.postReducer);
    const { fetchPost } = useAction();

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            {!!posts?.length && posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export { Posts };
