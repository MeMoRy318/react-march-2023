import React, { FC, ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../componets';

interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export { MyLayout };
