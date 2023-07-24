import React, { FC, ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching, useHover } from '../../myCustomHook';
import { postService } from '../../services';
import { IPost } from '../../interfaces';
import styles from '../Album/Album.module.css';

interface IProps {
    children?: ReactNode
}

const Posts: FC<IProps> = () => {
    const { postId = 0 } = useParams<{ postId: string }>();

    const ref = useRef<HTMLDivElement>(null);
    const isHovering = useHover(ref);

    const { data, isLoading, error } = useFetching<IPost>(() => postService.getById(+postId), [postId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div ref={ref}>
            <div   className={styles.btn} style={{ right: isHovering ? `${Math.random() * 90}%` : `${Math.random() * 90}%`,
                bottom: isHovering ? `${Math.random() * 90}%` : `${Math.random() * 90}%` }}

            >
                button don't touch
            </div>
            {!!data && (
                <div className={styles.album_} >
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </div>
            )}

        </div>
    );
};

export { Posts };
