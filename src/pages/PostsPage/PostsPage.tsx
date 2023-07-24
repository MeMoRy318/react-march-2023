import React, { FC, ReactNode } from 'react';

import { Posts } from '../../components';

interface IProps {
    children?: ReactNode
}

const PostsPage: FC<IProps> = () => {
    return (
        <>
            <Posts/>
        </>
    );
};

export { PostsPage };
