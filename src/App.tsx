import React, { FC, ReactNode } from 'react';

import { Comments } from './componets';
import { CommentFormPage } from './pages';

interface IProps {
    children?: ReactNode
}

const App: FC<IProps> = () => {
    return (
        <div>
            <CommentFormPage/>
            <hr/>
            <Comments/>
        </div>
    );
};

export { App };
