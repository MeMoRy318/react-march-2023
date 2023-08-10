import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ERouterEndpoints } from '../../configs';
import './header.css';

interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = () => {
    return (
        <header>
            <nav>
                <NavLink to={ERouterEndpoints.USERS}>Users</NavLink>
                <NavLink to={ERouterEndpoints.POSTS}>Posts</NavLink>
                <NavLink to={ERouterEndpoints.COMMENTS}>Comments</NavLink>
            </nav>
        </header>
    );
};

export { Header };
