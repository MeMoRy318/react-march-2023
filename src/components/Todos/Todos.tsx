import React, { FC, ReactNode } from 'react';

import { useScrollPagination } from '../../myCustomHook';
import { ITodo } from '../../interfaces';
import { todoService } from '../../services';
import styles from '../Albums/Albums.module.css';
import { Todo } from '../index';

interface IProps {
    children?: ReactNode
}

const Todos: FC<IProps> = () => {
    const { lastElementRef, data } =
        useScrollPagination<ITodo[], HTMLDivElement>(todoService.getAll, 10);
    return (
        <div className={styles.albums}>
            {!!data?.length &&
                data.map((value, index, array) =>
                    <Todo
                        key={value.id}
                        todo={value}
                        lastElementRef={array.length - 1 === index ? lastElementRef : null}
                    />)}
        </div>
    );
};

export { Todos };
