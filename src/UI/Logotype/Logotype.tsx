import React, { FC, ReactNode } from 'react';

import styles from './Logotype.module.css';

interface IProps {
    children?: ReactNode
}

const Logotype: FC<IProps> = () => {
    return (
        <div className={styles.container}>
            <span className={styles.pulsate}>KINO</span>
            <span className={styles.neon}>MOVIE</span>
        </div>
    );
};

export { Logotype };
