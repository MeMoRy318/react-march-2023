import React, { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { ERouterPoint } from '../../configs';

import styles from './Header.module.scss';
type IProps = PropsWithChildren

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <NavLink to={ERouterPoint.CARS}>Cars</NavLink>
                <NavLink to={ERouterPoint.LOGIN}>Login</NavLink>
                <NavLink to={ERouterPoint.REGISTER}>Register</NavLink>
            </nav>
        </header>
    );
};

export { Header };
