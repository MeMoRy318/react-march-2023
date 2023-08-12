import React, { FC, ReactNode } from 'react';

import { CarForm, CarsLists } from '../components';

interface IProps {
    children?: ReactNode
}

const MyLayout: FC<IProps> = () => {
    return (
        <div>
            <CarForm/>
            <CarsLists/>
        </div>
    );
};

export { MyLayout };
