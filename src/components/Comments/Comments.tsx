import React, { FC, ReactNode } from 'react';

import { useScrollPagination } from '../../myCustomHook';
import { IComment } from '../../interfaces';
import { commentsService } from '../../services';
import styles from '../Albums/Albums.module.css';
import { Comment } from '../Comment/Comment';

interface IProps {
    children?: ReactNode
}

const Comments: FC<IProps> = () => {
    const { lastElementRef, data } =
        useScrollPagination<IComment[], HTMLDivElement>(commentsService.getAll, 10);
    return (
        <div className={styles.albums}>
            {!!data?.length &&
                data.map((value, index, array) =>
                    <Comment
                        key={value.id}
                        comment={value}
                        lastElementRef={array.length - 1 === index ? lastElementRef : null}
                    />)}
        </div>
    );
};

export { Comments };
