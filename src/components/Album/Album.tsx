import React, { FC, ReactNode, MutableRefObject } from 'react';

import { IAlbum } from '../../interfaces';

import styles from './Album.module.css';

interface IProps {
    children?: ReactNode
    album: IAlbum
    lastElementRef?: MutableRefObject<HTMLDivElement | null> | null
}

const Album: FC<IProps> = ({ album, lastElementRef }) => {
    return (
        <div ref={lastElementRef} className={styles.album}>
            <h2>{album.id}</h2>
            <p>{album.title}</p>
        </div>
    );
};

export { Album };
