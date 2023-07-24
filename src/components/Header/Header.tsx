import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ERouterPoints } from '../../configs';

import styles from './Header.module.css';
interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <NavLink to={ERouterPoints.ALBUMS}>{ERouterPoints.ALBUMS}</NavLink>
                <NavLink to={ERouterPoints.TODOS}>{ERouterPoints.TODOS}</NavLink>
                <NavLink to={ERouterPoints.COMMENTS}>{ERouterPoints.COMMENTS}</NavLink>
            </nav>
        </header>
    );
};

export { Header };
