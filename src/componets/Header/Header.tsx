import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { ERouterPoints } from '../../configs';
import { useToggle } from '../../myCustomHook';

interface IProps {
    children?: ReactNode
}

const Header: FC<IProps> = () => {

    const { isActive, change } = useToggle(false);

    const styleHeader = {
        height: '100px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    };
    const styleNavigation = {
        textDecoration: 'none',
        fontsize: '24px',
        color: 'white',
    };
    return (
        <header style={styleHeader} className={isActive ? 'isActive' : ''}>
            <Link style={styleNavigation} to={ERouterPoints.POSTS}>posts</Link>
            <Link style={styleNavigation} to={ERouterPoints.USERS}>users</Link>
            <Link style={styleNavigation} to={ERouterPoints.COMMENTS}>comments</Link>
            <button onClick={() => change()}>change theme</button>
        </header>
    );
};

export { Header };
