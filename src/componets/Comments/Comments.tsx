import React, { FC, ReactNode } from 'react';

import { useFetching } from '../../myCustomHook';
import { IComment } from '../../interfaces';
import { commentsService } from '../../services';

interface IProps {
    children?: ReactNode
}

const Comments: FC<IProps> = () => {

    const { data } = useFetching<IComment[]>(commentsService.getAll);

    return (
        <div>
            {!!data?.length && JSON.stringify(data)}
        </div>
    );
};

export { Comments };
