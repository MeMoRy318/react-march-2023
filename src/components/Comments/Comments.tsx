import React, { FC, ReactNode, useEffect, useRef } from 'react';

import { useAction } from '../../myCustomHook/useAction';
import { useMySelector, useScrollPagination } from '../../myCustomHook';
import { Comment } from '../Comment/Comment';

interface IProps {
    children?: ReactNode
}

const Comments: FC<IProps> = () => {

    const refObject = useRef<HTMLDivElement>(null);
    const { fetchComment, commentDidUnmount } = useAction();
    const { comments, isLoading } = useMySelector(state => state.commentsReducer);
    const page = useScrollPagination(1, 40, isLoading, refObject);

    useEffect(() => {
        fetchComment({ _limit: 10, _page: page });
    }, [page]);

    useEffect(() => {
        return () => {
            commentDidUnmount();
        };
    }, []);

    return (
        <div>
            {!!comments.length && comments.map(value => <Comment key={value.id} comment={value}/>)}
            <div ref={refObject}></div>
        </div>
    );
};

export { Comments };
