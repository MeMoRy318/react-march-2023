import React, { FC, ReactNode } from 'react';

import styles from './Header.module.css';

interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>

            </div>
        </header>
    );
};

export { Header };
