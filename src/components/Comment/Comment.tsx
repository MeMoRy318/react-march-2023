import React, { FC, MutableRefObject, ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';

import { IComment } from '../../interfaces';
import styles from '../Album/Album.module.css';

interface IProps {
    children?: ReactNode
    comment: IComment
    lastElementRef?: MutableRefObject<HTMLDivElement | null> | null

}

const Comment: FC<IProps> = ({ comment, lastElementRef }) => {

    const navigate = useNavigate();

    return (
        <div ref={lastElementRef}  className={styles.album}>
            <h2>{comment.id}</h2>
            <h2>{comment.name}</h2>
            <h2>{comment.email}</h2>
            <h2>{comment.body}</h2>
            <button onClick={() => navigate(`post/${comment.postId}`)}>show post</button>
        </div>
    );
};

export { Comment };
