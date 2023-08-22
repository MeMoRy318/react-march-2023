import React, { FC, PropsWithChildren } from 'react';

import { CarForm, CarsList } from '../../components';

type IProps = PropsWithChildren

const CarsPage: FC<IProps> = () => {
    return (
        <div>
            <CarForm/>
            <CarsList/>
        </div>
    );
};

export { CarsPage };
