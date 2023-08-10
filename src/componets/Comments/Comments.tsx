import React, { useEffect } from 'react';

import { useAction, useMySelector } from '../../myCustomHooks';
import { Comment } from '../Comment/Comment';

const Comments = () => {
    const { comments } = useMySelector(state => state.commentReducer);
    const { fetchComment } = useAction();

    useEffect(() => {
        fetchComment();
    }, []);

    return (
        <div>
            {!!comments?.length && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export { Comments };
