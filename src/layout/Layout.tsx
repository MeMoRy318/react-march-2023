import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../componets';

type IProps = PropsWithChildren

const Layout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export { Layout };
