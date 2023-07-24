import React, { FC, ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../components';

import styles from './MyLayout.module.css';

interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {
    return (
        <div className={styles.wrap}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export { MyLayout };
