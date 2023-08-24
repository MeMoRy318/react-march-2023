import React, { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { ERouterEndpoints } from '../../configs';

import styles from './Header.module.css';

type IProps = PropsWithChildren

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <NavLink  to={ERouterEndpoints.CARS}>cars</NavLink>
                <NavLink  to={ERouterEndpoints.LOGIN}>login</NavLink>
                <NavLink  to={ERouterEndpoints.REGISTER}>Register</NavLink>
            </nav>
        </header>
    );
};

export { Header };
