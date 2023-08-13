import React, { FC, ReactNode } from 'react';

import { Users } from '../../components';

interface IProps {
    children?: ReactNode
}

const UsersPage: FC<IProps> = () => {
    return (
        <div>
            <Users/>
        </div>
    );
};

export { UsersPage };
