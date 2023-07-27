import React, { FC, ReactNode } from 'react';

import { BurgerMenu, Logotype } from '../../UI';

import { SearchInput } from '../index';

import styles from './Header.module.css';

interface IProps {
    children?: ReactNode

}

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header} >
            <div className={styles.header__content}>
                <BurgerMenu/>
                <Logotype/>
                <div className={styles.header__searchInput}>
                    <SearchInput/>
                </div>
            </div>
        </header>
    );
};

export { Header };
