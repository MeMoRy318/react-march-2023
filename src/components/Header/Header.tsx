import { Component, ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import { ERouterPoints } from '../../configs';

import styles from './Header.module.css';
interface IProps {
    children?: ReactNode
}
class Header extends Component<IProps> {
    render() {
        return (
            <header className={styles.header}>
                <nav>
                    <NavLink to={ERouterPoints.POSTS}>POSTS</NavLink>
                    <NavLink to={ERouterPoints.COMMENTS}>COMMENTS</NavLink>
                    <NavLink to={ERouterPoints.CAR}>CAR</NavLink>
                </nav>
            </header>
        );
    }
}

export { Header };
