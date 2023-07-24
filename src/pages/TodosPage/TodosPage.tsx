import React, { FC, ReactNode } from 'react';

import { Todos } from '../../components';

interface IProps {
    children?: ReactNode
}

const TodosPage: FC<IProps> = () => {
    return (
        <>
            <Todos/>
        </>
    );
};

export { TodosPage };
