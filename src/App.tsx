import React, { FC, ReactNode } from 'react';

import { Users } from './componets';
import { UserFormPage } from './pages';

interface IProps {
    children?: ReactNode
}

const App: FC<IProps> = () => {

    return (
        <div>
            <UserFormPage/>
            <hr/>
            <Users/>
        </div>
    );
};

export { App };
