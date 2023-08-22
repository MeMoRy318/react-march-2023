import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

type IProps = PropsWithChildren

const MyLayout: FC<IProps> = () => {

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export { MyLayout };
