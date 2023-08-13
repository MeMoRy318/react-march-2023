import React, { FC, ReactNode, useEffect } from 'react';

import { useAction } from '../../myCustomHook/useAction';
import { useMySelector } from '../../myCustomHook';

interface IProps {
    children?: ReactNode
}

const Comments: FC<IProps> = () => {

    const { fetchComment } = useAction();
    const { comments } = useMySelector(state => state.commentsReducer);

    useEffect(() => {
        fetchComment({ _limit: 10, _page: 1 });
    }, []);

    return (
        <div>

        </div>
    );
};

export { Comments };
