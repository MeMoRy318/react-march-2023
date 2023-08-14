import React, { FC, ReactNode, useEffect } from 'react';

import { useAction } from '../../myCustomHook/useAction';
import { useMySelector } from '../../myCustomHook';
import { Post } from '../Post/Post';

interface IProps {
    children?: ReactNode
}

const Posts: FC<IProps> = () => {

    const { fetchPost } = useAction();
    const { posts } = useMySelector(state => state.postReducer);

    useEffect(() => {
        fetchPost({ _limit: 10, _page: 2 });
    }, []);

    return (
        <div>
            {!!posts.length && posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export { Posts };
