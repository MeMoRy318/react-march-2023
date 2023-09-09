import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../componets';
import { Main } from '../../hok';

import styles from './Layout.module.scss';
type IProps = PropsWithChildren

const MyLayouts: FC<IProps> = () => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </div>
    );
};

export { MyLayouts };
