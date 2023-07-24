import React, { FC, ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { Comments } from '../../components';

interface IProps {
    children?: ReactNode
}

const CommentsPage: FC<IProps> = () => {
    return (
        <>
            <Outlet/>
            <Comments/>
        </>
    );
};

export { CommentsPage };
