import React, { FC, MutableRefObject, ReactNode } from 'react';

import { ITodo } from '../../interfaces';
import styles from '../Album/Album.module.css';

interface IProps {
    children?: ReactNode
    todo: ITodo
    lastElementRef?: MutableRefObject<HTMLDivElement | null> | null
}

const Todo: FC<IProps> = ({ todo, lastElementRef }) => {
    return (
        <div ref={lastElementRef} className={styles.album}>
            <h2>{todo.id}</h2>
            <p>{todo.title}</p>
            <p>{todo.completed}</p>
        </div>
    );
};

export { Todo };
