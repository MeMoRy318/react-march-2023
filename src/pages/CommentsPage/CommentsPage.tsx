import React, { FC, ReactNode } from 'react';

import { Comments } from '../../componets';

interface IProps {
    children?: ReactNode
}

const CommentsPage: FC<IProps> = () => {
    return (
        <div>
            <Comments/>
        </div>
    );
};

export { CommentsPage };
