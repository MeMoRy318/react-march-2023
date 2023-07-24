import React, { FC, ReactNode } from 'react';

import { useScrollPagination } from '../../myCustomHook';
import { IAlbum } from '../../interfaces';
import { albumService } from '../../services';
import { Album } from '../index';

import styles from './Albums.module.css';

interface IProps {
    children?: ReactNode
}

const Albums: FC<IProps> = () => {

    const { lastElementRef, data } =
        useScrollPagination<IAlbum[], HTMLDivElement>(albumService.getAll, 10);

    return (
        <div className={styles.albums}>
            {!!data?.length &&
                data.map((value, index, array) =>
                    <Album
                        key={value.id}
                        album={value}
                        lastElementRef={array.length - 1 === index ? lastElementRef : null}
                    />)}
        </div>
    );
};

export { Albums };
