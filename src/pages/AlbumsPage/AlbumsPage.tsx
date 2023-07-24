import React, { FC, ReactNode } from 'react';

import { Albums } from '../../components';

interface IProps {
    children?: ReactNode
}

const AlbumsPage: FC<IProps> = () => {
    return (
        <>
            <Albums/>
        </>
    );
};

export { AlbumsPage };
