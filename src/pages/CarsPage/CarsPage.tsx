import React, { FC, PropsWithChildren } from 'react';

import { CarForm, CarsList } from '../../componets';

type IProps = PropsWithChildren

const CarsPage: FC<IProps> = () => {
    return (
        <>
            <CarForm/>
            <CarsList/>
        </>
    );
};

export { CarsPage };
