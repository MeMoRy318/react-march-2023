import React, { FC, ReactNode, useState } from 'react';

import { useFetching, usePagination } from '../../myCustomHook';
import { commentService } from '../../services';
import { IComment } from '../../interfaces';
import { Comment } from '../index';

interface IProps {
    children?: ReactNode
}

const Comments: FC<IProps> = () => {

    const [page, setPage] = useState(1);
    const { data, totalPage, isLoading } = useFetching<IComment[]>(commentService.getAllComment(page), page);
    const { lastElementRef } = usePagination<HTMLDivElement>(isLoading, totalPage, setPage, page);

    return (
        <div>
            {!!data?.length &&
                data.map((value, index, array) => (
                    <Comment
                        comment={value}
                        key={value.id}
                        isLastElement={ index  === array.length - 1 ? lastElementRef : null  }
                    />
                ))}
        </div>
    );
};

export { Comments };
