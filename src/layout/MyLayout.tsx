import React, { FC, ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components';


import styles from './MyLoyout.module.css';


interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export { MyLayout };
