import React, { FC, ReactNode, useEffect, useRef } from 'react';

import { useAction } from '../../myCustomHook/useAction';
import { useMySelector, useScrollPagination } from '../../myCustomHook';
import { Post } from '../Post/Post';

interface IProps {
    children?: ReactNode
}

const Posts: FC<IProps> = () => {

    const refObject = useRef<HTMLDivElement | null>(null);
    const { fetchPost } = useAction();
    const { posts, isLoading } = useMySelector(state => state.postReducer);

    const page = useScrollPagination(1, 10, isLoading, refObject);

    useEffect(() => {
        fetchPost({ _limit: 10, _page: page });
    }, [page]);

    return (
        <div>
            {!!posts.length && posts.map(value => <Post key={value.id} post={value}/>)}
            <div ref={refObject}></div>
        </div>
    );
};

export { Posts };
