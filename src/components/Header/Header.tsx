import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ERouterEndpoints } from '../../configs';

import styles from './Header.module.css';
interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = () => {
    return (
        <header className={styles.header}>
            <nav>
                <NavLink to={ERouterEndpoints.USER}>user</NavLink>
                <NavLink to={ERouterEndpoints.POSTS}>posts</NavLink>
                <NavLink to={ERouterEndpoints.COMMENT}>comments</NavLink>
                <NavLink to={ERouterEndpoints.PHOTO}>photo</NavLink>
            </nav>
        </header>
    );
};

export { Header };
