import React, { FC, ReactNode } from 'react';

import { Posts } from '../../componets';

interface IProps {
    children?: ReactNode
}

const PostsPage: FC<IProps> = () => {
    return (
        <div>
            <Posts/>
        </div>
    );
};

export { PostsPage };
